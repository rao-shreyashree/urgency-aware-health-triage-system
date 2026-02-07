import React, { useState } from 'react';

const TextFallback = ({ onTextSubmit }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) onTextSubmit(text);
  };

  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
        <h3 style={{ 
            fontSize: '1.4rem', 
            color: '#333', 
            marginBottom: '15px' 
        }}>Or type your symptoms:</h3>
        
        <form onSubmit={handleSubmit} style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center' 
            }}>
            <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Describe how you feel..."
            style={{
                width: '100%',
                height: '120px',
                padding: '15px',
                borderRadius: '15px',
                border: '2px solid #ffb3c1', 
                fontSize: '1.2rem',
                fontFamily: 'inherit',
                marginBottom: '15px',
                outline: 'none',
                boxSizing: 'border-box',
                backgroundColor: 'rgba(255, 255, 255, 0.5)'
            }}
            />
            <button 
            type="submit"
            style={{
                width: '100%',
                padding: '16px',
                backgroundColor: '#ff4d4d',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'background 0.3s ease'
            }}
            >
            ANALYZE TEXT
            </button>
        </form>
    </div>
  );
};

export default TextFallback;