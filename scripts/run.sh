#!/bin/bash

echo "🚀 Launching Urgency-Aware Health Triage System..."

# Function to kill background processes on exit
cleanup() {
    echo "🛑 Shutting down servers..."
    kill $BRIDGE_PID
    exit
}

trap cleanup SIGINT SIGTERM

# 1. Start Node.js Bridge (Integration Layer)
echo "🔌 Starting Bridge API on http://localhost:3000..."
cd integration/node-bridge
npm start &
BRIDGE_PID=$!
cd ../..

# 2. Start Frontend (React)
echo "🖥️ Starting Frontend UI..."
cd frontend
npm run dev