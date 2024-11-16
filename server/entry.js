// entry.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());  // To parse incoming JSON requests

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the FreeLance Hub API!');
});

app.use('/auth', userRoutes); // Your user-related routes

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,  // Optional: to explicitly specify the option (deprecated but harmless to include)
  useUnifiedTopology: true // Optional: to explicitly specify the option (deprecated but harmless to include)
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}');
});