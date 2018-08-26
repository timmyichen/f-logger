const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost/flogger', { useNewUrlParser: true });

module.exports = {
  mongoose,
};