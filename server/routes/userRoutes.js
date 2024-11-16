// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { handleSignUp, handleSignIn } = require('../controllers/userController'); // Import controller

// User Sign-Up route
router.post('/signup', handleSignUp);

// User Sign-In route
router.post('/signin', handleSignIn);

module.exports = router;
