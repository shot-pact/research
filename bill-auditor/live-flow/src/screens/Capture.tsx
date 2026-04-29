import { useState, useEffect } from 'react';
import { Scan, X, Search, MoreHorizontal, Zap, Camera, Grid, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Capture = ({ onCaptured }: { onCaptured: () => void }) => {
  const [isScanning, setIsScanning] = useState(false);
  const [flash, setFlash] = useState(false);

  return (
    <div className="flex-1 bg-black relative flex flex-col items-center justify-between overflow-hidden">
      {/* Viewfinder Background Simulation */}
      <div className="absolute inset-0 bg-[#0A0A0A]">
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/felt.png')]"></div>
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full bg-gradient-to-b from-black via-transparent to-black opacity-60"></div>
            <p className="text-white/10 font-serif italic text-2xl tracking-[0.2em] transform -rotate-12">SECURE OPTICAL SCANNER ACTIVE</p>
         </div>
      </div>
      
      {/* Top Controls */}
      <div className="relative z-20 w-full px-6 pt-12 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent pb-12">
         <button className="text-white p-2 rounded-full hover:bg-white/10 transition-colors"><X className="w-6 h-6" /></button>
         <div className="flex items-center gap-6">
            <button onClick={() => setFlash(!flash)} className={`p-2 rounded-full transition-colors ${flash ? 'text-secondary bg-secondary/10' : 'text-white/60'}`}><Zap className="w-5 h-5" /></button>
            <button className="text-white/60 p-2 rounded-full"><Grid className="w-5 h-5" /></button>
            <button className="text-white/60 p-2 rounded-full"><HelpCircle className="w-5 h-5" /></button>
         </div>
      </div>

      {/* Viewfinder Brackets */}
      <div className="relative z-10 w-full max-w-sm aspect-[3/4] flex items-center justify-center px-4">
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-white/60 rounded-tl-[40px]"></div>
        <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-white/60 rounded-tr-[40px]"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-white/60 rounded-bl-[40px]"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-white/60 rounded-br-[40px]"></div>
        
        <AnimatePresence>
          {isScanning && (
            <motion.div 
              initial={{ top: '0%' }}
              animate={{ top: '100%' }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              className="absolute left-0 w-full h-1.5 bg-secondary shadow-[0_0_30px_rgba(153,70,42,1)] z-20"
            ></motion.div>
          )}
        </AnimatePresence>

        <div className="text-center space-y-4">
           <div className="w-16 h-16 border-2 border-white/20 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-secondary rounded-full animate-ping"></div>
           </div>
           <p className="text-white/40 text-[10px] uppercase font-bold tracking-[0.4em]">Autofocusing...</p>
        </div>
      </div>

      <div className="relative z-20 w-full bg-gradient-to-t from-black to-transparent pt-12 pb-16 px-8 flex flex-col items-center gap-10">
        {/* Session History Thumbnails */}
        <div className="flex gap-4 w-full justify-center opacity-60">
           <Thumbnail />
           <Thumbnail />
           <div className="w-14 h-18 rounded-lg border-2 border-dashed border-white/20 flex items-center justify-center">
              <Plus className="w-4 h-4 text-white/20" />
           </div>
        </div>

        <div className="flex items-center justify-between w-full max-w-sm px-4">
          <button className="w-14 h-14 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/60 hover:bg-white/10 transition-all">
            <Camera className="w-6 h-6" />
          </button>
          
          <button 
            onClick={() => {
              setIsScanning(true);
              setTimeout(onCaptured, 2500);
            }}
            className="w-24 h-24 rounded-full border-4 border-white flex items-center justify-center active:scale-[0.85] transition-all relative group"
          >
            <div className="w-20 h-20 bg-white rounded-full group-hover:scale-95 transition-transform"></div>
            <div className="absolute inset-0 rounded-full border-2 border-secondary scale-110 opacity-0 group-active:opacity-100 transition-all group-active:scale-125"></div>
          </button>

          <button className="w-14 h-14 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/60 hover:bg-white/10 transition-all">
            <MoreHorizontal className="w-6 h-6" />
          </button>
        </div>
        
        <p className="text-white/30 text-[10px] uppercase font-bold tracking-[0.3em]">Align bill edges for precise extraction</p>
      </div>

      {flash && <div className="absolute inset-0 bg-white z-50 pointer-events-none animate-[flash_0.2s_ease-out]"></div>}
    </div>
  );
};

const Thumbnail = () => (
   <div className="w-14 h-18 rounded-lg bg-white/10 border border-white/20 overflow-hidden relative group cursor-pointer hover:border-secondary transition-colors">
      <div className="absolute inset-0 flex flex-col p-1 space-y-0.5">
         <div className="h-0.5 w-full bg-white/20"></div>
         <div className="h-0.5 w-4/5 bg-white/20"></div>
         <div className="h-0.5 w-full bg-white/20"></div>
      </div>
      <div className="absolute bottom-1 right-1 w-2 h-2 bg-secondary rounded-full shadow-lg"></div>
   </div>
);

const Plus = ({ className }: { className?: string }) => (
   <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
   </svg>
);
