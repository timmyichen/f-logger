const express = require('express');
const engines = require('consolidate');
const config = require('./config');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/flogger');
const Student = require('./models/student');

// var Tim = new Student({
//   _id: new mongoose.Types.ObjectId(),
//   firstName: 'Tim',
//   lastName: 'Buktu',
//   studentId: 123
// });

// Tim.save()
//   .then(() => console.log(`${Tim.firstName} was saved to the db.`))
//   .catch(err => console.log(err));

const app = express();

app.engine('njk', engines.nunjucks);
app.set('view engine', 'njk');
app.set('views', __dirname + '/views');
app.use(express.static('public'));

app.get('*', (req, res) => {
  res.render('pages/index', {
    appname: config.APPNAME
  });
});

app.listen(config.PORT, () => {
    console.log(`server started on port ${config.PORT}`);
});