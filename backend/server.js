const express = require('express');
const { spawn } = require('child_process');
const cors = require('cors');
const app = express();
const port = 5000; 

app.use(cors());
app.use(express.json());

// to connect frontend to C backend
app.post('/api/triage', (req, res) => {
    const { symptoms } = req.body;
    
    if (!symptoms) {
        return res.status(400).json({ error: 'Symptoms are required' });
    }

    const backendProcess = spawn('./triage_engine', [symptoms]);
    
    let output = '';
    let error = '';

    backendProcess.stdout.on('data', (data) => {
        output += data.toString();
    });

    backendProcess.stderr.on('data', (data) => {
        error += data.toString();
    });

    backendProcess.on('close', (code) => {
        if (code !== 0 || error) {
            console.error('Backend error:', error);
            return res.status(500).json({ 
                error: 'Backend processing failed',
                details: error 
            });
        }

        try {
            const result = JSON.parse(output);
            res.json(result);
        } catch (e) {
            console.error('Failed to parse backend output:', e);
            res.status(500).json({ 
                error: 'Invalid response from backend',
                output: output 
            });
        }
    });
});

app.listen(port, () => {
    console.log(`Bridge server running on http://localhost:${port}`);
});