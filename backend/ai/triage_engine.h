#ifndef TRIAGE_ENGINE_H
#define TRIAGE_ENGINE_H

#include "../models/symptom.h"
#include "../models/triage_result.h"

// tp determine the final triage category and recommendation
void perform_triage(const SymptomList *list, int severity_score, TriageResult *result);

// check for symptoms which indicate emergency
bool has_critical_red_flag(const SymptomList *list);

#endif 