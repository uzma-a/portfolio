import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Code, Sparkles, Briefcase, Award, BookOpen } from 'lucide-react';
import { SiKaggle } from "react-icons/si";


const Main = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    'Machine Learning Engineer (PyTorch)',
    'Full Stack Developer (React + Python)',
    'Kaggle ML Practitioner',
    'UI-Focused Problem Solver'
  ];

  // Typewriter effect
  useEffect(() => {
    const currentText = roles[currentRole];
    let index = 0;

    const typeInterval = setInterval(() => {
      if (index < currentText.length) {
        setDisplayText(currentText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);

        setTimeout(() => {
          setIsTyping(true);
          setCurrentRole((prev) => (prev + 1) % roles.length);
          setDisplayText('');
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentRole]);

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/uzmaaasia",
      label: "GitHub",
      color: "hover:bg-gray-700"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/uzma-aasiya-32189a367/",
      label: "LinkedIn",
      color: "hover:bg-blue-600"
    },
    {
      icon: <SiKaggle className="w-5 h-5" />,
      href: "https://www.kaggle.com/uzmaaasiya",
      label: "Kaggle",
      color: "hover:bg-blue-900"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:uzmaaasia444@gmail.com",
      label: "Email",
      color: "hover:bg-red-500"
    }
  ];

  const skills = [
    { icon: <Code className="w-5 h-5" />, title: "ML & PyTorch", desc: "Deep Learning Models" },
    { icon: <Briefcase className="w-5 h-5" />, title: "Full Stack", desc: "React + Python" },
    { icon: <Award className="w-5 h-5" />, title: "Kaggle", desc: "Data Science" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      
      {/* Hero Section */}
      <div className="min-h-screen flex  justify-center p-4 relative overflow-hidden">
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Main Content Card */}
        <div className="relative z-10 max-w-8xl w-full">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-8 md:p-8 transition-all duration-500 hover:border-white/20">
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              
              {/* Left Side - Text Content */}
              <div className="text-center md:text-left md:w-1/2 space-y-8">
                
                {/* Greeting */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <Sparkles className="w-6 h-4 text-yellow-400 animate-pulse" />
                    <span className="text-lg text-gray-400 font-medium">Hello, I'm</span>
                  </div>

                  <h1 className="text-4xl md:text-6xl font-black leading-tight">
                    <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                      Uzma Aasiya
                    </span>
                  </h1>
                </div>

                {/* Role with Typewriter */}
                <div className="space-y-4">
                  <p className="text-xl text-gray-400 font-medium">
                    A Creative and Passionate
                  </p>
                  <div className="text-2xl md:text-2xl font-bold text-cyan-400 h-8 flex items-center justify-center md:justify-start">
                    {displayText}
                    {isTyping && <span className="animate-pulse ml-1">|</span>}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-base md:text-md max-w-2xl leading-relaxed">
                  I build intelligent, data-driven applications using
                  <span className="text-cyan-400 font-semibold"> PyTorch, Machine Learning, and Python</span>,
                  combined with modern web technologies like
                  <span className="text-purple-400 font-semibold"> React & Tailwind</span>.
                  Passionate about real-world datasets, clean code, and production-ready projects.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <button
                    onClick={scrollToPortfolio}
                    className="group relative overflow-hidden px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/70 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 justify-center"
                  >
                    <span className="relative z-10">Explore My Work</span>
                    <ArrowDown className="w-5 h-4 group-hover:translate-y-1 transition-transform duration-300" />
                  </button>

                  <a
                    href="mailto:uzmaaasia444@gmail.com"
                    className="px-8 py-4 rounded-xl border-2 border-gray-700 text-white font-bold hover:bg-white/5 hover:border-gray-600 transition-all duration-300 hover:scale-105 flex items-center gap-2 justify-center"
                  >
                    <Mail className="w-5 h-5" />
                    Get In Touch
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 justify-center md:justify-start pt-2">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className={`w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:border-white/20 ${link.color}`}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Side - Skills Cards */}
              <div className="md:w-1/2 flex flex-col gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:bg-white/10"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {skill.title}
                        </h3>
                        <p className="text-gray-500 text-sm">{skill.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>

      </div>

  
    </div>
  );
};

export default Main;