import { useState, useEffect } from 'react';
import { CheckCircle2, Zap, Quote, Activity, ShieldCheck, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export const Progress = ({ onComplete }: { onComplete: () => void }) => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(2), 1500),
      setTimeout(() => setStep(3), 3000),
      setTimeout(() => setStep(4), 4500),
      setTimeout(onComplete, 6000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const stages = [
    { name: 'OCR DATA EXTRACTION', desc: 'Digitizing physical records...', icon: <Activity className="w-4 h-4" /> },
    { name: 'CPT CODE RECONCILIATION', desc: 'Cross-referencing billing codes...', icon: <ShieldCheck className="w-4 h-4" /> },
    { name: 'DUPLICATE LOGIC CHECK', desc: 'Detecting unbundled service entries...', icon: <Activity className="w-4 h-4" /> },
    { name: 'RECOVERY PROJECTION', desc: 'Calculating potential savings...', icon: <Zap className="w-4 h-4" /> }
  ];

  return (
    <div className="flex-1 flex flex-col items-center justify-start p-8 bg-surface space-y-12 pt-20">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/felt.png')]"></div>

      <header className="text-center space-y-3 relative z-10">
        <span className="text-secondary font-bold text-[10px] uppercase tracking-[0.4em] block">Audit in Progress</span>
        <h2 className="text-5xl font-serif text-primary tracking-tight">Audit Workflow Stages</h2>
      </header>

      <div className="w-full max-w-lg space-y-8 relative z-10">
        {/* Timeline */}
        <div className="paper-card p-10 space-y-10 bg-white/60 backdrop-blur-md">
          {stages.map((s, i) => {
            const isActive = i + 1 === step;
            const isDone = i + 1 < step;
            return (
              <div key={i} className={`relative flex items-start gap-6 transition-all duration-500 ${isActive || isDone ? 'opacity-100 translate-x-0' : 'opacity-20 translate-x-4'}`}>
                {i < stages.length - 1 && (
                  <div className={`absolute left-4 top-10 w-0.5 h-12 -ml-px transition-colors duration-1000 ${isDone ? 'bg-secondary' : 'bg-surface-container-highest'}`}></div>
                )}
                
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 z-10 transition-all duration-500 ${isDone ? 'bg-secondary text-white shadow-lg' : isActive ? 'bg-primary text-white scale-110 shadow-xl animate-pulse' : 'bg-surface-container-highest text-on-surface-variant'}`}>
                  {isDone ? <CheckCircle2 className="w-5 h-5" /> : s.icon}
                </div>

                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-primary tracking-[0.2em]">{s.name}</p>
                  <p className="text-base font-serif italic text-on-surface-variant/70 leading-tight">{isActive ? s.desc : isDone ? 'Completed Verification' : 'Queued Task'}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Auditor's Insight Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="paper-card p-10 bg-secondary/5 border-secondary/20 relative overflow-hidden"
        >
          <Quote className="absolute top-6 right-6 w-12 h-12 text-secondary/10" />
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary mb-4 flex items-center gap-2">
             <Zap className="w-3 h-3 fill-secondary" />
             Live Audit Insight
          </p>
          <p className="text-xl font-serif italic text-primary leading-relaxed">
            "Initial signal suggests a high probability of over-coding in the surgical ward room charges segment."
          </p>
          
          <div className="flex gap-10 mt-8 pt-8 border-t border-secondary/10">
             <div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-on-surface-variant/40 block mb-1">Confidence Index</span>
                <p className="text-lg font-serif text-primary">98.4%</p>
             </div>
             <div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-on-surface-variant/40 block mb-1">Latency</span>
                <p className="text-lg font-serif text-primary">280ms</p>
             </div>
          </div>
        </motion.div>
      </div>
      
      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/30">
        <Clock className="w-3 h-3" />
        <span>Estimated Completion: 4 Seconds</span>
      </div>
    </div>
  );
};
