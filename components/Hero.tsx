
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-purple-100 rounded-full blur-3xl opacity-40 -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-indigo-100 rounded-full blur-3xl opacity-40 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-purple-600 bg-purple-50 rounded-full border border-purple-100">
            {PERSONAL_INFO.affiliation}
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6 serif">
            Building the <span className="text-lavender italic block sm:inline">Future</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            I am <span className="font-semibold text-slate-900">{PERSONAL_INFO.name}</span>. A curious mind focused on <span className="text-lavender font-bold">Health AI</span> and <span className="text-lavender font-bold">Space Exploration</span>. Regional Badminton Champion with a 90% academic distinction.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#projects" className="w-full sm:w-auto px-8 py-4 lavender-gradient text-white font-bold rounded-2xl shadow-xl shadow-purple-200 hover:scale-105 transition-transform">
              See Rakshak Bot
            </a>
            <a href="#education" className="w-full sm:w-auto px-8 py-4 bg-white text-purple-700 font-bold rounded-2xl border border-purple-100 shadow-sm hover:bg-purple-50 transition-colors">
              Academic Timeline
            </a>
          </div>
        </div>
        
        <div className="flex-1 mt-16 lg:mt-0 relative">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto">
            <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl animate-float border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" 
                alt="Harshita Hiranyamayi"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Context Icons */}
            <div className="absolute -top-6 -right-6 glass-card px-6 py-3 rounded-2xl shadow-lg hidden sm:flex items-center">
              <span className="text-2xl mr-2">🛰️</span>
              <span className="font-bold text-purple-800">Space Tech</span>
            </div>
            <div className="absolute -bottom-6 -left-6 glass-card px-6 py-3 rounded-2xl shadow-lg hidden sm:flex items-center">
              <span className="text-2xl mr-2">🩺</span>
              <span className="font-bold text-purple-800">Healthcare AI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
