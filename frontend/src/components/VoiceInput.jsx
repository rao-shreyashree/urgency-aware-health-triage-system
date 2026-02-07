import React, { useState, useEffect } from 'react';
import speechService from '../services/speechService';
import { Mic, MicOff } from 'lucide-react';

const VoiceInput = ({ language, onTranscriptChange }) => {
	const [isListening, setIsListening] = useState(false);
	const [interimText, setInterimText] = useState('');

	useEffect(() => {
		return () => speechService.stopListening();
	}, [language]);

	const toggleListening = () => {
		if (isListening) {
		speechService.stopListening();
		setIsListening(false);
		} else {
		setIsListening(true);
		speechService.startListening(
			language,
			(text) => {
			setInterimText(text);
			onTranscriptChange(text);
			},
			(error) => setIsListening(false)
		);
		}
	};

	return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
		<button 
			onClick={toggleListening}
			style={{
			backgroundColor: isListening ? '#ff4d4d' : '#ff4d88', 
			color: 'white',
			border: 'none',
			padding: '20px 40px',
			borderRadius: '40px',
			cursor: 'pointer',
			display: 'flex',
			alignItems: 'center',
			gap: '15px',
			fontSize: '1.1rem',
			fontWeight: 'bold',
			transition: 'all 0.3s ease',
			boxShadow: '0 4px 15px rgba(255, 77, 136, 0.2)'
			}}
		>
			{isListening ? <MicOff size={24} /> : <Mic size={24} />}
			{isListening ? "STOP" : "SPEAK SYMPTOMS"}
		</button>
		
		<div style={{ 
			marginTop: '15px',
			padding: '20px', 
			background: 'rgba(255, 255, 255, 0.8)', 
			borderRadius: '15px', 
			minHeight: '80px',
			width: '100%',
			fontSize: '1.2rem',
			border: '2px solid #ffe6ed', 
			color: '#444',
			boxSizing: 'border-box'
		}}>
			{interimText || "Transcript will appear here..."}
		</div>
		</div>
	);
};

export default VoiceInput;