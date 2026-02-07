import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LanguageSelector from '../components/LanguageSelector';
import VoiceInput from '../components/VoiceInput';
import TextFallback from '../components/TextFallback';
import EmergencyOverlay from '../components/EmergencyOverlay';
import { triageSymptoms } from '../services/apiClient';

const SymptomFlow = () => {
    const navigate = useNavigate();
    const [language, setLanguage] = useState('en-US');
    const [transcript, setTranscript] = useState('');
    const [loading, setLoading] = useState(false);
    const [showEmergency, setShowEmergency] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleSubmission = async (text) => {
        if (!text.trim()) return;
        setLoading(true);
        try {
            const result = await triageSymptoms(text);
            if (result.urgency === 'EMERGENCY') {
                setShowEmergency(true);
            } else {
                navigate('/result', { state: { triageData: result } });
            }
        } catch (error) {
            alert("System Error: Could not connect to server.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ 
            minHeight: '100vh', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            position: 'relative',
            backgroundColor: 'transparent',
            overflowY: 'auto',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            paddingTop: '100px', 
            paddingBottom: '50px'
        }}>
            <style>
                {`
                    @keyframes pulse-ring {
                        0% { box-shadow: 0 0 0 0 rgba(255, 77, 77, 0.4); }
                        70% { box-shadow: 0 0 0 15px rgba(255, 77, 77, 0); }
                        100% { box-shadow: 0 0 0 0 rgba(255, 77, 77, 0); }
                    }
                    @keyframes heartDrift {
                        0% { transform: translateY(0) rotate(0deg); opacity: 0; }
                        20% { opacity: 0.15; }
                        80% { opacity: 0.15; }
                        100% { transform: translateY(-110vh) rotate(20deg); opacity: 0; }
                    }
                `}
            </style>

            {[...Array(12)].map((_, i) => (
                <div key={i} style={{
                    position: 'fixed',
                    bottom: '-10%',
                    left: `${(i * 8.5) + 2}%`,
                    fontSize: '20px',
                    color: '#ff4d4d',
                    opacity: 0,
                    animation: `heartDrift ${6 + (i % 3)}s linear infinite`,
                    animationDelay: `${i * 0.7}s`,
                    zIndex: 0,
                    userSelect: 'none'
                }}>
                    ❤️
                </div>
            ))}

            <div style={{ 
                zIndex: 1, 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                width: '100%',
                maxWidth: '600px',
                padding: '20px'
            }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#222', marginBottom: '30px', textAlign: 'center' }}>
                    Describe your symptoms
                </h2>

                <LanguageSelector selectedLanguage={language} onChange={setLanguage} />
                
                <div style={{ width: '100%', marginTop: '20px' }}>
                    <VoiceInput language={language} onTranscriptChange={setTranscript} />
                </div>

                <button 
                    disabled={!transcript || loading}
                    onClick={() => handleSubmission(transcript)}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{
                        marginTop: '25px',
                        padding: '18px 50px',
                        backgroundColor: '#ff4d4d', 
                        color: '#fff',
                        border: 'none',
                        borderRadius: '50px',
                        fontSize: '1.1rem',
                        fontWeight: '700',
                        cursor: transcript ? 'pointer' : 'not-allowed',
                        opacity: transcript ? 1 : 0.6,
                        animation: transcript ? 'pulse-ring 2s infinite' : 'none',
                        transition: 'all 0.3s ease',
                        boxShadow: isHovered && transcript
                            ? '0 10px 25px rgba(255, 77, 77, 0.5)' 
                            : '0 8px 20px rgba(255, 77, 77, 0.2)',
                    }}
                >
                    {loading ? "Analyzing..." : "Check Symptoms"}
                </button>

                <div style={{ 
                    width: '100%', 
                    marginTop: '40px', 
                    paddingTop: '30px',
                    borderTop: '1px solid rgba(0,0,0,0.08)' 
                }}>
                    <TextFallback onTextSubmit={handleSubmission} />
                </div>
            </div>

            <EmergencyOverlay isOpen={showEmergency} onClose={() => setShowEmergency(false)} />
        </div>
    );
};

export default SymptomFlow;