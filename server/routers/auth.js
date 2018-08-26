const router = require('express').Router();
const bcrypt = require('bcrypt');
const passport = require('../middleware/passport');
const { mongoose } = require('../lib/db');
const User = require('../models/user');

router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login-fail' }),
  function(req, res) {
    res.redirect('/login-success');
  });

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

//API endpoint for creating a user
router.post('/api/user/signup', (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if(err) throw err;
    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hash
    });
    user.save()
      .then(() => {
        res.send('User was added to database successfully.');
        console.log(`${user.firstName} was saved to the db.`)
        res.end();
      })
      .catch(err => {
        res.send('Failed to add user to database.');
        console.log(`Error saving to database.`)
        res.end();
      });
    });
});

// TODO - remove these, used for testing auth
router.get('/login-fail', (req, res) => {
  res.send('no login :(')
})

router.get('/login-success', (req, res) => {
  res.send('yay login');
})

module.exports = router;