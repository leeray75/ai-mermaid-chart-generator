// src/models/project.js
const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true, // Each project must have an owner
    },
    // Optional: collaborators who can access this project
    collaborators: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    isPublic: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Create a compound index for faster queries of user's projects
projectSchema.index({ userId: 1, name: 1 });

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
