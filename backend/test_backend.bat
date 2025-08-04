@echo off
echo Testing AI Portfolio Backend with curl...
echo.

echo 1. Testing health endpoint...
curl -X GET "http://localhost:8000/api/health" -H "Content-Type: application/json"
echo.
echo.

echo 2. Testing chat endpoint...
curl -X POST "http://localhost:8000/api/chat" ^
  -H "Content-Type: application/json" ^
  -d "{\"message\": \"Hello, tell me about Mai's background\"}"
echo.
echo.

echo 3. Testing with a technical question...
curl -X POST "http://localhost:8000/api/chat" ^
  -H "Content-Type: application/json" ^
  -d "{\"message\": \"What are Mai's AI engineering skills?\"}"
echo.

pause
