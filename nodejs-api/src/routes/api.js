const express = require('express');
const chatController = require('../controllers/chat');
const router = express.Router();

// Health check route under the API prefix
router.get('/health', chatController.healthCheck);

// Existing route
router.post('/generate', chatController.generateMermaidCode);

// Retrieve chat history
router.get('/history', chatController.getChatHistory);

module.exports = router;