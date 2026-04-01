import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import zidaImg from '../../assets/zida.jpeg'; 

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const ZidaProfile = () => {
  const homeRef = useRef(null);
  const bioRef = useRef(null);
  const skillRef = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 80,
      behavior: 'smooth',
    });
  };

  const biodataRaw = {
    nama: "Zida",
    greeting: "Hi, Saya Zida",
    nim: "253140707111084",
    kelas: "T2F",
    prodi: "D3 Teknologi Informasi",
    universitas: "Universitas Brawijaya",
    domisili: "Trenggalek, Jawa Timur",
    deskripsiPanjang: "Halo! Saya Kasiva Imtiyas Zaidah Iftinan, seorang mahasiswi yang saat ini menempuh pendidikan di program studi Teknologi Informasi, Universitas Brawijaya. Ketertarikan saya pada dunia teknologi sebenarnya bermula dari rasa penasaran yang mendalam tentang bagaimana sebuah aplikasi atau situs web yang cantik dan fungsional dapat tercipta hanya dari baris-baris kode. Bagi saya, coding bukan hanya sekadar urusan teknis, melainkan sebuah seni untuk memecahkan masalah dan menciptakan solusi digital yang dapat memberikan dampak positif bagi kehidupan orang banyak. Selama kuliah di T2F, saya terus mengasah kemampuan saya di bidang pengembangan web, khususnya menggunakan teknologi React, TypeScript, dan Tailwind CSS. Meskipun masih dalam tahap belajar, saya memiliki semangat yang membara untuk terus bereksplorasi, belajar dari kesalahan, dan berinovasi dalam setiap proyek yang saya kerjakan. Saya percaya bahwa dengan komitmen yang kuat untuk terus belajar, saya dapat menjadi Frontend Engineer yang handal di masa depan dan berkontribusi secara signifikan dalam ekosistem teknologi Indonesia."
  };

  const skills = [
    { name: "ReactJS", level: "Intermediate", icon: "⚛️" },
    { name: "TypeScript", level: "Beginner", icon: "🔷" },
    { name: "Tailwind CSS", level: "Intermediate", icon: "🎨" },
    { name: "Node.js", level: "Beginner", icon: "🟢" },
    { name: "UI/UX Design", level: "Learner", icon: "🖥️" },
    { name: "GitHub", level: "Intermediate", icon: "🐙" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 text-slate-900 relative overflow-hidden">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-black bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-2 hover:scale-105 transition-all no-underline">
          <span className="text-2xl font-black italic">Z</span> Profil
        </Link>
        <div className="flex gap-8 font-bold text-slate-600">
          <button onClick={() => scrollToSection(homeRef)} className="hover:text-indigo-600 cursor-pointer transition-colors uppercase text-xs tracking-widest bg-transparent border-none font-bold">Home</button>
          <button onClick={() => scrollToSection(bioRef)} className="hover:text-indigo-600 cursor-pointer transition-colors uppercase text-xs tracking-widest bg-transparent border-none font-bold">Biodata</button>
          <button onClick={() => scrollToSection(skillRef)} className="hover:text-indigo-600 cursor-pointer transition-colors uppercase text-xs tracking-widest bg-transparent border-none font-bold">Keahlian</button>
          <Link to="/" className="hover:bg-indigo-600 hover:text-white transition-all uppercase text-xs tracking-widest no-underline border border-indigo-600 px-4 py-1 rounded-full text-indigo-600 font-bold">Group</Link>
        </div>
      </nav>

      {/* SECTION 1: HOME (GREETING) */}
      <section ref={homeRef} className="min-h-screen flex flex-col items-center justify-center pt-24 px-6 text-center bg-white relative z-10">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <motion.div variants={scaleIn} className="relative inline-block mb-10 group">
             <div className="absolute inset-0 bg-indigo-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
             <img src={zidaImg} alt="Zida" className="relative w-56 h-56 rounded-full border-4 border-white shadow-xl object-cover hover:scale-105 transition-transform duration-500" />
          </motion.div>
          
          <motion.p variants={fadeInUp} className="text-indigo-600 font-extrabold tracking-[0.3em] uppercase text-sm mb-4">Portofolio Pribadi</motion.p>
          
          {/* REVISI: Kotak Ilang, "Hi, Saya" dadi Ireng (Black) */}
          <motion.h1 variants={fadeInUp} className="text-7xl font-black mb-6 tracking-tighter leading-tight">
            <span className="text-black">Hi, Saya </span> 
            <span className="text-indigo-600">Zida</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="max-w-2xl text-xl text-slate-500 leading-relaxed mb-12 italic">
            "Saya seorang mahasiswi <span className="text-indigo-600 font-semibold uppercase">{biodataRaw.universitas}</span> yang sedang mengeksplorasi dunia pengembangan web dengan React, TypeScript, dan Tailwind CSS."
          </motion.p>
          
          <motion.button 
            variants={fadeInUp}
            onClick={() => scrollToSection(bioRef)}
            className="px-12 py-4 bg-indigo-600 text-white font-bold rounded-full shadow-lg hover:shadow-indigo-200 transition-all uppercase tracking-widest text-xs border-none cursor-pointer"
          >
            Explore My Bio 👇
          </motion.button>
        </motion.div>
      </section>

      {/* SECTION 2: BIODATA */}
      <section ref={bioRef} className="min-h-screen flex items-center justify-center p-6 bg-white relative z-10 border-t border-slate-50">
        <div className="max-w-6xl w-full">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-4xl font-black text-slate-800 mb-16 text-center tracking-tight border-b-2 border-indigo-100 pb-4 mx-auto flex justify-center max-w-sm uppercase">📋 Biodata Diri</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
               <h3 className="text-xl font-bold text-indigo-600 mb-8 uppercase tracking-widest border-l-4 border-indigo-600 pl-4">Informasi Dasar</h3>
               <div className="space-y-6">
                  {[
                    { label: 'Nama Lengkap', value: 'Kasiva Imtiyas Zaidah Iftinan' },
                    { label: 'NIM', value: biodataRaw.nim },
                    { label: 'Kelas', value: biodataRaw.kelas },
                    { label: 'Program Studi', value: biodataRaw.prodi },
                    { label: 'Domisili', value: biodataRaw.domisili }
                  ].map((item, i) => (
                    <div key={i} className="pb-4 border-b border-slate-50">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-md font-bold text-slate-700">{item.value}</p>
                    </div>
                  ))}
               </div>
             </motion.div>
             
             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="p-10 bg-indigo-600 rounded-[2.5rem] text-white shadow-2xl flex flex-col justify-center relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px]"></div>
               <h3 className="text-xl font-bold mb-6 flex items-center gap-3 tracking-widest uppercase relative z-10">
                 <span className="text-3xl">💭</span> Tentang Saya
               </h3>
               <p className="leading-relaxed text-indigo-50 text-justify italic text-sm font-medium relative z-10">
                 "{biodataRaw.deskripsiPanjang}"
               </p>
               <p className="mt-8 text-white font-black italic relative z-10">Mari berteman dan berkolaborasi! 🚀</p>
             </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: KEAHLIAN */}
      <section ref={skillRef} className="min-h-screen p-6 bg-white relative z-10 flex flex-col items-center justify-center border-t border-slate-50">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-4xl font-black text-slate-800 mb-16 text-center tracking-tight border-b-2 border-indigo-100 pb-4 mx-auto max-w-sm uppercase">🛠️ Keahlian</motion.h2>
        <div className="max-w-5xl w-full grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -8, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
              className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center transition-all group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{skill.icon}</div>
              <h3 className="text-md font-bold text-slate-800 mb-1 uppercase tracking-tighter">{skill.name}</h3>
              <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-slate-400 text-[10px] font-bold uppercase tracking-[0.4em] border-t border-slate-100 bg-white">
        <p>© 2026 {biodataRaw.nama} • {biodataRaw.prodi} • {biodataRaw.universitas}</p>
        <p className="mt-3 text-slate-300 normal-case font-medium italic"></p>
      </footer>
    </div>
  );
};

export default ZidaProfile;