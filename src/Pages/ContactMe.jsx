import React, { useState } from 'react';
import { Mail, User, MessageCircle, Send, CheckCircle } from 'lucide-react';

const ContactMe = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    setIsLoading(true);
    
    const nameEl = document.querySelector('input[name="name"]');
    const emailEl = document.querySelector('input[name="email"]');
    const messageEl = document.querySelector('textarea[name="message"]');
    
    const formData = {
      name: nameEl.value,
      email: emailEl.value,
      message: messageEl.value,
      access_key: "f16290a6-360e-4d5f-ba52-353f4a5f45ad"
    };

    const json = JSON.stringify(formData);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          nameEl.value = '';
          emailEl.value = '';
          messageEl.value = '';
        }, 3000);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex  justify-center p-4 relative overflow-hidden'>
      
      {/* Simple Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Subtle Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-xl">
        
        {/* Header */}
        <div className="text-center mb-2">
          <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-2">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-400">
            Have a project in mind? Let's talk about it.
          </p>
        </div>

        {/* Form Container */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-6 shadow-2xl">
          {!isSubmitted ? (
            <div className="space-y-3">
              
              {/* Name Field */}
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-300 mb-2">Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full h-14 bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    required
                    className="w-full h-14 bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
                <div className="relative">
                  <MessageCircle className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Tell me about your project..."
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 pt-4 pb-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all duration-300 resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={onSubmit}
                disabled={isLoading}
                className="w-full h-14 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-lg font-bold rounded-xl shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/70 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          ) : (
            /* Success Message */
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-3">Message Sent!</h2>
              <p className="text-gray-400 text-lg">
                Thank you for reaching out. I'll get back to you soon!
              </p>
            </div>
          )}
        </div>

        
      </div>
    </div>
  );
};

export default ContactMe;