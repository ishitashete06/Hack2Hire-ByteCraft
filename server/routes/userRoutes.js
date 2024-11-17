const express = require('express');
const { signupUser, signinUser, verifyAuth } = require('../controllers/userController');
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();

// Define the POST route for signup
router.post('/signup', signupUser);

// Define the POST route for signin
router.post('/signin', signinUser);

// Define the GET route for verifying authentication
router.get('/verify', verifyToken, verifyAuth);

module.exports = router;
