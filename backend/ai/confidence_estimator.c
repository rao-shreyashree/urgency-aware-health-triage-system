#include "confidence_estimator.h"
#include <string.h>

// based on input data we evaluate how reliable the triage result is
float estimate_confidence(const SymptomList *list, const char *raw_text) 
{
    float confidence = 1.0f;

    // no symptoms were recognized => decrease confidence 
    if (list->count == 0) {
        confidence -= 0.5f;
    }

    // input text is very vague or short or has lots of fillers => decrease confidence 
    if (strlen(raw_text) < 10) {
        confidence -= 0.3f;
    }

    // many symptoms were found => decrease confidence
    if (list->count > 5) {
        confidence -= 0.2f;
    }

    // confidence range: 0.0 to 1.0
    if (confidence < 0.1f) confidence = 0.1f;
    if (confidence > 1.0f) confidence = 1.0f;

    return confidence;
}