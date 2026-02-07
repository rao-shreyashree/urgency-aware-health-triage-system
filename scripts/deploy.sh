#!/bin/bash

echo "🚀 Preparing deployment package..."

# Remove build artifacts and temporary files
cd backend && make clean && cd ..
rm -rf frontend/dist
rm -rf integration/node-bridge/node_modules

echo "📁 Project cleaned and ready for final Git Push."