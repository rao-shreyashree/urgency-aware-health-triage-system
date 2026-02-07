import React, { useState } from 'react';

// to allow manual text entry if voice recognition is unavailable or person chooses to type
const TextFallback = ({ onTextSubmit }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
        onTextSubmit(text);
        }
    };

    return (
        <div style={{ marginTop: '30px', borderTop: '1px solid #ddd', paddingTop: '20px' }}>
        <p style={{ fontWeight: 'bold' }}>Or type your symptoms:</p>
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
            <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="e.g., I have a sharp pain in my chest"
            style={{
                flex: 1,
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #ccc'
            }}
            />
            <button 
            type="submit"
            style={{
                padding: '10px 20px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
            }}
            >
            Analyze
            </button>
        </form>
        </div>
    );
};

export default TextFallback;