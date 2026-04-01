import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ===== FONT STYLE =====
const titleFont = { fontFamily: "'Playfair Display', serif" };
const bodyFont = { fontFamily: "'Poppins', sans-serif" };

// ===== WATERMARK LOGO =====
const WatermarkLogo = () => (
  <img
    src="/logo-universitas.png"
    alt="Logo Universitas"
    className="fixed inset-0 m-auto w-[450px] opacity-10 pointer-events-none select-none z-0"
  />
);

// ===== FLOATING BUBBLES =====
const Bubbles = () => (
  <div className="absolute inset-0 overflow-hidden -z-10">
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full blur-2xl"
        animate={{
          y: [0, 20, 0],
          x: [0, 15, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 6 + Math.random() * 4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        style={{
          width: Math.random() * 150 + 50 + "px",
          height: Math.random() * 150 + 50 + "px",
          top: Math.random() * 100 + "%",
          left: Math.random() * 100 + "%",
          backgroundColor:
            Math.random() > 0.5
              ? "rgba(255,182,193,0.3)"
              : "rgba(255,239,150,0.3)",
        }}
      />
    ))}
  </div>
);

// ===== CURSOR GLOW =====
const CursorGlow = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: pos.y,
        left: pos.x,
        pointerEvents: "none",
        width: 80,
        height: 80,
        marginLeft: -40,
        marginTop: -40,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(174, 139, 145, 0.6) 0%, rgba(165, 124, 129, 0.4) 70%)",
        mixBlendMode: "screen",
        zIndex: 9999,
      }}
    />
  );
};

// ===== HEADER =====
function Header({ setPage, activePage }) {
  const pages = ["home", "profile", "email", "kontak", "skill"];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-pink-200 to-pink-100 shadow-md p-4 flex justify-between items-center flex-wrap gap-3">
      <h1 style={titleFont} className="text-2xl font-bold text-pink-700">
        Website Profile
      </h1>

      <nav className="flex flex-wrap gap-2">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setPage(page)}
            className={`px-4 py-2 rounded-xl font-medium transition ${
              activePage === page
                ? "bg-pink-400 text-white shadow-lg"
                : "bg-white text-pink-600 hover:bg-pink-200"
            }`}
          >
            {page.charAt(0).toUpperCase() + page.slice(1)}
          </button>
        ))}
      </nav>
    </header>
  );
}

// ===== CARD COMPONENT =====
const FloatingCard = ({ title, content, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.9 }}
    animate={{
      opacity: 1,
      y: 0,
      scale: [1, 1.03, 0.98, 1],
      rotate: [0, 1, -1, 0],
    }}
    transition={{
      delay: delay,
      duration: 3,
      repeat: Infinity,
      repeatType: "mirror",
      type: "spring",
    }}
    className="bg-pink-50 border border-pink-200 rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 cursor-pointer transition-all duration-300"
  >
    <h3 style={titleFont} className="text-2xl font-bold text-pink-600 mb-3">
      {title}
    </h3>

    <p className="text-pink-800">{content}</p>
  </motion.div>
);

// ===== HOME PAGE =====
function HomePage() {
  const cards = [
    {
      title: "Pengalaman",
      content:
        "Mahasiswa yang antusias dengan dunia programming, aktif mengembangkan proyek coding, mengikuti workshop, dan eksplor teknologi terbaru.",
    },
    {
      title: "Keahlian",
      content:
        "Menguasai React, Node.js, Tailwind CSS, serta teknologi web modern lainnya.",
    },
    {
      title: "Kontak",
      content:
        "Informasi lengkap untuk menghubungi saya melalui email dan sosial media.",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-100 via-white to-pink-200">

      {/* Logo Universitas Transparan */}
      <div
        className="absolute inset-0 opacity-10 bg-center bg-no-repeat bg-contain"
        style={{
          backgroundImage: "url('/logo-univ.png')",
        }}
      ></div>
{/* Shimmer Effect */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">

  <div
    className="absolute top-0 left-[-100%] w-[200%] h-full animate-shimmer"
    style={{
      background:
        "linear-gradient(120deg, transparent 30%, rgba(75, 4, 16, 0.4) 50%, transparent 70%)",
    }}
  ></div>

</div>

     {/* Glitter Premium */}
<div
  className="absolute inset-0 pointer-events-none"
  style={{
    background:
      `radial-gradient(circle at 20% 30%, rgba(255,105,180,0.7) 2px, transparent 2px), 
       radial-gradient(circle at 70% 60%, rgba(255,182,193,0.7) 3px, transparent 3px), 
       radial-gradient(circle at 40% 80%, rgba(255,192,203,0.7) 2px, transparent 2px)`,
    backgroundSize: "150px 150px",
    opacity: 0.5,
  }}
></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="max-w-5xl mx-auto mt-16 p-8 bg-white bg-opacity-90 rounded-3xl shadow-xl relative z-10"
        style={bodyFont}
      >
        <h2
          style={titleFont}
          className="text-4xl font-bold text-pink-600 mb-6 text-center"
        >
          Selamat Datang di Website Profile Saya
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src="/foto-pribadi.jpg"
            alt="Foto Pribadi"
            className="w-48 h-48 object-cover rounded-full border-8 border-pink-300 shadow-lg"
          />

          <div className="text-gray-700 text-lg max-w-xl space-y-4">
            <p>
              Halo! Saya Firyal. Mahasiswa aktif di Universitas Brawijaya Fakultas
              Vokasi, Program Studi Teknologi Informasi. Website ini saya buat
              sebagai media profil pribadi yang berisi informasi mengenai
              identitas diri, riwayat pendidikan, pengalaman organisasi,
              keterampilan yang dimiliki, serta berbagai proyek atau karya yang
              pernah saya kerjakan selama menempuh pendidikan di bidang teknologi
              informasi.
            </p>

            <p>
              Terima kasih telah mengunjungi website profile saya. Semoga informasi
              yang disajikan dapat memberikan manfaat dan menjadi bahan
              pertimbangan bagi pihak yang membutuhkan informasi mengenai profil
              saya.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <FloatingCard key={i} {...card} delay={0.3 * i} />
          ))}
        </div>

      </motion.div>

    </div>
  );
}

// ===== PROFILE PAGE =====
function ProfilePage() {
  const pendidikan = [
    {
      tahun: "2025 - Sekarang",
      nama: "Universitas Brawijaya",
      jurusan: "D3 Teknologi Informasi",
    },
    {
      tahun: "2022 - 2025",
      nama: "SMA N 1 Talang Padang",
      jurusan: "Kurikulum Merdeka",
    },
    {
      tahun: "2019 - 2022",
      nama: "SMP Negeri 114 Jakarta",
      jurusan: "-",
    },
    {
      tahun: "2013 - 2019",
      nama: "SD Citayam 03",
      jurusan: "-",
    },
  ];

  const organisasi = [
    {
      tahun: "2022 - 2023",
      nama: "OSIS",
      jabatan: "Anggota Bidang Teknologi Informasi",
    },
    {
      tahun: "2023 - 2024",
      nama: "OSIS",
      jabatan: "Ketua Bidang Teknologi Informasi",
    },
    {
      tahun: "2024",
      nama: "Panitia P5 Suara Demokrasi",
      jabatan: "Humas",
    },
    {
      tahun: "2025",
      nama: "Panitia Campus Expo",
      jabatan: "PDD",
    },
    {
      tahun: "2026",
      nama: "Himpunan Mahasiswa Teknologi Informasi",
      jabatan: "Staff Ahli Advokesma",
    },
    {
      tahun: "2026",
      nama: "Badan Eksekutif Mahasiswa Vokasi",
      jabatan: "Staff Ahli PSDM",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto mt-16 p-10 bg-white bg-opacity-90 rounded-3xl shadow-xl relative z-10"
      style={bodyFont}
    >
      {/* ===== JUDUL ===== */}
      <h2
        style={titleFont}
        className="text-4xl font-bold text-pink-600 mb-8"
      >
        Profil Saya
      </h2>

      {/* ===== DATA DIRI ===== */}
      <div className="mb-10 bg-pink-50 p-6 rounded-2xl shadow-md">
        <h3
          style={titleFont}
          className="text-2xl font-semibold text-pink-600 mb-4"
        >
          Data Diri
        </h3>

        <ul className="text-gray-700 text-lg space-y-2">
          <li>
            <strong>Nama Lengkap:</strong> Firyal Zalfaa Aulia
          </li>

          <li>
            <strong>NIM:</strong> 253140707111070
          </li>

          <li>
            <strong>Kelas:</strong> T2F
          </li>

          <li>
            <strong>Program Studi:</strong> Teknologi Informasi
          </li>

          <li>
            <strong>Fakultas:</strong> Vokasi
          </li>

          <li>
            <strong>Universitas:</strong> Universitas Brawijaya
          </li>

          <li>
            <strong>Alamat:</strong> Jl.candi bajang ratu No. 3, Kota Malang
          </li>
        </ul>
      </div>

      {/* ===== RIWAYAT PENDIDIKAN ===== */}
      <div className="mb-10 bg-white border border-pink-200 p-6 rounded-2xl shadow-md">
        <h3
          style={titleFont}
          className="text-2xl font-semibold text-pink-600 mb-4"
        >
          Riwayat Pendidikan
        </h3>

        <div className="space-y-4">
          {pendidikan.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-pink-50 rounded-xl shadow-sm"
            >
              <p className="font-semibold text-pink-700">
                {item.tahun}
              </p>

              <p className="text-gray-800">
                {item.nama}
              </p>

              <p className="text-gray-600">
                {item.jurusan}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== RIWAYAT ORGANISASI ===== */}
      <div className="bg-white border border-pink-200 p-6 rounded-2xl shadow-md">
        <h3
          style={titleFont}
          className="text-2xl font-semibold text-pink-600 mb-4"
        >
          Riwayat Organisasi & Kepanitiaan
        </h3>

        <div className="space-y-4">
          {organisasi.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-pink-50 rounded-xl shadow-sm"
            >
              <p className="font-semibold text-pink-700">
                {item.tahun}
              </p>

              <p className="text-gray-800">
                {item.nama}
              </p>

              <p className="text-gray-600">
                Jabatan: {item.jabatan}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ===== EMAIL PAGE =====
function EmailPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto mt-16 p-8 bg-white bg-opacity-90 rounded-3xl shadow-xl relative z-10 text-pink-700"
      style={bodyFont}
    >
      <h2 style={titleFont} className="text-3xl font-bold mb-4">
        Email Saya
      </h2>

      <p className="text-lg font-semibold">
        zalfaafiryal10@student.ub.ac.id
      </p>
    </motion.div>
  );
}

// ===== KONTAK PAGE =====
function KontakPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto mt-16 p-8 bg-white bg-opacity-90 rounded-3xl shadow-xl relative z-10 text-pink-700"
      style={bodyFont}
    >
      <h2 style={titleFont} className="text-3xl font-bold mb-4">
        Kontak
      </h2>

      <ul className="list-disc list-inside text-gray-700 text-lg">
        <li>Email: zalfaafiryal10@student.ub.ac.id</li>
        <li>Telepon: +62 856-583-274-98</li>
        <li>Instagram: @Fryzalfaa</li>
        <li>Alamat: Kota Malang</li>
        <li>LinkedIn: linkedin.com/in/firyal-zalfaa-aulia</li>
      </ul>
    </motion.div>
  );
}

// ===== SKILL PAGE =====
function SkillPage() {
  const skills = [
    "JavaScript",
    "React.js",
    "Node.js",
    "Tailwind CSS",
    "Git & GitHub",
    "Responsive Web Design",
    "Basic Python",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto mt-16 p-8 bg-white bg-opacity-90 rounded-3xl shadow-xl relative z-10 text-pink-700"
      style={bodyFont}
    >
      <h2 style={titleFont} className="text-3xl font-bold mb-4">
        Skills
      </h2>

      <ul className="list-disc list-inside text-gray-700 text-lg space-y-1">
        {skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </motion.div>
  );
}

// ===== MAIN APP =====
export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 relative overflow-hidden select-none"
      style={bodyFont}
    >
      <WatermarkLogo />

      <Bubbles />

      <CursorGlow />

      <Header setPage={setPage} activePage={page} />

      <AnimatePresence mode="wait">
        {page === "home" && <HomePage key="home" />}
        {page === "profile" && <ProfilePage key="profile" />}
        {page === "email" && <EmailPage key="email" />}
        {page === "kontak" && <KontakPage key="kontak" />}
        {page === "skill" && <SkillPage key="skill" />}
      </AnimatePresence>

      <footer className="text-center text-pink-400 mt-20 mb-6 text-sm">
        © 2026 Firyal • Teknologi Informasi • Universitas Brawijaya
      </footer>
    </div>
  );
}