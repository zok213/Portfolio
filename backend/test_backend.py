#!/usr/bin/env python3
"""
Test script to debug backend API issues
"""
import os
import sys
import requests
import json
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

def test_backend():
    """Test the backend API endpoints"""
    base_url = "http://localhost:8000"
    
    print("🧪 Testing Backend API...")
    print("=" * 50)
    
    # Test 1: Health check
    try:
        print("1. Testing health endpoint...")
        response = requests.get(f"{base_url}/api/health", timeout=5)
        if response.status_code == 200:
            print("✅ Health check passed")
            print(f"   Response: {response.json()}")
        else:
            print(f"❌ Health check failed: {response.status_code}")
            print(f"   Response: {response.text}")
    except Exception as e:
        print(f"❌ Health check error: {e}")
        print("   Make sure the backend is running: python main.py")
        return False
    
    # Test 2: AI test endpoint
    try:
        print("\n2. Testing AI test endpoint...")
        response = requests.get(f"{base_url}/api/test-ai", timeout=10)
        if response.status_code == 200:
            data = response.json()
            print("✅ AI test passed")
            print(f"   Status: {data.get('status')}")
            print(f"   Message: {data.get('message')}")
            if 'test_response' in data:
                print(f"   AI Response: {data.get('test_response')}")
        else:
            print(f"❌ AI test failed: {response.status_code}")
            print(f"   Response: {response.text}")
    except Exception as e:
        print(f"❌ AI test error: {e}")
    
    # Test 3: Chat endpoint
    try:
        print("\n3. Testing chat endpoint...")
        chat_data = {"message": "Hello, tell me about Mai's skills"}
        response = requests.post(
            f"{base_url}/api/chat", 
            json=chat_data,
            timeout=15
        )
        if response.status_code == 200:
            data = response.json()
            print("✅ Chat test passed")
            print(f"   Response: {data.get('response', '')[:100]}...")
        else:
            print(f"❌ Chat test failed: {response.status_code}")
            print(f"   Response: {response.text}")
    except Exception as e:
        print(f"❌ Chat test error: {e}")
    
    print("\n" + "=" * 50)
    print("Test completed!")
    
    return True

if __name__ == "__main__":
    # Check if API key is configured
    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        print("❌ GEMINI_API_KEY not found in environment variables")
        sys.exit(1)
    
    print(f"API Key configured: {api_key[:12]}...")
    
    test_backend()
