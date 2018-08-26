const router = require('express').Router();
const Teacher = require('../models/teacher');

//API endpoint for getting a list of all teachers from the db
router.get('/api/teachers', (req, res) => {
  Teacher.find({}, function(err, teachers) {
    if(err) {
      res.send('Something went wrong finding teachers.');
      next();
    }
    res.json(teachers);
    res.end();
  });
});

module.exports = router;