const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../models/user');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
  },
  function(email, password, done) {
    User.findOne({ email }, function(err, user) {
      if (err) return done(err);

      bcrypt.compare(password, user.password, (err, isValid) => {
        if (err || !user || !isValid) {
          return done(null, false, { message: 'Could not be logged in.' });
        }
        return done(null, user);
      });
    });
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