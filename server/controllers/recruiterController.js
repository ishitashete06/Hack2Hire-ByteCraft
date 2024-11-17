// const Recruiter = require('../models/recruiterModel');
// const bcrypt = require('bcrypt');

// // Create a new recruiter during signup
// const signupRecruiter = async (req, res) => {
//   const { username, email, password, phoneNumber } = req.body;

//   // Validate required fields
//   if (!username || !email || !password || !phoneNumber) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   try {
//     // Check if email already exists
//     const existingRecruiter = await Recruiter.findOne({ email });
//     if (existingRecruiter) {
//       return res.status(400).json({ message: 'Email already registered' });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new recruiter
//     const recruiter = new Recruiter({
//       username,
//       email,
//       password: hashedPassword,
//       phoneNumber,
//     });

//     // Save the recruiter to the database
//     await recruiter.save();

//     res.status(201).json({
//       message: 'Recruiter created successfully',
//       recruiter: {
//         username: recruiter.username,
//         email: recruiter.email,
//         phoneNumber: recruiter.phoneNumber,
//         _id: recruiter._id,
//       },
//     });
//   } catch (err) {
//     res.status(500).json({ message: 'Error creating recruiter: ' + err.message });
//   }
// };

// // Export the controller functions
// module.exports = { signupRecruiter };

const signupRecruiter = async (req, res) => {
  const { username, email, password, phoneNumber } = req.body;

  if (!username || !email || !password || !phoneNumber) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existingRecruiter = await Recruiter.findOne({ email });
    if (existingRecruiter) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const recruiter = new Recruiter({ username, email, password: hashedPassword, phoneNumber });

    await recruiter.save();
    res.status(201).json({
      message: 'Recruiter created successfully',
      recruiter: { username: recruiter.username, email: recruiter.email, phoneNumber: recruiter.phoneNumber, _id: recruiter._id },
    });
  } catch (err) {
    res.status(500).json({ message: 'Error creating recruiter: ' + err.message });
  }
};
