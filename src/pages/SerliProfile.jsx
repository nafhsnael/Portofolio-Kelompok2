import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Gunaake ini supoyo nyambung karo App.jsx

const SerliProfile = () => {
  const bio = "Halo! Saya Serli, mahasiswi Teknologi Informasi di Universitas Brawijaya yang passionate dalam UI/UX Design dan Frontend Development. Bagi saya, coding bukan sekadar baris perintah, melainkan sebuah seni untuk menciptakan solusi digital yang tidak hanya cantik secara visual, tetapi juga fungsional dan user-friendly. Saat ini, saya fokus mengasah kemampuan di ReactJS, Tailwind CSS, dan berbagai tools desain modern untuk membangun aplikasi web yang intuitif dan responsif. Saya percaya bahwa teknologi harus menciptakan pengalaman yang bermakna bagi setiap pengguna, dan saya berkomitmen untuk terus belajar dan berinovasi dalam setiap proyek.";

  // Varian-varian animasi
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.08, duration: 0.7 }
    })
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/serlimhrni', color: 'from-teal-500 to-teal-700', borderColor: 'border-teal-500', hoverColor: 'hover:from-teal-600 hover:to-teal-800' },
    { name: 'Email', icon: '📧', url: 'mailto:serlimhrni87@gmail.com', color: 'from-teal-500 to-teal-700', borderColor: 'border-teal-500', hoverColor: 'hover:from-teal-600 hover:to-teal-800' },
    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/serli-maharani-putri-yustina-41a1b4377', color: 'from-teal-500 to-teal-700', borderColor: 'border-teal-500', hoverColor: 'hover:from-teal-600 hover:to-teal-800' },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-teal-50 via-cyan-50 to-teal-100 relative overflow-hidden font-sans">
      
      {/* Menu Navigasi (Cocok karo style Serli tapi gunaake Link Router) */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-teal-200 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between text-teal-800">
          <Link to="/" className="text-2xl font-bold bg-linear-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
            🏠 Profil Serli
          </Link>
          <div className="flex gap-6 items-center font-semibold">
            <Link to="/" className="hover:text-teal-500 transition-colors">Home</Link>
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-teal-500 bg-transparent border-none cursor-pointer font-semibold">Tentang</button>
            <button 
              onClick={() => document.getElementById('kontak-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-teal-500 bg-transparent border-none cursor-pointer font-semibold"
            >
              Kontak
            </button>
          </div>
        </div>
      </motion.nav>

      <div className="min-h-screen flex justify-center items-center p-4 pt-24">
        {/* Dekorasi Animasi (Style Serli) */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-20"></div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full max-w-4xl relative z-10">
          
          {/* Header */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center mb-12">
            <motion.div variants={scaleIn} className="mb-8 inline-block relative">
              <div className="w-40 h-40 rounded-full bg-teal-500 flex items-center justify-center border-4 border-white shadow-xl overflow-hidden">
                {/* Foto Serli (Solusi bypass) */}
                <span className="text-6xl text-white font-black">S</span>
              </div>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-teal-900 mb-3">
              Serli Maharani Putri Yustina
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-teal-700 font-semibold">
              Mahasiswa Teknologi Informasi • T2F
            </motion.p>
          </motion.div>

          {/* Card Utama */}
          <motion.div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-teal-100 overflow-hidden">
            {/* Biodata */}
            <div className="p-8 md:p-12 border-b border-teal-100 bg-linear-to-b from-teal-50/50 to-white">
              <h2 className="text-2xl font-bold text-teal-800 mb-8 flex items-center gap-2">📋 Biodata Diri</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: 'Nama', value: 'Serli Maharani Putri Yustina', icon: '👤' },
                  { label: 'Kelas', value: 'T2F', icon: '🏫' },
                  { label: 'Prodi', value: 'Teknologi Informasi', icon: '📚' },
                  { label: 'Domisili', value: 'Bojonegoro, Jawa Timur', icon: '📍' },
                ].map((item, index) => (
                  <div key={index} className="p-4 bg-white rounded-2xl border border-teal-50 shadow-sm">
                    <p className="text-xs text-teal-500 font-bold uppercase">{item.icon} {item.label}</p>
                    <p className="text-teal-900 font-semibold">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tentang */}
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold text-teal-800 mb-6">💭 Tentang Saya</h2>
              <p className="text-teal-900 leading-relaxed text-justify text-lg mb-4">{bio}</p>
              <p className="text-teal-600 font-bold italic">Mari berteman dan berkolaborasi! 🚀</p>
            </div>

            {/* Kontak */}
            <div id="kontak-section" className="p-8 md:p-12 border-t border-teal-50 bg-teal-50/30">
              <h2 className="text-2xl font-bold text-teal-800 mb-8">📞 Kontak & Media Sosial</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.url} target="_blank" className={`flex items-center gap-3 px-6 py-3 rounded-2xl bg-linear-to-r ${social.color} text-white font-bold shadow-lg hover:scale-105 transition-transform`}>
                    <span>{social.icon}</span>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <p className="text-center mt-12 text-teal-700 text-sm font-semibold italic">
            © 2026 Serli Maharani Putri Yustina • Made with ✨
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SerliProfile;