// src/services/ai-service.js

/**
 * AI Service
 * 
 * This module handles interactions with the OpenAI API, including:
 * - Generating Mermaid code based on user input.
 * - Validating the OpenAI API key.
 * 
 * Dependencies:
 * - `openai`: OpenAI API client.
 * - `dotenv`: Loads environment variables from a `.env` file.
 */

const OpenAI = require('openai');
require('dotenv').config();

// Initialize the OpenAI client with the API key and organization ID
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORG_ID, // Add organization ID
});

/**
 * Generate Mermaid Code
 * 
 * Sends a request to the OpenAI API to generate Mermaid code based on user input.
 * 
 * @param {string} userInput - The input provided by the user.
 * @returns {Promise<string>} The generated Mermaid code.
 */
const generateMermaidCode = async (userInput) => {
  const response = await openai.chat.completions.create({
    model: 'gpt-4', // Use GPT-4 model
    messages: [
      { role: 'system', content: 'You are a helpful assistant that generates Mermaid code.' },
      { role: 'user', content: `Generate Mermaid code for: ${userInput}` },
    ],
  });
  return response.choices[0].message.content; // Return the generated Mermaid code
};

/**
 * Validate OpenAI API Key
 * 
 * Validates the OpenAI API key by making a lightweight request to the OpenAI API.
 * 
 * @returns {Promise<boolean>} True if the API key is valid, false otherwise.
 */
const validateOpenAIKey = async () => {
  try {
    // Make a lightweight request to OpenAI (e.g., list models)
    const response = await openai.models.list();
    return true; // If the request succeeds, the API key is valid
  } catch (error) {
    console.error('OpenAI API key validation failed:', error);
    return false; // If the request fails, the API key is invalid
  }
};

module.exports = { generateMermaidCode, validateOpenAIKey }; // Export the functions