// src/models/chat.js
const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    userInput: {
      type: String,
      required: true,
    },
    mermaidCode: {
      type: String,
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now, // Automatically sets the current time when the document is created
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields automatically
);

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
