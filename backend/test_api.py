#!/usr/bin/env python3
"""
Test script to debug Gemini API issues
"""

import os
import google.generativeai as genai
from dotenv import load_dotenv
import logging

# Load environment variables
load_dotenv()

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def test_gemini_api():
    try:
        api_key = os.getenv("GEMINI_API_KEY")
        print(f"API Key: {api_key[:10]}..." if api_key else "API Key not found")
        
        if not api_key:
            print("❌ GEMINI_API_KEY not found in environment variables")
            return False
            
        # Configure Gemini AI
        genai.configure(api_key=api_key)
        print("✅ Gemini API configured")
        
        # Create the model
        model = genai.GenerativeModel('gemini-2.0-flash')
        print("✅ Model created")
        
        # Test generation
        test_prompt = "Say hello in a friendly way"
        print(f"Testing with prompt: {test_prompt}")
        
        response = model.generate_content(test_prompt)
        print(f"✅ Response received: {response.text}")
        
        return True
        
    except Exception as e:
        print(f"❌ Error: {str(e)}")
        return False

def test_with_rate_limiting():
    """Test with rate limiting protection"""
    try:
        api_key = os.getenv("GEMINI_API_KEY")
        genai.configure(api_key=api_key)
        
        # Create model with generation config
        model = genai.GenerativeModel(
            'gemini-2.0-flash',
            generation_config=genai.types.GenerationConfig(
                temperature=0.7,
                max_output_tokens=200,
                top_p=0.9,
                top_k=40
            )
        )
        
        test_prompt = "Explain AI in one sentence"
        print(f"Testing with rate limiting protection...")
        
        response = model.generate_content(test_prompt)
        print(f"✅ Protected response: {response.text}")
        
        return True
        
    except Exception as e:
        print(f"❌ Protected test error: {str(e)}")
        return False

if __name__ == "__main__":
    print("🧪 Testing Gemini API Connection...")
    print("=" * 50)
    
    # Test basic connection
    if test_gemini_api():
        print("\n🧪 Testing with rate limiting protection...")
        test_with_rate_limiting()
    
    print("\n" + "=" * 50)
    print("Test completed!")
