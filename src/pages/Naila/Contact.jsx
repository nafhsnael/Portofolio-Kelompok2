import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "80px 20px",
        background: "#160b33",
        color: "#fff",
        minHeight: "70vh",
        scrollMarginTop: "90px"
      }}
    >
      <section
  style={{
    position: "relative",
    zIndex: 1
  }}
></section>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "16px" }}>Contact</h2>
        <p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "24px" }}>
          Interested in collaborating on a project or have a specific inquiry? I’m always open to discussing new ideas and opportunities. Feel free to reach out via the email below.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ padding: "20px", borderRadius: "16px", background: "rgba(108, 99, 255, 0.1)" }}>
            <strong>Email:</strong> Nafhsnaell@gmail.com
          </div>
          <div style={{ padding: "20px", borderRadius: "16px", background: "rgba(108, 99, 255, 0.1)" }}>
            <strong>Phone:</strong> +62 818 0500 0471
          </div>
        </div>
      </div>
    </section>
  );
}
