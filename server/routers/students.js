const router = require('express-router-async')();
const { Student } = require('../models');
const go = require('../lib/asyncErrorHandling');
const { mongoose } = require('../lib/db');

router.getAsync('/api/students', async (req, res) => {
  const [err, students] = await go(Student.find({}));

  if (err) {
    throw new Error(err.message);
  }

  return res.json({
    data: students,
    success: true,
  });
});

router.postAsync('/api/students/create', async (req, res) => {
  const { firstName, lastName, studentId } = req.body;

  const studentModel = new Student({
    _id: new mongoose.Types.ObjectId(),
    firstName,
    lastName,
    studentId,
    owner: req.user._id,
  });

  const [err, student] = await go(studentModel.save());

  if (err) {
    throw new Error(err.message);
  }

  return res.json({
    data: student,
    success: true,
  });
});

module.exports = router;
