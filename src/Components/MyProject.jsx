import React, { useState } from 'react';
import { ExternalLink, Github, Code, Zap, Globe, Music, Dumbbell, Users, Bot, Monitor } from 'lucide-react';

const ProjectsShowcase = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "My Portfolio",
      title: "Personal Portfolio Website",
      description: "A clean and responsive personal portfolio showcasing web development skills with smooth animations and modern design.",
      skills: ["React.js", "TailwindCSS", "JavaScript", "AOS", "Responsive Design"],
      icon: <Globe className="w-8 h-8" />,
      gradient: "from-yellow-400 via-orange-400 to-red-400",
      liveDemo: "https://uzma-portfolio-website.vercel.app/",
      github: "https://github.com/uzma-a/portfolio",
      category: "Frontend"
    },
    {
      id: 2,
      name: "MockMate",
      title: "AI-Powered Mock Interview Platform",
      description: "AI-driven platform for technical interview practice with real-time voice interaction and intelligent feedback system.",
      skills: ["Python", "Django", "Google GenAI", "Gemini 2.5 Flash", "pyttsx3", "React.js", "Bootstrap", "Assembly API"],
      icon: <Bot className="w-8 h-8" />,
      gradient: "from-blue-400 via-purple-400 to-pink-400",
      liveDemo: "https://mockmate-interview.vercel.app/",
      github: "https://github.com/uzma-a/MockMate",
      category: "Full Stack"
    },
  {
      id: 3,
      name: "Study Buddy",
      title: "Personal AI-powered notes & quiz generator.",
      description: "Study Buddy is your personal AI-powered notes & quiz generator. Create summaries, quizzes, and learn smarter every day.",
      skills: ["Gemini API", "Gemini 2.5 Flash", "Clerk", "API Integration" ,"React.js", "JavaScript", "jsPDF", "React Context API"],
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-gray-400 via-blue-400 to-purple-400",
      liveDemo: "https://ai-studybuddy.vercel.app/",
      github: "https://github.com/uzma-a/Study-Buddy",
      category: "Frontend"
    },
     {
      id: 4,
      name: "Slice-Hub Pizza",
      title: "Full-Stack Pizza Ordering App",
      description: "A full-stack pizza ordering website featuring an interactive frontend and a robust backend for managing orders efficiently. update it for my portfolio",
      skills: ["JavaScript", "MySQL ", "Payment gateway", "Razorpay Integration" ,"React.js", "React Toastify"],
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-gray-400 via-blue-400 to-purple-400",
      liveDemo: "https://slice-hub-pizza.vercel.app/",
      github: "https://github.com/uzma-a/SliceHub",
      category: "Full Stack"
    },
    {
      id: 5,
      name: "Musicify",
      title: "Music Player Application",
      description: "Sleek and responsive music player with categorized playlists, global audio controls, and smooth user experience.",
      skills: ["React.js", "CSS3", "JavaScript", "ChatGPT", "Responsive Design"],
      icon: <Music className="w-8 h-8" />,
      gradient: "from-red-400 via-pink-400 to-blue-400",
      liveDemo: "https://music-player-umber-eight-54.vercel.app/",
      github: "https://github.com/uzma-a/Music_Player",
      category: "Frontend"
    },
    {
      id: 6,
      name: "FitHub",
      title: "Modern Responsive Gym Website",
      description: "Contemporary gym website with membership plans, registration functionality, and appointment booking system.",
      skills: ["React.js", "TailwindCSS", "Node.js", "Express.js", "MongoDB", "Claude ai"],
      icon: <Dumbbell className="w-8 h-8" />,
      gradient: "from-cyan-400 via-blue-400 to-indigo-400",
      liveDemo: "https://fithub-new-frontend.onrender.com/",
      github: "https://github.com/uzma-a/fithubnewwebsite",
      category: "Full Stack"
    },
      {
      id: 7,
      name: "Eventify",
      title: "Event Management Platform",
      description: "Full-stack platform for seamless event organization with secure authentication and ticket booking system.",
      skills: ["MERN Stack", "JWT Auth", "OTP Verification", "TailwindCSS", "MongoDB"],
      icon: <Users className="w-8 h-8" />,
      gradient: "from-green-400 via-blue-400 to-purple-400",
      liveDemo: "https://eventify-frontend-hyvw.onrender.com/",
      github: "https://github.com/uzma-a/eventify-repo",
      category: "Full Stack"
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Full Stack': return 'bg-gradient-to-r from-emerald-500 to-teal-500';
      case 'Frontend': return 'bg-gradient-to-r from-blue-500 to-purple-500';
      default: return 'bg-gradient-to-r from-gray-500 to-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 md:p-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          My Projects
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
          Explore my journey through innovative web development projects
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Project Card */}
            <div className={`
              relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 h-full
              border border-slate-700/50 transition-all duration-500
              ${hoveredProject === project.id ? 'transform -translate-y-2 shadow-2xl shadow-blue-500/20' : ''}
            `}>
              {/* Category Badge */}
              <div className={`
                absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white
                ${getCategoryColor(project.category)}
              `}>
                {project.category}
              </div>

              {/* Project Icon */}
              <div className={`
                w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} 
                flex items-center justify-center text-white mb-6
                transition-transform duration-300 group-hover:scale-110
              `}>
                {project.icon}
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-slate-300 font-medium text-sm">{project.title}</p>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Skills */}
                <div className="space-y-2">
                  <h4 className="text-white font-semibold text-sm">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs font-medium
                                 border border-slate-600/50 hover:border-blue-400/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 
                             text-white rounded-lg font-medium text-sm hover:from-blue-600 hover:to-purple-600 
                             transition-all duration-300 flex-1 justify-center"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg 
                             font-medium text-sm hover:bg-slate-600 transition-all duration-300"
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

      {/* Footer Stats */}
      <div className="mt-20 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-3xl font-bold text-white mb-2">7+</h3>
            <p className="text-slate-300">Projects Completed</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-3xl font-bold text-white mb-2">15+</h3>
            <p className="text-slate-300">Technologies Used</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-3xl font-bold text-white mb-2">100%</h3>
            <p className="text-slate-300">Responsive Design</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;