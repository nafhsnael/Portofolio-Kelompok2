import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import serliImg from '../assets/fotoserli.jpeg';

const SerliProfile = () => {
  // Ref kanggo navigasi scroll
  const homeRef = useRef(null);
  const tentangRef = useRef(null);
  const kontakRef = useRef(null);

  // Fungsi scroll otomatis sing luwih munggah (Offset -100)
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 100, 
      behavior: 'smooth',
    });
  };

  const bio = "Halo! Saya Serli, mahasiswi Teknologi Informasi di Universitas Brawijaya yang passionate dalam UI/UX Design dan Frontend Development. Bagi saya, coding bukan sekadar baris perintah, melainkan sebuah seni untuk menciptakan solusi digital yang tidak hanya cantik secara visual, tetapi juga fungsional dan user-friendly.";

  return (
    <div className="min-h-screen bg-teal-50/30 font-sans selection:bg-teal-200">
      
      {/* NAVBAR FIXED */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-teal-100 px-6 py-4 flex justify-between items-center shadow-sm">
        <Link to="/" className="text-2xl font-bold text-teal-600 flex items-center gap-2 hover:scale-105 transition-transform no-underline">
          🏠 Profil Serli
        </Link>
        <div className="flex gap-8 font-bold text-teal-800">
          <button onClick={() => scrollToSection(homeRef)} className="hover:text-teal-500 cursor-pointer transition-colors uppercase text-xs tracking-widest bg-transparent border-none">Home</button>
          <button onClick={() => scrollToSection(tentangRef)} className="hover:text-teal-500 cursor-pointer transition-colors uppercase text-xs tracking-widest bg-transparent border-none">Tentang Saya</button>
          <button onClick={() => scrollToSection(kontakRef)} className="hover:text-teal-500 cursor-pointer transition-colors uppercase text-xs tracking-widest border border-teal-500 px-4 py-1 rounded-full bg-transparent font-bold">Kontak</button>
        </div>
      </nav>

      {/* --- SECTION 1: HOME (SELAMAT DATANG) --- */}
      <section ref={homeRef} className="min-h-screen flex flex-col items-center justify-center pt-10 px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="relative inline-block mb-6">
             <div className="absolute inset-0 bg-teal-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
             <img src={serliImg} alt="Serli" className="relative w-48 h-48 rounded-full border-4 border-white shadow-2xl object-cover" />
          </div>
          <h1 className="text-5xl font-black mb-4 text-teal-600 tracking-tighter">Selamat Datang! 👋</h1>
          <p className="text-xl text-teal-700 font-bold mb-8">Saya adalah <span className="italic underline decoration-teal-300">Serli Maharani Putri Yustina</span></p>
          <button 
            onClick={() => scrollToSection(tentangRef)}
            className="px-8 py-3 bg-teal-600 text-white font-black rounded-2xl shadow-xl hover:bg-teal-500 transition-all uppercase tracking-widest text-xs border-none cursor-pointer"
          >
            Lihat Profil Lengkapku ↓
          </button>
        </motion.div>
      </section>

      {/* --- SECTION 2: TENTANG SAYA (BIODATA) - WIS DIATASNO --- */}
      <section ref={tentangRef} className="min-h-screen flex items-start justify-center p-6 pt-24 bg-white/60">
        <div className="max-w-4xl w-full bg-white rounded-[2.5rem] shadow-2xl border border-teal-50 p-8 md:p-12 md:pt-10">
          <h2 className="text-3xl font-black text-teal-800 mb-8 flex items-center gap-3">
             <span className="bg-teal-100 p-2 rounded-xl text-2xl">📋</span> Biodata Diri
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
             {[
               { label: 'Nama Lengkap', value: 'Serli Maharani Putri Yustina', icon: '👤' },
               { label: 'Kelas', value: 'T2F', icon: '🏫' },
               { label: 'Prodi', value: 'Teknologi Informasi', icon: '📚' },
               { label: 'Domisili', value: 'Bojonegoro, Jawa Timur', icon: '📍' }
             ].map((item, i) => (
               <div key={i} className="p-5 bg-teal-50/30 rounded-2xl border border-teal-100 hover:scale-105 transition-transform shadow-sm">
                 <p className="text-[10px] font-black text-teal-500 uppercase mb-1 tracking-widest">{item.icon} {item.label}</p>
                 <p className="text-lg font-bold text-teal-900">{item.value}</p>
               </div>
             ))}
          </div>
          <h2 className="text-2xl font-black text-teal-800 mb-4 italic underline decoration-teal-200">💭 Tentang Saya</h2>
          <p className="text-lg text-teal-900 leading-relaxed text-justify mb-2 font-medium italic">"{bio}"</p>
        </div>
      </section>

      {/* --- SECTION 3: KONTAK --- */}
      <section ref={kontakRef} className="min-h-[70vh] flex flex-col items-center justify-center p-6 bg-teal-50/40">
          <h2 className="text-3xl font-black text-teal-800 mb-12 flex items-center justify-center gap-3">
             <span className="bg-white p-2 rounded-xl shadow-sm text-2xl">📞</span> Kontak & Media Sosial
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
             <a href="https://github.com/serlimhrni" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-5 bg-teal-700 text-white rounded-2xl font-black hover:-translate-y-2 transition-all shadow-lg no-underline">
               <span className="text-2xl">🐙</span> GitHub
             </a>
             <a href="mailto:serlimhrni87@gmail.com" className="flex items-center gap-3 px-8 py-5 bg-teal-500 text-white rounded-2xl font-black hover:-translate-y-2 transition-all shadow-lg no-underline">
               <span className="text-2xl">📧</span> Email
             </a>
             <a href="https://www.linkedin.com/in/serli-maharani-putri-yustina-41a1b4377" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-5 bg-teal-600 text-white rounded-2xl font-black hover:-translate-y-2 transition-all shadow-lg no-underline">
               <span className="text-2xl">💼</span> LinkedIn
             </a>
          </div>
      </section>

      <footer className="py-8 text-center text-teal-600 font-bold italic tracking-widest text-[10px] uppercase border-t border-teal-100 bg-white/80">
        © 2026 Serli Maharani Putri Yustina • Made with React & Framer Motion ✨
      </footer>
    </div>
  );
};

export default SerliProfile;