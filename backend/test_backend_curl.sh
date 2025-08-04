#!/bin/bash
echo "🧪 Testing Backend with curl..."
echo "=================================================="

# Test 1: Health check
echo "1. Testing health endpoint..."
curl -s "http://localhost:8000/api/health" | python -m json.tool
echo -e "\n"

# Test 2: AI test endpoint
echo "2. Testing AI test endpoint..."
curl -s "http://localhost:8000/api/test-ai" | python -m json.tool
echo -e "\n"

# Test 3: Chat endpoint
echo "3. Testing chat endpoint..."
curl -s -X POST "http://localhost:8000/api/chat" \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello, tell me about Mai"}' | python -m json.tool

echo -e "\n=================================================="
echo "Test completed!"
