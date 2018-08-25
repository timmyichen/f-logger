const express = require('express');
const bodyParser = require('body-parser');
const engines = require('consolidate');
const config = require('./config');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/flogger', { useNewUrlParser: true });
const Teacher = require('./models/teacher');
const app = express();
const bcrypt = require('bcrypt');

app.engine('njk', engines.nunjucks);
app.set('view engine', 'njk');
app.set('views', __dirname + '/views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//API endpoint for getting a list of all teachers from the db
app.get('/teachers', (req, res) => {
  Teacher.find({}, function(err, teachers) {
    if(err) {
      res.send('Something went wrong finding the teachers.');
      next();
    }
    res.json(teachers);
    res.end();
  });
});

//API endpoint for creating a user
app.post('/teacher', (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if(err) throw err;
    var teacher = new Teacher({
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

app.get('*', (req, res) => {
  res.render('pages/index', {
    appname: config.APPNAME
  });
});

//compares the password to the hash
// bcrypt.compare("passdword", "$2b$10$o49W30tUHHFBYvOox6wkCecgxVvW.S12JKkAlAuAfDlwQjZqEiwe6", function(err, res) {
//   if(res) {
//     console.log('The password matched.');
//   } else {
//     console.log('The password didn\'t match.');
//   }
// });

app.listen(config.PORT, () => {
    console.log(`server started on port ${config.PORT}`);
});