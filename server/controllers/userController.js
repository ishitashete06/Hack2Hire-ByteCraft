// controllers/userController.js
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new user (generic, can be reused for admin purposes)
const createUser = async (req, res) => {
    const { name, email, password } = req.body;
  
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    try {
      // Check for duplicate email
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const user = new User({ name, email, password: hashedPassword });
      await user.save();
  
      res.status(201).json({ message: 'User created successfully', user });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  
  // Sign-Up Function (specific to sign-up flow)
  const signupUser = async (req, res) => {
    const { name, email, password } = req.body;
  
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    try {
      // Check if email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already registered' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create and save the user
      const newUser = new User({ name, email, password: hashedPassword });
      await newUser.save();
  
      res.status(201).json({ message: 'User signed up successfully', newUser });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  module.exports = { getUsers, createUser, signupUser };