import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Pastikan file ini ada di src/pages/
import NailaProfile from './pages/Naila/Portofolio';
import SerliProfile from './pages/SerliProfile';
import ZalfaaProfile from "./pages/Zalfaa/app.jsx";
import ZidaProfile from './pages/Zida/App';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="p-10 text-center bg-slate-900 min-h-screen text-white flex flex-col justify-center items-center">
            <h1 className="text-6xl font-black mb-4 tracking-tighter uppercase italic">
              Project <span className="text-purple-500">Kelompok 2</span>
            </h1>
            <p className="text-slate-400 mb-10 font-mono"> </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/naila" className="bg-purple-600 px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(147,51,234,0.5)]">NAILA</Link>
              <Link to="/serli" className="bg-pink-600 px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(219,39,119,0.5)]">SERLI</Link>
              <Link to="/zalfaa" className="bg-blue-600 px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(37,99,235,0.5)]">ZALFAA</Link>
              <Link to="/zida" className="bg-indigo-600 px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(79,70,229,0.5)]">ZIDA</Link>
            </div>
          </div>
        } />

        <Route path="/naila" element={<NailaProfile />} />
        <Route path="/serli" element={<SerliProfile />} />
        <Route path="/zalfaa" element={<ZalfaaProfile />} />
        <Route path="/zida" element={<ZidaProfile />} />
      </Routes>
    </Router>
  );
}

export default App;