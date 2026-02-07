const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { execFile } = require('child_process');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Path to your compiled C program
// We use '..' to go up from 'integration/node-bridge' to 'backend'
const C_ENGINE_PATH = path.resolve(__dirname, '../../backend/triage_engine');

app.post('/api/triage', (req, res) => {
    const { symptoms } = req.body;
    
    if (!symptoms) {
        return res.status(400).json({ error: "No symptoms provided" });
    }

    console.log(`Processing: "${symptoms}"...`);

    // Run the C program
    execFile(C_ENGINE_PATH, [symptoms], (error, stdout, stderr) => {
        if (error) {
            console.error("Execution Error:", error);
            // Fallback for demo if C code crashes
            return res.json({
                urgency: "Yellow",
                reasoning: "System fallback: C Engine offline. Please consult a doctor.",
                action: "Visit Clinic"
            });
        }

        try {
            // Parse the JSON printed by the C program
            const responseData = JSON.parse(stdout);
            res.json(responseData);
        } catch (parseError) {
            console.error("JSON Parse Error:", parseError);
            console.log("Raw Output:", stdout);
            res.status(500).json({ error: "Invalid response from AI Engine" });
        }
    });
});

app.listen(PORT, () => {
    console.log(`✅ Bridge Server running on http://localhost:${PORT}`);
});