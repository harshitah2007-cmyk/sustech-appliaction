
import React from 'react';
import { EDUCATION_HISTORY } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-white/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-lavender font-bold uppercase tracking-widest text-sm mb-2">Academic Journey</h2>
          <h3 className="text-4xl font-bold text-slate-900 serif">Education Excellence</h3>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-1 bg-purple-100 transform sm:-translate-x-1/2 rounded-full"></div>
          
          <div className="space-y-12">
            {EDUCATION_HISTORY.map((edu, index) => (
              <div key={index} className={`relative flex items-center justify-between flex-col sm:flex-row ${index % 2 !== 0 ? 'sm:flex-row-reverse' : ''}`}>
                {/* Timeline Dot */}
                <div className="absolute left-0 sm:left-1/2 w-6 h-6 bg-lavender border-4 border-white rounded-full transform -translate-x-1/2 z-10 hidden sm:block shadow-md"></div>
                
                {/* Content Box */}
                <div className="w-full sm:w-[45%] bg-white p-8 rounded-[2rem] border border-purple-50 shadow-xl shadow-purple-100/20 ml-6 sm:ml-0 hover:scale-[1.02] transition-transform">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lavender font-black text-xs uppercase tracking-tighter bg-purple-50 px-3 py-1 rounded-full">{edu.period}</span>
                    {edu.degree.includes('10th') && <span className="text-green-600 font-bold text-xs bg-green-50 px-2 py-1 rounded-md">90% Achieved</span>}
                    {edu.degree.includes('12th') && <span className="text-blue-600 font-bold text-xs bg-blue-50 px-2 py-1 rounded-md">Expected 85%+</span>}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1 serif">{edu.degree}</h4>
                  <p className="text-purple-600 font-semibold text-sm mb-4 italic">{edu.institution}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{edu.details}</p>
                </div>
                
                {/* Spacer */}
                <div className="hidden sm:block w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
