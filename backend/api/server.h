#ifndef SERVER_H
#define SERVER_H

#include "../models/triage_result.h"

// Function to handle external triage requests via the API layer
void start_api_server();
TriageResult handle_request(const char* input);

#endif