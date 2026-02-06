#include "severity_scorer.h"
#include <math.h>

// calculates weight as a probability value (btw 0.0 and 1.0)
float get_symptom_probability(const Symptom *s) {
    float p = 0.1f; // base floor probability

    if (s->is_red_flag) 
    {
        p = 0.8f; // critical == high weights
    } 
    else if (s->intensity == SEVERITY_SEVERE) 
    {
        p = 0.6f;
    } 
    else if (s->intensity == SEVERITY_MODERATE) {
        p = 0.4f;
    }

    if (s->duration_days > 7) {
        p += 0.1f;
    }

    return (p > 0.95f) ? 0.95f : p; // to avoid absolute certainty
}

// approximate probabilistic inference using independence assumptions
int calculate_total_severity(const SymptomList *list) 
{
    if (list->count == 0) 
        return 0;

    float complement_product = 1.0f;
    for (int i = 0; i < list->count; i++) 
    {
        float p = get_symptom_probability(&list->symptoms[i]);
        // product of independent non-occurrence probabilities
        complement_product *= (1.0f - p);
    }

    // final severity represents the probability that at least one symptom is significant
    float total_prob = 1.0f - complement_product;

    // map 0.0-1.0 probability to a 0-100 integer scale for the triage engine
    return (int)(total_prob * 100);
}