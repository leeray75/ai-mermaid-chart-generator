const { healthCheck, generateMermaidCode, getChatHistory } = require('../../controllers/chat');
const Chat = require('../../models/chat');

describe('Chat Controller', () => {
  // Test healthCheck function
  describe('healthCheck', () => {
    it('should return 200 if the API is healthy', async () => {
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await healthCheck(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ status: 'ok', message: 'API is healthy' });
    });
  });

  // Test generateMermaidCode function
  describe('generateMermaidCode', () => {
    it('should generate Mermaid code and save chat history', async () => {
      const req = { body: { userInput: 'Test input' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await generateMermaidCode(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ mermaidCode: expect.any(String) });

      // Verify the chat history is saved in the database
      const chat = await Chat.findOne({ userInput: 'Test input' });
      expect(chat).toBeDefined();
    });
  });

  // Test getChatHistory function
  describe('getChatHistory', () => {
    it('should retrieve all chat history', async () => {
      // Insert test data into the database
      await Chat.create({ userInput: 'Test input', mermaidCode: 'flowchart TD; A --> B;' });

      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await getChatHistory(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ status: 'success', data: expect.any(Array) });
    });
  });
});