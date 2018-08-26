const express = require('express');
const bodyParser = require('body-parser');
const engines = require('consolidate');
const config = require('./config');
const app = express();
const authRoutes = require('./routers/auth');
const userRoutes = require('./routers/users');
const session = require('express-session');
const morgan = require('morgan')
const cookieParser = require('cookie-parser')

// uses nunjucks as a templating engine even though we aren't using them all that much.
// sets the directories that nunjucks uses, along with the public directories.
app.engine('njk', engines.nunjucks);
app.set('view engine', 'njk');
app.set('views', __dirname + '/views');
app.use(express.static('public'));

// morgan is used for logging, this just determines what the logs look like
app.use(morgan(':method :url :status - :response-time ms'));

// body-parser attaches incoming data to the request on req.body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cookies and sessions are used to maintain authentication state
app.use(cookieParser());
app.use(session({ secret: 'df8aysdfukhasdfhawe', resave: false, saveUninitialized: false }))

// passport handles authentication for us
const passport = require('./middleware/passport');

app.use(passport.initialize());
app.use(passport.session());

// the actual routes on the server
app.use(authRoutes);
app.use(userRoutes);

// anything else, and we send the react page (front end is handled by react router)
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