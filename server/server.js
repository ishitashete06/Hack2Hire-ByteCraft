// // server.js 
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const userRoutes = require('./routes/userRoutes'); // Import user routes

// dotenv.config(); // Load environment variables

// const app = express();

// app.use(cors());
// app.use(express.json());  // Middleware to parse JSON request bodies

// // Use the routes
// app.use('/api/users', userRoutes);  // Prefix API routes

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB connected successfully'))
// .catch((error) => console.log('MongoDB connection error:', error));


// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const express = require('express');
const app = express();
const connectDB = require('./config/db.js');
const userModel = require('./models/User.js')
const cors = require('cors');

app.use(express.json());
app.use(cors);

app.get('/skill-development', async(req,res)=>{
  const users = await userModel.find();
  res.json(users);

})

connectDB();
app.listen(3000, ()=>{
  console.log("Running successfully!!");
})