const router = require('express-router-async')();
const { Student } = require('../models');
const go = require('../lib/asyncErrorHandling');

router.getAsync('/api/students', async (req, res) => {
  const [err, students] = await go(Student.find({}));

  if (err) {
    throw new Error(err.message);
  }

  return res.json(students);
});

router.postAsync('/api/students/create', async (req, res) => {
  const { firstName, lastName, studentId } = req.body;

  const studentModel = new Student({ firstName, lastName, studentId });
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
