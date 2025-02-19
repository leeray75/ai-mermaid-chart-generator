// src/index.js

/**
 * Main Application Entry Point
 * 
 * This module initializes the Express server, sets up middleware,
 * connects to the MongoDB database, and defines the API routes.
 * 
 * Dependencies:
 * - `express`: Web framework for Node.js.
 * - `cors`: Middleware for enabling Cross-Origin Resource Sharing (CORS).
 * - `connectDB`: Function to connect to the MongoDB database.
 * - `routes`: API routes defined in `src/routes/api.js`.
 */

const express = require("express");
const cors = require('cors');
const connectDB = require("./config/mongo-db"); // Import the MongoDB connection function
const routes = require("./routes/api"); // Import the API routes

const app = express(); // Create an Express application
const PORT = process.env.PORT || 3000; // Set the server port

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

// Connect to MongoDB
connectDB();

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "Server is healthy" });
});

// API routes
app.use("/api/v1/ai-mermaid", routes); // Mount the API routes under the `/api/v1/ai-mermaid` prefix

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});