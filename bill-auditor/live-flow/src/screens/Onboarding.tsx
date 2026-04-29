import { motion } from 'motion/react';
import { Scan, ArrowRight } from 'lucide-react';

export const Onboarding = ({ onNext }: { onNext: () => void }) => (
  <div className="flex-1 flex flex-col items-center justify-center p-8 bg-surface relative overflow-hidden">
    {/* Abstract Background Noise */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/felt.png')]"></div>

    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-md w-full text-center space-y-16 relative z-10"
    >
      {/* Editorial Stacked Bills Visual */}
      <div className="relative h-72 w-full flex justify-center items-center">
        <motion.div 
          initial={{ rotate: -15, x: -40, opacity: 0 }}
          animate={{ rotate: -8, x: -25, opacity: 0.4 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="absolute w-56 h-72 bg-white rounded-xl shadow-lg border border-outline-variant/30 rotate-[-8deg] transform -translate-x-12 translate-y-4"
        ></motion.div>
        
        <motion.div 
          initial={{ rotate: 10, x: 40, opacity: 0 }}
          animate={{ rotate: 5, x: 20, opacity: 0.6 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="absolute w-56 h-72 bg-white rounded-xl shadow-xl border border-outline-variant/30 rotate-[5deg] transform translate-x-10 -translate-y-2"
        ></motion.div>

        <motion.div 
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative w-64 h-80 bg-white p-6 rounded-xl border border-outline-variant/40 shadow-2xl flex flex-col"
        >
          <div className="flex justify-between mb-6">
            <div className="h-4 w-24 bg-surface-container rounded-sm"></div>
            <div className="h-4 w-12 bg-secondary/10 rounded-full border border-secondary/20"></div>
          </div>
          <div className="space-y-4 flex-1">
             <div className="h-3 w-full bg-surface-dim rounded-sm"></div>
             <div className="h-3 w-4/5 bg-surface-dim rounded-sm"></div>
             <div className="h-3 w-full bg-surface-dim rounded-sm"></div>
             <div className="mt-8 pt-6 border-t border-dashed border-outline-variant/40">
                <div className="flex justify-between items-center">
                   <div className="h-5 w-20 bg-primary/10 rounded-sm"></div>
                   <div className="h-6 w-16 bg-primary rounded-sm"></div>
                </div>
             </div>
          </div>
          <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-secondary rounded-full flex items-center justify-center text-white shadow-xl ring-8 ring-surface">
            <Scan className="w-7 h-7" />
          </div>
        </motion.div>
      </div>

      <div className="space-y-6 px-4">
        <span className="text-secondary font-bold text-[10px] uppercase tracking-[0.4em] block animate-pulse">Precision Audit v4.2</span>
        <h2 className="text-5xl font-serif text-primary leading-[1.1] tracking-tight">
          Your medical bill is likely <span className="italic relative decoration-secondary/30 underline decoration-4 underline-offset-8">incorrect.</span>
        </h2>
        <p className="text-on-surface-variant/80 text-xl font-serif italic max-w-sm mx-auto leading-relaxed">
          Artificial Intelligence identifies coding errors used to inflate provider revenue.
        </p>
      </div>

      <div className="space-y-4 px-2 pt-4">
        <button 
          onClick={onNext}
          className="w-full py-6 bg-primary text-white rounded-2xl font-bold tracking-[0.2em] uppercase text-xs shadow-[0_20px_40px_-10px_rgba(45,41,38,0.3)] hover:bg-black active:scale-[0.98] transition-all group flex items-center justify-center gap-4"
        >
          Start Audit Analysis
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
        </button>
        <p className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant/40">Trusted by 4,812+ patients nationwide</p>
      </div>
    </motion.div>
  </div>
);
