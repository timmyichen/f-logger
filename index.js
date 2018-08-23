const express = require('express');
const engines = require('consolidate');
const config = require('./config');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/flogger', { useNewUrlParser: true });
const Student = require('./models/student');

// var jorge = new Student({
//   _id: new mongoose.Types.ObjectId(),
//   firstName: 'j',
//   lastName: 'gall',
//   studentId: 12345,
//   email: 'asdf@asdf.com'
// });

// jorge.save()
//   .then(() => console.log(`${jorge.firstName} was saved to the db.`))
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