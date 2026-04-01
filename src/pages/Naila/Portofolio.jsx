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
    <div>
      {/* NAVBAR */}
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
        {/* LOGO */}
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <span
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "18px",
              fontWeight: "bold",
              letterSpacing: "0.6px"
            }}
          >
            NN
          </span>
        </div>

        {/* MENU */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
            flexWrap: "wrap"
          }}
        >
          <a
            href="#home"
            className={`nav-link ${activeSection === "home" ? "active" : ""}`}
            style={navLinkStyle}
            onClick={() => setActiveSection("home")}
          >
            HOME
          </a>

          <a
            href="#about"
            className={`nav-link ${activeSection === "about" ? "active" : ""}`}
            style={navLinkStyle}
            onClick={() => setActiveSection("about")}
          >
            ABOUT ME
          </a>

          <a
            href="#project"
            className={`nav-link ${activeSection === "project" ? "active" : ""}`}
            style={navLinkStyle}
            onClick={() => setActiveSection("project")}
          >
            SERTIFIKAT
          </a>

          <a
            href="#contact"
            className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
            style={navLinkStyle}
            onClick={() => setActiveSection("contact")}
          >
            CONTACT
          </a>
        </div>
      </nav>

      {/* SECTIONS */}
      <HomeSection />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}