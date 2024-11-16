const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const userController = require('../controllers/userControllers')
const { handleSignUp, handleSignIn } = userController;// Import controller
=======
>>>>>>> 6576c590d4367fddd9b1b1ba6a79d9bbd603d7b2

// Import the controller function
const { signupUser } = require('../controllers/userController');

// Define the POST route for signup
router.post('/signup', signupUser);

module.exports = router;
