const router = require('express-router-async')();
const bcrypt = require('bcrypt');
const passport = require('../middleware/passport');
const { mongoose } = require('../lib/db');
const go = require('../lib/asyncErrorHandling');
const { User } = require('../models');

// we use passport.js to authenticate users.
// 'local' is the strategy used, just means login with username/password or equivalent
router.post('/api/auth/login', 
  passport.authenticate('local', { failureRedirect: '/login-fail' }),
  function(req, res
) {
  res.redirect('/login-success');
});

// passport attaches the .logout() method to the request
router.get('/api/auth/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

// API endpoint for creating a user
router.postAsync('/api/user/signup', async (req, res) => {
  // we should never save users' passwords in plaintext - always hash and salt them
  // a salt is a random string that is thrown in front of the password before hashing
  const hash = await bcrypt.hash(req.body.password, 10);
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hash
  });

  const [err] = await go(user.save());
  if (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).send({ message: 'Failed to save' });
    } else {
      throw new Error(err.message);
    }
  }

  res.send('User successfully registered');
});

// TODO - remove these, used for testing auth
router.get('/login-fail', (req, res) => {
  res.send('no login :(');
});

router.get('/login-success', (req, res) => {
  res.send('yay login');
});

module.exports = router;
