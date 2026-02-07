import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LanguageSelector from '../components/LanguageSelector';
import VoiceInput from '../components/VoiceInput';
import TextFallback from '../components/TextFallback';
import EmergencyOverlay from '../components/EmergencyOverlay';
import { triageSymptoms } from '../services/apiClient';

// to manage the main input logic and coordination
const SymptomFlow = () => {
    const navigate = useNavigate();
    const [language, setLanguage] = useState('en-US');
    const [transcript, setTranscript] = useState('');
    const [loading, setLoading] = useState(false);
    const [showEmergency, setShowEmergency] = useState(false);

    // process the symptoms through the backend
    const handleSubmission = async (text) => {
        if (!text.trim()) 
            return;
        
        setLoading(true);
        try {
        const result = await triageSymptoms(text);
        if (result.urgency === 'EMERGENCY') 
        {
            setShowEmergency(true);
        } 
        else 
        {
            navigate('/result', { state: { triageData: result } });
        }
        } catch (error) {
            alert("System Error: Could not connect to the triage server.");
            console.error(error);
        } 
        finally 
        {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px' }}>
        <h2>Describe your symptoms</h2>
        
        <LanguageSelector 
            selectedLanguage={language} 
            onChange={setLanguage} 
        />
        
        <VoiceInput 
            language={language} 
            onTranscriptChange={setTranscript} 
        />

        <div style={{ textAlign: 'center', margin: '20px 0' }}>
            <button 
            disabled={!transcript || loading}
            onClick={() => handleSubmission(transcript)}
            style={{
                padding: '12px 30px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: transcript ? 'pointer' : 'not-allowed',
                opacity: transcript ? 1 : 0.6
            }}
            >
            {loading ? "Processing..." : "Submit Voice Input"}
            </button>
        </div>

        <TextFallback onTextSubmit={handleSubmission} />

        <EmergencyOverlay 
            isOpen={showEmergency} 
            onClose={() => setShowEmergency(false)} 
        />
        </div>
    );
};

export default SymptomFlow;