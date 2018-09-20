const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost/flogger?replicaSet=rs',
  { useNewUrlParser: true },
);

module.exports = {
  mongoose,
};
