import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity } from 'lucide-react';

// home page to introduce the triage tool
const Home = () => {
  const navigate = useNavigate();

    return (
        <div style={{
        maxWidth: '600px',
        margin: '80px auto',
        textAlign: 'center',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}>
        <Activity size={60} color="#007bff" style={{ marginBottom: '20px' }} />
        
        <h1 style={{ color: '#333' }}>AI Medical Triage</h1>
        
        <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Welcome. This tool helps you assess your symptoms using voice or text. 
            It provides a preliminary recommendation based on clinical logic.
        </p>

        <div style={{
            margin: '30px 0',
            padding: '15px',
            background: '#eef6ff',
            borderRadius: '8px',
            fontSize: '0.9rem',
            color: '#0056b3'
        }}>
            <strong>Note:</strong> This is not a substitute for professional medical advice.
        </div>

        <button 
            onClick={() => navigate('/triage')}
            style={{
            padding: '15px 40px',
            fontSize: '1.2rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
            }}
        >
            Start Assessment
        </button>
        </div>
    );
};

export default Home;