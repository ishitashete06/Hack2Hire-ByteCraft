// controllers/userController.js
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Define the signupUser function first
const signupUser = async (req, res) => {
  const { username, email, password, phoneNumber, skills } = req.body;

  if (!username || !email || !password || !phoneNumber || !skills) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      email,
      password: hashedPassword,
      phoneNumber,
      skills,
    });

    await user.save();

    res.status(201).json({
      message: 'User created successfully',
      user: {
        username: user.username,
        email: user.email,
        phoneNumber: user.phoneNumber,
        skills: user.skills,
        _id: user._id,
      },
    });
  } catch (err) {
    res.status(500).json({ message: 'Error creating user: ' + err.message });
  }
};

// Define the signinUser function
const signinUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      message: 'Sign-in successful',
      token,
      user: {
        username: user.username,
        email: user.email,
        phoneNumber: user.phoneNumber,
        skills: user.skills,
        _id: user._id,
      },
    });
  } catch (err) {
    res.status(500).json({ message: 'Error signing in: ' + err.message });
  }
};

// Define the verifyAuth function (you need this for verifying token)
const verifyAuth = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

// Export the functions after they are defined
module.exports = { signupUser, signinUser, verifyAuth };
