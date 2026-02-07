CC = gcc
CFLAGS = -I. -I./ai -I./models -I./services -I./utils -I./api 
TARGET = triage_engine

SRCS = main.c \
       api/server.c \  
       services/ai_service.c \
       utils/text_normalizer.c \
       ai/symptom_parser.c \
       ai/severity_scorer.c \
       ai/triage_engine.c \
       ai/confidence_estimator.c

OBJS = $(SRCS:.c=.o)

all: $(TARGET)

$(TARGET): $(OBJS)
        $(CC) $(CFLAGS) -o $(TARGET) $(OBJS)

clean:
        rm -f $(OBJS) $(TARGET)