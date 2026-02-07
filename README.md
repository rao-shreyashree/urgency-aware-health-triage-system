# 🏥 HealthTriage AI: Rural Care Navigator

**Urgency-Aware Health Triage** is a high-performance prototype designed to prove that a patient in distress can communicate via voice, have their symptoms structured by AI, and receive responsible medical guidance instantly.

## 🚀 Core Features (The Demo)
* **Voice-First Interaction**: Hands-free input using Web Speech API for patients in pain.
* **Structured Symptom Capture**: Converts free speech into summarized symptoms, severity, and duration.
* **Urgency Classification**: A color-coded system (Green to Red) for instant risk understanding.
* **Explainable Reasoning**: Human-readable explanations for every decision to avoid "black-box" AI.
* **Emergency Mode**: One-tap escalation that mocks ambulance dispatch and family notification.

## 🛠️ Team Responsibilities

### **Person 1 — Frontend & UX**
* **Deliverables**: Patient interaction screens, Voice guidance UI, Emergency trigger interfaces.
* **Tech**: React, Web Speech API, Offline-first Service Workers.

### **Person 2 — AI Logic & Reasoning Engine**
* **Deliverables**: Risk scoring engine, Urgency classification logic, Medical rule definitions.
* **Tech**: C (Symptom parsing & Probabilistic scoring).

### **Person 3 — Backend, Integration & Emergency Systems**
* **Deliverables**: Node.js/Express API endpoints, Emergency workflows, Automation scripts.
* **Tech**: Node.js (Child Process Bridge), Shell Scripting.

## ⚙️ How to Run
1.  **Clone the repo**: `git clone <your-repo-link>`
2.  **Build the system**: `./scripts/build.sh`
3.  **Run the demo**: `./scripts/run.sh`

## 🔭 Future Scope
* Hospital load-aware routing.
* Real ambulance and SMS API integration.
* Multilingual expansion for rural diversity.