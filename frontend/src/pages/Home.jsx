import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeartPulse, Sparkles } from 'lucide-react';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div style={{
        maxWidth: '600px',
        margin: '60px auto',
        textAlign: 'center',
        padding: '40px 20px',
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        boxShadow: '0 10px 30px rgba(106, 13, 173, 0.1)', 
        border: '4px solid #924bfc' 
        }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <HeartPulse size={80} color="#cb1619" />
            <Sparkles 
            size={30} 
            color="#ff0004" 
            style={{ position: 'absolute', top: -10, right: -15 }} 
            />
        </div>
        
        <h1 style={{ color: '#6A0DAD', fontSize: '2.5rem', marginBottom: '10px' }}>
            Welcome!
        </h1>
        <h1 style={{ color: '#cd1e64', fontWeight: '500', marginBottom: '20px', fontFamily: 'cursive' }}>
            AI Health Triage
        </h1>
        
        <p style={{ color: '#555', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '30px' }}>
            This tool helps you assess your symptoms using voice or text. 
            It provides a preliminary recommendation based on clinical logic.
        </p>

        <div style={{
            margin: '20px 0',
            padding: '15px',
            background: '#f6f5fd',
            borderRadius: '15px',
            border: '1px dashed #ecf1ff',
            fontSize: '0.95rem',
            color: '#010213'
        }}>
            <strong>Note:</strong> This is not a substitute for professional medical advice.
        </div>

        <button 
            onClick={() => navigate('/triage')}
            style={{
            padding: '18px 50px',
            fontSize: '1.3rem',
            backgroundColor: '#9d00ff',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'transform 0.2s',
            boxShadow: '0 4px 15px rgba(47, 0, 255, 0.4)'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        >
            Start Assessment
        </button>
        </div>
    );
};

export default Home;