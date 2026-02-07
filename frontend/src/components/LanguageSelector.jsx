import React from 'react';

// dropdown to switch languages and update voice recognition
const LanguageSelector = ({ selectedLanguage, onChange }) => {
    
    // right now, english, hindi, kannada and tamil are supported
    const languages = [
        { code: 'en-US', label: 'English' },
        { code: 'hi-IN', label: 'Hindi (हिंदी)' },
        { code: 'kn-IN', label: 'Kannada (ಕನ್ನಡ)' },
        { code: 'ta-IN', label: 'Tamil (தமிழ்)' }
    ];

    return (
        <div style={{ marginBottom: '20px' }}>
        
        <label style={{ marginRight: '10px', fontWeight: 'bold' }}>
            Select Language:
        </label>
        
        <select 
            value={selectedLanguage} 
            onChange={(e) => onChange(e.target.value)}
            style={{ padding: '8px', borderRadius: '4px' }}
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