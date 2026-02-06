#ifndef SEVERITY_SCORER_H
#define SEVERITY_SCORER_H

#include "../models/symptom.h"

// to calculate total severity score based on all identified symptoms
int calculate_total_severity(const SymptomList *list);
int get_symptom_weight(const Symptom *s);

#endif 