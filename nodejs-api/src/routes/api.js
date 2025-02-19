// src/routes/api.js

/**
 * API Routes
 * 
 * This module defines the routes for the API, including:
 * - Health check endpoint.
 * - Mermaid code generation endpoint.
 * - Chat history retrieval endpoint.
 * 
 * Dependencies:
 * - `express`: Web framework for Node.js.
 * - `chatController`: Controller for handling chat-related requests.
 */

const express = require('express');
const chatController = require('../controllers/chat');
const router = express.Router(); // Create an Express router

// Health check route under the API prefix
router.get('/health', chatController.healthCheck);

// Route for generating Mermaid code
router.post('/generate', chatController.generateMermaidCode);

// Route for retrieving chat history
router.get('/history', chatController.getChatHistory);

module.exports = router; // Export the router