import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="flex flex-col justify-end pb-6 border-b lg:border-b-0 lg:border-right lg:border-border pr-12 min-h-[60vh] lg:min-h-0">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="font-serif italic text-[14px] text-muted mb-4">Interaction & Systems</div>
        
        <h1 className="text-[64px] md:text-[84px] font-light tracking-[-0.04em] leading-[0.9] mb-8 uppercase">
          Designing<br />
          <span className="text-muted">Latent</span><br />
          Futures
        </h1>
        
        <p className="text-[16px] leading-[1.6] max-w-[400px] text-muted">
          Exploring the intersection of artificial intelligence, fluid systems, and speculative human experiences.
        </p>
      </motion.div>
    </section>
  );
}
