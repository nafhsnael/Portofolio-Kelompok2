import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cloud, Hammer, ArrowLeft } from 'lucide-react';

const ZalfaaProfile = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-6 text-center">
      <Link to="/" className="fixed top-10 left-10 flex items-center gap-2 text-blue-600 font-bold hover:underline">
        <ArrowLeft size={20} /> Kembali
      </Link>

      <motion.div 
        animate={{ y: [0, -20, 0] }} 
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="mb-8 text-blue-400"
      >
        <Cloud size={120} />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-10 rounded-[40px] shadow-2xl border border-blue-100 max-w-lg"
      >
        <div className="flex justify-center mb-4 text-yellow-500">
          <Hammer size={40} className="animate-bounce" />
        </div>
        <h1 className="text-4xl font-black text-blue-600 mb-4">ZALFAA PROFILE</h1>
        <div className="h-1 w-20 bg-blue-500 mx-auto mb-6 rounded-full"></div>
        <p className="text-slate-500 text-lg leading-relaxed font-medium">
          "Halo Pak Dosen! Profil Zalfaa sedang dalam tahap finalisasi estetika. <br /> 
          <span className="text-blue-400 italic text-sm">Update coming soon tomorrow morning!</span>"
        </p>
      </motion.div>

      <p className="mt-10 text-blue-300 font-mono text-xs uppercase tracking-[0.2em]">Maintenance Mode by Rendy</p>
    </div>
  );
};

export default ZalfaaProfile;