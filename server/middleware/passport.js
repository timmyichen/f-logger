const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const { User } = require('../models');
const { mongoose } = require('../lib/db');

// passport doesnt play nicely with async/await :(

// local strategy means username/password (or in this case, email/password)
// this function verifies that the password is correct and then invokes
// 'cb' with a user object, which we retrieve from the database.
// this user object will be attached to further requests as req.user
passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: true,
  },
  function(email, password, done) {
    User.findOne({ email }, (err, user) => {
      if (err) return done(null, false, { message: 'error in finding user' });

      if (!user) {
        return done(null, false, { message: 'Could not be logged in.' });
      }

      // we only compare the hashes of the password, not the passwords themselves
      // we use the bcrypt package which is built into nodejs to do this
      bcrypt.compare(password, user.password, (err, isValid) => {
        if (err) return done(null, false, {message: 'could not compare' });
        if (!isValid) {
          return done(null, false, { message: 'Could not be logged in.' });
        }
        
        return done(null, user);
      });
    });
  }
));

passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },
  function(req, email, password, done) {
    // we should never save users' passwords in plaintext - always hash and salt them
    // a salt is a random string that is thrown in front of the password before hashing
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) return done(null, false, { message: 'error hashing' });

      const user = new User({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hash
      });

      user.save((err, user) => {
        if (err) {
          if (err.name === 'ValidationError') {
            return done(null, false, { message: 'A user with that email exists.' });
          } else {
            return done(null, false, { message: 'Failed to save' });
          }
        }

        return done(null, user);
      });
    });
  }
));

// serializing/deserializing is used by passportjs to check authentication state
// across all requests by using sessions
passport.serializeUser(function(user, cb) {
  cb(null, user._id);
});

passport.deserializeUser(function(id, cb) {
  User.findOne({ _id: id }, (err, user) => {
    if (err) {
      return cb(err);
    }

    cb(null, user);
  });
});

module.exports = passport;
