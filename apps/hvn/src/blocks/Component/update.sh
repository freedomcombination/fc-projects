#!/bin/bash

COMPONENT_DIR="../../components"
OUTPUT_FILE="componentList.ts"
INDEX_FILE_NAME="index.ts"
FILE_EXTENSIONS=".tsx .jsx" # Space-separated list format

OPTIONS_JSON="export const componentOptions = ["
FIRST_ITEM=true

for folder in "$COMPONENT_DIR"/*; do
    if [ -d "$folder" ]; then
        echo "Processing folder: $folder"

        COMPONENT_NAME=$(basename "$folder")
        COMPONENT_LABEL="$COMPONENT_NAME"
        COMPONENT_VALUE="$folder" # Default to folder path

        if [ -f "$folder/$INDEX_FILE_NAME" ]; then
            COMPONENT_VALUE="$folder" # Use folder path if index.ts exists
        else
            FOUND_COMPONENT_FILE=false
            for EXT in $FILE_EXTENSIONS; do
                COMPONENT_FILE="$folder/$COMPONENT_NAME$EXT"
                if [ -f "$COMPONENT_FILE" ]; then
                    echo "Found file: $COMPONENT_FILE"
                    COMPONENT_VALUE="$COMPONENT_FILE" # Use full file path
                    FOUND_COMPONENT_FILE=true
                    break
                fi
            done

            if ! $FOUND_COMPONENT_FILE; then
                echo "No index.ts or same-named file, skipping this folder"
                continue
            fi
        fi

        if ! $FIRST_ITEM; then
            OPTIONS_JSON+=","
        fi
        OPTIONS_JSON+="{ label: \"$COMPONENT_LABEL ($COMPONENT_VALUE)\", value: \"$COMPONENT_VALUE\" }"
        FIRST_ITEM=false
    fi
done

OPTIONS_JSON+="];"
echo "$OPTIONS_JSON" > "$OUTPUT_FILE"
echo "Component options written to file: $OUTPUT_FILE"

