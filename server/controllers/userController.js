const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Create a new user during signup
const signupUser = async (req, res) => {
  const { username, email, password, phoneNumber, skills } = req.body;

  // Validate required fields
  if (!username || !email || !password || !phoneNumber || !skills) {
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

    // Create a new user
    const user = new User({
      username,
      email,
      password: hashedPassword,
      phoneNumber,
      skills, // This should be an array in the database schema
    });

    // Save the user to the database
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




// Authenticate a user during sign-in
const signinUser = async (req, res) => {
  const { email, password } = req.body;

  // Validate required fields
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    console.log('Sign-in successful:', { token, user }); // Log response

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

// Export the controller functions
module.exports = { signupUser, signinUser };
