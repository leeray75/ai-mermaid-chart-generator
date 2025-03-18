#!/bin/bash

echo "Starting the Docker Compose services..."
docker compose up -d --build
echo "Services started."