import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Tambahan supoyo kudu bisa balik menyang njobo

// --- DUMMY COMPONENTS (Supoyo ora error waktu import) ---
const HomeSection = () => <section id="home" className="min-h-screen flex items-center justify-center bg-slate-900 text-6xl font-bold">HOME NAILA</section>;
const AboutMe = () => <section id="about" className="min-h-screen flex items-center justify-center bg-purple-900 text-6xl font-bold">ABOUT ME</section>;
const Projects = () => <section id="project" className="min-h-screen flex items-center justify-center bg-slate-900 text-6xl font-bold">SERTIFIKAT</section>;
const Contact = () => <section id="contact" className="min-h-screen flex items-center justify-center bg-purple-900 text-6xl font-bold">CONTACT</section>;

export default function NailaProfile() { // Jeneng fungsi diowahi jadi NailaProfile supoyo nyambung nggo App.jsx
  const [activeSection, setActiveSection] = useState("home");

  const navLinkStyle = {
    color: "white",
    textDecoration: "none",
    padding: "8px 14px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "13px",
    whiteSpace: "nowrap",
    flexShrink: 0
  };

  useEffect(() => {
    const sectionIds = ["home", "about", "project", "contact"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 110;
      let current = "home";
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPosition) {
          current = id;
        }
      });
      setActiveSection(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="text-white">
      {/* TOMBOL BULIK MENYANG APLIKASI UTAMA (Penting sanget!) */}
      <Link to="/" className="fixed bottom-5 right-5  z-1000  bg-white text-black px-4 py-2 rounded-full font-bold shadow-lg">
        ← Keluar Profil
      </Link>

      {/* NAVBAR NAILA */}
      <nav
        style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "fit-content",
          minHeight: "48px",
          padding: "8px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "40px",
          borderRadius: "50px",
          background: "rgba(58, 19, 88, 0.35)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          border: "1px solid rgba(168, 85, 247, 0.3)",
          boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
          zIndex: 999,
        }}
      >
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <span style={{ fontFamily: "Poppins, sans-serif", fontSize: "18px", fontWeight: "bold", letterSpacing: "0.6px" }}>
            NN
          </span>
        </div>

        <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
          <a href="#home" style={navLinkStyle} className={activeSection === "home" ? "bg-purple-600" : ""}>HOME</a>
          <a href="#about" style={navLinkStyle} className={activeSection === "about" ? "bg-purple-600" : ""}>ABOUT</a>
          <a href="#project" style={navLinkStyle} className={activeSection === "project" ? "bg-purple-600" : ""}>SERTIFIKAT</a>
          <a href="#contact" style={navLinkStyle} className={activeSection === "contact" ? "bg-purple-600" : ""}>CONTACT</a>
        </div>
      </nav>

      {/* BAGIAN-BAGIAN */}
      <HomeSection />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}