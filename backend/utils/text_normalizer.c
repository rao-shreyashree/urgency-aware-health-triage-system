#include "text_normalizer.h"
#include <ctype.h>
#include <string.h>

// convert all characters to lowercase and strips non-alphanumeric chars
void normalize_text(char *input) 
{
    if (!input) 
        return;
    
    char *source = input;
    char *destination = input;

    while (*source) 
    {
        if (isalnum((unsigned char)*source) || isspace((unsigned char)*source)) 
        {
            *destination = tolower((unsigned char)*source);
            destination++;
        }
        source++;
    }
    *destination = '\0';
}

void remove_fillers(char *input) 
{
    const char *fillers[] = {" feel ", " have ", " the ", " uhh ", " and ", " with ", " is ", " my ", " mmm "};
    int num_fillers = 9;

    for (int i = 0; i < num_fillers; i++) 
    {
        char *match;
        while ((match = strstr(input, fillers[i]))) {
            size_t filler_len = strlen(fillers[i]) - 1; // leave a space and we overwrite the filler
            memmove(match, match + filler_len, strlen(match + filler_len) + 1);
        }
    }
}

// common slang words are mapped to standard terms
void standardize_phrases(char *input) 
{
    const char *slang[] = {"hurt", "aching", "throbbing", "sore"};
    const char *standard = "pain";
    char buffer[1024];
    char *pos;

    for (int i = 0; i < 4; i++) 
    {
        while ((pos = strstr(input, slang[i]))) 
        {
            size_t prefix_len = pos - input;
            strncpy(buffer, input, prefix_len);
            buffer[prefix_len] = '\0';

            strcat(buffer, standard);
            strcat(buffer, pos + strlen(slang[i]));
            strcpy(input, buffer);
        }
    }
}