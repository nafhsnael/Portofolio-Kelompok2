import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Biodata from "./pages/Biodata";
import Domisili from "./pages/Domisili";
import Jurusan from "./pages/Jurusan";
import Kelas from "./pages/Kelas";
import Tentang from "./pages/Tentang";
import "./App.css";

function App() {
  const biodata = {
    nama: "Kasiva Imtitas Zaidah Iftinan",
    kelas: "T2F",
    jurusan: "Teknologi Informasi",
    domisili: "Trenggalek",
    tentang: "Saya adalah seorang siswa Rekayasa Perangkat Lunak yang memiliki ketertarikan pada dunia teknologi dan desain. Saya senang mengeksplorasi hal-hal baru, terutama dalam pengembangan website dan tampilan visual yang menarik. Bagi saya, setiap proses belajar adalah kesempatan untuk berkembang. Saya terus berusaha meningkatkan kemampuan, menciptakan karya, dan mengembangkan kreativitas agar dapat menghasilkan sesuatu yang tidak hanya fungsional, tetapi juga memiliki nilai estetika."
  };

  return (
    <Router>
      <div>
        <nav className="navbar">
          <Link to="/">Beranda</Link>
          <Link to="/biodata">Biodata</Link>
          <Link to="/kelas">Kelas</Link>
          <Link to="/jurusan">Prodi</Link>
          <Link to="/domisili">Domisili</Link>
          <Link to="/tentang">Tentang saya</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Beranda biodata={biodata} />} />
          <Route path="/biodata" element={<Biodata biodata={biodata} />} />
          <Route path="/kelas" element={<Kelas biodata={biodata} />} />
          <Route path="/jurusan" element={<Jurusan biodata={biodata} />} />
          <Route path="/domisili" element={<Domisili biodata={biodata} />} />
          <Route path="/tentang" element={<Tentang biodata={biodata} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;