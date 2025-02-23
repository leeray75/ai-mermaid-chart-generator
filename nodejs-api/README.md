# Node.js API for Generating Mermaid Diagrams

This project is a Node.js API that generates Mermaid diagrams using OpenAI's GPT-4. It allows users to input natural language descriptions and receive Mermaid code in return. The API also saves chat history (user input and generated Mermaid code) to a MongoDB database and provides endpoints for retrieving chat history and performing health checks.

---

## **Project Structure**

```
./
├── Dockerfile
├── jest.config.js
├── package-lock.json
├── package.json
├── scripts
│   ├── start.sh
│   └── test.sh
├── src
│   ├── config
│   │   └── mongo-db.js
│   ├── controllers
│   │   └── chat.js
│   ├── index.js
│   ├── models
│   │   └── chat.js
│   ├── routes
│   │   └── api.js
│   ├── services
│   │   └── ai-service.js
│   └── test
│       ├── controllers
│       │   └── chat.test.js
│       ├── routes
│       │   └── api.test.js
│       ├── services
│       │   └── ai-service.test.js
│       └── setup.js
```

---

## **Features**

1. **Generate Mermaid Code**:
   - Accepts user input in natural language.
   - Uses OpenAI's GPT-4 to generate Mermaid code.
   - Saves the user input and generated Mermaid code to MongoDB.

2. **Chat History**:
   - Retrieves all chat history from the MongoDB database.

3. **Health Check**:
   - Validates the OpenAI API key and ensures the API is functioning correctly.

4. **Testing**:
   - Unit tests for API routes, controller functions, and AI service.
   - Uses Jest and Supertest for testing.

5. **Docker Support**:
   - Includes a `Dockerfile` for containerizing the application.

---

## **Getting Started**

### **Prerequisites**

- **Node.js**: The version specified in `.nvmrc` (use `nvm` to install and manage Node.js).
- **MongoDB**: A running MongoDB instance or a MongoDB Atlas connection string.
- **OpenAI API Key**: Required for generating Mermaid code.
- **Docker** (optional): For containerizing the application.

---

### **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/nodejs-api.git
   cd nodejs-api
   ```

2. Install and use the correct Node.js version using `nvm`:
   ```bash
   nvm install
   nvm use
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   MONGO_URI=mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@localhost:27017
   MONGO_INITDB_ROOT_USERNAME=your-mongo-username
   MONGO_INITDB_ROOT_PASSWORD=your-mongo-password
   OPENAI_API_KEY=your-openai-api-key
   OPENAI_ORG_ID=your-openai-org-id
   ```

---

### **Running the Application**

1. Start the application:
   ```bash
   npm start
   ```

2. For development with hot-reloading:
   ```bash
   npm run dev
   ```

3. Access the API at `http://localhost:3000`.

---

### **API Endpoints**

| Endpoint                     | Method | Description                              |
|------------------------------|--------|------------------------------------------|
| `/api/v1/ai-mermaid/health`  | GET    | Health check for the API.                |
| `/api/v1/ai-mermaid/generate`| POST   | Generate Mermaid code from user input.   |
| `/api/v1/ai-mermaid/history` | GET    | Retrieve all chat history.               |

---

### **Example Requests**

1. **Health Check**:
   ```bash
   curl http://localhost:3000/api/v1/ai-mermaid/health
   ```

2. **Generate Mermaid Code**:
   ```bash
   curl -X POST http://localhost:3000/api/v1/ai-mermaid/generate \
   -H "Content-Type: application/json" \
   -d '{"userInput": "Create a flowchart for a login system"}'
   ```

3. **Get Chat History**:
   ```bash
   curl http://localhost:3000/api/v1/ai-mermaid/history
   ```

---

### **Running Tests**

1. Run all tests:
   ```bash
   npm test
   ```

2. Test results are saved to `test.log`.

---

### **Docker Setup**

1. Build the Docker image:
   ```bash
   docker build -t nodejs-api .
   ```

2. Run the Docker container:
   ```bash
   docker run -p 3000:3000 nodejs-api
   ```

---

## **Code Documentation**

### **Key Files**

1. **`src/config/mongo-db.js`**:
   - Handles MongoDB connection using Mongoose.
   - Dynamically constructs the MongoDB URI from environment variables.

2. **`src/controllers/chat.js`**:
   - Contains controller functions for health checks, generating Mermaid code, and retrieving chat history.

3. **`src/models/chat.js`**:
   - Defines the Mongoose schema and model for storing chat history.

4. **`src/routes/api.js`**:
   - Defines API routes and maps them to controller functions.

5. **`src/services/ai-service.js`**:
   - Handles interactions with the OpenAI API for generating Mermaid code and validating the API key.

6. **`src/test/`**:
   - Contains unit tests for controllers, routes, and services.

---

## **Dependencies**

### **Production Dependencies**
- `cors`: Enables Cross-Origin Resource Sharing.
- `dotenv`: Loads environment variables from a `.env` file.
- `express`: Web framework for Node.js.
- `mongoose`: MongoDB object modeling tool.
- `openai`: OpenAI API client.

### **Development Dependencies**
- `jest`: Testing framework.
- `jest-json-reporter`: Generates JSON test reports.
- `mongodb-memory-server`: In-memory MongoDB for testing.
- `nodemon`: Automatically restarts the server during development.
- `supertest`: Library for testing HTTP endpoints.

---

## **License**

This project is licensed under the **ISC License**. See the [LICENSE](LICENSE) file for details.

---

## **Contributing**

Contributions are welcome! Please open an issue or submit a pull request.

---

## Contact

For questions or feedback, please reach out to [Raymond Lee](mailto:raymond.lee.dev.1704@gmail.com).

