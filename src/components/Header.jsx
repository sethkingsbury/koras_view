import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import '../styles/header.css'; // Import the CSS file

function Header() {
  const navigate = useNavigate();

  const navItemStyle = {
  fontSize: '25px',
  fontFamily: '"Poiret One", cursive',
  color: 'white',
  textTransform: 'none'
};


  const toHome = () => {
    navigate('/');
  };

  const toContact = () => {
    navigate('/contact');
  };

  const toGallery = () => {
    navigate('/gallery');
  };

  const toReviews = () => {
    navigate('/reviews');
  };

  return (
    <div className="header">
      <div className="header-left" onClick={toHome}>
        <p>Kora's View</p>
      </div>
      <div className="header-right">
        <div className="nav-item">
          <Button
            variant="text"
            sx={{ ...navItemStyle, backgroundColor: 'transparent' }}
            onClick={toHome}
          >
            Home
          </Button>
        </div>
        <div className="nav-item">
          <Button variant="text" sx={navItemStyle} onClick={toGallery}>
            Gallery
          </Button>
        </div>
        <div className="nav-item">
          <Button variant="text" sx={navItemStyle} onClick={toReviews}>
            Reviews
          </Button>
        </div>
        <div className="nav-item">
          <Button variant="text" sx={navItemStyle} onClick={toContact}>
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
