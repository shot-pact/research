import { motion } from 'motion/react';
import { ShieldCheck, Lock, Globe } from 'lucide-react';

export const Auth = ({ onNext }: { onNext: () => void }) => (
  <div className="flex-1 flex flex-col items-center justify-start p-8 bg-surface pt-20">
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }} 
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-lg w-full"
    >
      <div className="mb-12 text-center">
        <div className="flex justify-center gap-4 mb-6">
           <Badge icon={<ShieldCheck className="w-3 h-3" />} label="HIPAA COMPLIANT" />
           <Badge icon={<Lock className="w-3 h-3" />} label="256-BIT ENCRYPTED" />
        </div>
        <h2 className="text-4xl font-serif text-primary mb-3">Create Account</h2>
        <p className="text-on-surface-variant font-serif italic text-lg">Secure your financial health vault.</p>
      </div>
      
      <div className="paper-card p-10 space-y-8 bg-white/50 backdrop-blur-sm relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary/40 via-secondary to-secondary/40"></div>
        
        <button className="w-full py-5 px-6 border border-outline-variant/30 rounded-xl flex items-center justify-center gap-4 font-bold text-[11px] uppercase tracking-widest text-primary hover:bg-white transition-all shadow-sm">
          <img src="https://www.google.com/favicon.ico" alt="G" className="w-4 h-4" />
          Continue with Google
        </button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-outline-variant/20"></div></div>
          <div className="relative flex justify-center text-[10px] uppercase tracking-[0.3em] text-on-surface-variant/40"><span className="bg-[#FAF9F6] px-4">Secure Identity</span></div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant/60 ml-1">Patient Full Name</label>
            <input type="text" placeholder="Alex J. Richardson" className="w-full bg-surface/50 border border-outline-variant/20 focus:border-secondary focus:ring-0 px-5 py-4 rounded-xl text-primary placeholder:opacity-30 transition-all font-serif italic" />
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant/60 ml-1">Email Address</label>
            <input type="email" placeholder="alex.richardson@me.com" className="w-full bg-surface/50 border border-outline-variant/20 focus:border-secondary focus:ring-0 px-5 py-4 rounded-xl text-primary placeholder:opacity-30 transition-all font-serif italic" />
          </div>

          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant/60 ml-1">SSN (Last 4)</label>
                <input type="password" placeholder="••••" className="w-full bg-surface/50 border border-outline-variant/20 focus:border-secondary focus:ring-0 px-5 py-4 rounded-xl text-primary placeholder:opacity-30 transition-all font-serif" />
             </div>
             <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant/60 ml-1">Birth Year</label>
                <input type="text" placeholder="1984" className="w-full bg-surface/50 border border-outline-variant/20 focus:border-secondary focus:ring-0 px-5 py-4 rounded-xl text-primary placeholder:opacity-30 transition-all font-serif italic" />
             </div>
          </div>

          <button 
            onClick={onNext}
            className="w-full py-6 bg-primary text-white rounded-xl font-bold tracking-[0.2em] uppercase text-xs shadow-xl active:scale-[0.98] transition-all hover:bg-black"
          >
            Create Secure Vault
          </button>
        </div>
      </div>
      
      <div className="mt-12 flex flex-col items-center gap-4">
        <p className="text-sm font-serif italic text-on-surface-variant/70">
          Already have a clinical account? <button className="text-secondary font-bold hover:underline not-italic">Sign In</button>
        </p>
        <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-on-surface-variant/30">
           <Globe className="w-3 h-3" />
           <span>Governed by US Privacy Laws</span>
        </div>
      </div>
    </motion.div>
  </div>
);

const Badge = ({ icon, label }: any) => (
  <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-low border border-outline-variant/30 rounded-full">
    <div className="text-secondary">{icon}</div>
    <span className="text-[9px] font-bold tracking-widest text-on-surface-variant/60">{label}</span>
  </div>
);
