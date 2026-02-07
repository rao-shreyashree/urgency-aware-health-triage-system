#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

echo "🛠️ Starting Full System Build..."

# 1. Build C Backend Logic
echo "📦 Compiling C Engine (Person 2 & 3)..."
cd backend
make clean
make
cd ..

# 2. Setup Node.js Bridge (Integration)
echo "🌐 Setting up Node.js Bridge (Person 3)..."
cd integration/node-bridge
npm install
cd ../..

# 3. Setup Frontend
echo "💻 Setting up Frontend Patient Portal (Person 1)..."
cd frontend
npm install
cd ..

echo "✅ Build Complete! Use ./scripts/run.sh to start the app."