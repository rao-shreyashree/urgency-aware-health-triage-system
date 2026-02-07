import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div style={{ 
            height: '100vh', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
            <style>
                {`
                    @keyframes breathe {
                        0%, 100% { transform: scale(1); opacity: 0.03; }
                        50% { transform: scale(1.05); opacity: 0.05; }
                    }
                    @keyframes floatText {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-10px); }
                    }
                    @keyframes pulse-ring {
                        0% { box-shadow: 0 0 0 0 rgba(255, 77, 77, 0.4); }
                        70% { box-shadow: 0 0 0 15px rgba(255, 77, 77, 0); }
                        100% { box-shadow: 0 0 0 0 rgba(255, 77, 77, 0); }
                    }
                    @keyframes bounce {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-3px); }
                    }
                    @keyframes heartDrift {
                        0% { transform: translateY(0) rotate(0deg); opacity: 0; }
                        20% { opacity: 0.15; }
                        80% { opacity: 0.15; }
                        100% { transform: translateY(-110vh) rotate(20deg); opacity: 0; }
                    }
                `}
            </style>

            {/* Navigation Bar */}
            <nav style={{
                position: 'absolute',
                top: 0,
                width: '100%',
                padding: '20px 40px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                zIndex: 10,
                boxSizing: 'border-box'
            }}>
                
            </nav>

            {/* Floating Hearts */}
            {[...Array(12)].map((_, i) => (
                <div key={i} style={{
                    position: 'absolute',
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

            {/* Background Typography */}
            <div style={{
                position: 'absolute',
                fontSize: '18vw',
                fontWeight: '900',
                color: 'rgba(0,0,0,0.03)', 
                zIndex: 0,
                textAlign: 'center',
                whiteSpace: 'nowrap',
                userSelect: 'none',
                letterSpacing: '-5px',
                animation: 'breathe 8s infinite ease-in-out',
                pointerEvents: 'none'
            }}>
                CareTriage
            </div>

            {/* Main Content Card */}
            <div style={{ 
                zIndex: 1, 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                textAlign: 'center',
                maxWidth: '650px',
                padding: '20px'
            }}>
                <h2 style={{ 
                    fontSize: '3.5rem', 
                    fontWeight: '800', 
                    color: '#222', 
                    marginBottom: '10px',
                    letterSpacing: '-1px'
                }}>
                    Welcome!
                </h2>

                <p style={{ 
                    fontSize: '1.2rem', 
                    color: '#555', 
                    lineHeight: '1.6', 
                    marginBottom: '40px',
                    padding: '0 20px',
                    fontWeight: '500'
                }}>
                    CareTriage helps you assess your symptoms using voice or text. 
                    It provides a preliminary recommendation based on clinical logic.
                </p>

                <button 
                    onClick={() => navigate('/triage')}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{
                        padding: '18px 50px',
                        backgroundColor: '#ff4d4d', 
                        color: '#fff',
                        border: 'none',
                        borderRadius: '50px',
                        fontSize: '1.1rem',
                        fontWeight: '700',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        animation: 'pulse-ring 2s infinite',
                        transition: 'all 0.3s ease',
                        boxShadow: isHovered 
                            ? '0 10px 25px rgba(255, 77, 77, 0.5)' 
                            : '0 8px 20px rgba(255, 77, 77, 0.2)',
                    }}
                >
                    Start Assessment <span style={{ fontSize: '0.9rem' }}>▶</span>
                </button>
            </div>

            {/* Disclaimer */}
            <div style={{
                position: 'absolute',
                bottom: '30px',
                padding: '12px 24px',
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                borderRadius: '15px',
                fontSize: '0.85rem',
                color: '#777',
                zIndex: 1,
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
            }}>
                <span style={{ color: '#ff4d4d' }}>✚</span>
                <span><strong>Note:</strong> This is not a substitute for professional medical advice.</span>
            </div>
        </div>
    );
};

export default Home;