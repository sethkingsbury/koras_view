import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Header from './components/Header'
import Home from './pages/Home.jsx'
import Gallery from './pages/Gallery.jsx'
import Reviews from './pages/Reviews';
import Contact from './pages/Contact.jsx'
import MobileHeader from './components/MobileHeader';
import Footer from './components/Footer';

function App() {

  return (
    <BrowserRouter>
      <div className='main-container'>
        {/* <Header/> */}
        <MobileHeader/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/reviews" element={<Reviews/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
