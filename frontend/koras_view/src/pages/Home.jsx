import "../styles/Home.css";
import HomeLS from "../images/landscape/home.JPG";
import HomePT from "../images/portrait/home.JPG";
import House from "../images/landscape/house.JPG";
import { useNavigate } from "react-router-dom";

function Home({ isMobile }) {
  const navigate = useNavigate();

  const toContact = () => {
    navigate("/contact");
  };

  return (
    <div className="home-container">
      {isMobile && (
        <div className="img-container">
          <img src={HomePT} alt="home" />
        </div>
      )}
      {!isMobile && (
        <div className="img-container">
          <img src={HomeLS} alt="home" />
        </div>
      )}
      <div className="section">
        <p>
          Nestled away in a stunning location with breathtaking views of the
          Hapuku River, Manakau Peak, and the Pacific Ocean
        </p>
        <button className="filled button" onClick={toContact}>
          Contact
        </button>
      </div>
      {isMobile && (
        <div className="img-container">
          <img src={House} alt="home" />
        </div>
      )}
      {!isMobile && (
        <div className="img-container">
          <img src={House} alt="home" />
        </div>
      )}
    </div>
  );
}

export default Home;
