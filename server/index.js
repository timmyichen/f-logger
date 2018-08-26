const express = require('express');
const bodyParser = require('body-parser');
const engines = require('consolidate');
const config = require('./config');
const app = express();
const authRoutes = require('./routers/auth');
const teacherRoutes = require('./routers/teachers');

app.engine('njk', engines.nunjucks);
app.set('view engine', 'njk');
app.set('views', __dirname + '/views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(authRoutes);

app.use(teacherRoutes);

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