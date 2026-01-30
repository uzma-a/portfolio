import React, { useState, useEffect } from 'react';
import { Code, Zap, Sparkles } from 'lucide-react';

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  
  const loadingTexts = [
    "Initializing...",
    "Loading assets...",
    "Preparing interface...",
    "Almost ready...",
    "Welcome!"
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 1200);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900 flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite alternate`
            }}
          />
        ))}
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      </div>

      {/* Main Loading Container */}
      <div className="relative z-10 text-center">
        {/* Logo/Icon Section */}
        <div className="mb-8">
          <div className="relative inline-block">
            {/* Rotating Ring */}
            <div className="w-24 h-24 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
            
            {/* Center Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
            </div>
            
            {/* Pulsing Rings */}
            <div className="absolute inset-0 w-24 h-24 border-2 border-blue-400/20 rounded-full animate-ping" />
            <div className="absolute inset-0 w-24 h-24 border border-purple-400/20 rounded-full animate-ping" style={{animationDelay: '0.5s'}} />
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Loading
          </h2>
          
          {/* Dynamic Loading Text */}
          <div className="h-8 flex items-center justify-center">
            <p className="text-lg text-slate-300 font-medium transition-all duration-500 ease-in-out">
              {loadingTexts[currentText]}
            </p>
            <div className="ml-2 flex space-x-1">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}} />
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}} />
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-80 max-w-sm mx-auto mb-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-full h-2 overflow-hidden border border-slate-700/50">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-100 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse" />
            </div>
          </div>
          
          {/* Progress Percentage */}
          <div className="mt-2 text-slate-400 text-sm font-medium">
            {progress}%
          </div>
        </div>

        {/* Feature Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center mb-2 backdrop-blur-sm border border-blue-500/30">
              <Zap className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-xs text-slate-400 font-medium">Fast</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-full flex items-center justify-center mb-2 backdrop-blur-sm border border-purple-500/30">
              <Sparkles className="w-6 h-6 text-purple-400" />
            </div>
            <span className="text-xs text-slate-400 font-medium">Modern</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-full flex items-center justify-center mb-2 backdrop-blur-sm border border-pink-500/30">
              <Code className="w-6 h-6 text-pink-400" />
            </div>
            <span className="text-xs text-slate-400 font-medium">Clean</span>
          </div>
        </div>

        {/* Loading Dots Indicator */}
        <div className="flex justify-center space-x-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Loading;