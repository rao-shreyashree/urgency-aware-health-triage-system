import React, { useState, useEffect } from 'react';
import speechService from '../services/speechService';
import { Mic, MicOff } from 'lucide-react';

// real-time speech-to-text conversion
const VoiceInput = ({ language, onTranscriptChange }) => {
    const [isListening, setIsListening] = useState(false);
    const [interimText, setInterimText] = useState('');

    // stops listening if language changes
    useEffect(() => {
        return () => speechService.stopListening();
    }, [language]);

    const toggleListening = () => {
        if (isListening) {
        speechService.stopListening();
        setIsListening(false);
        } else {
        setIsListening(true);
        speechService.startListening(
            language,
            (text) => {
            setInterimText(text);
            onTranscriptChange(text);
            },
            (error) => {
            console.error("speech error:", error);
            setIsListening(false);
            }
        );
        }
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <button 
            onClick={toggleListening}
            style={{
            backgroundColor: isListening ? '#ff4d4d' : '#007bff',
            color: 'white',
            border: 'none',
            padding: '15px 30px',
            borderRadius: '50px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            margin: '0 auto'
            }}
        >
            {isListening ? <MicOff size={20} /> : <Mic size={20} />}
            {isListening ? "Stop Listening" : "Speak Symptoms"}
        </button>
        
        <p style={{ fontStyle: 'italic', color: '#666', marginTop: '10px' }}>
            {isListening ? "Listening..." : "Click to start"}
        </p>
        
        <div style={{ padding: '10px', background: '#fff', borderRadius: '8px', minHeight: '50px' }}>
            {interimText || "Transcript will appear here..."}
        </div>
        </div>
    );
};

export default VoiceInput;