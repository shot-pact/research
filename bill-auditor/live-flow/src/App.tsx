import { useState, ReactNode, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, History, CreditCard, Settings, Menu, Bell, ArrowLeft } from 'lucide-react';
import { Onboarding } from './screens/Onboarding.tsx';
import { Auth } from './screens/Auth.tsx';
import { Dashboard } from './screens/Dashboard.tsx';
import { Capture } from './screens/Capture.tsx';
import { Progress } from './screens/Progress.tsx';
import { Report } from './screens/Report.tsx';
import { Letter } from './screens/Letter.tsx';
import { Pricing } from './screens/Pricing.tsx';
import { History as HistoryScreen } from './screens/History.tsx';
import { Success } from './screens/Success.tsx';

type AppStep = 'onboarding' | 'auth' | 'dashboard' | 'capture' | 'progress' | 'report' | 'letter' | 'success' | 'pricing' | 'history';

const Layout = ({ 
  children, 
  onBack, 
  title = "SHOT-PACT", 
  showNav = true,
  activeTab = 'dashboard',
  onTabChange
}: { 
  children: ReactNode; 
  onBack?: () => void; 
  title?: string;
  showNav?: boolean;
  activeTab?: string;
  onTabChange?: (tab: AppStep) => void;
}) => (
  <div className="flex-1 flex flex-col bg-surface overflow-x-hidden w-full max-w-[440px] mx-auto relative shadow-2xl min-h-screen border-x border-outline-variant/10">
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-outline-variant/30 px-6 py-4 flex justify-between items-center h-16">
      <div className="flex items-center gap-4">
        {onBack ? (
          <button onClick={onBack} className="p-2 -ml-2 rounded-full cursor-pointer hover:bg-surface-container transition-colors"><ArrowLeft className="w-5 h-5" /></button>
        ) : (
          <button className="p-2 -ml-2 rounded-full"><Menu className="w-5 h-5 text-primary" /></button>
        )}
        <h1 className="font-serif font-black tracking-[0.2em] text-lg uppercase text-primary">{title}</h1>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full"><Bell className="w-5 h-5 text-on-surface-variant" /></button>
        <div className="w-8 h-8 rounded-full bg-surface-container border border-outline-variant overflow-hidden">
          <img src="https://lh3.googleusercontent.com/a/default-user" alt="User" className="w-full h-full object-cover" />
        </div>
      </div>
    </header>

    <main className="flex-1 flex flex-col pb-[120px]">{children}</main>

    {showNav && (
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[440px] bg-white/90 backdrop-blur-lg border-t border-outline-variant/20 px-4 py-4 pb-6 flex justify-around items-end z-50 rounded-t-2xl shadow-[0_-10px_30px_-15px_rgba(45,41,38,0.12)]">
        <NavBtn icon={<Home />} label="Dashboard" active={activeTab === 'dashboard'} onClick={() => onTabChange?.('dashboard')} />
        <NavBtn icon={<History />} label="History" active={activeTab === 'history'} onClick={() => onTabChange?.('history')} />
        <NavBtn icon={<CreditCard />} label="Pricing" active={activeTab === 'pricing'} onClick={() => onTabChange?.('pricing')} />
        <NavBtn icon={<Settings />} label="Settings" active={activeTab === 'settings'} onClick={() => {}} />
      </nav>
    )}
  </div>
);

const NavBtn = ({ icon, label, active, onClick }: any) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center gap-1 transition-all tap-highlight-transparent ${active ? 'text-secondary font-bold scale-110' : 'text-on-surface-variant/60'}`}
  >
    {icon}
    <span className="text-[10px] font-serif uppercase tracking-widest">{label}</span>
  </button>
);

export default function App() {
  const [step, setStep] = useState<AppStep>('onboarding');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [step]);

  const content = () => {
    switch (step) {
      case 'onboarding': return <Onboarding onNext={() => setStep('auth')} />;
      case 'auth': return <Auth onNext={() => setStep('dashboard')} />;
      case 'dashboard': return <Dashboard onScan={() => setStep('capture')} />;
      case 'capture': return <Capture onCaptured={() => setStep('progress')} />;
      case 'progress': return <Progress onComplete={() => setStep('report')} />;
      case 'report': return <Report onNext={() => setStep('letter')} />;
      case 'letter': return <Letter onHome={() => setStep('success')} />;
      case 'success': return <Success onHome={() => setStep('dashboard')} />; 
      case 'pricing': return <Pricing />;
      case 'history': return <HistoryScreen />;
      default: return <Dashboard onScan={() => setStep('capture')} />;
    }
  };

  const showNav = !['onboarding', 'auth', 'capture', 'progress'].includes(step);

  return (
    <Layout 
      onBack={!['dashboard', 'onboarding', 'pricing', 'history'].includes(step) ? () => setStep('dashboard') : undefined}
      showNav={showNav}
      activeTab={step === 'history' || step === 'pricing' ? step : 'dashboard'}
      onTabChange={(tab) => setStep(tab)}
    >
      <AnimatePresence mode="wait">
        <motion.div
           key={step}
           initial={{ opacity: 0, scale: 0.99 }}
           animate={{ opacity: 1, scale: 1 }}
           exit={{ opacity: 0, scale: 1.01 }}
           transition={{ duration: 0.3 }}
           className="flex-1 flex flex-col"
        >
          {content()}
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
