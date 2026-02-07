#include "confidence_estimator.h"
#include <string.h>

// based on input data we evaluate how reliable the triage result is
float estimate_confidence(const SymptomList *list, const char *raw_text) 
{
    float confidence = 1.0f;
    int text_length = strlen(raw_text);

    // no symptoms were recognized => decrease confidence 
    if (list->count == 0) {
        confidence -= 0.3f;
    }

    // input text is very vague or short or has lots of fillers => decrease confidence 
    if (strlen(raw_text) < 10) {
        confidence -= 0.4f;
    }
    else if (strlen(raw_text) > 200) {
        confidence -= 0.1f;
    }
    else if (text_length >= 20 && text_length <= 100) {
        confidence += 0.1f; 
    }

    // many symptoms were found => decrease confidence
    if (list->count == 1) {
        confidence += 0.1f; 
    } 
    else if (list->count > 5) {
        confidence -= 0.2f; 
    }

    for (int i = 0; i < list->count; i++) 
    {
        if (list->symptoms[i].is_red_flag) 
        {
            confidence += 0.2f; 
            break;
        }
    }

    // confidence range: 0.0 to 1.0
    if (confidence < 0.1f) confidence = 0.1f;
    if (confidence > 1.0f) confidence = 1.0f;

    return confidence;
}