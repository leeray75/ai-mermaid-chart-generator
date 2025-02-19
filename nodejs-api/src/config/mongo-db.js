// src/config/mongo-db.js

/**
 * MongoDB Configuration
 * 
 * This module handles the connection to the MongoDB database using Mongoose.
 * It retrieves the MongoDB connection URI from environment variables and
 * dynamically replaces placeholders with the actual username and password.
 * 
 * Dependencies:
 * - `mongoose`: MongoDB object modeling tool for Node.js.
 * - `dotenv`: Loads environment variables from a `.env` file.
 */

const mongoose = require('mongoose');
require('dotenv').config();

// Construct the MongoDB URI by replacing placeholders with environment variables
const MONGO_URI = process.env.MONGO_URI
  .replace("${MONGO_INITDB_ROOT_USERNAME}", process.env.MONGO_INITDB_ROOT_USERNAME)
  .replace("${MONGO_INITDB_ROOT_PASSWORD}", process.env.MONGO_INITDB_ROOT_PASSWORD);

/**
 * Connect to MongoDB
 * 
 * Establishes a connection to the MongoDB database using the constructed URI.
 * Logs the connection status and exits the process on failure.
 * 
 * @returns {Promise<void>} Resolves when the connection is successful.
 */
const connectDB = async () => {
  try {
    console.log("[MongoDB] connect URI:", MONGO_URI); // Debugging log
    await mongoose.connect(MONGO_URI); // Connect to MongoDB
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1); // Exit the process on connection failure
  }
};

module.exports = connectDB; // Export the connectDB function
