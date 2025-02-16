const aiService = require('../services/ai-service');

const healthCheck = async (req, res) => {
  try {
    // Validate the OpenAI API key
    const isOpenAIKeyValid = await aiService.validateOpenAIKey();
    if (!isOpenAIKeyValid) {
      return res.status(500).json({ status: 'error', message: 'OpenAI API key is invalid' });
    }

    // If everything is OK
    res.status(200).json({ status: 'ok', message: 'API is healthy' });
  } catch (error) {
    console.error('Health check failed:', error);
    res.status(500).json({ status: 'error', message: 'Health check failed' });
  }
};

const generateMermaidCode = async (req, res) => {
  try {
    const { userInput } = req.body;

    // Validate the OpenAI API key before generating Mermaid code
    const isOpenAIKeyValid = await aiService.validateOpenAIKey();
    if (!isOpenAIKeyValid) {
      return res.status(500).json({ status: 'error', message: 'OpenAI API key is invalid' });
    }

    // Generate Mermaid code
    const mermaidCode = await aiService.generateMermaidCode(userInput);
    res.status(200).json({ mermaidCode });
  } catch (error) {
    console.error('Error generating Mermaid code:', error);
    res.status(500).json({ status: 'error', message: 'Failed to generate Mermaid code' });
  }
};

module.exports = { healthCheck, generateMermaidCode };