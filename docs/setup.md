# Setup & Installation Guide

### 📋 Prerequisites
- **C Compiler**: GCC installed and added to your PATH.
- **Node.js**: Version 16.x or higher.
- **Package Manager**: npm (comes with Node.js).

### 🚀 Rapid Start (Recommended)
We have provided automation scripts to handle the complex integration between C and Node.js.
1. Open a terminal in the project root.
2. Run: `./scripts/build.sh`
3. Run: `./scripts/run.sh`

### 🔧 Manual Setup (Component by Component)

#### 1. Backend (C-Engine)
Navigate to `/backend` and run `make`. This compiles the `triage_engine` binary used by the Node.js bridge.

#### 2. Integration (Node-Bridge)
Navigate to `/integration/node-bridge`, run `npm install`, then `npm start`. The API will listen on port 3000.

#### 3. Frontend (Patient Portal)
Navigate to `/frontend`, run `npm install`, then `npm run dev`.