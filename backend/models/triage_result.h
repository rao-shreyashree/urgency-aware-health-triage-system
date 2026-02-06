#ifndef TRIAGE_RESULT_H
#define TRIAGE_RESULT_H

// to define the urgency level for medical intervention
typedef enum {
    URGENCY_SELF_CARE = 0, 
    URGENCY_SEE_DOCTOR,    
    URGENCY_EMERGENCY 
} UrgencyCategory;

// to represent final output of the triage engine
typedef struct {
    UrgencyCategory urgency; 
    int severity_score; // calculated total risk score
    float confidence; // calculation certainty between 0.0 and 1.0
    char recommendation[256]; 
} TriageResult;

#endif 