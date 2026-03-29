import React from "react";

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
        padding: "40px 20px",
        position: "relative",
        overflow: "hidden",
        scrollMarginTop: "90px"
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none"
        }}
      >
        <span
          style={{
            fontFamily: "Notable, sans-serif",
            fontSize: "10rem",
            fontWeight: 900,
            color: "rgba(108, 99, 255, 0.12)",
            textTransform: "uppercase",
            letterSpacing: "0.5rem",
            lineHeight: 1,
            whiteSpace: "nowrap",
            textShadow: "0 0 40px rgba(108, 99, 255, 0.15)"
          }}
        >
          naila portfolio
        </span>
      </div>

      <div style={{ position: "relative", zIndex: 2, width: "100%", maxWidth: "980px" }}>
        <p style={{ margin: 0, fontSize: "1rem", color: "#bfb8ff", letterSpacing: "0.2em", textTransform: "uppercase" }}>
         Welcome to my portofolio
        </p>
        <h1 style={{ fontSize: "3rem", margin: "16px 0 20px", letterSpacing: "1px" }}>
          Halo, i'm Naila
        </h1>
        <p style={{ margin: "0 auto 32px", maxWidth: "720px", lineHeight: 1.8, fontSize: "1.05rem", color: "#d7d0f5" }}>
           a Web Developer & UI/UX Designer who loves turning ideas into cute, meaningful, and user-friendly websites
        </p>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="/nailacntx.png"
            alt="Naila"
            className="home-image"
            style={{
              width: "320px",
              maxWidth: "90%",
              borderRadius: "30px",
              border: "4px solid rgba(108, 99, 255, 0.22)",
              background: "rgba(255,255,255,0.05)"
            }}
          />
        </div>
      </div>
    </section>
  );
}
