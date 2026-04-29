import { motion } from 'motion/react';
import { CheckCircle, ArrowRight, Share2, Download, Bell, CreditCard, HelpCircle } from 'lucide-react';

export const Success = ({ onHome }: { onHome: () => void }) => (
  <div className="flex-1 flex flex-col items-center justify-center p-8 bg-surface space-y-10 pb-32 relative">
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/felt.png')]"></div>

    <header className="text-center space-y-4 relative z-10">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', damping: 12, stiffness: 100 }}
        className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center text-white mx-auto shadow-[0_20px_50px_-10px_rgba(153,70,42,0.4)]"
      >
        <CheckCircle className="w-12 h-12" />
      </motion.div>
      <div className="space-y-2">
        <h2 className="text-5xl font-serif text-primary tracking-tight">Dispute Sent</h2>
        <p className="text-on-surface-variant font-serif italic text-base">Tracking Reference: <span className="not-italic font-sans font-bold text-primary text-sm tracking-widest ml-2">#SPD-2024-0042</span></p>
      </div>
    </header>

    <div className="w-full max-w-[440px] space-y-6 relative z-10">
      <div className="paper-card p-6 bg-white/90 rounded-3xl border border-outline-variant/20 shadow-sm space-y-6">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface-variant/40 block mb-2">Claim Lifecycle</span>
          <h3 className="text-2xl font-serif text-primary">Claims Underway</h3>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-end pb-4 border-b border-outline-variant/10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60">Total in Dispute</span>
            <p className="text-2xl font-serif text-primary">$5,786.00</p>
          </div>
          <div className="flex justify-between items-end pb-4 border-b border-outline-variant/10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60">Resolution Timeline</span>
            <p className="text-xl font-serif text-primary">14-21 Business Days</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button className="py-4 bg-white border border-outline-variant/30 rounded-2xl flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:bg-surface transition-all">
            <Download className="w-4 h-4" />
            Receipt
          </button>
          <button className="py-4 bg-white border border-outline-variant/30 rounded-2xl flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:bg-surface transition-all">
            <Share2 className="w-4 h-4" />
            Share
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Recommended Actions</h4>
        <div className="space-y-4">
          <ActionItem icon={<Bell className="w-5 h-5" />} label="Enable Live Tracking" sub="Get SMS alerts for provider responses" />
          <ActionItem icon={<CreditCard className="w-5 h-5" />} label="Setup Direct Deposit" sub="Faster reimbursement to your bank" />
          <ActionItem icon={<HelpCircle className="w-5 h-5" />} label="Notify Insurance" sub="Pre-authorize the dispute logic" />
        </div>
      </div>
    </div>

    <button
      onClick={onHome}
      className="px-14 py-5 bg-primary text-white rounded-2xl font-bold tracking-[0.2em] uppercase text-xs shadow-2xl flex items-center gap-3 hover:bg-black active:scale-[0.98] transition-all group relative z-10"
    >
      Return to Dashboard
      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
    </button>
  </div>
);

const ActionItem = ({ icon, label, sub }: any) => (
  <button className="paper-card p-5 flex items-center gap-4 bg-white/90 hover:border-secondary rounded-3xl border border-outline-variant/20 transition-all text-left w-full group shadow-sm">
    <div className="w-12 h-12 bg-surface-container rounded-3xl flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
      {icon}
    </div>
    <div>
      <p className="text-base font-serif text-primary leading-none">{label}</p>
      <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/40 mt-1">{sub}</p>
    </div>
  </button>
);
