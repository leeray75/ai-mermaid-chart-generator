#!/bin/bash

# Define the paths
PARENT_DIR="../"
CURRENT_DIR="$(pwd)"
ENV_FILE=".env"

# Check if .env file exists in the current directory
if [ ! -f "$CURRENT_DIR/$ENV_FILE" ]; then
  # If .env does not exist, check if it exists in the parent directory
  if [ -f "$PARENT_DIR/$ENV_FILE" ]; then
    # Copy .env from the parent directory to the current directory
    cp "$PARENT_DIR/$ENV_FILE" "$CURRENT_DIR/$ENV_FILE"
    echo "Copied .env file from parent directory to $CURRENT_DIR."
  else
    echo "No .env file found in the parent directory."
    exit 1 # Exit with an error code if .env is not found
  fi
else
  echo ".env file already exists in $CURRENT_DIR."
fi

# Start the Node.js application
echo "Starting Node.js application..."
node ./src/index.js