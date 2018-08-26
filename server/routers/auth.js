const router = require('express').Router();
const { mongoose } = require('../lib/db');
const bcrypt = require('bcrypt');

//API endpoint for creating a user
router.post('/api/teacher/signup', (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if(err) throw err;
    const teacher = new Teacher({
      _id: new mongoose.Types.ObjectId(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hash
    });
    teacher.save()
      .then(() => {
        res.send('Teacher was added to database successfully.');
        console.log(`${teacher.firstName} was saved to the db.`)
        res.end();
      })
      .catch(err => {
        res.send('Failed to add teacher to database.');
        console.log(`Error saving to database.`)
        res.end();
      });
    });
});

module.exports = router;