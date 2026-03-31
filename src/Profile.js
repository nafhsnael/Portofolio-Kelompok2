import React, { useState } from "react";
import { motion } from "framer-motion";

// ===== CARD =====
const Card = ({ children }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white/90 backdrop-blur-md 
    rounded-3xl p-6 
    shadow-[0_10px_30px_rgba(255,182,193,0.3)] 
    border border-pink-100 transition"
  >
    {children}
  </motion.div>
);

// ===== SIDEBAR =====
const Sidebar = ({ setPage }) => {
  const menu = [
    ["home", "Home"],
    ["about", "Tentang"],
    ["skill", "Skill"],
    ["edu", "Pendidikan"],
    ["project", "Project"],
    ["photos", "Galeri"],
    ["contact", "Kontak"],
    ["email", "Email"],
  ];

  return (
    <div className="w-64 min-h-screen bg-white/70 backdrop-blur-xl p-6 border-r border-pink-100">
      <h1 className="text-2xl font-bold text-pink-400 mb-8">
        My Profile
      </h1>

      {menu.map(([key, label]) => (
        <button
          key={key}
          onClick={() => setPage(key)}
          className="block w-full text-left px-4 py-2 mb-2 rounded-xl 
          text-gray-700 hover:bg-pink-100 transition"
        >
          {label}
        </button>
      ))}
    </div>
  );
};

// ===== NAVBAR =====
const Navbar = () => (
  <div className="flex justify-between items-center mb-6 
  bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-md">

    <input
      placeholder="Cari informasi..."
      className="p-2 w-1/2 border border-pink-200 rounded-xl outline-none"
    />

    <div className="flex items-center gap-3">
      <span className="text-gray-700 font-medium">Firyal</span>
      <img
        src="https://i.pravatar.cc/40"
        alt="profile"
        className="rounded-full border border-pink-300"
      />
    </div>
  </div>
);

// ===== HOME =====
const Home = () => (
  <>
    <Navbar />

    <div className="grid md:grid-cols-3 gap-5">
      <Card>
        <h3 className="text-gray-600">Project</h3>
        <p className="text-3xl text-pink-400 font-bold">12</p>
      </Card>

      <Card>
        <h3 className="text-gray-600">Experience</h3>
        <p className="text-3xl text-pink-300 font-bold">2 Tahun</p>
      </Card>

      <Card>
        <h3 className="text-gray-600">Skill</h3>
        <p className="text-3xl text-pink-400 font-bold">Advanced</p>
      </Card>
    </div>

    <div className="mt-6">
      <Card>
        <h2 className="text-xl font-bold text-pink-400 mb-2">
          Selamat Datang
        </h2>
        <p className="text-gray-600">
          Website ini merupakan portfolio mahasiswa dengan desain baby pink aesthetic yang elegan dan modern.
        </p>
      </Card>
    </div>
  </>
);

// ===== ABOUT =====
const About = () => (
  <Card>
    <h2 className="text-xl font-bold text-pink-400 mb-3">
      Tentang Saya
    </h2>
    <p className="text-gray-600 leading-relaxed">
      Saya adalah mahasiswa Teknik Informatika yang memiliki minat dalam pengembangan website modern serta desain UI/UX yang menarik dan user friendly.
    </p>
  </Card>
);

// ===== SKILL =====
const Skill = () => (
  <Card>
    <h2 className="font-bold text-pink-400 mb-4">Skill</h2>

    {[
      ["HTML", 90],
      ["CSS", 85],
      ["JavaScript", 80],
      ["React", 75],
    ].map(([name, val]) => (
      <div key={name} className="mb-3">
        <p className="text-gray-600">{name}</p>
        <div className="w-full bg-pink-100 rounded-full h-2">
          <div
            className="bg-pink-400 h-2 rounded-full"
            style={{ width: `${val}%` }}
          ></div>
        </div>
      </div>
    ))}
  </Card>
);

// ===== PHOTOS =====
const Photos = () => {
  const [photos, setPhotos] = useState([]);

  const upload = (e) => {
    const files = Array.from(e.target.files);
    setPhotos([...photos, ...files.map((f) => URL.createObjectURL(f))]);
  };

  return (
    <Card>
      <h2 className="text-pink-400 font-bold mb-3">Galeri</h2>

      <input type="file" multiple onChange={upload} />

      <div className="grid grid-cols-3 gap-3 mt-4">
        {photos.map((p, i) => (
          <img
            key={i}
            src={p}
            alt={`foto-${i}`}
            className="rounded-xl shadow hover:scale-105 transition"
          />
        ))}
      </div>
    </Card>
  );
};

// ===== APP =====
export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="flex min-h-screen bg-gradient-to-br 
    from-pink-100 via-white to-pink-200 p-4">

      <Sidebar setPage={setPage} />

      <div className="flex-1 p-6">
        {page === "home" && <Home />}
        {page === "about" && <About />}
        {page === "skill" && <Skill />}
        {page === "photos" && <Photos />}
      </div>
    </div>
  );
}