# AI-Powered Portfolio

A modern, interactive portfolio website that combines beautiful UI/UX design with AI chat functionality. Built with React, Vite, TailwindCSS, and FastAPI.

## ✨ Features

- 🤖 **Interactive AI Assistant** - Engage visitors with personalized conversations
- 🎨 **Modern Design** - Beautiful glassmorphism effects with dark/light mode
- 📱 **Fully Responsive** - Optimized for all screen sizes
- ⚡ **Fast Performance** - Built with Vite for lightning-fast loading
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 📧 **Contact Form** - EmailJS integration for direct communication
- 🏗️ **Modular Architecture** - Easy to customize and extend

## 🚀 Tech Stack

### Frontend
- **React** + **Vite** - Modern build tools
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons
- **EmailJS** - Email service integration

### Backend (AI Integration)
- **FastAPI** - Modern Python web framework
- **OpenAI API** - AI chat functionality
- **Python** - Backend programming language

## 📦 Installation

### Frontend Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

### Backend Setup (Optional - for AI Chat)

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Create environment file:**
   ```bash
   cp .env.example .env
   ```

4. **Add your API keys in `.env`:**
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

5. **Start backend server:**
   ```bash
   uvicorn main:app --reload --port 8000
   ```

## ⚙️ Configuration

### Personal Information
Edit `src/data/config.json` to customize your portfolio:
- Personal details (name, title, bio, contact info)
- Social media links
- AI assistant settings
- Theme configuration
- Feature toggles

### Portfolio Data
Update `src/data/portfolio.js` to add your:
- Projects and work samples
- Skills and technologies
- Professional experience
- Certifications and achievements

## 🎨 Customization

### Colors and Theme
- Modify `tailwind.config.js` for custom colors
- Update `src/index.css` for global styles
- Configure theme in `src/data/config.json`

### AI Assistant
- Configure system message in `config.json`
- Customize responses in `ChatBot.jsx`
- Add your OpenAI API key for full functionality

### Contact Form
- Set up EmailJS account
- Update service IDs in `Contact.jsx`
- Configure email templates

## 📱 Sections

1. **Hero** - Introduction with call-to-action
2. **About** - Personal story and statistics
3. **Skills** - Technical expertise with progress bars
4. **Projects** - Portfolio showcase with live demos
5. **Experience** - Professional timeline
6. **Certifications** - Achievements and credentials
7. **Contact** - Get in touch form and information

## 🚀 Deployment

### Frontend (Vercel - Recommended)
```bash
npm run build
vercel --prod
```

### Backend (Railway/Fly.io)
```bash
# Railway
railway deploy

# Fly.io
fly deploy
```

### Alternative Deployments
- **Netlify** (Frontend)
- **GitHub Pages** (Frontend)
- **Heroku** (Backend)
- **DigitalOcean** (Full-stack)

## 🤖 AI Integration

The portfolio includes a sophisticated AI chatbot that can:
- Answer questions about your skills and experience
- Provide project details and technical information
- Guide visitors through your portfolio
- Engage in professional conversations

To enable full AI functionality:
1. Get an OpenAI API key
2. Update the backend `.env` file
3. Deploy the backend service
4. Update the frontend API endpoint

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🙏 Acknowledgments

- Inspired by modern portfolio designs
- AI integration concepts from leading developers
- Open source community for amazing tools

## 📞 Support

If you need help setting up your portfolio:
1. Check the documentation
2. Review the configuration files
3. Open an issue on GitHub
4. Contact for custom development

---

**Ready to showcase your work with AI-powered interaction? Let's build something amazing together!** 🚀+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
