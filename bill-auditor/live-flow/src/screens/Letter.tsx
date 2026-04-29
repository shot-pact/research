import { ArrowRight, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const Letter = ({ onHome }: { onHome: () => void }) => (
  <div className="flex-1 flex flex-col items-center p-6 bg-surface pb-32 relative">
    <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/felt.png')]"></div>

    <div className="w-full max-w-[440px] space-y-10 relative z-10">
      <section className="space-y-4">
        <header className="space-y-3">
          <h2 className="text-4xl font-serif text-primary tracking-tight">Dispute Ready</h2>
          <p className="text-on-surface-variant font-serif italic text-base leading-snug">Discretionary adjustments applied based on audit logic.</p>
        </header>
        <div className="paper-card p-5 bg-white/90 rounded-3xl border border-outline-variant/20 shadow-sm space-y-6">
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Dispute Parameters</h4>
            <ParamCheck label="Notify Memorial General" checked />
            <ParamCheck label="Attach Clinical Evidential Log" checked />
            <ParamCheck label="CC Medical Insurance Provider" checked />
            <ParamCheck label="Request Itemized Room Log" />
          </div>
          <div className="pt-6 border-t border-outline-variant/10 space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Delivery Method</h4>
            <button className="w-full flex items-center gap-3 p-4 rounded-3xl border border-secondary bg-secondary/5 text-secondary text-left">
              <Mail className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Secure Email</span>
            </button>
            <button className="w-full flex items-center gap-3 p-4 rounded-3xl border border-outline-variant/30 text-on-surface-variant/80 text-left hover:border-primary transition-all">
              <Phone className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Certified Fax</span>
            </button>
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-6 rounded-3xl shadow-2xl border border-outline-variant/20 italic text-[#2D2926] font-serif text-base leading-7 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-10 opacity-[0.03] rotate-12">
          <MapPin className="w-48 h-48" />
        </div>
        <div className="space-y-8 relative z-10">
          <div className="not-italic text-[10px] font-bold uppercase tracking-[0.4em] text-on-surface-variant/40 border-b border-outline-variant/10 pb-6">
            <div className="space-y-1">
              <p>Alex J. Richardson</p>
              <p>Audit Ref: #SPD-2024-0042</p>
            </div>
            <p>October 28, 2024</p>
          </div>
          <div className="not-italic text-primary font-bold font-sans text-xs tracking-[0.2em]">
            <p>RE: FORMAL DISPUTE OF MEDICAL BILLING DISCREPANCIES</p>
          </div>
          <div className="space-y-4">
            <p>To the Billing Department of Memorial General,</p>
            <p>
              Following a precision clinical audit of my statement dated <span className="not-italic font-bold text-primary">October 12, 2024</span>, several significant discrepancies have been identified that require immediate reconciliation.
            </p>
            <p>
              Specifically, the audit flagged <span className="not-italic font-bold text-secondary">12 discrepancies</span> including unbundled surgical supplies (Code CM-402) and an upcoded Level 3 visit (ER-LL3) which documentation suggests was Level 2 acuity.
            </p>
            <p>
              I am requesting a formal review of these charges and an updated itemized statement reflecting these adjustments. I reserve all rights to further escalate this matter with the <span className="not-italic bg-secondary/5 px-2 py-0.5 rounded text-secondary">Department of Health.</span>
            </p>
          </div>
          <div className="pt-10 not-italic font-sans">
            <p className="text-secondary font-bold text-[10px] uppercase tracking-widest">Electronically Signed</p>
            <div className="mt-4 flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white shadow-lg">
                <CheckCircle className="w-6 h-6" />
              </div>
              <p className="text-2xl font-serif text-primary tracking-tight">Alex J. Richardson</p>
            </div>
          </div>
        </div>
      </motion.section>

      <div className="flex justify-center">
        <button
          onClick={onHome}
          className="px-14 py-5 bg-primary text-white rounded-2xl font-bold tracking-[0.2em] uppercase text-xs shadow-2xl flex items-center gap-3 hover:bg-black active:scale-[0.98] transition-all group"
        >
          Deliver Formal Dispute
          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
        </button>
      </div>
    </div>
  </div>
);

const ParamCheck = ({ label, checked }: any) => (
  <div className={`flex items-center gap-4 p-4 rounded-3xl border transition-all ${checked ? 'border-secondary/30 bg-secondary/5 text-primary' : 'border-outline-variant/10 bg-white/40 text-on-surface-variant/70'}`}>
    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${checked ? 'bg-secondary border-secondary text-white' : 'border-outline-variant/20'}`}>
      {checked && <CheckCircle className="w-3 h-3" />}
    </div>
    <span className="text-sm font-serif font-medium leading-none">{label}</span>
  </div>
);
