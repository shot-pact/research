import { motion } from 'motion/react';
import { Check, Zap, AlertCircle, ShieldCheck, Star } from 'lucide-react';

export const Pricing = () => (
  <div className="p-6 space-y-10 w-full max-w-[440px] mx-auto pb-32 relative">
    <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/felt.png')]"></div>

    <header className="relative z-10 space-y-4 text-center">
      <span className="text-secondary font-bold text-[10px] uppercase tracking-[0.4em] block">Audit Economics</span>
      <h2 className="text-4xl font-serif text-primary leading-tight tracking-tight">Precision Auditing for Financial Health</h2>
      <div className="inline-flex items-center justify-center gap-3 bg-white/90 px-4 py-2 rounded-full border border-outline-variant/20 shadow-sm">
        <span className="text-xs font-bold text-on-surface-variant/60 tracking-widest">MONTHLY</span>
        <span className="text-xs font-bold text-secondary tracking-widest">ANNUAL</span>
        <span className="text-[9px] font-bold text-secondary bg-secondary/5 px-2 py-0.5 rounded-full border border-secondary/10">20% OFF</span>
      </div>
    </header>

    <div className="space-y-6 relative z-10">
      <motion.div
        whileHover={{ y: -8 }}
        className="paper-card p-6 bg-white/90 border border-outline-variant/20 shadow-sm rounded-3xl"
      >
        <div className="flex justify-between items-start gap-3 mb-6">
          <div className="w-14 h-14 bg-secondary/10 rounded-3xl flex items-center justify-center text-secondary border border-secondary/20">
            <AlertCircle className="w-7 h-7" />
          </div>
          <span className="text-[10px] font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20 tracking-widest">POPULAR</span>
        </div>
        <div className="space-y-3">
          <h3 className="text-3xl font-serif text-primary tracking-tight">Pay if we win</h3>
          <p className="text-sm font-serif italic text-on-surface-variant/70">Zero risk for individuals.</p>
          <div className="space-y-3 pt-4 border-t border-outline-variant/10">
            <FeatureItem label="25% Recovery Commission" />
            <FeatureItem label="Full Clinical Itemization" />
            <FeatureItem label="Direct Provider Disputes" />
            <FeatureItem label="No Recovery, No Fee Guarantee" />
          </div>
        </div>
        <div className="mt-8 space-y-4">
          <div className="flex items-end gap-2">
            <span className="text-5xl font-serif text-primary">25%</span>
            <span className="text-xs font-bold text-on-surface-variant/40 tracking-widest uppercase">Of Recovery</span>
          </div>
          <button className="w-full py-4 bg-secondary text-white rounded-2xl font-bold tracking-[0.2em] uppercase text-xs hover:bg-black transition-all">Select Contingency</button>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ y: -8 }}
        className="paper-card p-6 bg-primary text-white shadow-sm rounded-3xl overflow-hidden relative"
      >
        <div className="absolute top-0 right-0 p-10 opacity-10">
          <Star className="w-28 h-28" />
        </div>
        <div className="relative space-y-4">
          <div className="w-14 h-14 bg-white/10 rounded-3xl flex items-center justify-center text-white">
            <Zap className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-3xl font-serif text-white tracking-tight">Pro Plan</h3>
            <p className="text-sm font-serif italic text-white/60">Scale auditing for whole families.</p>
          </div>
          <div className="space-y-3 pt-4">
            <FeatureItem label="Unlimited Monthly Audits" light />
            <FeatureItem label="Priority Auditor Dedicated Line" light />
            <FeatureItem label="Tax Deduction Optimization" light />
            <FeatureItem label="Family Vault (Up to 5 Users)" light />
          </div>
        </div>
        <div className="mt-8 space-y-4">
          <div className="flex items-end gap-2">
            <span className="text-5xl font-serif text-white">$42</span>
            <span className="text-xs font-bold text-white/40 tracking-widest uppercase">/ Month</span>
          </div>
          <button className="w-full py-4 bg-secondary text-white rounded-2xl font-bold tracking-[0.2em] uppercase text-xs shadow-xl hover:bg-white hover:text-primary transition-all">Upgrade to Pro</button>
        </div>
      </motion.div>
    </div>

    <div className="space-y-6 relative z-10 pt-6 text-center">
      <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-on-surface-variant/30">Trusted by 4,812+ patients nationwide</p>
      <div className="flex flex-wrap justify-center gap-3 opacity-20 grayscale px-4">
        <PartnerLogo name="Aetna" />
        <PartnerLogo name="Cigna" />
        <PartnerLogo name="Humana" />
        <PartnerLogo name="UHC" />
        <PartnerLogo name="Anthem" />
      </div>
      <div className="paper-card p-6 bg-white/90 border border-outline-variant/20 rounded-3xl shadow-sm">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex -space-x-3">
            {[1,2,3,4].map(i => (
              <div key={i} className="w-12 h-12 rounded-full border-4 border-surface bg-surface-container overflow-hidden">
                <img src={`https://i.pravatar.cc/100?img=${i+40}`} alt="User" />
              </div>
            ))}
            <div className="w-12 h-12 rounded-full border-4 border-surface bg-secondary flex items-center justify-center text-white font-bold text-[10px]">+4k</div>
          </div>
          <div className="flex-1 text-left space-y-2">
            <div className="flex gap-1 text-secondary">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="text-base font-serif italic text-primary leading-tight">"Secured $14k in recovery from an ER visit that was clearly overcoded. Life changing service."</p>
            <p className="text-[10px] font-bold tracking-widest text-on-surface-variant/40">SARAH J. - MEMORIAL PATIENT</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FeatureItem = ({ label, light }: any) => (
  <div className="flex items-center gap-3">
    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${light ? 'bg-white/10 text-white' : 'bg-secondary/10 text-secondary border border-secondary/10'}`}>
      <Check className="w-3 h-3" />
    </div>
    <span className={`text-[11px] font-bold uppercase tracking-widest ${light ? 'text-white' : 'text-on-surface-variant/70'}`}>{label}</span>
  </div>
);

const PartnerLogo = ({ name }: { name: string }) => (
  <div className="text-sm font-serif font-black tracking-tighter uppercase">{name}</div>
);