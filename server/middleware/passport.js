const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const { User } = require('../models');
const go = require('../lib/asyncErrorHandling');

// local strategy means username/password (or in this case, email/password)
// this function verifies that the password is correct and then invokes
// 'cb' with a user object, which we retrieve from the database.
// this user object will be attached to further requests as req.user
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
  },
  async function(email, password, done) {
    const [err, user] = await go(User.findOne({ email }));

    if (err) {
      throw new Error(err.message)
    }

    if (!user) {
      return done(null, false, { message: 'Could not be logged in.' });
    }

    // we only compare the hashes of the password, not the passwords themselves
    // we use the bcrypt package which is built into nodejs to do this
    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) {
      return done(null, false, { message: 'Could not be logged in.' });
    }
    
    return done(null, user);
  }
));

// serializing/deserializing is used by passportjs to check authentication state
// across all requests by using sessions
passport.serializeUser(function(user, cb) {
  cb(null, user._id);
});

passport.deserializeUser(async function(id, cb) {
  const [err, user] = await go(User.findOne({ _id: id }));
  if (err) {
    return cb(err);
  }

  cb(null, user);
});

module.exports = passport;