// src/models/chat.js
const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
      required: true,
    },
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
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Create an index for faster queries of chats by project
chatSchema.index({ projectId: 1, timestamp: -1 });

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;