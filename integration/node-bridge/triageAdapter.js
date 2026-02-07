const { execFile } = require('child_process');
const path = require('path');

const C_BINARY = path.resolve(__dirname, '../../backend/triage_engine');

// Map C Urgency Enums to UI Labels and Specialists
const urgencyMap = {
    0: { label: "Self Care", color: "green", specialist: "General Health" },
    1: { label: "Clinic Visit", color: "yellow", specialist: "Primary Care Doctor" },
    2: { label: "Urgent Care", color: "orange", specialist: "Urgent Care Physician" },
    3: { label: "EMERGENCY", color: "red", specialist: "ER Specialist" }
};

const runTriage = (text) => {
    return new Promise((resolve, reject) => {
        execFile(C_BINARY, [text], (error, stdout) => {
            if (error) return reject(error);
            
            try {
                const raw = JSON.parse(stdout);
                const info = urgencyMap[raw.urgency] || urgencyMap[0];
                
                // Combine C logic with Navigation logic
                resolve({
                    ...raw,
                    urgency_label: info.label,
                    ui_color: info.color,
                    specialist: info.specialist
                });
            } catch (e) {
                reject("Invalid JSON from C Engine");
            }
        });
    });
};

module.exports = { runTriage };