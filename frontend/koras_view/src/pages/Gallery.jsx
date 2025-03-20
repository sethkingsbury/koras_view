import "../styles/Gallery.css";
import MasonryImageList from "../components/MasonryImageList";

function Gallery({ isMobile }) {
  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      <div className="gallery">
        <MasonryImageList isMobile={isMobile} />
      </div>
    </div>
  );
}

export default Gallery;
