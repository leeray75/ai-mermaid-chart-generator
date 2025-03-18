#!/bin/bash

echo "Cleaning up unused Docker resources..."
docker system prune -f
echo "Cleanup complete."