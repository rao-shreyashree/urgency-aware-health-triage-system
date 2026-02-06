#ifndef SYMPTOM_H
#define SYMPTOM_H

#include <stdbool.h>

// to define severity of the condition
typedef enum {
    SEVERITY_NONE = 0,
    SEVERITY_MILD,
    SEVERITY_MODERATE,
    SEVERITY_SEVERE
} SymptomIntensity;

// representing symptoms
typedef struct {
    char name[64]; 
    int duration_days; 
    SymptomIntensity intensity; 
    bool is_red_flag; // when condition is critical
} Symptom;

typedef struct {
    Symptom symptoms[10];  
    int count;  
} SymptomList;

#endif