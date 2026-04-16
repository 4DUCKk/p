import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project, PROJECTS } from '../constants';

export type ProjectFilter = 'All' | 'UI' | 'AI' | 'Experimental';

interface ProjectGridProps {
  onProjectClick: (project: Project) => void;
  filter: ProjectFilter;
  setFilter: (filter: ProjectFilter) => void;
}

export default function ProjectGrid({ onProjectClick, filter, setFilter }: ProjectGridProps) {
  const filteredProjects = PROJECTS.filter(p => filter === 'All' || p.category === filter);

  return (
    <section id="projects" className="py-0">
      {/* Filter Bar */}
      <div className="flex items-center gap-6 mb-10 mt-2 text-[11px] uppercase tracking-[0.1em] font-medium">
        {['All', 'UI', 'AI Art', 'Experimental'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter((cat === 'AI Art' ? 'AI' : cat) as ProjectFilter)}
            className={`pb-1 transition-colors border-b cursor-pointer ${
              (filter === 'All' && cat === 'All') || 
              (filter === 'UI' && cat === 'UI') || 
              (filter === 'AI' && cat === 'AI Art') || 
              (filter === 'Experimental' && cat === 'Experimental')
              ? 'text-ink border-ink' 
              : 'text-muted border-transparent hover:text-ink'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer flex flex-col gap-3"
              onClick={() => onProjectClick(project)}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-[#111] to-[#222] border border-border">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute bottom-4 left-4 text-[10px] uppercase tracking-widest text-white/40">
                  0{idx + 1} / {project.category}
                </div>
              </div>
              
              <h3 className="text-[14px] font-medium tracking-tight uppercase">{project.title}</h3>
              <p className="text-[11px] text-muted leading-[1.4] line-clamp-2 uppercase italic">{project.description}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
