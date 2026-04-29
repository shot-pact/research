import { motion } from 'motion/react';
import { Search, Filter, ArrowUpRight, CheckCircle2, Clock, XCircle } from 'lucide-react';

export const History = () => (
  <div className="p-6 space-y-8 w-full max-w-[440px] mx-auto pb-32 relative">
    <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/felt.png')]"></div>

    <header className="relative z-10 space-y-4">
      <div>
        <h2 className="text-4xl font-serif text-primary tracking-tight">Audit History</h2>
        <p className="text-on-surface-variant text-base italic font-serif mt-2">Comprehensive log of all clinical disputes and recoveries.</p>
      </div>
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant/40" />
          <input type="text" placeholder="Search provider..." className="w-full bg-white/90 border border-outline-variant/30 rounded-3xl px-12 py-3 font-serif italic text-sm focus:outline-none focus:border-secondary transition-all" />
        </div>
        <button className="px-4 py-3 bg-white/90 border border-outline-variant/30 rounded-3xl text-primary shadow-sm">
          <Filter className="w-5 h-5" />
        </button>
      </div>
    </header>

    <div className="space-y-4 relative z-10">
      <AuditHistoryItem
        provider="Memorial General - ER Visit"
        date="October 12, 2024"
        status="IN PROGRESS"
        amount="$4,510"
        recovered="$0"
        icon={<Clock className="w-5 h-5" />}
        color="text-secondary"
      />
      <AuditHistoryItem
        provider="Northside Labs & Diagnostics"
        date="September 28, 2024"
        status="RECOVERED"
        amount="$840"
        recovered="$840"
        icon={<CheckCircle2 className="w-5 h-5" />}
        color="text-green-600"
      />
      <AuditHistoryItem
        provider="City Heart Specialty Care"
        date="August 14, 2024"
        status="RECOVERED"
        amount="$2,210"
        recovered="$1,840"
        icon={<CheckCircle2 className="w-5 h-5" />}
        color="text-green-600"
      />
      <AuditHistoryItem
        provider="Walgreens Pharmacy #42"
        date="July 02, 2024"
        status="DENIED"
        amount="$120"
        recovered="$0"
        icon={<XCircle className="w-5 h-5" />}
        color="text-red-500"
      />
    </div>

    <div className="space-y-3 relative z-10 border-t border-outline-variant/10 pt-6">
      <MetricCard label="Total Flagged" value="$8,124" />
      <MetricCard label="Success Rate" value="92.1%" />
      <MetricCard label="Average Recovery" value="$520" />
    </div>
  </div>
);

const AuditHistoryItem = ({ provider, date, status, amount, recovered, icon, color }: any) => (
  <motion.button
    whileHover={{ x: 4 }}
    className="w-full text-left paper-card p-5 bg-white/90 rounded-3xl border border-outline-variant/20 shadow-sm flex flex-col gap-4 transition-all"
  >
    <div className="flex items-center gap-4">
      <div className={`w-14 h-14 rounded-3xl flex items-center justify-center bg-white shadow-sm border border-outline-variant/10 ${color}`}>
        {icon}
      </div>
      <div className="flex-1 space-y-1">
        <p className="text-lg font-serif text-primary leading-tight">{provider}</p>
        <p className="text-sm italic text-on-surface-variant/70">{date}</p>
      </div>
      <span className={`text-[9px] font-bold uppercase tracking-[0.3em] px-3 py-1 rounded-full border ${color === 'text-secondary' ? 'bg-secondary/10 border-secondary/20' : color === 'text-green-600' ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'} ${color}`}>
        {status}
      </span>
    </div>
    <div className="grid grid-cols-2 gap-3 text-right">
      <div>
        <p className="text-[9px] uppercase tracking-widest text-on-surface-variant/40">Audit Amount</p>
        <p className="text-xl font-serif text-primary mt-1 opacity-80">{amount}</p>
      </div>
      <div>
        <p className="text-[9px] uppercase tracking-widest text-on-surface-variant/40">Recovered</p>
        <p className="text-xl font-serif text-primary mt-1 font-semibold">{recovered}</p>
      </div>
    </div>
  </motion.button>
);

const MetricCard = ({ label, value }: any) => (
  <div className="paper-card p-4 bg-white/90 rounded-3xl border border-outline-variant/20 shadow-sm">
    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface-variant/40">{label}</span>
    <p className="text-3xl font-serif text-primary mt-2">{value}</p>
  </div>
);