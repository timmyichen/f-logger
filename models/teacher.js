const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

//required props and prop types (a schema defines the shape of the documents within a mongodb collection)
const teacherSchema = new Schema({ 
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  schoolId: { type: Number },
  email: { type: String, lowercase: true, unique: true, required: true },
  password: { type: String, required: true },
  isDeleted: { type: Boolean, default: false }
});

teacherSchema.plugin(uniqueValidator);

//creating a model (JavaScript object) based on the schema, which has methods to save, update, fetch data by id, etc.
module.exports = mongoose.model('Teacher', teacherSchema);