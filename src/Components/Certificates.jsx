import React from 'react'

const Certificates = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-4 md:p-8 relative overflow-hidden">

      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 -right-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl md:text-6xl text-center font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-16">
          Certificates
        </h1>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Certificate 1 */}
          <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl hover:border-cyan-400/40 transition-all duration-300">
            <div className="absolute inset-0 rounded-2xl bg-cyan-500/10 opacity-0 group-hover:opacity-100 blur-xl transition"></div>

            <h2 className="text-xl font-bold text-white mb-2">
              Agents Intensive Capstone Project
            </h2>

            <p className="text-gray-400 mb-3">
              Kaggle · Issued Dec 2025
            </p>

            <p className="text-gray-300 leading-relaxed mb-4">
              Completed a 5-Day AI Agents Intensive Program focused on building
              intelligent agents using <span className="text-cyan-400 font-semibold">Google Agent Development Kit (ADK)</span>.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-sm rounded-full bg-cyan-400/10 text-cyan-300">
                AI Agents
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-purple-400/10 text-purple-300">
                Google ADK
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-pink-400/10 text-pink-300">
                Capstone Project
              </span>
            </div>
          </div>

          {/* Certificate 2 */}
          <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl hover:border-purple-400/40 transition-all duration-300">
            <div className="absolute inset-0 rounded-2xl bg-purple-500/10 opacity-0 group-hover:opacity-100 blur-xl transition"></div>

            <h2 className="text-xl font-bold text-white mb-2">
              Startup School: Prompt to Prototype
            </h2>

            <p className="text-gray-400 mb-3">
              Google for Startups · Issued Dec 2025
            </p>

            <p className="text-gray-300 leading-relaxed mb-4">
              Learned how to transform ideas into functional AI prototypes using
              <span className="text-purple-400 font-semibold"> Prompt Engineering</span> and
              <span className="text-cyan-400 font-semibold"> Generative AI Studio</span>.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-sm rounded-full bg-purple-400/10 text-purple-300">
                Prompt Engineering
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-cyan-400/10 text-cyan-300">
                Generative AI
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-pink-400/10 text-pink-300">
                Prototyping
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Certificates
