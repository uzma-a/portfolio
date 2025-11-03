import React, { useState, useEffect } from 'react';

const skillsData = [
  {
    title: 'Programming Languages',
    color: 'from-purple-500 via-indigo-500 to-blue-500',
    icon: '💻',
    skills: ['JavaScript', 'Python'],
    description: 'Core programming languages for versatile development',
    level: 90
  },
  {
    title: 'Frontend',
    color: 'from-pink-500 via-rose-500 to-red-500',
    icon: '🎨',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TailwindCSS', 'Bootstrap', 'React.js', 'Redux', 'Next.js'],
    description: 'Modern frontend technologies for stunning user interfaces',
    level: 95
  },
  {
    title: 'Backend',
    color: 'from-green-500 via-emerald-500 to-teal-500',
    icon: '🛠️',
    skills: ['Node.js', 'Express.js', 'Django', 'Django REST Framework', 'Firebase Functions'],
    description: 'Server-side technologies for robust applications',
    level: 85
  },
  {
    title: 'Database',
    color: 'from-yellow-500 via-orange-500 to-red-500',
    icon: '🗄️',
    skills: ['MongoDB', 'MySQL' ,'Firebase Firestore'],
    description: 'Database solutions for scalable data management',
    level: 80
  },
  {
    title: 'UI/UX Design',
    color: 'from-cyan-500 via-blue-500 to-indigo-500',
    icon: '🎯',
    skills: ['Figma', 'Responsive Design'],
    description: 'Design thinking for exceptional user experiences',
    level: 88
  },
  {
    title: 'Version Control',
    color: 'from-teal-500 via-cyan-500 to-sky-500',
    icon: '🔧',
    skills: ['Git', 'GitHub'],
    description: 'Code versioning and collaboration tools',
    level: 92
  },
  {
    title: 'Additional Tools',
    color: 'from-indigo-500 via-purple-500 to-pink-500',
    icon: '🧰',
    skills: ['REST APIs', 'Redux', 'Postman', 'Socket.io'],
    description: 'Essential development and testing utilities',
    level: 87
  },
  {
    title: 'Deployment & Hosting',
    color: 'from-fuchsia-500 via-purple-500 to-violet-500',
    icon: '🚀',
    skills: ['Netlify', 'Vercel', 'Render'],
    description: 'Modern deployment platforms for seamless launches',
    level: 89
  },
  {
    title: 'Artificial Intelligence',
    color: 'from-violet-500 via-fuchsia-500 to-pink-500',
    icon: '🤖',
    skills: ['Claude', 'ChatGPT', 'Cursor AI', 'n8n'],
    description: 'AI-powered tools for enhanced productivity',
    level: 83
  },
];

const Skills = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const ProgressBar = ({ level, isHovered }) => (
    <div className="w-full bg-white/20 rounded-full h-2 mb-4 overflow-hidden">
      <div 
        className={`bg-white rounded-full h-full transition-all duration-1000 ease-out ${
          isHovered ? 'animate-pulse' : ''
        }`}
        style={{ 
          width: isVisible ? `${level}%` : '0%',
          transition: 'width 1.5s ease-out'
        }}
      />
    </div>
  );

  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <FloatingParticles />
      
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]" />
      
      <div className="relative z-10 py-20 px-6 md:px-20">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center animate-spin-slow">
              <span className="text-2xl">⚡</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 tracking-tight">
              Skills
            </h1>
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-spin-slow">
              <span className="text-2xl">🚀</span>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Transforming ideas into digital reality with cutting-edge technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillsData.map((section, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl p-8 shadow-2xl bg-gradient-to-br ${section.color} 
                hover:scale-105 hover:-translate-y-4 transition-all duration-500 ease-out
                border border-white/20 backdrop-blur-sm
                ${hoveredCard === index ? 'shadow-[0_0_40px_rgba(139,92,246,0.3)]' : ''}
                ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}
              `}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Header */}
              <div className="relative z-10 flex items-center gap-4 mb-6">
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  {section.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{section.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{section.description}</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-white/90">Proficiency</span>
                  <span className="text-sm font-bold text-white">{section.level}%</span>
                </div>
                <ProgressBar level={section.level} isHovered={hoveredCard === index} />
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-3">
                {section.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="group/tag relative bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium text-white 
                      border border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300
                      shadow-lg hover:shadow-xl"
                    style={{
                      animationDelay: `${(index * 0.1) + (i * 0.05)}s`
                    }}
                  >
                    <span className="relative z-10">{skill}</span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover/tag:opacity-100 transition-opacity duration-300" />
                  </span>
                ))}
              </div>

              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                <span className="text-xs font-bold text-white">{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Stats */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-cyan-400 mb-2">9+</div>
              <div className="text-gray-300">Skill Categories</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-purple-400 mb-2">30+</div>
              <div className="text-gray-300">Technologies</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-pink-400 mb-2">100%</div>
              <div className="text-gray-300">Passion</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Skills;
