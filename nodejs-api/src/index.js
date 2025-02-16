const express = require("express");
const routes = require("./routes/api");

const app = express();
const PORT = process.env.PORT || 3000;

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "Server is healthy" });
});

// API routes
app.use("/api/v1/ai-mermaid", routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});