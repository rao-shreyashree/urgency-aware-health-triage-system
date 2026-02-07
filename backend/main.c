#include <stdio.h>
#include "api/server.h" // Include your new API wrapper

int main(int argc, char *argv[]) {
    if (argc < 2) {
        printf("{\"error\": \"No input\"}\n");
        return 1;
    }

    // Call through the API layer (Your part) 
    // which then calls the AI Service (Person 2's part)
    TriageResult result = handle_request(argv[1]);

    // Format the JSON output for the Node.js bridge
    printf("{\n");
    printf("  \"urgency\": %d,\n", result.urgency);
    printf("  \"severity_score\": %d,\n", result.severity_score);
    printf("  \"confidence\": %.2f,\n", result.confidence);
    printf("  \"recommendation\": \"%s\"\n", result.recommendation);
    printf("}\n");

    return 0;
}