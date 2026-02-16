
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-lavender font-bold tracking-widest uppercase text-sm mb-3">Sustech Application</h2>
            <h3 className="text-4xl font-bold mb-6 serif italic">Let's Connect</h3>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Open to research collaborations, undergraduate opportunities, and discussions on how structural art meets robotic engineering.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-5 group">
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center group-hover:bg-purple-600 transition-all">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-purple-400 font-bold uppercase tracking-widest mb-1">Direct Contact</p>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg font-medium hover:text-lavender transition-colors">{PERSONAL_INFO.email}</a>
                </div>
              </div>

              <div className="flex items-center space-x-5 group">
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center group-hover:bg-purple-600 transition-all">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-purple-400 font-bold uppercase tracking-widest mb-1">Status</p>
                  <p className="text-lg font-medium">Ready for Enrollment 2024</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-10 rounded-[3rem] border border-white/10 shadow-2xl">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm text-slate-400 font-bold uppercase tracking-tighter ml-1">Full Name</label>
                <input type="text" className="w-full bg-slate-800/50 border border-white/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-purple-500 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-slate-400 font-bold uppercase tracking-tighter ml-1">Email Address</label>
                <input type="email" className="w-full bg-slate-800/50 border border-white/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-purple-500 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-slate-400 font-bold uppercase tracking-tighter ml-1">Message for Admission</label>
                <textarea rows={4} className="w-full bg-slate-800/50 border border-white/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-purple-500 outline-none transition-all resize-none"></textarea>
              </div>
              <button className="w-full py-5 lavender-gradient rounded-2xl font-black text-xl shadow-xl shadow-purple-500/20 hover:shadow-purple-500/40 hover:-translate-y-1 transition-all uppercase tracking-widest">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="mt-24 pt-10 border-t border-white/5 text-center">
        <div className="mb-6 flex justify-center space-x-6">
          <span className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">🏸</span>
          <span className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">🎨</span>
          <span className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">💻</span>
        </div>
        <p className="text-slate-500 text-sm font-medium tracking-wide">&copy; {new Date().getFullYear()} SUSTech Engineering Applicant Portal. Floral Lavender Theme.</p>
      </footer>
    </section>
  );
};

export default Contact;
