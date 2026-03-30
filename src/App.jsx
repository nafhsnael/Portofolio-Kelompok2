import { useState } from 'react';
import { motion } from 'framer-motion';
import Home from './pages/Home';
import SerliProfile from './pages/SerliProfile';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <motion.div
      className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {currentPage === 'home' ? (
        <Home onNavigate={handleNavigate} />
      ) : (
        <SerliProfile onNavigate={handleNavigate} />
      )}
    </motion.div>
  );
}

export default App;