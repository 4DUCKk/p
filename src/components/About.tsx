import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-accent/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-light tracking-tight mb-12 uppercase leading-[1.1]"
          >
            Crafting digital experiences at the edge of possibility.
          </motion.h2>
          
          <div className="space-y-6 text-muted leading-relaxed max-w-lg text-[16px]">
            <p>
              I am a designer and creative director focused on the intersection of human intuition and machine intelligence. My work spans across UI/UX design, generative AI, and interactive installations.
            </p>
            <p>
              With over a decade of experience in the design industry, I help brands and studios navigate the rapidly evolving landscape of emerging technologies, creating systems that are both functional and speculative.
            </p>
          </div>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.3em] font-semibold mb-8 text-muted">Philosophy</h3>
            <p className="text-xl font-serif italic text-muted leading-snug">
              "Design is not just how it looks, but how it behaves in a complex system. I believe in creating interfaces that feel organic, responsive, and deeply human, even when powered by the most advanced algorithms."
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.3em] font-semibold mb-6 text-muted">Expertise</h3>
              <ul className="space-y-2 text-sm text-muted uppercase tracking-wider">
                <li>Interaction Design</li>
                <li>Generative AI</li>
                <li>Creative Direction</li>
                <li>Spatial Computing</li>
                <li>Design Systems</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.3em] font-semibold mb-6 text-muted">Tools</h3>
              <ul className="space-y-2 text-sm text-muted uppercase tracking-wider">
                <li>Figma / Adobe CC</li>
                <li>Stable Diffusion / Midjourney</li>
                <li>React / Three.js</li>
                <li>TouchDesigner</li>
                <li>Cinema 4D</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
