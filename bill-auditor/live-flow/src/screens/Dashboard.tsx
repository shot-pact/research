import { motion } from 'motion/react';
import { FileText, Scan, Zap, Mail, TrendingUp } from 'lucide-react';

export const Dashboard = ({ onScan }: { onScan: () => void }) => (
  <div className="p-6 space-y-8 w-full max-w-[440px] mx-auto pb-32 relative">
    <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/felt.png')]"></div>

    <header className="relative z-10 space-y-3">
      <h2 className="text-4xl font-serif text-primary tracking-tight leading-tight">Overview</h2>
      <p className="text-on-surface-variant text-base italic font-serif">Welcome back. Your active audits are currently being prioritized.</p>
    </header>

    <motion.div
      whileHover={{ y: -4 }}
      className="paper-card p-6 bg-white/90 backdrop-blur-sm border border-outline-variant/30 space-y-6 relative z-10"
    >
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-start gap-4">
          <div>
            <span className="text-secondary font-bold text-[10px] uppercase tracking-[0.25em] block mb-2">Active Dispute</span>
            <h3 className="text-2xl font-serif text-primary tracking-tight leading-tight">Memorial General - ER Visit</h3>
          </div>
          <span className="px-3 py-1 bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-widest rounded-full border border-secondary/20">In Progress</span>
        </div>

        <div className="space-y-3 pt-2">
          <div className="flex justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant/60">
            <span>Audit Lifecycle</span>
            <span>Step 3 of 5</span>
          </div>
          <div className="flex gap-2 h-1.5">
            {[1, 2, 3].map(i => <div key={i} className="flex-1 bg-secondary rounded-full shadow-[0_0_10px_rgba(153,70,42,0.2)]"></div>)}
            {[4, 5].map(i => <div key={i} className="flex-1 bg-surface-container-highest rounded-full"></div>)}
          </div>
        </div>
      </div>

      <div className="p-4 bg-surface-container-low/70 rounded-2xl border border-outline-variant/20 italic text-on-surface-variant font-serif mt-6">
        <div className="flex items-start gap-3">
          <FileText className="w-5 h-5 text-secondary flex-shrink-0" />
          <p className="text-sm leading-relaxed">Reviewing line-item discrepancy for surgical supplies code <span className="not-italic font-bold text-primary font-sans text-xs">CM-402</span>.</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileHover={{ y: -4 }}
      className="paper-card p-6 bg-slate-950 text-white shadow-2xl overflow-hidden relative z-10"
    >
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-800/80 to-transparent pointer-events-none" />
      <div className="relative space-y-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 block mb-2">Lifetime Recovery</span>
            <div className="flex items-end gap-3">
              <h3 className="text-5xl font-serif tracking-tight leading-none">$6,184</h3>
              <span className="inline-flex items-center rounded-full bg-amber-500/15 text-amber-300 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.35em]">+12%</span>
            </div>
          </div>
          <TrendingUp className="w-10 h-10 text-slate-500" />
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-4">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_rgba(244,121,45,0.2),_transparent_45%)]" />
          <div className="relative h-40">
            <TrendingLine className="relative z-10" />
          </div>
        </div>

        <div className="text-slate-400 text-[11px] uppercase tracking-[0.3em] font-bold">
          Across 14 successful claims
        </div>
      </div>
    </motion.div>

    <div className="space-y-4">
      <ActionBtn icon={<Scan className="w-5 h-5" />} label="Scan New Bill" sub="Upload and analyze in seconds" onClick={onScan} />
      <ActionBtn icon={<Zap className="w-5 h-5" />} label="Tax Summary" sub="Export 2023 medical deductions" />
      <ActionBtn icon={<Mail className="w-5 h-5" />} label="Support" sub="Chat with an expert auditor" />
    </div>

    <div className="space-y-4 relative z-10">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-serif text-primary">Audit History</h3>
        <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary flex items-center gap-1">View All</button>
      </div>
      <div className="space-y-3">
        <HistoryCard provider="City Heart Specialty" date="Oct 12, 2024" amount="$1,240.00" status="Recovered" />
        <HistoryCard provider="Northside Labs" date="Sep 28, 2024" amount="$450.20" status="Recovered" />
        <HistoryCard provider="Memorial General" date="Aug 14, 2024" amount="$2,810.00" status="Recovered" />
      </div>
    </div>
  </div>
);

const ActionBtn = ({ icon, label, sub, onClick }: any) => (
  <button
    onClick={onClick}
    className="paper-card p-4 flex items-center gap-4 bg-white/90 border border-outline-variant/20 rounded-3xl shadow-sm transition-all active:scale-[0.98]"
  >
    <div className="w-14 h-14 bg-surface-container rounded-2xl flex items-center justify-center text-secondary shadow-sm">
      {icon}
    </div>
    <div className="text-left">
      <p className="text-base font-serif text-primary leading-tight">{label}</p>
      <p className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant/70">{sub}</p>
    </div>
  </button>
);

const HistoryCard = ({ provider, date, amount, status }: any) => (
  <button className="w-full text-left paper-card p-4 bg-white/90 border border-outline-variant/20 rounded-3xl shadow-sm group transition-all hover:shadow-md">
    <div className="flex justify-between items-start gap-4">
      <div className="space-y-1">
        <p className="font-serif text-lg text-primary">{provider}</p>
        <p className="text-[10px] uppercase tracking-[0.3em] text-on-surface-variant/70">{date}</p>
      </div>
      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-green-600">{status}</span>
    </div>
    <div className="mt-4 flex items-center justify-between">
      <p className="text-sm text-on-surface-variant">Recovered amount</p>
      <p className="text-base font-semibold text-primary">{amount}</p>
    </div>
  </button>
);

const TrendingLine = ({ className }: { className?: string }) => (
  <svg className={`w-full h-40 ${className ?? ''}`} viewBox="0 0 200 80" fill="none">
    <defs>
      <linearGradient id="gradientStroke" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#F97316" />
        <stop offset="100%" stopColor="#FB923C" />
      </linearGradient>
    </defs>
    <path d="M0,62 Q30,58 60,62 T120,30 T180,12 T200,8" stroke="url(#gradientStroke)" strokeWidth="4" strokeLinecap="round" fill="none" />
    <path d="M0,62 Q30,58 60,62 T120,30 T180,12 T200,8" stroke="#F97316" strokeWidth="10" strokeLinecap="round" opacity="0.12" />
  </svg>
);
