import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, Sparkles, User, BrainCircuit, Code, Zap, Users, Trophy } from 'lucide-react';
import config from '../../data/config.json';

const About = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: "Hi! I'm Mai's AI Assistant ✨ - I can help you learn about my background, skills, projects, and experience. I'm designed to think, reason, and understand like a real person. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isOnline] = useState(true);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start'
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now(),
      content: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsTyping(true);

    try {
      // Get API URL from environment variables with fallback
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
      
      // Call the real backend API
      const response = await fetch(`${apiUrl}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: currentInput }),
      });

      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }

      const data = await response.json();
      
      const botResponse = {
        id: Date.now() + 1,
        content: data.response,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Chat error:', error);
      // Fallback to local response if backend is not available
      const botResponse = {
        id: Date.now() + 1,
        content: generateAIResponse(currentInput),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const generateAIResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();
    
    if (lowerInput.includes('background') || lowerInput.includes('about')) {
      return "I'm Mai Phuoc Minh Tai, an AI Engineer and Full Stack Developer from Da Nang, Vietnam. I specialize in building intelligent systems and have a passion for creating solutions that make a real impact. I approach problems with careful reasoning and deep understanding.";
    }
    
    if (lowerInput.includes('skills') || lowerInput.includes('technology')) {
      return "My core skills include AI/ML development, full-stack web development, and MLOps. I work with Python, JavaScript, React, TensorFlow, PyTorch, and various cloud platforms. I believe in continuous learning and staying updated with the latest technologies.";
    }
    
    if (lowerInput.includes('projects') || lowerInput.includes('work')) {
      return "I've worked on various projects ranging from AI-powered applications to full-stack web solutions. Each project taught me something new and helped me develop my problem-solving and reasoning abilities. I enjoy tackling complex challenges that require deep thinking.";
    }
    
    if (lowerInput.includes('experience') || lowerInput.includes('career')) {
      return "My journey in tech has been focused on continuous growth and learning. I've gained experience in both theoretical knowledge and practical implementation, always striving to understand the 'why' behind every solution, not just the 'how'.";
    }
    
    if (lowerInput.includes('contact') || lowerInput.includes('hire') || lowerInput.includes('collaborate')) {
      return "I'm always open to discussing new opportunities and collaborations! You can reach out to me through the contact form below, or connect with me on LinkedIn or GitHub. I'd love to hear about your projects and ideas.";
    }
    
    if (lowerInput.includes('philosophy') || lowerInput.includes('approach')) {
      return "I believe in thinking deeply about problems, understanding the root causes, and creating solutions that are both elegant and effective. My approach combines technical expertise with human-centered design thinking.";
    }
    
    return "That's a great question! I'm designed to help you learn more about Mai's background, skills, and experience. I can discuss his projects, technical expertise, career journey, or anything else you'd like to know. What interests you most?";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Get to Know Me
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Chat with my AI assistant to learn about my background, skills, and experience
            </p>
          </motion.div>

          <div className="flex justify-center">
            {/* AI Chatbot Interface - Centered */}
            <motion.div variants={itemVariants} className="w-full max-w-2xl">
              <div className="glass rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/30">
                {/* Chat Header */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200/50 dark:border-gray-700/50">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                      <BrainCircuit className="w-6 h-6 text-white" />
                    </div>
                    {isOnline && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800">
                        <div className="w-full h-full bg-green-500 rounded-full animate-pulse"></div>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                        Mai's AI Assistant ✨
                      </h3>
                      <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                        Online - Ready to Chat
                      </p>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="h-80 overflow-y-auto space-y-4 mb-6 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent scroll-smooth">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start gap-3 max-w-[80%] ${
                        message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                      }`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.sender === 'user' 
                            ? 'bg-blue-500' 
                            : 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'
                        }`}>
                          {message.sender === 'user' ? (
                            <User className="w-4 h-4 text-white" />
                          ) : (
                            <Bot className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <div className={`px-4 py-3 rounded-2xl shadow-md ${
                          message.sender === 'user'
                            ? 'bg-blue-500 text-white rounded-br-md'
                            : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-bl-md'
                        }`}>
                          <p className="text-sm leading-relaxed">{message.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-white dark:bg-gray-800 px-4 py-3 rounded-2xl rounded-bl-md border border-gray-200 dark:border-gray-700">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} className="h-0" />
                </div>

                {/* Input */}
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask about my background, skills, projects..."
                    className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSend}
                    disabled={!input.trim()}
                    className="px-4 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                  >
                    <Send className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
