import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ShieldCheck, AlertCircle, Info } from 'lucide-react';

// to display the final triage recommendation and severity score
const Result = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { triageData } = location.state || {};

    // redirect if no data is present
    if (!triageData) 
    {
        return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <p>No results found</p>
            <button onClick={() => navigate('/')}>Return Home</button>
        </div>
        );
    }

    const isHighRisk = triageData.urgency === 'SEE_DOCTOR';

    return (
        <div style={{ maxWidth: '600px', margin: '60px auto', padding: '20px' }}>
        <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '30px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            borderTop: `8px solid ${isHighRisk ? '#ffc107' : '#28a745'}`
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            {isHighRisk ? <AlertCircle color="#ffc107" size={40} /> : <ShieldCheck color="#28a745" size={40} />}
            <h2 style={{ margin: 0 }}>Triage Summary</h2>
            </div>

            <div style={{ marginBottom: '20px' }}>
            <p style={{ color: '#666', marginBottom: '5px' }}>Severity Score:</p>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                {triageData.severity_score}%
            </div>
            </div>

            <div style={{ 
            padding: '20px', 
            backgroundColor: '#f8f9fa', 
            borderRadius: '8px',
            marginBottom: '20px' 
            }}>
            <div style={{ display: 'flex', gap: '10px', color: '#333' }}>
                <Info size={20} />
                <strong>Recommendation:</strong>
            </div>
            <p style={{ marginTop: '10px', lineHeight: '1.5' }}>{triageData.recommendation}</p>
            </div>

            <button 
            onClick={() => navigate('/')}
            style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold'
            }}
            >
            Finish & Exit
            </button>
        </div>
        </div>
    );
};

export default Result;