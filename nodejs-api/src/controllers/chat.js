// src/controllers/chat.js
const aiService = require('../services/ai-service');
const Chat = require('../models/chat');  // Import the Chat model

const healthCheck = async (req, res) => {
  try {
    const isOpenAIKeyValid = await aiService.validateOpenAIKey();
    if (!isOpenAIKeyValid) {
      return res.status(500).json({ status: 'error', message: 'OpenAI API key is invalid' });
    }

    res.status(200).json({ status: 'ok', message: 'API is healthy' });
  } catch (error) {
    console.error('Health check failed:', error);
    res.status(500).json({ status: 'error', message: 'Health check failed' });
  }
};

const generateMermaidCode = async (req, res) => {
  try {
    const { userInput } = req.body;

    // Validate OpenAI API key before generating Mermaid code
    const isOpenAIKeyValid = await aiService.validateOpenAIKey();
    if (!isOpenAIKeyValid) {
      return res.status(500).json({ status: 'error', message: 'OpenAI API key is invalid' });
    }

    // Generate Mermaid code using the AI service
    const mermaidCode = await aiService.generateMermaidCode(userInput);

    console.log('Generated Mermaid Code:', mermaidCode); // Debugging Mermaid Code

    // Save the chat history to MongoDB
    const chatHistory = new Chat({
      userInput,
      mermaidCode,
      timestamp: new Date(),
    });

    console.log('Saving chat history to MongoDB:', chatHistory); // Debugging chat history before saving

    // Save the chat history to MongoDB
    await chatHistory.save();

    // Debugging: Confirming successful save
    console.log('Chat history saved to MongoDB:', chatHistory);

    // Return the Mermaid code in the response
    res.status(200).json({ mermaidCode });
  } catch (error) {
    console.error('Error generating Mermaid code:', error);
    res.status(500).json({ status: 'error', message: 'Failed to generate Mermaid code' });
  }
};
// src/controllers/chat.js

const getChatHistory = async (req, res) => {
    try {
      // Fetch all chat documents from the database
      const chats = await Chat.find();  // You can also use other query options like .find({}) for filtering if needed
      
      // Return the chat data as a JSON response
      res.status(200).json({ status: 'success', data: chats });
    } catch (error) {
      console.error('Error fetching chat history:', error);
      res.status(500).json({ status: 'error', message: 'Failed to fetch chat history' });
    }
  };
  
module.exports = { healthCheck, generateMermaidCode, getChatHistory };
