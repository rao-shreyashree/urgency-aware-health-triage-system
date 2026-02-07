import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ShieldCheck, AlertCircle, Info } from 'lucide-react';

// to display the final triage recommendation and severity score
const Result = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { triageData } = location.state || {};

    if (!triageData) {
        return (
            <div style={{ 
                height: '100vh', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center',
                fontFamily: 'system-ui, -apple-system, sans-serif'
            }}>
                <p style={{ color: '#444', fontSize: '1.2rem' }}>No results found</p>
                <button 
                    onClick={() => navigate('/')}
                    style={{
                        marginTop: '20px',
                        padding: '10px 25px',
                        backgroundColor: '#ff4d4d',
                        color: 'white',
                        border: 'none',
                        borderRadius: '25px',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    Return Home
                </button>
            </div>
        );
    }

    const isHighRisk = triageData.urgency === 'SEE_DOCTOR';

    return (
        <div style={{ 
            minHeight: '100vh', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            paddingTop: '120px',
            paddingBottom: '50px',
            fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
            <div style={{
                width: '100%',
                maxWidth: '500px',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                borderRadius: '30px',
                padding: '40px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                border: `2px solid ${isHighRisk ? '#ff1900' : '#85ed6d'}`,
                textAlign: 'center'
            }}>
                <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center', 
                    gap: '15px', 
                    marginBottom: '20px' 
                }}>
                    {isHighRisk ? 
                        <AlertCircle color="#ffcc00" size={60} /> : 
                        <ShieldCheck color="#ff4d88" size={60} />
                    }
                    <h2 style={{ margin: 0, fontSize: '2rem', color: '#222' }}>Triage Summary</h2>
                </div>

                <div style={{ marginBottom: '30px' }}>
                    <p style={{ color: '#666', marginBottom: '5px', fontSize: '1rem', fontWeight: '500' }}>Severity Score</p>
                    <div style={{ 
                        fontSize: '3.5rem', 
                        fontWeight: '800', 
                        color: isHighRisk ? '#ffcc00' : '#ff4d88' 
                    }}>
                        {triageData.severity_score}%
                    </div>
                </div>

                <div style={{ 
                    padding: '25px', 
                    backgroundColor: 'white', 
                    borderRadius: '20px',
                    marginBottom: '30px',
                    border: '1px solid rgba(0,0,0,0.05)'
                }}>
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '8px', 
                        color: '#444',
                        marginBottom: '10px'
                    }}>
                        <Info size={18} color="#ff4d88" />
                        <strong style={{ fontSize: '1.1rem' }}>Recommendation</strong>
                    </div>
                    <p style={{ 
                        marginTop: '0', 
                        lineHeight: '1.6', 
                        color: '#555',
                        fontSize: '1.05rem' 
                    }}>
                        {triageData.recommendation}
                    </p>
                </div>

                <button 
                    onClick={() => navigate('/')}
                    style={{
                        width: '100%',
                        padding: '18px',
                        backgroundColor: '#ff4d4d',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50px',
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease',
                        boxShadow: '0 8px 20px rgba(255, 77, 77, 0.2)'
                    }}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.02)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                >
                    Finish & Exit
                </button>
            </div>
        </div>
    );
};

export default Result;