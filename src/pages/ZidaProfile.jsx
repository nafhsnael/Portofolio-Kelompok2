import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bot, Terminal, Cpu, ArrowLeft } from 'lucide-react';

const ZidaProfile = () => {
  return (
    <div className="min-h-screen bg-[#0c0d18] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-600/20 blur-[100px]"></div>

      <Link to="/" className="fixed top-10 left-10 flex items-center gap-2 text-indigo-400 font-bold hover:text-indigo-300 z-50">
        <ArrowLeft size={20} /> Kembali
      </Link>

      <motion.div 
        animate={{ rotate: 360 }} 
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        className="mb-8 text-indigo-500/30 absolute"
      >
        <Cpu size={300} />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 bg-[#16182a]/80 backdrop-blur-xl p-12 rounded-[30px] border border-indigo-900 shadow-[0_0_50px_rgba(79,70,229,0.2)] max-w-md"
      >
        <div className="flex justify-center mb-6 text-indigo-400">
          <Terminal size={50} className="animate-pulse" />
        </div>
        <h1 className="text-5xl font-black text-white mb-2 tracking-tighter">BiGBOSS ZIDA <span className="text-indigo-500"></span></h1>
        <p className="text-indigo-300/60 font-mono text-xs mb-8 tracking-widest uppercase">System Initializing...</p>
        
        <div className="space-y-3">
          <div className="w-full bg-indigo-950 h-2 rounded-full overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-indigo-500 h-full w-1/2"
            ></motion.div>
          </div>
          <p className="text-indigo-200 text-sm font-semibold italic">"Deploying Profile Components: 85% Complete"</p>
        </div>
      </motion.div>

      <div className="mt-12 flex items-center gap-2 text-indigo-900 font-bold">
        <Bot size={20} />
        <span>AUTO-REPAIR BY RENDY SYSTEM</span>
      </div>
    </div>
  );
};

export default ZidaProfile;