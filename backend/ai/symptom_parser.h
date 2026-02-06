#ifndef SYMPTOM_PARSER_H
#define SYMPTOM_PARSER_H

#include "../models/symptom.h"

// parse normalized text to identify known medical symptoms
void parse_symptoms(const char *text, SymptomList *list);

// check for specific emergency keywords
bool is_emergency_keyword(const char *word);

#endif 