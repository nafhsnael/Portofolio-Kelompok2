import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// ==================== IMPOR KOMPONEN PROFIL ====================
// Menggunakan capital letters & .jsx extension sesuai folder structure di sidebar
// Path: src/pages/[FolderName]/[FileName].jsx

// Naila Profile - src/pages/Naila/Portofolio.jsx
import NailaProfile from './pages/Naila/Portofolio.jsx';

// Serli Profile - src/pages/SerliProfile.jsx (di root pages, bukan subfolder)
import SerliProfile from './pages/SerliProfile.jsx';

// Zalfaa Profile - src/pages/Zalfaa/App.jsx (Capital Z + dua 'a')
import ZalfaaProfile from './pages/Zalfaa/App.jsx';

// Zida Profile - src/pages/Zida/App.jsx (Capital Z)
import ZidaProfile from './pages/Zida/App.jsx';

// ==================== IMPOR ASET FOTO ====================
// Semua foto menggunakan format .jpeg
// Path: src/assets/[FileName].jpeg (nama file PERSIS sesuai yang ada)

import fotoNaila from './assets/naila.jpeg';
import fotoSerli from './assets/fotoserli.jpeg';
import fotoZalfaa from './assets/zalfa.jpeg';
import fotoZida from './assets/zida.jpeg';

// ==================== KOMPONEN KARTU PROFIL ====================
// Komponen yang menampilkan kartu profil individual dengan foto, nama, dan tombol navigasi
const ProfileCard = ({ name, color, route, photo, bgGlow }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.08, y: -10 }}
      className={`relative group cursor-pointer`}
    >
      {/* Efek cahaya (Glow Effect) */}
      <div
        className={`absolute inset-0 ${bgGlow} rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-300`}
      ></div>

      {/* Kartu Utama */}
      <div className={`relative ${color} rounded-3xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-xl hover:border-white/40 transition-all duration-300`}>
        {/* Kontainer Padding */}
        <div className="p-8 text-center h-full flex flex-col items-center justify-center">
          {/* Avatar - Foto Profil */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-32 h-32 rounded-full mb-6 overflow-hidden border-4 border-white/30 shadow-lg"
          >
            <img
              src={photo}
              alt={name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Nama Anggota */}
          <h3 className="text-3xl font-black text-white uppercase tracking-wider mb-2">
            {name}
          </h3>
          <p className="text-white/70 text-sm font-mono mb-6">Kelompok 2 - T2F</p>

          {/* Tombol Navigasi */}
          <Link
            to={route}
            className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/40 px-8 py-3 rounded-full font-bold text-white transition-all duration-300 border border-white/30 backdrop-blur-sm"
          >
            LIHAT PROFIL
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

// ==================== KOMPONEN UTAMA APP ====================
function App() {
  // ======== DATA ANGGOTA KELOMPOK ========
  // Konfigurasi untuk 4 anggota dengan warna dan route berbeda
  // Anggota: Naila, Serli, Zalfaa, Zida
  const daftarProfil = [
    {
      name: 'Naila',
      route: '/naila',
      color: 'bg-gradient-to-br from-purple-600 to-purple-800',
      photo: fotoNaila,
      bgGlow: 'bg-purple-500/30'
    },
    {
      name: 'Serli',
      route: '/serli',
      color: 'bg-gradient-to-br from-pink-600 to-pink-800',
      photo: fotoSerli,
      bgGlow: 'bg-pink-500/30'
    },
    {
      name: 'Zalfaa',
      route: '/zalfaa',
      color: 'bg-gradient-to-br from-blue-600 to-blue-800',
      photo: fotoZalfaa,
      bgGlow: 'bg-blue-500/30'
    },
    {
      name: 'Zida',
      route: '/zida',
      color: 'bg-gradient-to-br from-indigo-600 to-indigo-800',
      photo: fotoZida,
      bgGlow: 'bg-indigo-500/30'
    },
  ];

  return (
    <Router>
      <Routes>
        {/* ============ HALAMAN UTAMA (LANDING PAGE) ============ */}
        <Route path="/" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden"
          >
            {/* Efek Background Animasi */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
              <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
            </div>

            {/* Kontainer Utama */}
            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
              {/* Bagian Header */}
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-center mb-16"
              >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 tracking-tighter uppercase italic leading-tight">
                  Project <span className="bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Kelompok 2</span>
                </h1>
                <p className="text-slate-400 font-mono uppercase tracking-widest text-xs sm:text-sm mb-6">
                  Teknologi Informasi - Kelas T2F
                </p>
                <div className="w-32 h-1 bg-linear-to-r from-purple-500 via-blue-500 to-teal-500 mx-auto rounded-full"></div>
              </motion.div>

              {/* Grid Kartu Profil (4 Anggota: Naila, Serli, Zalfaa, Zida) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="w-full max-w-7xl"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {daftarProfil.map((profil, index) => (
                    <motion.div
                      key={profil.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * index + 0.5, duration: 0.6 }}
                    >
                      <ProfileCard {...profil} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Footer - Informasi Tambahan */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-16 text-center"
              >
                <p className="text-slate-500 text-xs sm:text-sm font-mono">
                  © 2026 Project Kelompok 2 - T2F | Teknologi Informasi - Universitas Brawijaya
                </p>
              </motion.div>
            </div>
          </motion.div>
        } />

        {/* ============ RUTE PROFIL INDIVIDUAL ============ */}
        <Route path="/naila" element={<NailaProfile />} />
        <Route path="/serli" element={<SerliProfile />} />
        <Route path="/zalfaa" element={<ZalfaaProfile />} />
        <Route path="/zida" element={<ZidaProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
