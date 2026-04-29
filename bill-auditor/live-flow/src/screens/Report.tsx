import { CheckCircle2, ShieldCheck, Zap, ArrowRight, AlertCircle, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export const Report = ({ onNext }: { onNext: () => void }) => (
  <div className="p-6 space-y-10 w-full max-w-[440px] mx-auto pb-32 relative">
    <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/felt.png')]"></div>

    <header className="text-center space-y-4 relative z-10">
      <div className="inline-flex items-center px-4 py-1.5 bg-secondary/5 text-secondary text-[10px] font-bold uppercase tracking-widest border border-secondary/20 rounded-full">
        <CheckCircle2 className="w-4 h-4 mr-2" />
        Analysis Complete
      </div>
      <h2 className="text-4xl font-serif text-primary leading-tight tracking-tight">We think you may recover <span className="text-secondary">$5,786</span></h2>
      <p className="text-on-surface-variant text-base font-serif italic">Across 8 flagged clinical discrepancies in your Memorial General statement.</p>
    </header>

    <section className="paper-card p-6 bg-white/90 rounded-3xl border border-outline-variant/20 shadow-sm relative z-10">
      <div className="mb-6">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface-variant/60 block mb-2">Recovery Insight</span>
        <h3 className="text-2xl font-serif text-primary">Recovery by Discrepancy Type</h3>
      </div>
      <div className="space-y-4">
        <BarChart label="Unbundled CPT" amount="$2,840" percentage={65} />
        <BarChart label="Duplicate Logic" amount="$1,120" percentage={45} />
        <BarChart label="Upcoded Level 2" amount="$1,826" percentage={85} />
      </div>
    </section>

    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Flagged Claim Details</h4>
        <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">8 Items Pending Resolution</span>
      </div>
      <div className="space-y-4">
        <FlaggedItem
          code="CM-402"
          title="Surgical Supply Unbundling"
          desc="Individual saline bags billed alongside inclusive surgical kit. Standard dispute path recommended."
          impact="$842.00"
        />
        <FlaggedItem
          code="ER-LL3"
          title="Upcoded Level 3 Visit"
          desc="Review of triage notes suggests Level 2 acuity. Facility fee adjustment projected."
          impact="$1,240.00"
        />
      </div>
    </section>

    <section className="paper-card p-6 bg-white/90 rounded-3xl border border-outline-variant/20 shadow-sm space-y-6">
      <div className="flex items-start justify-between gap-4 border-b border-outline-variant/10 pb-4">
        <div>
          <h3 className="text-2xl font-serif text-primary">Audit Math Breakdown</h3>
          <p className="text-sm font-serif italic text-on-surface-variant/60 mt-2">Projection based on historical success rates (96.4%)</p>
        </div>
        <ShieldCheck className="w-8 h-8 text-secondary/30" />
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-on-surface-variant/40">Total Discrepancies</span>
          <p className="text-3xl font-serif text-primary tracking-tighter">$5,786.00</p>
        </div>
        <div className="space-y-2">
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-on-surface-variant/40">Admin & Filing Cost</span>
          <p className="text-3xl font-serif text-primary tracking-tighter opacity-40">-$515.00</p>
        </div>
      </div>
      <div className="bg-primary p-6 rounded-3xl shadow-2xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="relative z-10 text-center">
          <span className="text-white/40 text-[9px] font-bold uppercase tracking-[0.4em]">Projected Net Gain</span>
          <p className="text-4xl font-serif text-white tracking-tighter leading-none mt-2">$4,812.00</p>
        </div>
        <TrendingUp className="w-16 h-16 text-white/10 mx-auto mt-4" />
      </div>
    </section>

    <section className="space-y-4">
      <h3 className="text-2xl font-serif text-primary text-center">Choose Your Fee Structure</h3>
      <div className="space-y-4">
        <button className="paper-card p-6 text-left group hover:border-secondary transition-all active:scale-[0.98] bg-white rounded-3xl border border-outline-variant/10 w-full">
          <div className="flex justify-between items-start mb-4 gap-4">
            <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
              <AlertCircle className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-bold text-secondary bg-secondary/5 px-3 py-1 rounded-full border border-secondary/10">POPULAR</span>
          </div>
          <h4 className="text-2xl font-serif text-primary">Pay if we win</h4>
          <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/40 mt-2 mb-4">25% Commission on Recovery</p>
          <p className="text-sm font-serif italic text-on-surface-variant/70 leading-relaxed">Most secure for single-incident disputes. You only pay when funds are returned to you.</p>
        </button>
        <button className="paper-card p-6 text-left group hover:border-primary transition-all active:scale-[0.98] bg-white rounded-3xl border border-outline-variant/10 w-full">
          <div className="flex items-start mb-4">
            <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
              <Zap className="w-6 h-6" />
            </div>
          </div>
          <h4 className="text-2xl font-serif text-primary">Flat Audit Fee</h4>
          <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/40 mt-2 mb-4">$99 per bill analyzed</p>
          <p className="text-sm font-serif italic text-on-surface-variant/70 leading-relaxed">Best for complex multi-page statements. Keep 100% of the recovered funds for yourself.</p>
        </button>
      </div>
    </section>

    <div className="mt-6 max-w-lg mx-auto relative z-10">
      <button
        onClick={onNext}
        className="w-full py-5 bg-secondary text-white rounded-2xl font-bold tracking-[0.2em] uppercase text-xs shadow-[0_20px_40px_-10px_rgba(153,70,42,0.4)] hover:bg-black transition-all flex items-center justify-center gap-3 group"
      >
        Proceed to Secure Dispute
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  </div>
);

const BarChart = ({ label, amount, percentage }: any) => (
  <div className="space-y-3">
    <div className="flex justify-between items-end">
      <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60">{label}</span>
      <span className="text-lg font-serif text-primary">{amount}</span>
    </div>
    <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 1.5, delay: 0.5, ease: 'circOut' }}
        className="h-full bg-secondary rounded-full"
      />
    </div>
  </div>
);

const FlaggedItem = ({ code, title, desc, impact }: any) => (
  <motion.div
    whileHover={{ x: 4 }}
    className="paper-card p-5 bg-white rounded-3xl border border-outline-variant/10 cursor-pointer group shadow-sm"
  >
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-14 h-14 bg-surface-container rounded-3xl flex items-center justify-center text-primary group-hover:bg-secondary/10 group-hover:text-secondary transition-all">
        <span className="text-xs font-bold font-sans tracking-tighter">{code}</span>
      </div>
      <div className="flex-1 space-y-2">
        <div className="flex justify-between items-start gap-4">
          <h5 className="font-serif text-lg text-primary">{title}</h5>
          <span className="text-lg font-serif text-secondary">{impact}</span>
        </div>
        <p className="text-sm font-serif italic text-on-surface-variant/60 leading-tight">{desc}</p>
      </div>
    </div>
  </motion.div>
);
