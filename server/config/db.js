// // config/db.js
// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
//     console.log('MongoDB Connected');
//   } catch (err) {
//     console.error('Database connection error', err);
//     process.exit(1); s
//   }
// };

// module.exports = connectDB;

const mongoose = require('mongoose');
const connectDB = async() =>{
    try{
        const conn = await mongoose.connect('mongodb+srv://bytecraft:bytecraft@ami.skeg1.mongodb.net/testdb?retryWrites=true&w=majority&appName=ami');
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }
    catch(error){
        console.error(error);
        process.exit(1);
    }
};
module.exports = connectDB;