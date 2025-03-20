import "../styles/Header.css";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const toHome = () => {
    setNav(false);
    navigate("/");
  };

  const toGallery = () => {
    setNav(false);
    navigate("/gallery");
  };

  const toReviews = () => {
    setNav(false);
    navigate("/reviews");
  };

  const toContact = () => {
    setNav(false);
    navigate("/contact");
  };

  return (
    <div className="header-container">
      <div className="header-item" onClick={toHome}>
        <h1>Kora's View</h1>
      </div>
      <div className="header-item">
        <button onClick={toggleNav}>
          <RxHamburgerMenu color="#22303c" size={"48px"} />
        </button>
      </div>
      <div className={`nav-menu ${nav ? "visible" : "hidden"}`}>
        <ul className="nav-list">
          <li className="nav-item" onClick={toHome}>
            Home
          </li>
          <li className="nav-item" onClick={toGallery}>
            Gallery
          </li>
          <li className="nav-item" onClick={toReviews}>
            Reviews
          </li>
          <li className="nav-item" onClick={toContact}>
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
