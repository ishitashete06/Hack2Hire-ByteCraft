// const express = require('express');
// const router = express.Router();
// const userController = require('../controllers/userController');
// const { handleSignUp, handleSignIn } = userController;// Import controller

// // Import the controller function
// const { signupUser } = require('../controllers/userController');

// // Define the POST route for signup
// router.post('/signup', signupUser);

// module.exports = router;

const express = require('express');
const { signupUser, signinUser } = require('../controllers/userController');

const router = express.Router();
// Import the controller function

const { signupUser } = require('../controllers/userController');



// Define the POST route for signup

router.post('/signup', signupUser);
router.post('/signin', signinUser);



module.exports = router;
