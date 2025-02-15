const express = require('express');
const chatController = require('../controllers/chat');
const router = express.Router();

router.post('/generate', chatController.generateMermaidCode);
module.exports = router;