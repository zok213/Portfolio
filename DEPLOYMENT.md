# 🚀 Deployment Guide

## Prerequisites
- GitHub repository with your code
- Vercel account (for frontend)
- Hugging Face account (for backend)
- Gemini API key

---

## 🔧 Backend Deployment (Hugging Face Spaces)

### Step 1: Create Hugging Face Space
1. Go to [Hugging Face Spaces](https://huggingface.co/spaces)
2. Click "Create new Space"
3. Choose:
   - **Space name**: `mai-portfolio-backend`
   - **License**: MIT
   - **SDK**: Docker
   - **Hardware**: CPU basic (free tier)

### Step 2: Upload Backend Files
1. Clone your HF Space repository:
   ```bash
   git clone https://huggingface.co/spaces/YOUR_USERNAME/mai-portfolio-backend
   cd mai-portfolio-backend
   ```

2. Copy backend files:
   ```bash
   cp -r /path/to/your/Portfolio/backend/* .
   ```

3. Create `.env` file with your secrets:
   ```bash
   echo "GEMINI_API_KEY=your_actual_api_key_here" > .env
   echo "GMAIL_EMAIL=your_gmail@gmail.com" >> .env
   echo "GMAIL_PASSWORD=your_app_password" >> .env
   ```

4. Push to HF Spaces:
   ```bash
   git add .
   git commit -m "Deploy AI Portfolio Backend"
   git push
   ```

### Step 3: Configure Environment Variables
1. In your HF Space settings, add secrets:
   - `GEMINI_API_KEY`: Your Gemini API key
   - `GMAIL_EMAIL`: Your Gmail address
   - `GMAIL_PASSWORD`: Your Gmail app password

---

## 🌐 Frontend Deployment (Vercel)

### Step 1: Connect GitHub to Vercel
1. Go to [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Choose the root directory (not `/backend`)

### Step 2: Configure Environment Variables
1. In Vercel project settings → Environment Variables:
   ```
   VITE_API_URL = https://YOUR_USERNAME-mai-portfolio-backend.hf.space
   ```

### Step 3: Build Settings (Auto-detected)
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

---

## 🔄 Post-Deployment Steps

### 1. Update CORS Origins
In your HF Space backend (`main.py`), update:
```python
allow_origins=[
    "https://your-vercel-app.vercel.app",  # Your actual Vercel URL
    "http://localhost:3000", 
    "http://localhost:5173"
]
```

### 2. Test Deployment
1. Visit your Vercel frontend URL
2. Test the AI chat functionality
3. Verify contact form works
4. Check responsive design

### 3. Custom Domain (Optional)
1. In Vercel → Domains → Add domain
2. Update CORS origins accordingly

---

## 🐛 Troubleshooting

### Common Issues:

**1. CORS Errors**
- Check backend CORS origins include your Vercel URL
- Ensure API URL in frontend matches HF Space URL

**2. API Not Found**
- Verify HF Space is running (green status)
- Check environment variables are set correctly
- Test backend health endpoint: `/api/health`

**3. Build Failures**
- Check all dependencies in `package.json`
- Verify environment variables are set in Vercel

### Health Check URLs:
- **Backend**: `https://YOUR_USERNAME-mai-portfolio-backend.hf.space/api/health`
- **Frontend**: `https://your-vercel-app.vercel.app`

---

## 📊 Monitoring

### HF Spaces Logs:
```bash
# View logs in HF Space interface
# Check for startup errors or API issues
```

### Vercel Analytics:
- Enable in Vercel dashboard
- Monitor performance and usage

---

## 🔒 Security Checklist

- ✅ API keys stored as environment variables (not in code)
- ✅ CORS properly configured
- ✅ Rate limiting implemented in backend
- ✅ Error handling with fallback responses
- ✅ Health checks for monitoring

---

## 🚀 Ready to Deploy!

Your project is now configured for production deployment with:
- ✅ Dockerized backend for HF Spaces
- ✅ Optimized frontend for Vercel
- ✅ Environment variable management
- ✅ CORS and security configured
- ✅ Health monitoring endpoints

Execute the deployment steps above and your AI-powered portfolio will be live! 🎉
