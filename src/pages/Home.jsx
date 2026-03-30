import React from 'react';
import { motion } from 'framer-motion';

const Home = ({ onNavigate }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-100 relative overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-teal-200 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            🏠 Profil Serli
          </motion.div>
          
          <div className="flex gap-6 items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => onNavigate('home')}
              className="text-teal-700 font-semibold hover:text-teal-600 transition-colors"
            >
              Home
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => onNavigate('profile')}
              className="text-teal-700 font-semibold hover:text-teal-600 transition-colors"
            >
              Tentang Saya
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => {
                onNavigate('profile');
                setTimeout(() => {
                  const element = document.getElementById('kontak-section');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="text-teal-700 font-semibold hover:text-teal-600 transition-colors"
            >
              Kontak
            </motion.button>

          </div>
        </div>
      </motion.nav>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center pt-20 px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-3xl"
        >
          {/* Profile Image */}
          <motion.div
            variants={scaleIn}
            className="mb-12"
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative inline-block"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full blur-2xl opacity-60"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <img
                src="/foto.jpeg"
                alt="Serli"
                className="relative w-48 h-48 rounded-full border-4 border-white shadow-2xl object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Greeting */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent"
          >
            Selamat Datang! 👋
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-3xl text-teal-700 font-semibold mb-4"
          >
            Saya adalah <span className="text-cyan-600">Serli Maharani Putri Yustina</span>
          </motion.p>

          {/* Role Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full text-sm font-bold shadow-lg">
              🎓 Mahasiswa Universitas Brawijaya
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-lg text-teal-800 mb-12 leading-relaxed"
          >
            Mahasiswa Teknologi Informasi dari Universitas Brawijaya yang passionate dalam menciptakan solusi digital yang indah dan fungsional. Saya mengubah ide menjadi pengalaman pengguna yang luar biasa.
          </motion.p>

          {/* Tags */}
          <motion.div
            variants={itemVariants}
            className="flex gap-3 justify-center flex-wrap mb-12"
          >
            <motion.span 
              whileHover={{ scale: 1.1, y: -3 }}
              className="px-5 py-2 bg-teal-500 text-white rounded-full text-sm font-semibold shadow-lg cursor-pointer transition-all"
            >
              💻 Coding
            </motion.span>
            <motion.span 
              whileHover={{ scale: 1.1, y: -3 }}
              className="px-5 py-2 bg-cyan-500 text-white rounded-full text-sm font-semibold shadow-lg cursor-pointer transition-all"
            >
              🎨 Design
            </motion.span>
            <motion.span 
              whileHover={{ scale: 1.1, y: -3 }}
              className="px-5 py-2 bg-teal-600 text-white rounded-full text-sm font-semibold shadow-lg cursor-pointer transition-all"
            >
              🎮 Gaming
            </motion.span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex gap-6 justify-center flex-wrap mb-32"
          >
            <motion.button
              whileHover={{ scale: 1.08, boxShadow: "0 25px 50px rgba(20,184,166,0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('profile')}
              className="px-10 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
            >
              Lihat Profil Lengkapku →
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-0 right-0 text-center text-teal-700 text-sm"
      >

        <p>© 2026 Serli Maharani Putri Yustina • Made with React & Framer Motion ✨</p>
      </motion.div>
    </div>
  );
};

export default Home;
