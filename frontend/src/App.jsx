import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SymptomFlow from './pages/SymptomFlow';
import Result from './pages/Result';

// root component handling navigation and global layout
function App() {
    return (
        <Router>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            
            {/* navigation bar */}
            <nav style={{ 
                padding: '1rem 2rem', 
                backgroundColor: '#007bff', 
                color: 'white',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
            <h2 style={{ margin: 0, fontSize: '1.5rem' }}>HealthCheck AI</h2>
            </nav>

            {/* route configuration */}
            <main style={{ flex: 1 }}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/triage" element={<SymptomFlow />} />
                <Route path="/result" element={<Result />} />
            </Routes>
            </main>

            {/* footer */}
            <footer style={{ 
                textAlign: 'center', 
                padding: '20px', 
                color: '#888', 
                fontSize: '0.8rem' 
            }}>
            &copy; 2026 Urgency Aware Health Triage System
            </footer>
        </div>
        </Router>
    );
}

export default App;