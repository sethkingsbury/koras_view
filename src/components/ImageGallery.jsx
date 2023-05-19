import { useState } from "react"
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import '../styles/imageGallery.css'

function ImageGallery({ imageData }) {
  const [imgIndex, setImgIndex] = useState(1)

  const nextImage = () => {
    (imgIndex < imageData.length - 1) ? setImgIndex(imgIndex + 1) : setImgIndex(0)
  }

  const previousImage = () => {
    (imgIndex > 0) ? setImgIndex(imgIndex - 1) : setImgIndex(imageData.length - 1)
  }

  return (
    <div className="gallery-container">
      
      <img className="gallery-img" src={imageData[imgIndex].img} alt="gallery" />
      
      <div className="gallery-buttons">
        <button className="left-arrow-btn" onClick={previousImage}><AiOutlineLeft color="black" size={'40px'}/></button>
        <button className="right-arrow-btn" onClick={nextImage}><AiOutlineRight color="black" size={'40px'}/></button>
      </div>
      
    </div>
  )
}

export default ImageGallery
