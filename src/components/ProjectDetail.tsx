import { motion } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';
import { Project } from '../constants';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] bg-bg overflow-y-auto"
    >
      {/* Header */}
      <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-8 md:px-12 bg-bg/80 backdrop-blur-xl">
        <div className="text-[11px] uppercase tracking-[0.3em] font-bold">Project Detail</div>
        <button 
          onClick={onClose}
          className="p-2 hover:bg-accent/10 rounded-full transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      {/* Hero */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          src={project.coverImage} 
          alt={project.title}
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.h1 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-8xl font-light tracking-tight mb-4 uppercase"
          >
            {project.title}
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-[11px] uppercase tracking-[0.4em] text-muted font-bold"
          >
            {project.category}
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
          <div className="lg:col-span-1">
            <h3 className="text-[11px] uppercase tracking-[0.3em] font-semibold mb-8 text-muted">Concept</h3>
            <p className="text-xl font-serif italic text-muted leading-snug">
              {project.description}
            </p>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-[11px] uppercase tracking-[0.3em] font-semibold mb-8 text-muted">Process</h3>
            <p className="text-muted leading-relaxed text-lg uppercase text-[12px] tracking-wide">
              {project.process}
            </p>
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-32 space-y-12">
          {project.gallery.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-[#111] to-[#222] border border-border"
            >
              <img 
                src={img} 
                alt={`${project.title} gallery ${idx}`} 
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>

        {/* Next Project CTA */}
        <div className="mt-48 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted mb-8">Next Project</p>
          <button className="group flex items-center gap-4 mx-auto text-4xl md:text-6xl font-light tracking-tight hover:opacity-50 transition-opacity uppercase">
            Aether OS <ArrowRight size={48} className="group-hover:translate-x-4 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
