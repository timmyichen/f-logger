const router = require('express-router-async')();
const { User } = require('../models');
const go = require('../lib/asyncErrorHandling');

// API endpoint for getting a list of all users from the db
router.getAsync('/api/users', async (req, res) => {
  const [err, users] = await go(User.find({}));
  
  if (err) {
    throw new Error(err.message);
  }

  return res.json(users);
});

module.exports = router;
