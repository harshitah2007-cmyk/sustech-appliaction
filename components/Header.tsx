
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-purple-100/20 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 lavender-gradient rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-purple-200">
            🌿
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:block text-slate-800 serif italic">
            Harshita <span className="text-lavender font-sans not-italic">2026</span>
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-lavender transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#projects"
            className="lavender-gradient text-white px-7 py-3 rounded-2xl text-sm font-bold shadow-lg shadow-purple-100 hover:shadow-purple-200 hover:-translate-y-0.5 transition-all"
          >
            Sustech 2026
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
