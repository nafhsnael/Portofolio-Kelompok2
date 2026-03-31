import React from 'react';

export default function Biodata({ biodata }) {
  return (
    <div className="card">
      <h2>Biodata</h2>

      <p>Nama: {biodata.nama}</p>
      <p>Kelas: {biodata.kelas}</p>
      <p>Jurusan: {biodata.jurusan}</p>
      <p>Domisili: {biodata.domisili}</p>
    </div>
  );
}