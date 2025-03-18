#!/bin/bash

echo "Restarting the Docker Compose services..."
docker compose down
docker compose up -d --build
echo "Services restarted."