import React from "react";
import nailaImg from '../../assets/naila.jpeg';

export default function HomeSection() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "120px 20px 40px", // 🔥 TAMBAH ATASNYA
        scrollMarginTop: "90px",

        background: "radial-gradient(circle at top left, #18154833, transparent), linear-gradient(135deg, #181132, #160b33)"
      }}
    >
      <div className="hero-background" style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none"
      }}>
        <span className="hero-background-text" style={{
          fontFamily: "Notable, sans-serif",
          fontSize: "7rem",
          fontWeight: 900,
          color: "rgba(108, 99, 255, 0.12)",
          textTransform: "uppercase",
          letterSpacing: "0.5rem",
          lineHeight: 1,
          whiteSpace: "nowrap",
          textShadow: "0 0 40px rgba(108, 99, 255, 0.15)"
        }}>
          naila portofolio
        </span>
      </div>

      <div style={{ position: "relative", zIndex: 2, width: "100%", maxWidth: "980px" }}>
        <p className="hero-subtitle">
          Welcome to my portofolio
        </p>
        <h1 className="typed-title" style={{ fontSize: "3rem", margin: "16px 0 20px", letterSpacing: "1px" }}>
          Hi! i'm Naila
        </h1>
        <p className="hero-description">
          a Web Developer & UI/UX Designer who loves turning ideas into cute, meaningful, and user-friendly websites
        </p>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={nailaImg}
            alt="Naila"
            className="home-image hero-image"
            style={{
              width: "320px",
              maxWidth: "90%",
              borderRadius: "30px",
              border: "4px solid rgba(221, 219, 255, 0.22)",
              background: "rgba(255,255,255,0.05)"
            }}
          />
        </div>
      </div>
    </section>
  );
}
