const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI
  .replace("${MONGO_INITDB_ROOT_USERNAME}", process.env.MONGO_INITDB_ROOT_USERNAME)
  .replace("${MONGO_INITDB_ROOT_PASSWORD}", process.env.MONGO_INITDB_ROOT_PASSWORD);
  //mongodb://mongoadmin:secret@localhost:27017/
const connectDB = async () => {
  try {
    console.log("[MongoDB] connect URI:", MONGO_URI); // Debugging log
    await mongoose.connect(MONGO_URI);
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1); // Exit on failure
  }
};

module.exports = connectDB;
