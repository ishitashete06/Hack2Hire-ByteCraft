// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers')
const { handleSignUp, handleSignIn } = userController;// Import controller

// User Sign-Up route
router.post('/signup', handleSignUp);

// User Sign-In route
router.post('/signin', handleSignIn);

module.exports = router;
