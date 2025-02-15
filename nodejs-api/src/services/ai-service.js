const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
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

module.exports = { generateMermaidCode };