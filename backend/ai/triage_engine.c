#include "triage_engine.h"
#include <string.h>

// scan for red flag symptoms that demand immediate escalation
bool has_critical_red_flag(const SymptomList *list) 
{
    for (int i = 0; i < list->count; i++) 
    {
        if (list->symptoms[i].is_red_flag) 
        {
            return true;
        }
    }
    return false;
}

// map the probability-derived severity score to urgency situations
void perform_triage(const SymptomList *list, int severity_score, TriageResult *result) 
{
    result->severity_score = severity_score;

    if (list->count == 0) 
    {
        result->urgency = URGENCY_SEE_DOCTOR;
        strncpy(result->recommendation, 
               "No specific symptoms recognized. Please describe your condition in more detail, including: 1) Specific symptoms 2) Duration 3) Severity. If concerned, consult a healthcare provider.", 
               256);
        return;
    }

    // urgency logic based on probabilistic thresholds
    if (has_critical_red_flag(list) || severity_score >= 85) 
    {
        result->urgency = URGENCY_EMERGENCY;
        strncpy(result->recommendation, " 🔴 high risk detected: seek emergency care immediately", 256);
    } 

    // moderate probability of significant clinical concern
    else if (severity_score >= 37) 
    {
        result->urgency = URGENCY_SEE_DOCTOR;
        strncpy(result->recommendation, "🟡 elevated risk: contact a doctor for evaluation", 256);
    } 

    // low probability or minor symptoms
    else 
    {
        result->urgency = URGENCY_SELF_CARE;
        strncpy(result->recommendation, "🟢 low risk: monitor symptoms and rest at home", 256);
    }
}