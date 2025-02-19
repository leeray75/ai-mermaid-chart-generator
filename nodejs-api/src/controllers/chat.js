// src/controllers/chat.js

/**
 * Chat Controller
 *
 * This controller handles requests related to chat functionality, including:
 * 1. Performing health checks to validate the OpenAI API key.
 * 2. Generating Mermaid code based on user input using the AI service.
 * 3. Saving chat history (user input and generated Mermaid code) to MongoDB.
 * 4. Retrieving all chat history from the MongoDB database.
 *
 * Dependencies:
 * - `ai-service`: Handles interactions with the OpenAI API.
 * - `Chat` model: Mongoose model for storing and retrieving chat history in MongoDB.
 */

const aiService = require("../services/ai-service"); // Import the AI service
const Chat = require("../models/chat"); // Import the Chat model

/**
 * Health Check
 *
 * Validates the OpenAI API key and ensures the API is functioning correctly.
 *
 * @param {Object} req - The request object (unused in this function).
 * @param {Object} res - The response object used to send the health check result.
 * @returns {Object} JSON response with the status of the API:
 * - 200 OK: If the API is healthy and the OpenAI key is valid.
 * - 500 Internal Server Error: If the OpenAI key is invalid or an error occurs.
 */
const healthCheck = async (req, res) => {
  try {
    // Validate the OpenAI API key using the AI service
    const isOpenAIKeyValid = await aiService.validateOpenAIKey();
    if (!isOpenAIKeyValid) {
      return res
        .status(500)
        .json({ status: "error", message: "OpenAI API key is invalid" });
    }

    // Return a success response if the API is healthy
    res.status(200).json({ status: "ok", message: "API is healthy" });
  } catch (error) {
    // Log and return an error if the health check fails
    console.error("Health check failed:", error);
    res.status(500).json({ status: "error", message: "Health check failed" });
  }
};

/**
 * Generate Mermaid Code
 *
 * Generates Mermaid code based on user input using the AI service and saves the chat history to MongoDB.
 *
 * @param {Object} req - The request object containing the `userInput` in the request body.
 * @param {Object} res - The response object used to send the generated Mermaid code or an error message.
 * @returns {Object} JSON response with the generated Mermaid code:
 * - 200 OK: If the Mermaid code is successfully generated and saved.
 * - 500 Internal Server Error: If the OpenAI key is invalid or an error occurs during generation or saving.
 */
const generateMermaidCode = async (req, res) => {
  try {
    const { userInput } = req.body; // Extract user input from the request body

    // Validate the OpenAI API key before generating Mermaid code
    const isOpenAIKeyValid = await aiService.validateOpenAIKey();
    if (!isOpenAIKeyValid) {
      return res
        .status(500)
        .json({ status: "error", message: "OpenAI API key is invalid" });
    }

    // Generate Mermaid code using the AI service
    const mermaidCode = await aiService.generateMermaidCode(userInput);

    // Debugging: Log the generated Mermaid code
    console.log("Generated Mermaid Code:", mermaidCode);

    // Create a new chat history document
    const chatHistory = new Chat({
      userInput,
      mermaidCode,
      timestamp: new Date(), // Add a timestamp for the chat history
    });

    // Debugging: Log the chat history before saving
    console.log("Saving chat history to MongoDB:", chatHistory);

    // Save the chat history to MongoDB
    await chatHistory.save();

    // Debugging: Confirm successful save
    console.log("Chat history saved to MongoDB:", chatHistory);

    // Return the generated Mermaid code in the response
    res.status(200).json({ mermaidCode });
  } catch (error) {
    // Log and return an error if Mermaid code generation fails
    console.error("Error generating Mermaid code:", error);
    res
      .status(500)
      .json({ status: "error", message: "Failed to generate Mermaid code" });
  }
};

/**
 * Get Chat History
 *
 * Retrieves all chat history stored in the MongoDB database.
 *
 * @param {Object} req - The request object (unused in this function).
 * @param {Object} res - The response object used to send the retrieved chat history.
 * @returns {Object} JSON response with the chat history:
 * - 200 OK: If the chat history is successfully retrieved.
 * - 500 Internal Server Error: If an error occurs during retrieval.
 */
const getChatHistory = async (req, res) => {
  try {
    // Fetch all chat documents from the database
    const chats = await Chat.find();

    // Return the chat data as a JSON response
    res.status(200).json({ status: "success", data: chats });
  } catch (error) {
    // Log and return an error if fetching chat history fails
    console.error("Error fetching chat history:", error);
    res
      .status(500)
      .json({ status: "error", message: "Failed to fetch chat history" });
  }
};

// Export the controller functions for use in routes
module.exports = { healthCheck, generateMermaidCode, getChatHistory };
