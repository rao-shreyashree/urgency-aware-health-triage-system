import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api', 
    headers: { 'Content-Type': 'application/json' }
});

// to handle sending symptoms to the triage engine
export const triageSymptoms = async (textData) => {
    try {
        const response = await api.post('/triage', { text: textData });
        return response.data;
    } 
    catch (error) {
        console.error("api connection failes:", error);
        throw error;
    }
};