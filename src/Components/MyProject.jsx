import React, { useState } from 'react';
import { ExternalLink, Github, Code, Zap, Globe, Music, Dumbbell, Users, Monitor, ArrowRight, Trophy, Bot, Search } from 'lucide-react';


const ProjectsShowcase = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      id: 1,
      name: "WhyNotHireMe",
      description: "AI-powered resume analysis and hiring transparency system. Analyzes resumes against job descriptions, calculates semantic match score, identifies skill gaps, and sends personalised rejection emails with real feedback directly to candidates.",
      skills: ["Python", "FastAPI", "NLP", "Next.js", "PostgreSQL", "SendGrid"],
      icon: <Bot className="w-8 h-8" />,
      gradient: "from-yellow-400 via-lime-400 to-green-400",
      liveDemo: "https://whynothireme.vercel.app",
      github: "https://github.com/uzma-a/WhyNotHireMe",
      category: "AI Application"
    },
    {
      id: 2,
      name: "TruthLens",
      description: "AI-powered fake news detector that analyzes articles and headlines for credibility using NLP models, providing transparency scores and source verification.",
      skills: ["Python", "NLP", "React.js", "FastAPI"],
      icon: <Search className="w-8 h-8" />,
      gradient: "from-red-400 via-orange-400 to-yellow-400",
      liveDemo: "https://fakenews-detector-ai.vercel.app/",
      github: "https://github.com/uzma-a/fake-news-detector",
      category: "AI Application"
    },

    {
      id: 3,
      name: "House Price Prediction",
      description: "End-to-end regression model using PyTorch on real Kaggle dataset with complete ML workflow—data preprocessing, feature scaling, custom Dataset & DataLoader, training loop, and model persistence.",
      skills: ["Python", "PyTorch", "NumPy", "Pandas", "Kaggle"],
      icon: <Code className="w-8 h-8" />,
      gradient: "from-cyan-400 via-blue-400 to-purple-400",
      liveDemo: "https://www.kaggle.com/code/uzmaaasiya/house-price-prediction-app-pyto/edit",
      category: "Machine Learning"
    },
    {
      id: 4,
      name: "PrescriptionDecoder AI",
      description: "AI-powered medical prescription decoder that turns confusing prescriptions into clear, understandable guidance using Gemini API and deployed on Cloud Run.",
      skills: ["Gemini API", "Cloud Run", "AI Studio", "Python"],
      icon: <Bot className="w-8 h-8" />,
      gradient: "from-green-400 via-emerald-400 to-teal-400",
      liveDemo: "https://prescription-decoder-ai-380824212144.us-west1.run.app/",
      github: "https://github.com/uzma-a/prescription-ai",
      category: "AI Application"
    },
    {
      id: 5,
      name: "MockMate",
      description: "AI-driven technical interview practice platform with real-time voice interaction, intelligent feedback system using Gemini 2.5 Flash, and full-stack architecture.",
      skills: ["Django", "React.js", "Gemini 2.5", "pyttsx3", "Bootstrap"],
      icon: <Users className="w-8 h-8" />,
      gradient: "from-blue-400 via-purple-400 to-pink-400",
      liveDemo: "https://mockmate-interview.vercel.app/",
      github: "https://github.com/uzma-a/MockMate",
      category: "Full Stack"
    },
    {
      id: 6,
      name: "Study Buddy",
      description: "Personal AI-powered notes and quiz generator that creates summaries, quizzes, and interactive learning materials using Gemini API with PDF export functionality.",
      skills: ["React.js", "Gemini API", "Clerk Auth", "jsPDF", "Context API"],
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-purple-400 via-pink-400 to-rose-400",
      liveDemo: "https://ai-studybuddy.vercel.app/",
      github: "https://github.com/uzma-a/Study-Buddy",
      category: "Frontend"
    },
    {
      id: 7,
      name: "Slice-Hub Pizza",
      description: "Full-stack pizza ordering platform with interactive frontend, MySQL database, and integrated Razorpay payment gateway for seamless order management.",
      skills: ["React.js", "MySQL", "Razorpay", "Payment Gateway"],
      icon: <Globe className="w-8 h-8" />,
      gradient: "from-orange-400 via-red-400 to-pink-400",
      liveDemo: "https://slice-hub-pizza.vercel.app/",
      github: "https://github.com/uzma-a/SliceHub",
      category: "Full Stack"
    },
    {
      id: 8,
      name: "FitHub",
      description: "Modern gym website built with MERN stack featuring membership plans, user registration, appointment booking system, and responsive TailwindCSS design.",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "TailwindCSS"],
      icon: <Dumbbell className="w-8 h-8" />,
      gradient: "from-cyan-400 via-blue-400 to-indigo-400",
      liveDemo: "https://fithub-new-frontend.onrender.com/",
      github: "https://github.com/uzma-a/fithubnewwebsite",
      category: "Full Stack"
    },
    {
      id: 9,
      name: "Eventify",
      description: "Event management platform with secure JWT authentication, OTP verification, ticket booking system, and full-stack MERN implementation.",
      skills: ["MongoDB", "Express.js", "React.js", "JWT Auth", "TailwindCSS"],
      icon: <Users className="w-8 h-8" />,
      gradient: "from-green-400 via-blue-400 to-purple-400",
      liveDemo: "https://eventify-frontend-hyvw.onrender.com/",
      github: "https://github.com/uzma-a/eventify-repo",
      category: "Full Stack"
    }
  ];

  const categories = ['All', 'Machine Learning', 'Full Stack', 'Frontend', 'AI Application'];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Machine Learning': return 'bg-gradient-to-r from-cyan-500 to-blue-500';
      case 'Full Stack': return 'bg-gradient-to-r from-emerald-500 to-teal-500';
      case 'Frontend': return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'AI Application': return 'bg-gradient-to-r from-green-500 to-emerald-500';
      default: return 'bg-gradient-to-r from-gray-500 to-slate-500';
    }
  };

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-4 md:p-8 relative overflow-hidden">

      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-4">
            Featured Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building intelligent, scalable applications from ML models to full-stack platforms
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/50 scale-105'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className={`
                relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 h-full
                transition-all duration-500 hover:border-white/20
                ${hoveredProject === project.id ? 'transform -translate-y-2 shadow-2xl shadow-cyan-500/20' : ''}
              `}>
                {/* Category Badge */}
                <div className={`
                  absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white
                  ${getCategoryColor(project.category)}
                `}>
                  {project.category}
                </div>

                {/* Project Icon */}
                <div className={`
                  w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} 
                  flex items-center justify-center text-white mb-6
                  transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3
                `}>
                  {project.icon}
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {project.name}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
                    {project.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/5 text-gray-300 rounded-lg text-xs font-medium
                                 border border-white/10 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-600 
                               text-white rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/50
                               transition-all duration-300 flex-1 justify-center group/btn"
                    >
                      <ExternalLink className="w-4 h-4 group-hover/btn:rotate-45 transition-transform duration-300" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 text-white rounded-xl 
                               font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`
                  absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 
                  transition-opacity duration-300 pointer-events-none
                  ${hoveredProject === project.id ? 'opacity-5' : ''}
                `}></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <a
            href="https://github.com/uzma-a?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 
                     border border-white/10 rounded-2xl text-white font-bold text-lg
                     hover:border-white/30 hover:shadow-xl hover:shadow-white/10 transition-all duration-300 hover:scale-105"
          >
            <Github className="w-6 h-6" />
            <span>View More on GitHub</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          <a
            href="https://www.kaggle.com/uzmaaasiya"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600
                     rounded-2xl text-white font-bold text-lg shadow-lg shadow-cyan-500/50
                     hover:shadow-xl hover:shadow-cyan-500/70 transition-all duration-300 hover:scale-105"
          >
            <Trophy className="w-6 h-6" />
            <span>ML Projects on Kaggle</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Stats Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-500/30 transition-all duration-300">
            <h3 className="text-4xl font-black text-cyan-400 mb-2">7+</h3>
            <p className="text-gray-400 font-medium">Projects Completed</p>
          </div>
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-purple-500/30 transition-all duration-300">
            <h3 className="text-4xl font-black text-purple-400 mb-2">4</h3>
            <p className="text-gray-400 font-medium">Categories</p>
          </div>
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-pink-500/30 transition-all duration-300">
            <h3 className="text-4xl font-black text-pink-400 mb-2">100%</h3>
            <p className="text-gray-400 font-medium">Production Ready</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;