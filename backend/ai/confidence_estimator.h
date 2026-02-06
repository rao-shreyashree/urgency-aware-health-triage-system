#ifndef CONFIDENCE_ESTIMATOR_H
#define CONFIDENCE_ESTIMATOR_H

#include "../models/symptom.h"
#include "../models/triage_result.h"

// to calculate a confidence score based on  quality and quantity of input
float estimate_confidence(const SymptomList *list, const char *raw_text);

#endif 