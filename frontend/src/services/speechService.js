// handles real-time speech-to-text for English, Hindi, Kannada, and Tamil

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

class SpeechService {
    constructor() {
        if (SpeechRecognition) {
        this.recognition = new SpeechRecognition();
        this.recognition.continuous = true;
        this.recognition.interimResults = true;
        } else {
        console.warn("Web Speech API is not supported in this browser.");
        }
    }

    startListening(languageCode, onResult, onError) {
        if (!this.recognition) return;

        this.recognition.lang = languageCode; 
        // e.g., 'en-US', 'hi-IN', 'kn-IN', 'ta-IN'
        
        this.recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('');
        onResult(transcript);
        };

        this.recognition.onerror = (event) => {
        onError(event.error);
        };

        this.recognition.start();
    }

    stopListening() {
        if (this.recognition) {
        this.recognition.stop();
        }
    }
}

export default new SpeechService();