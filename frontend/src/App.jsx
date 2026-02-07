import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SymptomFlow from './pages/SymptomFlow';
import Result from './pages/Result';

function App() {
  return (
    <Router>
        <div style={{ 
            minHeight: '100vh', 
            backgroundColor: '#fffefe', 
            fontFamily: "system-ui, -apple-system, sans-serif",
            overflowX: 'hidden',
            position: 'relative'
        }}>
            
            <nav style={{ 
                padding: '20px 40px', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                position: 'absolute',
                top: 0,
                width: '100%',
                boxSizing: 'border-box',
                zIndex: 100
            }}>
                <div style={{ 
                    fontSize: '1.2rem', 
                    fontWeight: 'bold', 
                    color: '#ff4d88',
                    letterSpacing: '-0.5px'
                }}>
                    CareTriage
                </div>
                
                <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '10px',
                    padding: '6px 16px',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    borderRadius: '20px'
                }}>
                    <span style={{ fontSize: '18px' }}>🌸</span>
                    <span style={{ fontWeight: '600', color: '#444' }}>Hi Shreya</span>
                </div>
            </nav>

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/triage" element={<SymptomFlow />} />
                    <Route path="/result" element={<Result />} />
                </Routes>
            </main>
        </div>
    </Router>
  );
}

export default App;