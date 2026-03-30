import React, { useEffect, useState } from "react";
import HomeSection from "./HomeSection";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  const navLinkStyle = {
    color: "white",
    textDecoration: "none",
    padding: "6px 10px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "13px",
    whiteSpace: "nowrap",
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
    <div
      style={{
        minHeight: "100vh",
        background: "#0c0624",
        position: "relative",
        overflow: "hidden",
        color: "white",
      }}
    >
      {/* 🔥 BACKGROUND BLUR */}
      <div
        style={{
          position: "absolute",
          top: "50px",
          left: "50px",
          width: "300px",
          height: "300px",
          background: "rgba(108,99,255,0.6)",
          borderRadius: "50%",
          filter: "blur(120px)",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "50px",
          right: "50px",
          width: "300px",
          height: "300px",
          background: "rgba(167,139,250,0.5)",
          borderRadius: "50%",
          filter: "blur(120px)",
          zIndex: 0,
        }}
      />

      {/* 🔥 NAVBAR */}
      <nav
        style={{
          position: "fixed",
          top: "16px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "fit-content",
          minHeight: "48px",
          padding: "8px 30px",
          display: "flex",
          alignItems: "center",
          gap: "35px",
          borderRadius: "40px",
          background: "rgba(58, 19, 88, 0.35)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(168, 85, 247, 0.25)",
          boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
          zIndex: 999,
        }}
      >
        <span style={{ fontSize: "18px", fontWeight: "bold" }}>NN</span>

        <div style={{ display: "flex", gap: "18px" }}>
          <a
            href="#home"
            className={`nav-link ${activeSection === "home" ? "active" : ""}`}
            style={navLinkStyle}
          >
            HOME
          </a>

          <a
            href="#about"
            className={`nav-link ${activeSection === "about" ? "active" : ""}`}
            style={navLinkStyle}
          >
            ABOUT
          </a>

          <a
            href="#project"
            className={`nav-link ${
              activeSection === "project" ? "active" : ""
            }`}
            style={navLinkStyle}
          >
            SERTIFIKAT
          </a>

          <a
            href="#contact"
            className={`nav-link ${
              activeSection === "contact" ? "active" : ""
            }`}
            style={navLinkStyle}
          >
            CONTACT
          </a>
        </div>
      </nav>

      {/* 🔥 CONTENT */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <HomeSection />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}