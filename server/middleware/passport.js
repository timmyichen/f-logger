const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../models/user');
const go = require('../lib/asyncErrorHandling');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
  },
  async function(email, password, done) {
    const [err, user] = await go(User.findOne({ email }));

    if (err) { throw new Error(err.message) }

    if (!user) {
      return done(null, false, { message: 'Could not be logged in.' });
    }

    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) {
      return done(null, false, { message: 'Could not be logged in.' });
    }
    
    return done(null, user);
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user._id);
});

passport.deserializeUser(function(id, cb) {
  User.findOne({ _id: id }, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

module.exports = passport;