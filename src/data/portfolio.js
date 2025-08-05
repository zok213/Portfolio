export const projects = [
  {
    id: 1,
    title: "JobFit - AI-Powered Job Matching Platform",
    description: "An intelligent job matching system using machine learning algorithms to connect candidates with perfect job opportunities based on skills, experience, and preferences.",
    image: "/assets/projects/JobFIt.ai.jpg",
    technologies: ["Python", "ML", "NLP", "FastAPI", "A2A", "RAG", "React", "PostgreSQL"],
    liveUrl: "https://jobfit-demo.example.com",
    githubUrl: "https://github.com/zok213/JobFit",
    featured: true,
    category: "AI/ML"
  },
  {
    id: 2,
    title: "DroneAgent - Autonomous Drone Control System",
    description: "An AI-powered autonomous drone control system with computer vision capabilities for navigation, object detection, and mission planning using reinforcement learning.",
    image: "/assets/projects/AgentDrone.jpg",
    technologies: ["Python", "Computer Vision", "RAG Graph", "A2A", "TensorFlow"],
    liveUrl: "https://github.com/zok213/DroneAgent",
    githubUrl: "https://github.com/zok213/DroneAgent",
    featured: true,
    category: "AI/ML"
  },
  {
    id: 3,
    title: "Quintgram - AI Fairy Tale Drawing App",
    description: "An AI-powered creative application that generates beautiful fairy tale illustrations for children. Uses advanced computer vision and generative AI to create magical, story-driven artwork that brings children's imagination to life.",
    image: "/assets/projects/Quintgarm.gif",
    technologies: ["Python", "Generative AI", "Computer Vision", "React"],
    liveUrl: "https://github.com/zok213/Quintgram",
    githubUrl: "https://github.com/zok213/Quintgram",
    featured: true,
    category: "AI - Creative"
  },
  {
    id: 4,
    title: "Pixity - AI Local Assistant & Production Pipeline",
    description: "Enterprise-grade AI production pipeline and MLOps platform for deploying, monitoring, and scaling machine learning models in production environments.",
    image: "/assets/projects/Pixity.png",
    technologies: ["Python", "RAG", "FastAPI", "MLOps", "Docker"],
    liveUrl: "https://pixagent-demo.example.com",
    githubUrl: "https://github.com/ManTT-Data/PixAgent",
    featured: true,
    category: "AI - Full Stack"
  },
  {
    id: 5,
    title: "Hybrid Emotion Classifier",
    description: "A hybrid deep learning model for emotion classification using facial images and audio signals. Integrates CNN and RNN architectures for robust multimodal emotion recognition.",
    image: "/assets/projects/HybridEmotionClassifier.jpg",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Computer Vision"],
    liveUrl: "https://github.com/zok213/Hybrid-Emotion-Classifier",
    githubUrl: "https://github.com/zok213/Hybrid-Emotion-Classifier",
    featured: false,
    category: "AI/ML"
  },
  {
    id: 6,
    title: "DeepFaceEnsemble-ResNetMobile",
    description: "An ensemble deep learning system combining ResNet and MobileNet architectures for highly accurate face recognition and verification tasks.",
    image: "/assets/projects/DeepFaceEnsemble.jpg",
    technologies: ["Python", "TensorFlow", "Keras", "ResNet", "MobileNet"],
    liveUrl: "https://github.com/zok213/DeepFaceEnsemble-ResNetMobile",
    githubUrl: "https://github.com/zok213/DeepFaceEnsemble-ResNetMobile",
    featured: false,
    category: "AI/ML"
  },
  {
    id: 7,
    title: "SILIA: Smart Image Labeling & Interactive Annotation",
    description: "A web-based tool for efficient image labeling and annotation, designed for computer vision datasets. Features interactive UI, bulk operations, and export to popular ML formats.",
    image: "/assets/projects/SILIA.jpg",
    technologies: ["React", "Python", "FastAPI", "Computer Vision", "Annotation"],
    liveUrl: "https://github.com/zok213/SILIA",
    githubUrl: "https://github.com/zok213/SILIA",
    featured: false,
    category: "AI/ML"
  }
];

// src/data/skills.js

export const skills = [
  {
    category: "AI & Machine Learning",
    description: "Building intelligent systems and working with ML models.",
    priority: 1,
    items: [
      { name: "Python", proficiency: "high", icon: "/assets/icons/Python.png" },
      { name: "TensorFlow", proficiency: "high", icon: "/assets/icons/TensorFlow.png" },
      { name: "Scikit-learn", proficiency: "high", icon: "/assets/icons/scikit-learn.png" },
      { name: "Pandas/NumPy/Matplotlib/Seaborn", proficiency: "high", icon: "/assets/icons/Pandas.png" },
      { name: "PyTorch", proficiency: "medium", icon: "/assets/icons/PyTorch.png" },
      { name: "OpenCV", proficiency: "medium", icon: "/assets/icons/OpenCV.png" },
      { name: "Hugging Face", proficiency: "medium", icon: "/assets/icons/HuggingFace.png" },
      { name: "Keras", proficiency: "basic", icon: "/assets/icons/Keras.png" },
    ]
  },
  {
    category: "AI Specializations",
    description: "Focused areas of AI development and research.",
    priority: 2,
    items: [
      { name: "Computer Vision", proficiency: "high", icon: "/assets/icons/ComputerVision.png", description: "Object detection, face recognition, image classification" },
      { name: "Deep Learning", proficiency: "high", icon: "/assets/icons/DeepLearning.png", description: "CNN, RNN, ResNet, MobileNet architectures" },
      { name: "NLP & Text Analysis", proficiency: "medium", icon: "/assets/icons/NLP.png", description: "Sentiment analysis, text processing, chatbots" },
      { name: "Ensemble Methods", proficiency: "medium", icon: "/assets/icons/EnsembleMethods.png", description: "Model combination techniques" },
      { name: "Generative AI", proficiency: "medium", icon: "/assets/icons/GenerativeAI.png", description: "GANs and content generation" },
      { name: "Audio Processing", proficiency: "basic", icon: "/assets/icons/AudioProcessing.png", description: "Speech analysis and multimodal systems" },
      { name: "Reinforcement Learning", proficiency: "basic", icon: "/assets/icons/ReinforcementLearning.png", description: "Autonomous systems exploration" },
    ]
  },
  {
    category: "Development & Deployment",
    description: "Tools and technic for building and deploying AI applications.",
    priority: 3,
    items: [
      { name: "Git/GitHub", proficiency: "high", icon: "/assets/icons/GitHub.png", description: "Version control and collaboration" },
      { name: "Jupyter Notebooks", proficiency: "high", icon: "/assets/icons/Jupyter.png", description: "Data science and experimentation" },
      { name: "Docker", proficiency: "medium", icon: "/assets/icons/Docker.png", description: "Containerization" },
      { name: "MLflow", proficiency: "medium", icon: "/assets/icons/MLflow.png", description: "Model tracking" },
      { name: "Linux/Unix", proficiency: "medium", icon: "/assets/icons/Linux.png", description: "Server environments" },
      { name: "AWS", proficiency: "medium", icon: "/assets/icons/AWS.png", description: "Cloud services" },
      { name: "CI/CD", proficiency: "medium", icon: "/assets/icons/CI_CD.png", description: "Continuous integration and deployment" },
      { name: "Azure", proficiency: "basic", icon: "/assets/icons/Azure.png", description: "Cloud services" },
      { name: "Kubernetes", proficiency: "basic", icon: "/assets/icons/Kubernetes.png", description: "Container orchestration" },
    ]
  },
  {
    category: "Data & Backend",
    description: "Database and backend technologies supporting AI systems.",
    priority: 4,
    items: [
      { name: "FastAPI", proficiency: "high", icon: "/assets/icons/FastAPI.png", description: "AI model serving and APIs" },
      { name: "REST APIs", proficiency: "high", icon: "/assets/icons/RestAPI.png", description: "API design and development" },
      { name: "Data Annotation", proficiency: "high", icon: "/assets/icons/DataAnnotation.png", description: "Dataset preparation and labeling" },
      { name: "PostgreSQL", proficiency: "medium", icon: "/assets/icons/PostgresSQL.png", description: "Relational databases" },
      { name: "MongoDB", proficiency: "medium", icon: "/assets/icons/MongoDB.png", description: "Document databases" },
      { name: "Node.js", proficiency: "medium", icon: "/assets/icons/Node.js.png", description: "Backend development" },
      { name: "React", proficiency: "medium", icon: "/assets/icons/React.png", description: "Frontend for AI demos" },
      { name: "Redis", proficiency: "medium", icon: "/assets/icons/Redis.png", description: "In-memory data store" },
      { name: "GraphQL", proficiency: "basic", icon: "/assets/icons/GraphQL.png", description: "API query language" },
    ]
  }
];

// Proficiency indicator configuration - more appropriate for students
export const proficiencyConfig = {
  "high": {
    dots: 3,
    color: "bg-green-500",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    borderColor: "border-green-200 dark:border-green-800",
    label: "Proficient"
  },
  "medium": {
    dots: 2,
    color: "bg-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-800",
    label: "Experienced"
  },
  "basic": {
    dots: 1,
    color: "bg-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    borderColor: "border-orange-200 dark:border-orange-800",
    label: "Learning"
  }
};

export const certifications = [
  {
    id: 1,
    title: "AWS AI Foundations",
    issuer: "Amazon Web Services",
    date: "2025",
    image: "/assets/certs/aws-aif.png",
    credentialUrl: "https://cp.certmetrics.com/amazon/en/public/verify/credential/f92f44f3e843425aa1cce770c6b7f9e2",
    category: "Cloud & MLOps"
  },
  {
    id: 2,
    title: "AI Foundations for Everyone",
    issuer: "Coursera",
    date: "2024",
    image: "/assets/certs/ai-foundations.png",
    credentialUrl: "https://coursera.org/share/e4c9c9a2c999a988458f73175fc1e481",
    category: "AI & Machine Learning"
  },
  {
    id: 3,
    title: "Software Development Lifecycle",
    issuer: "Coursera",
    date: "2025",
    image: "/assets/certs/sdlc.png",
    credentialUrl: "https://coursera.org/share/2298df9cb7ae9dd92ebaca5b330a7da8",
    category: "Software Development"
  },
  {
    id: 4,
    title: "Microsoft Azure Developer Associate (AZ-204) Exam Prep",
    issuer: "Microsoft/Coursera",
    date: "2024",
    image: "/assets/certs/azure-204.png",
    credentialUrl: "https://coursera.org/share/9f240d4920bf8e4dbac1257db15c5d80",
    category: "Cloud & MLOps"
  },
  {
    id: 5,
    title: "Microsoft Azure Fundamentals AZ-900 Exam Prep",
    issuer: "Microsoft/Coursera",
    date: "2024",
    image: "/assets/certs/azure-900.png",
    credentialUrl: "https://coursera.org/share/bcc5c5d4cf88297463d2561e7afb8bfa",
    category: "Cloud & MLOps"
  },
  {
    id: 6,
    title: "Mathematics for Machine Learning",
    issuer: "Coursera",
    date: "2025",
    image: "/assets/certs/math-ml.png",
    credentialUrl: "https://coursera.org/share/745c0b0883a57d7d0982de333c4a06b9",
    category: "AI & Machine Learning"
  },
  {
    id: 7,
    title: "Data Science Fundamentals with Python and SQL",
    issuer: "Coursera",
    date: "2025",
    image: "/assets/certs/data-science-fundamentals.png",
    credentialUrl: "https://coursera.org/share/ab4d63b785165034263a554ddeab1d8c",
    category: "AI & Machine Learning"
  }
];

export const experiences = [
  {
    id: 1,
    title: "AI Engineer",
    company: "Pix.Production",
    location: "Da Nang, Vietnam",
    duration: "2025 - Present",
    description: "Driving AI innovation and MLOps, architecting scalable machine learning systems for enterprise clients. Leading development of advanced NLP, computer vision, and generative AI solutions. Responsible for model deployment, monitoring, and continuous improvement in production environments.",
    technologies: ["Python", "TypeScript", "TensorFlow", "PyTorch", "MLOps", "Docker", "RAG Graph", "A2A", "MCP", "AWS", "FastAPI"]
  },
  {
    id: 2,
    title: "Data Annotator",
    company: "BeeWork.AI",
    location: "Da Nang, Vietnam",
    duration: "2024 - 2025",
    description: "Specialized in computer vision data annotation and image data processing for AI model training. Collaborated with ML engineers to ensure high-quality labeled datasets for production models. Optimized annotation workflows, contributing to successful computer vision projects in real-world applications.",
    technologies: ["Computer Vision", "Image Processing", "Data Annotation", "Python", "Labeling Tools"]
  }
];
