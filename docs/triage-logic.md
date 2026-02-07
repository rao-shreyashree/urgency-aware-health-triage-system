# Triage Logic & Medical Rules

### 🧠 Core Philosophy
The system uses a rule-based severity scoring engine to evaluate patient distress. It prioritizes **Voice-First** signals and keyword extraction to minimize delay.

### ⚖️ Urgency Levels
| Level | Color | Meaning | Action Trigger |
| :--- | :--- | :--- | :--- |
| **0** | 🟢 Green | Self-Care | Provide home remedy advice |
| **1** | 🟡 Yellow | Clinic Visit | Schedule primary care appointment |
| **2** | 🟠 Orange | Urgent Care | Direct to nearest Urgent Care center |
| **3** | 🔴 Red | EMERGENCY | Activate Emergency Mode (Ambulance/SMS) |

### 🔍 Risk Detection Logic
1. **Normalization**: Text is cleaned (e.g., "I'm" -> "I am").
2. **Symptom Parsing**: Key terms like "Chest pain" or "Shortness of breath" are flagged.
3. **Severity Scoring**: Symptoms are assigned weights (0-100). 
   - *Example*: Chest Pain (High Weight) + Breathlessness (High Weight) = Level 3.
4. **Explainability**: The system outputs a "Reason" string explaining why the level was chosen.