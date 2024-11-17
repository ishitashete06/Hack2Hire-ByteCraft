const express = require('express');
const { signupUser, signinUser, verifyAuth } = require('../controllers/userController');
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();
// Import the controller function

const { signupUser } = require('../controllers/userController');



// Define the POST route for signup

router.post('/signup', signupUser);
router.post('/signin', signinUser);
router.get('/verify', verifyToken, verifyAuth); // Verify authentication

module.exports = router;
