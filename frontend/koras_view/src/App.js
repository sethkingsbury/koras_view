import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import ContactSuccess from './pages/ContactSuccess.jsx'

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
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home isMobile={isMobile}/>} />
            <Route path="/gallery" element={<Gallery isMobile={isMobile} />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact-success" element={<ContactSuccess />} />
          </Routes>
        </div>
        <Footer />
      </div>
  </BrowserRouter>
  );
}

export default App;
