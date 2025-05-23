const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/Amit", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected!');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
}

module.exports = connectDB;


