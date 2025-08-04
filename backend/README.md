# AI Portfolio Backend

This is the backend service for the AI-powered portfolio. It handles AI chat functionality and can be extended with additional features.

## Setup

1. Install Python dependencies:
```bash
pip install fastapi uvicorn openai python-dotenv
```

2. Create a `.env` file with your API keys:
```
OPENAI_API_KEY=your_openai_api_key_here
```

3. Run the development server:
```bash
uvicorn main:app --reload --port 8000
```

## Features

- AI Chat API endpoint
- CORS configuration for frontend integration
- Environment-based configuration
- Error handling and logging

## API Endpoints

- `POST /api/chat` - Send message to AI assistant
- `GET /api/health` - Health check endpoint

## Deployment

This backend can be deployed to various platforms:
- Heroku
- Railway
- Fly.io
- DigitalOcean App Platform
- AWS Lambda (with Mangum)

## Security

- API key validation
- Rate limiting (recommended for production)
- CORS configuration
- Input validation
