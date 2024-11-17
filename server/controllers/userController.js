// const User = require('../models/userModel');
// const bcrypt = require('bcrypt');

// // Create a new user during signup
// const signupUser = async (req, res) => {
//   const { username, email, password, phoneNumber, skills } = req.body;

//   // Validate required fields
//   if (!username || !email || !password || !phoneNumber || !skills) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   try {
//     // Check if email already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already registered' });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user
//     const user = new User({
//       username,
//       email,
//       password: hashedPassword,
//       phoneNumber,
//       skills, // This should be an array in the database schema
//     });

//     // Save the user to the database
//     await user.save();

//     res.status(201).json({
//       message: 'User created successfully',
//       user: {
//         username: user.username,
//         email: user.email,
//         phoneNumber: user.phoneNumber,
//         skills: user.skills,
//         _id: user._id,
//       },
//     });
//   } catch (err) {
//     res.status(500).json({ message: 'Error creating user: ' + err.message });
//   }
// };

// // Export the controller functions
// module.exports = { signupUser };


const signupUser = async (req, res) => {
  const { username, email, password, phoneNumber, skills } = req.body;

  if (!username || !email || !password || !phoneNumber || !Array.isArray(skills) || skills.length === 0) {
    return res.status(400).json({ message: 'All fields are required, including skills as a non-empty array' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword, phoneNumber, skills });

    await user.save();
    res.status(201).json({
      message: 'User created successfully',
      user: { username: user.username, email: user.email, phoneNumber: user.phoneNumber, skills: user.skills, _id: user._id },
    });
  } catch (err) {
    res.status(500).json({ message: 'Error creating user: ' + err.message });
  }
};
