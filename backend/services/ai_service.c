#include "ai_service.h"
#include "../utils/text_normalizer.h"
#include "../ai/symptom_parser.h"
#include "../ai/severity_scorer.h"
#include "../ai/triage_engine.h"
#include "../ai/confidence_estimator.h"
#include <string.h>
#include <stdlib.h>

// to coordinate the flow of data through triage pipeline
TriageResult process_triage_request(const char *user_input) 
{
    TriageResult result;
    SymptomList list;
    
    // we create a copy of the input for normalization
    char *buffer = strdup(user_input);
    if (!buffer) 
    {
        result.urgency = URGENCY_SELF_CARE;
        result.severity_score = 0;
        result.confidence = 0.0f;
        strcpy(result.recommendation, "error: memory allocation failed.");
        return result;
    }

    // step 1: clean and standardize input text
    normalize_text(buffer);
    remove_fillers(buffer);
    standardize_phrases(buffer);

    // step 2: identify symptoms in the text
    parse_symptoms(buffer, &list);

    // step 3: calculate risk level based on found symptoms
    int score = calculate_total_severity(&list);

    // step 4: generate final triage category and advice
    perform_triage(&list, score, &result);

    // step 5: evaluate the reliability of the output
    result.confidence = estimate_confidence(&list, user_input);

    free(buffer);
    return result;
}