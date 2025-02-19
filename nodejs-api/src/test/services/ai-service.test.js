const { generateMermaidCode, validateOpenAIKey } = require('../../services/ai-service');

describe('AI Service', () => {
  // Test generateMermaidCode function
  describe('generateMermaidCode', () => {
    it('should generate Mermaid code for valid input', async () => {
      const userInput = 'Create a flowchart for a login system';
      const mermaidCode = await generateMermaidCode(userInput);
      expect(mermaidCode).toBeDefined();
      expect(typeof mermaidCode).toBe('string');
    });
  });

  // Test validateOpenAIKey function
  describe('validateOpenAIKey', () => {
    it('should return true for a valid OpenAI API key', async () => {
      const isValid = await validateOpenAIKey();
      expect(isValid).toBe(true);
    });

    it('should return false for an invalid OpenAI API key', async () => {
      // Mock an invalid API key
      process.env.OPENAI_API_KEY = 'invalid-key';
      const isValid = await validateOpenAIKey();
      expect(isValid).toBe(false);
    });
  });
});