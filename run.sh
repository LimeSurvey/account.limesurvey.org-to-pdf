#!/bin/bash

# Read languages from the file
while IFS= read -r language; do
  echo "Running Cypress tests for ${language}..."
  
  # Run the Cypress command for each language
  CYPRESS_LANG="${language}" yarn cypress:e2e:run
  
  echo "Cypress tests for ${language} completed."
  echo ""
done < languages.txt