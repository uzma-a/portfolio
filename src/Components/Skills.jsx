import React, { useState, useEffect } from 'react';
import { Code, Palette, Server, Database, Figma, GitBranch, Wrench, Rocket, Brain } from 'lucide-react';


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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillsData = [
    {
      title: 'Machine Learning',
      icon: <Brain className="w-6 h-6" />,
      color: 'cyan',
      skills: ['PyTorch', 'Python', 'NumPy', 'Pandas', 'Scikit-learn', 'Kaggle Datasets']
    },
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      color: 'purple',
      skills: ['JavaScript', 'Python']
    },
    {
      title: 'Frontend Development',
      icon: <Palette className="w-6 h-6" />,
      color: 'pink',
      skills: ['React.js', 'Next.js', 'Redux', 'HTML5', 'CSS3', 'JavaScript', 'TailwindCSS', 'Bootstrap']
    },
    {
      title: 'Backend Development',
      icon: <Server className="w-6 h-6" />,
      color: 'green',
      skills: ['Node.js', 'Express.js', 'Django', 'Django REST Framework', 'Firebase Functions']
    },
    {
      title: 'Database',
      icon: <Database className="w-6 h-6" />,
      color: 'orange',
      skills: ['MongoDB', 'MySQL', 'Firebase Firestore']
    },
    {
      title: 'UI/UX Design',
      icon: <Figma className="w-6 h-6" />,
      color: 'blue',
      skills: ['Figma', 'Responsive Design', 'User-Centered Design']
    },
    {
      title: 'Version Control',
      icon: <GitBranch className="w-6 h-6" />,
      color: 'teal',
      skills: ['Git', 'GitHub']
    },
    {
      title: 'Tools & APIs',
      icon: <Wrench className="w-6 h-6" />,
      color: 'indigo',
      skills: ['REST APIs', 'Postman', 'Socket.io']
    },
    {
      title: 'Deployment & Hosting',
      icon: <Rocket className="w-6 h-6" />,
      color: 'violet',
      skills: ['Netlify', 'Vercel', 'Render']
    }
  ];

  const colorClasses = {
    cyan: 'text-cyan-400 border-cyan-500/30 hover:border-cyan-500/50 hover:bg-cyan-500/5',
    purple: 'text-purple-400 border-purple-500/30 hover:border-purple-500/50 hover:bg-purple-500/5',
    pink: 'text-pink-400 border-pink-500/30 hover:border-pink-500/50 hover:bg-pink-500/5',
    green: 'text-green-400 border-green-500/30 hover:border-green-500/50 hover:bg-green-500/5',
    orange: 'text-orange-400 border-orange-500/30 hover:border-orange-500/50 hover:bg-orange-500/5',
    blue: 'text-blue-400 border-blue-500/30 hover:border-blue-500/50 hover:bg-blue-500/5',
    teal: 'text-teal-400 border-teal-500/30 hover:border-teal-500/50 hover:bg-teal-500/5',
    indigo: 'text-indigo-400 border-indigo-500/30 hover:border-indigo-500/50 hover:bg-indigo-500/5',
    violet: 'text-violet-400 border-violet-500/30 hover:border-violet-500/50 hover:bg-violet-500/5'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl w-full py-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent, scalable applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:border-white/20 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-white/5 border ${colorClasses[category.color].split(' ')[1]} flex items-center justify-center ${colorClasses[category.color].split(' ')[0]}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1.5 rounded-lg bg-white/5 border text-sm font-medium transition-all duration-300 ${colorClasses[category.color]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Footer */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-500/30 transition-all duration-300">
            <div className="text-4xl font-black text-cyan-400 mb-2">9+</div>
            <div className="text-gray-400 font-medium">Skill Categories</div>
          </div>
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-purple-500/30 transition-all duration-300">
            <div className="text-4xl font-black text-purple-400 mb-2">35+</div>
            <div className="text-gray-400 font-medium">Technologies</div>
          </div>
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-pink-500/30 transition-all duration-300">
            <div className="text-4xl font-black text-pink-400 mb-2">∞</div>
            <div className="text-gray-400 font-medium">Learning & Growing</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
