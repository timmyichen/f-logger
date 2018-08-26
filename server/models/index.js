const Student = require('./student');
const User = require('./user')

// the purpose of this index file is to consolidate all models into one file.
// this way, if we have to import multiple models, we can do so through one
// file / require statement.
module.exports = {
  Student,
  User,
}