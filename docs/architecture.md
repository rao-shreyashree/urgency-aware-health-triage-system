# System Architecture - Urgency-Aware Triage

### 1. The Pipeline
* **Frontend (React):** Captures voice input via Web Speech API.
* **Bridge (Node.js):** Acts as the orchestrator, passing data to the C-Engine.
* **Intelligence (C):** Performs symptom parsing, risk scoring, and urgency classification.

### 2. Triage Logic
The system converts raw text into a structured `TriageResult` containing:
- **Urgency Level:** (0-3).
- **Reasoning:** Human-readable medical explanation.
- **Action:** Guidance to specialist or emergency care.