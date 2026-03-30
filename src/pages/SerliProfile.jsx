import React from 'react';
import { motion } from 'framer-motion';
import '../styles/SerliProfile.css';

const SerliProfile = ({ onNavigate }) => {
  const bio = "Halo! Saya Serli, mahasiswi Teknologi Informasi di Universitas Brawijaya yang passionate dalam UI/UX Design dan Frontend Development. Bagi saya, coding bukan sekadar baris perintah, melainkan sebuah seni untuk menciptakan solusi digital yang tidak hanya cantik secara visual, tetapi juga fungsional dan user-friendly. Saat ini, saya fokus mengasah kemampuan di ReactJS, Tailwind CSS, dan berbagai tools desain modern untuk membangun aplikasi web yang intuitif dan responsif. Saya percaya bahwa teknologi harus menciptakan pengalaman yang bermakna bagi setiap pengguna, dan saya berkomitmen untuk terus belajar dan berinovasi dalam setiap proyek.";

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.7
      }
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
    {
      name: 'GitHub',
      icon: '🐙',
      url: 'https://github.com/serlimhrni',
      color: 'from-teal-500 to-teal-700',
      borderColor: 'border-teal-500',
      hoverColor: 'hover:from-teal-600 hover:to-teal-800',
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:serlimhrni87@gmail.com',
      color: 'from-teal-500 to-teal-700',
      borderColor: 'border-teal-500',
      hoverColor: 'hover:from-teal-600 hover:to-teal-800',
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/serli-maharani-putri-yustina-41a1b4377?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
      color: 'from-teal-500 to-teal-700',
      borderColor: 'border-teal-500',
      hoverColor: 'hover:from-teal-600 hover:to-teal-800',
    },
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-100 relative overflow-hidden">
      {/* Navigation Menu */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-teal-200 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => onNavigate && onNavigate('home')}
            className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent cursor-pointer"
          >
            🏠 Profil Serli
          </motion.div>
          
          <div className="flex gap-6 items-center">
            <motion.button
              onClick={() => onNavigate && onNavigate('home')}
              whileHover={{ scale: 1.1, color: "#0d9488" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-teal-700 font-semibold hover:text-teal-600 transition-colors bg-none border-none cursor-pointer"
            >
              Home
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, color: "#0d9488" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-teal-700 font-semibold hover:text-teal-600 transition-colors bg-none border-none cursor-pointer"
            >
              Tentang Saya
            </motion.button>
            <motion.button
              onClick={() => {
                const element = document.getElementById('kontak-section');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              whileHover={{ scale: 1.1, color: "#0d9488" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-teal-700 font-semibold hover:text-teal-600 transition-colors bg-none border-none cursor-pointer"
            >
              Kontak
            </motion.button>

          </div>
        </div>
      </motion.nav>

      {/* Main Content Container */}
      <div className="min-h-screen flex justify-center items-center p-4 pt-24">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="w-full max-w-4xl relative z-10"
      >
      
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <motion.div
            variants={scaleIn}
            className="mb-8 inline-block relative"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full blur-xl opacity-75"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <img
                src="/foto.jpeg"
                alt="Serli"
                className="w-40 h-40 rounded-full border-4 border-white shadow-lg object-cover"
              />
            </motion.div>
          </motion.div>
          
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-3"
          >
            Serli Maharani Putri Yustina
          </motion.h1>
          
          <motion.p
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-lg text-teal-700 font-semibold"
          >
            Mahasiswa Teknologi Informasi 
          </motion.p>
          
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
            className="flex gap-4 justify-center mt-6 flex-wrap"
          >
            <motion.span className="px-4 py-2 bg-teal-500 text-white rounded-full text-sm font-semibold shadow-lg" whileHover={{ y: -2 }}>
              💻 Coding
            </motion.span>
            <motion.span className="px-4 py-2 bg-cyan-500 text-white rounded-full text-sm font-semibold shadow-lg" whileHover={{ y: -2 }}>
              🎨 Design
            </motion.span>
            <motion.span className="px-4 py-2 bg-teal-600 text-white rounded-full text-sm font-semibold shadow-lg" whileHover={{ y: -2 }}>
              🎮 Gaming
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl border border-teal-100 overflow-hidden"
        >
          {/* Biodata Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="p-8 md:p-12 border-b border-teal-100 bg-gradient-to-b from-teal-50 to-white"
          >
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="text-3xl font-bold text-transparent bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text mb-8"
            >
              📋 Biodata Diri
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: 'Nama Lengkap', value: 'Serli Maharani Putri Yustina', icon: '👤' },
                 { label: 'Kelas', value: 'T2F', icon: '🏫' },
                { label: 'Prodi', value: 'Teknologi Informasi', icon: '📚' },
                { label: 'Universitas', value: 'Universitas Brawijaya', icon: '🎓' },
                { label: 'Domisili', value: 'Bojonegoro, Jawa Timur', icon: '📍' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ y: -5, boxShadow: "0 20px 30px rgba(20,184,166,0.2)" }}
                  className="p-5 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl border border-teal-200 hover:border-teal-400 cursor-pointer transition-all duration-300"
                >
                  <p className="text-teal-700 text-sm font-bold mb-2">{item.icon} {item.label}</p>
                  <p className="text-teal-900 font-semibold text-lg">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="p-8 md:p-12"
          >
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.75 }}
              className="text-3xl font-bold text-transparent bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text mb-6"
            >
              💭 Tentang Saya
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
              className="text-teal-900 leading-relaxed mb-4 text-justify text-lg"
            >
              {bio} Saya orang yang antusias belajar hal baru, senang berkolaborasi dalam tim, dan selalu berusaha memberikan sentuhan kreatif di setiap proyek. Di masa depan, saya bercita-cita menjadi profesional IT yang mampu membawa perubahan positif melalui inovasi teknologi yang inklusif dan solutif.
            </motion.p>
            
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.9 }}
              className="text-teal-700 leading-relaxed text-justify font-semibold text-lg"
            >
              Mari berteman dan berkolaborasi menciptakan karya luar biasa! 🚀
            </motion.p>
          </motion.div>

          {/* Contact & Social Media Section */}
          <motion.div
            id="kontak-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
            className="p-8 md:p-12 border-t border-teal-100 bg-gradient-to-b from-white to-teal-50"
          >
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.85 }}
              className="text-3xl font-bold text-transparent bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text mb-8"
            >
              📞 Kontak & Media Sosial
            </motion.h2>
            
            {/* Social Media Grid */}
            <div className="flex justify-center gap-6 flex-nowrap overflow-x-auto">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -6, boxShadow: "0 25px 40px rgba(20,184,166,0.3)" }}
                  className={`group px-8 py-6 bg-gradient-to-br ${social.color} rounded-xl shadow-lg border-2 ${social.borderColor} cursor-pointer transition-all duration-300 ${social.hoverColor} flex-shrink-0`}
                  title={social.description}
                >
                  <div className="flex items-center gap-5">
                    <span className="text-5xl flex-shrink-0">{social.icon}</span>
                    <h3 className="text-lg font-bold text-white whitespace-nowrap">{social.name}</h3>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>


        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="text-center mt-12 text-teal-700 text-sm font-semibold"
        >
          <p>© 2026 Serli Maharani Putri Yustina • Made with React & Framer Motion ✨</p>
        </motion.div>
      </motion.div>
      </div>
    </div>
  );
};

export default SerliProfile;