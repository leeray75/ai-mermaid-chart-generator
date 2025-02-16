const OpenAI = require('openai');
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORG_ID, // Add organization ID
});

const generateMermaidCode = async (userInput) => {
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'You are a helpful assistant that generates Mermaid code.' },
      { role: 'user', content: `Generate Mermaid code for: ${userInput}` },
    ],
  });
  return response.choices[0].message.content;
};

/**
 * Validate the OpenAI API key by making a lightweight request.
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

module.exports = { generateMermaidCode, validateOpenAIKey };