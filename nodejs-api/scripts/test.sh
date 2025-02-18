curl -X POST http://localhost:3000/api/v1/ai-mermaid/generate \
-H "Content-Type: application/json" \
-d '{"userInput": "Create a flowchart for a login process"}' \
-o test.log
