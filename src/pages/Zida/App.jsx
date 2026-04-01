import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Hash, Book, MapPin, Mail, Phone, Code, Award } from 'lucide-react';

// ==================== IMPORT ASET (FOTO) ====================
// Impor foto Zida dari folder assets
// Path: ../../assets/ (naik 2 level dari pages/Zida/)
import fotoZida from '../../assets/zida.jpeg';

// ==================== KOMPONEN PROFIL ZIDA ====================
// Halaman profil lengkap untuk Zida (253140707111084) dengan desain Glassmorphism
const ZidaProfile = () => {
  // ======== DATA DIRI ZIDA ========
  // Informasi biodata lengkap sesuai data akademik
  const dataDiri = {
    nama: 'Zida',
    nim: '253140707111084',
    kelas: 'T2F',
    domisili: 'TRENGGALEK',
    universitas: 'Universitas Brawijaya',
    jurusan: 'Teknologi Informasi',
    email: 'zida.student@ub.ac.id',
    noTelepon: '+62 812-xxxx-xxxx',
    foto: fotoZida,
  };

  // ======== DAFTAR KARTU INFORMASI ========
  // Array untuk menampilkan informasi dalam kartu berwarna dengan ikon Lucide-React
  const daftarInformasi = [
    {
      ikon: User,
      label: 'Nama Lengkap',
      value: dataDiri.nama,
      warna: 'from-purple-500 to-purple-700',
    },
    {
      ikon: Hash,
      label: 'Nomor Induk Mahasiswa',
      value: dataDiri.nim,
      warna: 'from-blue-500 to-blue-700',
    },
    {
      ikon: Book,
      label: 'Kelas',
      value: dataDiri.kelas,
      warna: 'from-indigo-500 to-indigo-700',
    },
    {
      ikon: MapPin,
      label: 'Asal Domisili',
      value: dataDiri.domisili,
      warna: 'from-cyan-500 to-cyan-700',
    },
    {
      ikon: Mail,
      label: 'Alamat Email',
      value: dataDiri.email,
      warna: 'from-green-500 to-green-700',
    },
    {
      ikon: Phone,
      label: 'Nomor Telepon',
      value: dataDiri.noTelepon,
      warna: 'from-orange-500 to-orange-700',
    },
  ];

  // ======== DAFTAR KEAHLIAN ========
  // Menampilkan keahlian dan tingkat kompetensi Zida
  const daftarKeahlian = [
    { nama: 'React.js', level: 'Menengah' },
    { nama: 'Tailwind CSS', level: 'Mahir' },
    { nama: 'JavaScript', level: 'Menengah' },
    { nama: 'Vite', level: 'Pemula' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-linear-to-br from-indigo-950 via-purple-900 to-indigo-950 text-white p-4 sm:p-8"
    >
      {/* Efek Background Animasi */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      {/* Kontainer Utama */}
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* ============ TOMBOL KEMBALI KE BERANDA ============ */}
        {/* Tombol navigasi untuk kembali ke halaman utama */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full font-bold transition-all border border-white/20 backdrop-blur-sm text-sm sm:text-base hover:scale-105 duration-300"
          >
            <ArrowLeft size={20} />
            ← KEMBALI KE BERANDA
          </Link>
        </motion.div>

        {/* ============ BAGIAN HEADER PROFIL ============ */}
        {/* Header dengan judul dan garis dekoratif */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-2 uppercase italic tracking-tighter">
            {dataDiri.nama} <span className="text-cyan-400">Profile</span>
          </h1>
          <p className="text-indigo-200 font-mono uppercase tracking-widest text-xs sm:text-sm mb-6">
            Mahasiswa Teknologi Informasi Kelas T2F
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* ============ KARTU PROFIL UTAMA (GLASSMORPHISM) ============ */}
        {/* Desain kartu utama dengan efek backdrop-blur dan border transparan */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-linear-to-br from-white/10 to-white/5 rounded-3xl p-8 sm:p-12 backdrop-blur-lg border border-white/20 shadow-2xl mb-8"
        >
          {/* Avatar dan Nama Section */}
          {/* Menampilkan foto profil Zida dan informasi dasar */}
          <div className="flex flex-col items-center mb-10 sm:mb-12">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-lg mb-6 border-4 border-indigo-400/50"
            >
              {/* Foto Profil dengan efek border indigo */}
              <img
                src={dataDiri.foto}
                alt={dataDiri.nama}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-wider">{dataDiri.nama}</h2>
            <p className="text-indigo-300 text-lg mt-2 font-mono">Kelas {dataDiri.kelas}</p>
            <p className="text-indigo-400 text-sm mt-1">{dataDiri.universitas}</p>
          </div>

          {/* ============ GRID INFORMASI DIRI (6 KARTU) ============ */}
          {/* Menampilkan 6 kartu informasi biodata dengan ikon dan gradien warna */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8"
          >
            {daftarInformasi.map((kartu, index) => {
              const IconComponent = kartu.ikon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.5 }}
                  className={`bg-linear-to-br ${kartu.warna} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer backdrop-blur-sm border border-white/20`}
                >
                  <div className="flex items-start gap-4">
                    {/* Ikon dengan background semi-transparan */}
                    <div className="bg-white/20 p-3 rounded-xl shrink-0 backdrop-blur-sm">
                      <IconComponent size={28} className="text-white" />
                    </div>
                    {/* Label dan Value */}
                    <div className="flex-1 min-w-0">
                      <p className="text-white/70 text-xs sm:text-sm uppercase font-semibold tracking-widest">
                        {kartu.label}
                      </p>
                      <p className="text-white font-bold text-sm sm:text-lg mt-2 wrap-break-word">
                        {kartu.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* ============ BAGIAN KEAHLIAN ============ */}
        {/* Card yang menampilkan keahlian dan kompetensi teknis Zida */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-linear-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-6 sm:p-8 border border-white/10 backdrop-blur-sm mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Code size={28} className="text-cyan-400" />
            <h3 className="text-2xl font-bold uppercase">Keahlian & Kompetensi</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {daftarKeahlian.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * index + 0.7 }}
                className="bg-white/10 rounded-xl p-4 border border-white/20 text-center hover:bg-white/20 hover:border-white/40 transition-all backdrop-blur-sm"
              >
                <p className="font-bold text-sm sm:text-base">{skill.nama}</p>
                <p className="text-indigo-300 text-xs sm:text-sm mt-1">{skill.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ============ BAGIAN TENTANG SAYA ============ */}
        {/* Section biografi lengkap Zida dalam Bahasa Indonesia */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-linear-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl p-6 sm:p-8 border border-white/10 backdrop-blur-sm mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Award size={28} className="text-purple-400" />
            <h3 className="text-2xl font-bold uppercase">Tentang Saya</h3>
          </div>
          <p className="text-indigo-100 leading-relaxed text-sm sm:text-base">
            Saya adalah seorang mahasiswa Program Studi Teknologi Informasi di Universitas Brawijaya, Fakultas Vokasi, 
            Kelas T2F, yang berasal dari Kabupaten Trenggalek. Saya memiliki antusiasme tinggi dalam pengembangan web 
            dan teknologi modern. Saat ini saya sedang mendalami React.js, Tailwind CSS, dan berbagai tools pengembangan 
            aplikasi web yang inovatif. Saya berkomitmen untuk terus belajar dan mengembangkan kemampuan teknis saya 
            dalam setiap proyek, serta aktif berkontribusi dalam kelompok proyek akademik.
          </p>
        </motion.div>

        {/* ============ FOOTER PROFIL ============ */}
        {/* Footer dengan informasi copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-indigo-400 text-xs sm:text-sm font-mono"
        >
          © 2026 Profile Zida | Universitas Brawijaya - Teknologi Informasi - Kelas T2F
        </motion.p>
      </div>
    </motion.div>
  );
};

// ==================== EXPORT KOMPONEN ====================
// Gunakan export default agar kompatibel dengan React Router
export default ZidaProfile;