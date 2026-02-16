
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Research from './components/Research';
import Publications from './components/Publications';
import Education from './components/Education';
import ChatAssistant from './components/ChatAssistant';
import { PERSONAL_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Research />
        <Publications />
        <Education />
      </main>
      
      <footer className="py-12 bg-white border-t border-purple-100 text-center">
        <div className="mb-6 flex justify-center space-x-6">
          <span className="w-10 h-10 rounded-full bg-lavender-soft flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer shadow-sm">🏸</span>
          <span className="w-10 h-10 rounded-full bg-lavender-soft flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer shadow-sm">🎨</span>
          <span className="w-10 h-10 rounded-full bg-lavender-soft flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer shadow-sm">💻</span>
        </div>
        <p className="text-slate-500 text-sm font-medium tracking-wide">
          &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. SUSTech Engineering Applicant Portal.
        </p>
        <p className="text-purple-300 text-[10px] mt-2 uppercase tracking-widest font-bold">
          Floral Lavender Theme
        </p>
      </footer>

      <ChatAssistant />
    </div>
  );
};

export default App;
