# Urgency-Aware Health Triage and Care Navigation System

An AI-powered, high-performance prototype that assesses patient symptom urgency and guides users to appropriate care pathways. It demonstrates that a patient in distress can communicate via voice, have their symptoms structured by AI, and receive responsible medical guidance instantly, through structured triage, explainable reasoning, and emergency-aware decision making.

---

## Overview

This project focuses on building an **urgency-aware health triage system** that helps users describe symptoms and evaluates medical risk. It classifies urgency levels to support timely and appropriate care decisions.  

The system is designed for **high-stress scenarios**, **low health literacy users**, and **resource-constrained environments**, with a strong emphasis on safety, transparency, and responsible AI behavior.

---

## Core Features (currently implemented)

### 1. Voice-First Patient Interaction
- Hands-free voice input for symptom reporting  
- Text input as a fallback option  
- Speech-to-text conversion for structured processing  

### 2. Structured Symptom Capture
- Automatic symptom summarization  
- Severity and duration extraction  
- Basic demographic capture (age, etc.)  

### 3. Explainable Reasoning Engine
- Hybrid medical rules and probabilistic scoring  
- Transparent risk scoring logic  
- Human-readable explanations for decisions  
- Clear justification for urgency classification  

### 4. Urgency Classification System
Symptoms are classified into four urgency levels:
- **Low** – Self-care recommended  
- **Moderate** – Clinic visit advised  
- **High** – Specialist consultation required  
- **Emergency** – Immediate intervention needed  

### 5. Emergency Mode Activation
- Automatic detection of emergency conditions  
- Context-aware escalation for critical cases  

---

## Planned & Extended Capabilities

The following features are part of the system design and will be implemented in the future:

### Voice & Environment Awareness
- Panic, pain and breath-stress detection  
- Ambient sound detection 

### Multimodal Risk Signal Detection
- Cardiac risk identification  
- Respiratory distress detection  
- Neurological risk assessment  
- Trauma and infection indicators  
- Voice-based stress and urgency signals  

### Care Navigation & Emergency Support
- Smart sub-specialist matching  
- Hospital load-aware routing  
- Emergency services integration
- Family and caregiver notifications  

### Emergency Assistance & Clinical Handoff
- Voice-guided emergency assistance  
- Doctor-facing pre-arrival emergency summaries  

### Responsible AI & Accessibility
- Explicit uncertainty handling  
- Safe fallback recommendations  
- Rural and low-connectivity support  
- SMS based alerts  

---

## Design Principles

- **Safety-first decision making**
- **Explainability over black-box predictions**
- **Human-centric UX for panic and emergency scenarios**
- **Robustness in low-connectivity and rural environments**

---

## Disclaimer

This system is intended to support triage and care navigation decisions.  
It does **not** replace professional medical diagnosis or treatment.

---

## Contributors

This project was collaboratively developed by:

- Shravani: backend development, emergency mode handling and system integration 
- Shriya: emergency services integration and backend support
- Shreyashree: symptom processing, AI reasoning and triage logic, frontend implementation  