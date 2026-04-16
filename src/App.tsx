import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGrid, { ProjectFilter } from './components/ProjectGrid';
import About from './components/About';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import { Project } from './constants';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<ProjectFilter>('All');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate initial loading for cinematic feel
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (section: string) => {
    if (section === 'home') {
      setFilter('All');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (section === 'uiux') {
      setFilter('UI');
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'aiart') {
      setFilter('AI');
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'projects') {
      setFilter('All');
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 bg-bg flex items-center justify-center">
        <div className="w-12 h-[1px] bg-accent animate-pulse" />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-bg text-ink selection:bg-accent selection:text-bg overflow-x-hidden flex flex-col">
      {/* Grain Overlay */}
      <div className="grain" />
      <div className="vignette" />

      <Navbar onNavigate={handleNavigate} />
      
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-0 px-12 pb-12 pt-32">
        <Hero />
        <div className="lg:pl-12 flex flex-col">
          <ProjectGrid 
            onProjectClick={setSelectedProject} 
            filter={filter}
            setFilter={setFilter}
          />
        </div>
      </main>

      <About />
      <Footer />

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
