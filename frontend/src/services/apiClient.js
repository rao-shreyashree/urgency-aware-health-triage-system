import axios from 'axios';

const api_url = "http://localhost:5000";  

const mapUrgency = (urgencyCode) => {
  switch (urgencyCode) {
    case 0: return 'SELF_CARE';
    case 1: return 'SEE_DOCTOR'; 
    case 2: return 'EMERGENCY';
    default: return 'SELF_CARE';
  }
};

const normalizeResponse = (data) => {
    console.log("Raw backend data:", data);
    
    return {
        urgency: mapUrgency(data.urgency), 
        severity_score: data.severity_score,
        confidence: data.confidence, 
        recommendation: data.recommendation,
    };
};

export const triageSymptoms = async (textData) => {
    try {
        console.log("Sending to backend:", textData);
        
        const response = await axios.post(`${api_url}/api/triage`, { 
        symptoms: textData 
        });
        
        console.log("Backend response received:", response.data);
        return normalizeResponse(response.data);
        
    } 
    catch (error) {
        console.error("API connection failed:", error);
        
        return {
            urgency: 'SEE_DOCTOR',
            severity_score: 65,
            confidence: 0.7,
            recommendation: "Error: Could not connect to server"
        };
    }
};