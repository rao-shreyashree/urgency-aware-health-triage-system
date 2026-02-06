#ifndef TEXT_NORMALIZER_H
#define TEXT_NORMALIZER_H

// replaces common synonyms with standardized terms
void standardize_phrases(char *input);

// converts input to lowercase and removes punctuation
void normalize_text(char *input);

// removes common filler words 
void remove_fillers(char *input);

#endif