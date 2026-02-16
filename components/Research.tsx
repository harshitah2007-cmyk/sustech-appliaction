
import React from 'react';
import { PROJECTS } from '../constants';

const Research: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-lavender font-bold tracking-widest uppercase text-sm mb-3">Innovation</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-4 serif">Engineering & Design</h3>
          <p className="text-slate-500 max-w-2xl mx-auto">
            A showcase of my journey from self-taught coding to functional device prototyping.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-purple-50 hover:shadow-2xl hover:shadow-purple-100 transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent opacity-60"></div>
                {project.id === 'p1' && (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-black uppercase text-purple-600 shadow-sm">
                    Featured Project
                  </div>
                )}
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-purple-50 text-[10px] font-bold uppercase tracking-wider text-purple-600 rounded-lg border border-purple-100">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-lavender transition-colors serif">{project.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="mt-auto">
                  <button className="text-lavender text-sm font-bold flex items-center hover:translate-x-2 transition-transform">
                    View My Process <span className="ml-2">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
