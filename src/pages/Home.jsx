import imageData from '../images/images';
import '../styles/home.css';

function Home() {
  return (
    <div>
      <div className="page-title">
        A Magical Place to Relax and Unwind
      </div>

      <img className="home-image" src={imageData[6].img} alt="koras view" />

      <div className="blurb">
        Situated in a picturesque setting overlooking the Hapuku River, the Manakau Peak and the Pacific Ocean.
      </div>
    </div>
  );
}

export default Home;
