
import React from 'react';

export default function Beranda() {
  return (
    <div className="beranda-hero">
      <div className="beranda-content">
        <div className="beranda-text">
          <div className="beranda-welcome">Welcome to my Portfolio</div>
          <div className="beranda-title">Hi, i'm Zee</div>
          <div className="beranda-desc">
Dengan ketertarikan pada teknologi dan kreativitas, saya terus mengembangkan diri 
untuk menciptakan karya yang inovatif. Setiap pengalaman menjadi langkah 
untuk menjadi versi terbaik dari diri saya.          </div>
        </div>
        <div className="beranda-img-wrapper">
          <div className="beranda-img-outline">
            <img className="beranda-img" src="/zee.png" alt="profil" />
          </div>
        </div>
      </div>
    </div>
  );
}