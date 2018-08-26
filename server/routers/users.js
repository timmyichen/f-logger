const router = require('express').Router();
const User = require('../models/user');

//API endpoint for getting a list of all users from the db
router.get('/api/users', (req, res) => {
  Teacher.find({}, function(err, users) {
    if(err) {
      res.send('Something went wrong finding users.');
      next();
    }
    res.json(users);
    res.end();
  });
});

module.exports = router;