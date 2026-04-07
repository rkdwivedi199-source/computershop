import { motion } from 'motion/react';
import { ArrowRight, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden tech-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/0 via-bg-dark/50 to-bg-dark pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-brand-primary mb-6"
          >
            <Zap className="w-4 h-4" />
            <span className="text-xs font-mono uppercase tracking-[0.3em]">Next-Gen Performance</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-8"
          >
            Forge Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
              Ultimate Machine
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/50 mb-10 max-w-xl leading-relaxed"
          >
            Premium components for builders who demand perfection. From record-breaking CPUs to flagship GPUs, we provide the raw power you need.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <button className="px-8 py-4 bg-brand-primary text-bg-dark font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors flex items-center gap-2 group">
              Shop Components
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-white/10 hover:bg-white/5 font-bold uppercase tracking-widest text-sm transition-colors">
              PC Builder
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full pointer-events-none hidden lg:block">
        <div className="relative w-full h-full">
          <motion.div 
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-brand-primary/10 rounded-full"
          />
          <motion.div 
            animate={{ 
              rotate: [360, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-brand-secondary/10 rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
