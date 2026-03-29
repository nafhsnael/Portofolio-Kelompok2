import React from "react";

const certificateList = [
  {
    title: "Sertifikat Full Stack Web Developer",
    image: "/full.png",
    alt: "Sertifikat Full Stack Developer"
  },
  {
    title: "Sertifikat Desain UI/UX",
    image: "/uiux.png",
    alt: "Sertifikat UI/UX"
  },
  {
    title: "Sertifikat Cyber Security",
    image: "/syber.png",
    alt: "Sertifikat syber security"
  },
  {
    title: "Sertifikat backend development",
    image: "/dot.png",
    alt: "Sertifikat Web Development"
  },
  {
    title: "Sertifikat pelatihan UI/UX",
    image: "/ukmlaos.png",
    alt: "Sertifikat syber security"
  },
  {
    title: "Sertifikat Bushiness Plan ",
    image: "/bushines.png",
    alt: "Sertifikat Web Development"
  }
];

export default function Projects() {
  return (
    <section
      id="project"
      style={{
        padding: "80px 20px",
        minHeight: "80vh",
        background: "#0f0620",
        color: "#f5f0ff",
        scrollMarginTop: "90px"
      }}
    >
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "16px" }}>Sertifikat</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "18px"
          }}
        >
          {certificateList.map((certificate, index) => (
            <div
              key={index}
              style={{
                padding: "16px",
                borderRadius: "18px",
                background: "rgba(108, 99, 255, 0.12)",
                border: "1px solid rgba(255,255,255,0.1)",
                textAlign: "center"
              }}
            >
              <img
                src={certificate.image}
                alt={certificate.alt}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "12px",
                  marginBottom: "12px"
                }}
              />
              <h3 style={{ margin: 0, fontSize: "1.2rem" }}>{certificate.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
