const express = require('express');
const router = express.Router();

// Import the controller function
const { signupUser } = require('../controllers/userController');

// Define the POST route for signup
router.post('/signup', signupUser);

module.exports = router;
