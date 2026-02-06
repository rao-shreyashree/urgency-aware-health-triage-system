#include "symptom_parser.h"
#include <string.h>
#include <stdio.h>

// map strings to structured data of symptoms
void parse_symptoms(const char *text, SymptomList *list)
{
    list->count = 0;

    // we create an array of known symptom keywords and their metadata
    struct
    {
        const char *keyword;
        const char *standard_name;
        bool is_critical;
    } database[] = {
        {"breath", "shortness_of_breath", true},
        {"chest pain", "chest_pain", true},
        {"cough", "cough", false},
        {"dizzy", "dizziness", false},
        {"fever", "fever", false},
        {"headache", "headache", false}};

    int database_size = sizeof(database) / sizeof(database[0]);

    for (int i = 0; i < database_size && list->count < 10; i++)
    {
        if (strstr(text, database[i].keyword))
        {
            Symptom *s = &list->symptoms[list->count];
            strncpy(s->name, database[i].standard_name, 64);
            s->is_red_flag = database[i].is_critical;
            s->duration_days = 1;  
            s->intensity = SEVERITY_MODERATE; 
            list->count++;
        }
    }
}

// check if a specific word matches critical emergency markers
bool is_emergency_keyword(const char *word)
{
    if (strstr(word, "unconscious") || strstr(word, "bleeding"))
    {
        return true;
    }
    return false;
}