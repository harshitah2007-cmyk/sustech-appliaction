
import React from 'react';
import { ACHIEVEMENTS } from '../constants';

const Publications: React.FC = () => {
  return (
    <section id="achievements" className="py-24 bg-purple-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h3 className="text-4xl font-bold text-slate-900 mb-2">Awards & Participation</h3>
          <p className="text-slate-500 italic">Discipline on the court and innovation in the lab.</p>
        </div>

        <div className="space-y-6">
          {ACHIEVEMENTS.map((ach) => (
            <div key={ach.id} className="bg-white p-8 rounded-3xl shadow-sm border border-purple-100 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-100/50 transition-all group flex items-start space-x-6">
              <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center shrink-0">
                 <span className="text-2xl">{ach.id === 'a1' ? '🏸' : '🏆'}</span>
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-1">
                  <span className="text-lavender font-bold text-sm bg-purple-50 px-3 py-1 rounded-full">
                    {ach.year}
                  </span>
                  <span className="text-xs text-slate-400 font-mono uppercase">
                    {ach.journal}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-lavender transition-colors">
                  {ach.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {ach.authors}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
