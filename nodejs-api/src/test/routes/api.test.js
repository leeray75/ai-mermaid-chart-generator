const request = require('supertest');
const app = require('../../index'); // Import the Express app
const Chat = require('../../models/chat'); // Import the Chat model

describe('API Routes', () => {
  // Test the /generate endpoint
  describe('POST /api/v1/ai-mermaid/generate', () => {
    it('should generate Mermaid code and save chat history', async () => {
      const userInput = 'Create a flowchart for a login system';
      const response = await request(app)
        .post('/api/v1/ai-mermaid/generate')
        .send({ userInput })
        .expect(200);

      expect(response.body.mermaidCode).toBeDefined();

      // Verify the chat history is saved in the database
      const chat = await Chat.findOne({ userInput });
      expect(chat).toBeDefined();
      expect(chat.mermaidCode).toBe(response.body.mermaidCode);
    });

    it('should return 500 if user input is missing', async () => {
      const response = await request(app)
        .post('/api/v1/ai-mermaid/generate')
        .send({})
        .expect(500);

      expect(response.body.message).toBe('Failed to generate Mermaid code');
    });
  });

  // Test the /history endpoint
  describe('GET /api/v1/ai-mermaid/history', () => {
    it('should retrieve all chat history', async () => {
      // Insert test data into the database
      await Chat.create({ userInput: 'Test input', mermaidCode: 'flowchart TD; A --> B;' });

      const response = await request(app)
        .get('/api/v1/ai-mermaid/history')
        .expect(200);

      expect(response.body.status).toBe('success');
      expect(response.body.data.length).toBeGreaterThan(0);
    });
  });
});