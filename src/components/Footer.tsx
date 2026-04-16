import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="py-8 px-12 mt-12 flex justify-between items-center text-[11px] text-muted uppercase tracking-[0.05em] border-t border-border">
      <div className="flex items-center gap-4">
        <span>Available for collaborations</span>
        <span className="hidden md:inline">—</span>
        <a href="mailto:hello@alexisrho.com" className="hover:text-ink transition-colors">hello@alexisrho.com</a>
      </div>

      <div className="hidden md:flex items-center gap-2">
        <div className="h-[1px] w-10 bg-border relative overflow-hidden">
          <motion.div 
            animate={{ x: [-40, 40] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-4 bg-ink"
          />
        </div>
      </div>

      <div className="flex gap-6">
        {['Instagram', 'Read.cv', 'Twitter'].map(link => (
          <a key={link} href="#" className="hover:text-ink transition-colors">{link}</a>
        ))}
      </div>
    </footer>
  );
}
