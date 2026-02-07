#include "server.h"
#include "../services/ai_service.h"
#include <stdio.h>

TriageResult handle_request(const char* input) {
    // This connects your API layer to Person 2's AI service
    return process_triage_request(input);
}

void start_api_server() {
    printf("Backend API Wrapper initialized.\n");
}