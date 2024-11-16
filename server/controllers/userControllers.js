// controllers/userController.js
const User = require('../models/User');  // Import your User model

// Handle User Sign-Up
const handleSignUp = async (req, res) => {
  const { username, email, password, phoneNumber, skills } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    const newUser = new User({
      username,
      email,
      password,  // Make sure to hash the password before saving!
      phoneNumber,
      skills,
    });

    // Save the new user to the database
    await newUser.save();

    res.status(201).json({ message: 'User created successfully!' });
  } catch (error) {
    console.error('Error during sign-up:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Handle User Sign-In
const handleSignIn = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Verify password (Use bcrypt for comparison)
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    // Generate a token (e.g., using JWT)
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Sign-in successful!', token });
  } catch (error) {
    console.error('Error during sign-in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { handleSignUp, handleSignIn };
