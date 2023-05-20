import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './pages/Home.jsx'
import Gallery from './pages/Gallery.jsx'
import Reviews from './pages/Reviews';
import Contact from './pages/Contact.jsx'
import Header from './components/Header';
import MobileHeader from './components/MobileHeader';
import Footer from './components/Footer';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 991px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
  <BrowserRouter>
    <div className="app">
      {isMobile ? <MobileHeader isMobile={isMobile} /> : <Header />}
      <div className="routes-container">
        <Routes>
          <Route path="/" element={<Home isMobile={isMobile}/>} />
          <Route path="/gallery" element={<Gallery isMobile={isMobile} />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

}

export default App;
