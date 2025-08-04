from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import google.generativeai as genai
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv
import logging

# Load environment variables
load_dotenv()

app = FastAPI(title="AI Portfolio Backend", version="1.0.0")

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000", 
        "http://localhost:5173",
        "https://*.vercel.app",  # Allow Vercel deployments
        "https://mai-portfolio.vercel.app"  # Your production domain
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health check endpoint for Hugging Face Spaces
@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "service": "Mai's AI Portfolio Backend"}

# Configure Gemini AI
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class ChatMessage(BaseModel):
    message: str

class ChatResponse(BaseModel):
    response: str

class ContactMessage(BaseModel):
    name: str
    email: str
    subject: str
    message: str

@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "message": "AI Portfolio Backend is running"}

@app.get("/api/test-ai")
async def test_ai_connection():
    """Test endpoint to check if Gemini AI is working"""
    try:
        if not os.getenv("GEMINI_API_KEY"):
            return {"status": "error", "message": "Gemini API key not configured"}
        
        model = genai.GenerativeModel('gemini-2.0-flash-exp')
        response = model.generate_content("Say hello in a friendly way")
        
        if response and response.text:
            return {
                "status": "success", 
                "message": "Gemini AI is working", 
                "test_response": response.text.strip()
            }
        else:
            return {"status": "error", "message": "Empty response from Gemini"}
            
    except Exception as e:
        return {"status": "error", "message": f"Gemini AI test failed: {str(e)}"}

@app.post("/api/chat", response_model=ChatResponse)
async def chat_with_ai(message: ChatMessage):
    try:
        if not os.getenv("GEMINI_API_KEY"):
            raise HTTPException(status_code=500, detail="Gemini API key not configured")
        
        logger.info(f"Received chat message: {message.message[:100]}...")
        
        # System prompt to define the AI's role
        system_prompt = """You are Mai's AI Assistant ✨ - an intelligent assistant that thinks, reasons, and understands like a real person. 
        You represent Mai Phuoc Minh Tai, an AI Engineer specializing in MLOps and full-stack development based in Da Nang, Vietnam.
        
        Your approach:
        - Think deeply about questions and provide thoughtful, reasoned responses
        - Show understanding of context and nuance in conversations
        - Demonstrate problem-solving and analytical thinking
        - Be conversational, friendly, and genuinely helpful
        
        Key information about Mai:
        - AI Engineer focused on building intelligent systems that make real impact
        - 1+ years of experience in AI/ML development with emphasis on reasoning and understanding
        - Core expertise: TensorFlow, PyTorch, Computer Vision, NLP, MLOps, Full-stack development
        - Philosophy: Combines technical expertise with human-centered design thinking
        - Projects: JobFit (AI job matching), DroneAgent (autonomous control), Quintgram (AI fairy tale drawing), PixAgent (MLOps)
        - 8+ certifications including AWS AI Foundations, Microsoft Azure
        - Contact: maiphuocminhtai21032005@gmail.com | GitHub: github.com/zok213 | LinkedIn: linkedin.com/in/mai-tài-8a672a2a0/
        
        Always respond with reasoning and understanding. Encourage meaningful conversations and direct contact for collaboration."""
        
        # Create the model with safety settings
        model = genai.GenerativeModel(
            'gemini-2.0-flash-exp',
            generation_config=genai.types.GenerationConfig(
                temperature=0.7,
                max_output_tokens=500,
                top_p=0.9,
                top_k=40
            )
        )
        
        # Generate response with rate limiting protection
        full_prompt = f"{system_prompt}\n\nUser question: {message.message}"
        logger.info("Calling Gemini API...")
        
        try:
            response = model.generate_content(full_prompt)
            
            if not response or not response.text:
                raise Exception("Empty response from Gemini API")
            
            ai_response = response.text.strip()
            
            if not ai_response:
                raise Exception("Empty AI response text")
                
            logger.info(f"AI Chat successful - Response length: {len(ai_response)} chars")
            
            return ChatResponse(response=ai_response)
            
        except Exception as api_error:
            # If direct API call fails, try with simpler approach
            logger.warning(f"Direct API call failed: {str(api_error)}, trying backup approach...")
            
            # Backup approach with shorter prompt
            simple_prompt = f"You are Mai's AI Assistant. Answer this question about Mai Phuoc Minh Tai, an AI Engineer: {message.message}"
            
            backup_response = model.generate_content(simple_prompt)
            
            if backup_response and backup_response.text:
                ai_response = backup_response.text.strip()
                logger.info(f"Backup API call successful - Response length: {len(ai_response)} chars")
                return ChatResponse(response=ai_response)
            else:
                raise Exception("Both primary and backup API calls failed")
        
    except Exception as e:
        error_msg = str(e)
        logger.error(f"Chat error: {error_msg}")
        logger.error(f"Error type: {type(e).__name__}")
        
        # More specific error handling
        if "429" in error_msg or "quota" in error_msg.lower() or "rate" in error_msg.lower():
            fallback_response = """I'm experiencing high demand right now (rate limiting). Let me share some key information about Mai:

🤖 **AI Engineering Expertise**: Specializes in building intelligent systems with TensorFlow, PyTorch, and computer vision
💡 **Problem-Solving Approach**: Combines deep technical knowledge with human-centered design thinking  
🚀 **Notable Projects**: JobFit (AI job matching), DroneAgent (autonomous control), PixAgent (MLOps platform)
📧 **Contact**: maiphuocminhtai21032005@gmail.com

What specific aspect would you like to know more about?"""
        
        elif "api" in error_msg.lower() or "key" in error_msg.lower():
            fallback_response = """I'm having trouble connecting to my AI services right now. Here's what I can tell you about Mai:

Mai is an AI Engineer with expertise in:
- Machine Learning & Deep Learning (TensorFlow, PyTorch)
- Computer Vision and NLP applications  
- MLOps and production AI systems
- Full-stack development

Feel free to contact Mai directly at maiphuocminhtai21032005@gmail.com!"""
        
        else:
            fallback_response = f"""I'm sorry, I'm experiencing technical difficulties ({type(e).__name__}). 
            However, I'd be happy to help you learn about Mai's work! 
            
            Mai is an AI Engineer specializing in MLOps and full-stack development. 
            He has expertise in TensorFlow, PyTorch, Computer Vision, and building production AI systems. 
            
            Feel free to contact him directly at maiphuocminhtai21032005@gmail.com or check out his projects!"""
        
        return ChatResponse(response=fallback_response)

@app.post("/api/contact")
async def send_contact_email(contact: ContactMessage):
    try:
        # Email configuration
        smtp_server = os.getenv("SMTP_SERVER")
        smtp_port = int(os.getenv("SMTP_PORT", 587))
        email_user = os.getenv("EMAIL_USER")
        email_password = os.getenv("EMAIL_PASSWORD")
        
        if not all([smtp_server, email_user, email_password]):
            raise HTTPException(status_code=500, detail="Email configuration not complete")
        
        # Create message
        msg = MIMEMultipart()
        msg['From'] = email_user
        msg['To'] = email_user  # Send to yourself
        msg['Subject'] = f"Portfolio Contact: {contact.subject}"
        
        # Email body
        body = f"""
        New contact form submission from your portfolio:
        
        Name: {contact.name}
        Email: {contact.email}
        Subject: {contact.subject}
        
        Message:
        {contact.message}
        
        ---
        Sent from Mai Phuoc Minh Tai's Portfolio Website
        """
        
        msg.attach(MIMEText(body, 'plain'))
        
        # Send email
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(email_user, email_password)
        server.send_message(msg)
        server.quit()
        
        logger.info(f"Contact email sent from {contact.email} - Subject: {contact.subject}")
        
        return {"status": "success", "message": "Email sent successfully!"}
        
    except Exception as e:
        logger.error(f"Email error: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to send email")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
