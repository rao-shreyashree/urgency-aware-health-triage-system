import React from 'react';
import { AlertTriangle } from 'lucide-react';

// full screen alert for critical medical results
const EmergencyOverlay = ({ isOpen, onClose }) => {
    if (!isOpen) 
        return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(211, 47, 47, 0.95)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            color: 'white',
            textAlign: 'center',
            padding: '20px'
        }}>
        <AlertTriangle size={80} strokeWidth={2.5} />
        <h1 style={{ fontSize: '3rem', margin: '20px 0' }}>EMERGENCY DETECTED</h1>
        <p style={{ fontSize: '1.5rem', maxWidth: '600px', marginBottom: '30px' }}>
            Your symptoms indicate a high risk. Please seek immediate medical attention or call emergency services (e.g., 108).
        </p>

        <button 
            onClick={onClose}
            style={{
            padding: '15px 40px',
            fontSize: '1.2rem',
            backgroundColor: 'white',
            color: '#d32f2f',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            cursor: 'pointer'
            }}
        >
            Ok, close this alert
        </button>
        </div>
    );
};

export default EmergencyOverlay;