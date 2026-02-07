import React from 'react';

const LanguageSelector = ({ selectedLanguage, onChange }) => {
    const languages = [
        { code: 'en-US', label: 'English' },
        { code: 'hi-IN', label: 'Hindi (हिंदी)' },
        { code: 'kn-IN', label: 'Kannada (ಕನ್ನಡ)' },
        { code: 'ta-IN', label: 'Tamil (தமிழ்)' }
    ];

    return (
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <label style={{ 
                fontSize: '1.1rem', 
                marginRight: '12px', 
                color: '#555',
                fontWeight: '500' 
            }}>
                Select Language:
            </label>
            
            <select 
                value={selectedLanguage} 
                onChange={(e) => onChange(e.target.value)}
                style={{ 
                    padding: '10px 15px', 
                    borderRadius: '12px',
                    border: '2px solid #ffb3c1',
                    backgroundColor: 'white',
                    color: '#444',
                    fontSize: '1rem',
                    outline: 'none',
                    cursor: 'pointer'
                }}
            >
                {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                        {lang.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSelector;