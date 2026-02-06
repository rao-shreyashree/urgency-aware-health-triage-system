#ifndef AI_SERVICE_H
#define AI_SERVICE_H

#include "../models/triage_result.h"

// entry point for the triage system
TriageResult process_triage_request(const char *user_input);
// takes raw user input and returns a structured triage result

#endif 