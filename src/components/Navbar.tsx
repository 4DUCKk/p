import { motion } from 'motion/react';

interface NavbarProps {
  onNavigate: (section: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-12 py-8 mix-blend-difference"
    >
      <motion.div 
        whileHover={{ opacity: 0.7 }}
        className="text-[14px] font-bold tracking-[0.15em] uppercase cursor-pointer transition-opacity"
        onClick={() => onNavigate('home')}
      >
        ALEXIS RHO / CREATIVE
      </motion.div>
      
      <div className="hidden md:flex items-center gap-8 text-[12px] uppercase tracking-[0.1em] font-medium">
        {['Home', 'UI/UX', 'AI Art', 'Projects', 'About'].map((item, idx) => (
          <button 
            key={item}
            onClick={() => onNavigate(item.toLowerCase().replace('/', ''))}
            className={`transition-colors cursor-pointer ${idx === 0 ? 'text-ink' : 'text-muted hover:text-ink'}`}
          >
            {item}
          </button>
        ))}
      </div>
    </motion.nav>
  );
}
