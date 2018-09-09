const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

// required props and prop types (a schema defines the shape of the documents within a mongodb collection)
const studentSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  studentId: { type: Number, required: true, unique: true },
  owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  logs: [
    {
      classId: mongoose.Schema.Types.ObjectId,
      timeOut: Date,
      timeIn: Date,
    },
  ],
  timeCreated: { type: Date, required: true, default: Date.now },
  timeDeleted: { type: Date },
});

studentSchema.plugin(uniqueValidator);

// creating a model (JavaScript object) based on the schema, which has methods to save, update, fetch data by id, etc.
module.exports = mongoose.model('Student', studentSchema);
