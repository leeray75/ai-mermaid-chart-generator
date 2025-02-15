const aiService = require('../services/ai-service');

const generateMermaidCode = async (req, res) => {
  const { userInput } = req.body;
  const mermaidCode = await aiService.generateMermaidCode(userInput);
  res.json({ mermaidCode });
};

module.exports = { generateMermaidCode };