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
    <div
      style={{
        background: "#0c0624",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Poppins, sans-serif",
        paddingTop: "100px",
        overflowX: "hidden",
        scrollBehavior: "smooth"
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          width: "100vw",
          boxSizing: "border-box",
          minHeight: "70px",
          padding: "14px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "rgba(30,20,60,0.95)",
          backdropFilter: "blur(10px)",
          zIndex: 100,
          overflow: "hidden"
        }}
      >
        <div style={{ display: "flex", gap: "16px", alignItems: "center", marginLeft: "6px" }}>
          <span
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "28px",
              fontWeight: "bold",
              letterSpacing: "0.6px"
            }}
          >
            nafhisa naila
          </span>
        </div>

        <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap", justifyContent: "flex-end", minWidth: 0, maxWidth: "70vw" }}>
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
            PROJECT
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

      <HomeSection />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

