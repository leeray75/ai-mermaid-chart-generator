# AI-Powered Mermaid Chart Generator

![Mermaid Chart Example](https://mermaid-js.github.io/mermaid/img/header.png)

The **AI-Powered Mermaid Chart Generator** is a web application that allows users to generate and render Mermaid charts using natural language. Users can type a request in a chat interface, and the system will use AI to interpret the request and generate the corresponding Mermaid chart code. The application is built with **Next.js**, **Node.js**, **MongoDB**, and **OpenAI API**, and is containerized using **Docker**.

---

## Features

- **Natural Language to Mermaid Code**: Users can describe a chart in plain English, and the AI will generate the corresponding Mermaid code.
- **Real-Time Chart Rendering**: The generated Mermaid code is rendered into a visual chart using **Mermaid.js**.
- **Chat History**: All user requests and AI-generated charts are stored in **MongoDB** for future reference.
- **Dockerized Setup**: The entire application is containerized using **Docker Compose** for easy deployment and development.

---

## Tech Stack

- **Frontend**: Next.js
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **AI Integration**: OpenAI API
- **Chart Rendering**: Mermaid.js
- **Containerization**: Docker + Docker Compose

---

## Project Structure

```
project-root/
├── nextjs-app/               # Next.js frontend application
├── nodejs-api/               # Node.js backend API
├── docker-compose.yml        # Docker Compose configuration
├── README.md                 # Project documentation
└── .gitignore                # Git ignore file
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v22 or higher)
- [Docker](https://www.docker.com/) (v20 or higher)
- [Docker Compose](https://docs.docker.com/compose/) (v2 or higher)
- [OpenAI API Key](https://platform.openai.com/signup) (for AI integration)

---

### Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/<your-username>/ai-mermaid-chart-generator.git
   cd ai-mermaid-chart-generator
   ```

2. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory:
     ```env
     # OpenAI API Key
     OPENAI_API_KEY=your_openai_api_key

     # MongoDB URI
     MONGO_URI=mongodb://mongo:27017/ai-mermaid
     ```

3. **Build and Run with Docker Compose**:
   ```bash
   docker-compose up --build
   ```
   This will start:
   - The **Next.js frontend** on `http://localhost:3000`
   - The **Node.js backend** on `http://localhost:5000`
   - The **MongoDB** database on `mongodb://localhost:27017`

4. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000` to use the application.

---

### Development

1. **Frontend (Next.js)**:
   - Navigate to the `nextjs-app` directory:
     ```bash
     cd nextjs-app
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm run dev
     ```

2. **Backend (Node.js)**:
   - Navigate to the `nodejs-api` directory:
     ```bash
     cd nodejs-api
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the server:
     ```bash
     npm start
     ```

---

## Usage

1. **Describe Your Chart**:
   - Type a description of the chart you want to generate in the chat interface (e.g., "Create a flowchart for a login system").

2. **Generate and Render**:
   - The AI will generate the corresponding Mermaid code and render it as a chart.

3. **View History**:
   - All generated charts are saved in the database and can be viewed in the chat history.

---

## API Endpoints

### Backend API (Node.js + Express)

- **POST `/api/generate`**:
  - **Description**: Generates Mermaid code based on user input.
  - **Request Body**:
    ```json
    {
      "userInput": "Create a flowchart for a login system"
    }
    ```
  - **Response**:
    ```json
    {
      "mermaidCode": "flowchart TD\n  A[Start] --> B{Login?}\n  B -->|Yes| C[Welcome]\n  B -->|No| D[Try Again]"
    }
    ```

---

## Future Enhancements

- **User Authentication**: Add user accounts to save and manage charts.
- **Multiple Chart Types**: Support for sequence diagrams, Gantt charts, etc.
- **History Panel**: Allow users to view and manage their chart history.
- **Deployment**: Deploy the app to a cloud platform (e.g., AWS, Vercel).

---

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [Mermaid.js](https://mermaid-js.github.io/mermaid/) for chart rendering.
- [OpenAI](https://openai.com/) for the AI integration.
- [Docker](https://www.docker.com/) for containerization.

---

## Contact

For questions or feedback, please reach out to [Raymond Lee](mailto:raymond.lee.dev.1704@gmail.com).


