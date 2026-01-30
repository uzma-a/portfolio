import React, { useState, useEffect } from 'react';
import { BookOpen, Code, Database, Brain, Sparkles } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { icon: '🔥', title: 'PyTorch' },
    { icon: '🐍', title: 'Python' },
    { icon: '⚛️', title: 'React' },
    { icon: '📊', title: 'Kaggle' },
    { icon: '🎨', title: 'Tailwind' },
    { icon: '🤖', title: 'ML Models' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center p-4 relative overflow-hidden">

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

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl w-full">
        <div
          className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-8 md:p-10 transition-all duration-1000 hover:border-white/20 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
        >

          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-cyan-400" />
            </div>
            <h2 className="text-4xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              About Me
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-6 text-gray-300 leading-relaxed text-base md:text-md">
            <p>
              I am a <span className="text-cyan-400 font-semibold">Machine Learning practitioner</span> and{" "}
              <span className="text-purple-400 font-semibold">Full-Stack Developer</span> with hands-on experience building data-driven models and end-to-end web applications.
            </p>

            <p>
              I am currently pursuing a{" "}
              <span className="text-yellow-400 font-semibold">
                Bachelor of Computer Applications (BCA)
              </span>{" "}
              from{" "}
              <span className="text-yellow-400 font-semibold">
                Manipal University Jaipur
              </span>, where I am strengthening my foundation in computer science, programming, and problem-solving.
            </p>

            <p>
              On the Machine Learning side, I work with{" "}
              <span className="text-cyan-400 font-semibold">
                PyTorch, Python, and real-world Kaggle datasets
              </span>, focusing on the complete ML workflow — data preprocessing, feature handling, model training, evaluation, and improvement. I emphasize clean, reproducible pipelines and practical implementation over theory alone.
            </p>

            <p>
              As a Full-Stack Developer, I have built interactive and scalable applications using{" "}
              <span className="text-purple-400 font-semibold">
                React, Python, and modern UI frameworks
              </span>, with a strong focus on performance, user experience, and clean architecture.
            </p>

            <p>
              I also practice{" "}
              <span className="text-pink-400 font-semibold">
                prompt engineering
              </span>{" "}
              to design effective AI interactions and integrate intelligent features into applications.
            </p>

            <p className="text-gray-400 italic pt-2">
              I enjoy bridging Machine Learning and Full-Stack development to create intelligent, real-world products, and I am continuously building portfolio-ready projects to deepen my skills and practical understanding.
            </p>
          </div>





        </div>
      </div>

    </div>
  );
};

export default About;