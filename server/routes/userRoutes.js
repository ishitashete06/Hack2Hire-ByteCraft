// routes/userRoutes.js
const express = require('express');
const { getUsers, createUser, signupUser } = require('../controllers/userController');

const router = express.Router();

// Define the routes
router.get('/', getUsers);
router.post('/', createUser);
router.post('/signup', signupUser); // Add route for Sign Up

module.exports = router;