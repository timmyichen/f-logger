const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//required props and prop types (a schema defines the shape of the documents within a mongodb collection)
const studentSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  studentId: {
    type: Number,
    required: true
  }
});

//creating a model (JavaScript object) based on the schema, which has methods to save, update, fetch data by id, etc.
module.exports = mongoose.model('Student', studentSchema);