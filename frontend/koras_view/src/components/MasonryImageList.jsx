import React, { useState } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import "../styles/MasonryImageList.css";
import { useSwipeable } from "react-swipeable";
import { importAllImages } from "../helpers/imageImporter";

export default function MasonryImageList({ isMobile }) {
  const cols = isMobile ? 2 : 4;
  const gap = isMobile ? 3 : 6;
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const imageContext = require.context(
    "../images/gallery_images",
    false,
    /\.(jpg|jpeg|png|gif)$/
  );
  const imageData = importAllImages(imageContext);

  const openImage = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
    setSelectedIndex(null);
  };

  const navigateToNextImage = () => {
    const nextIndex = (selectedIndex + 1) % imageData.length;
    setSelectedImage(imageData[nextIndex].original);
    setSelectedIndex(nextIndex);
  };

  const navigateToPreviousImage = () => {
    const previousIndex =
      (selectedIndex - 1 + imageData.length) % imageData.length;
    setSelectedImage(imageData[previousIndex].original);
    setSelectedIndex(previousIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: navigateToNextImage,
    onSwipedRight: navigateToPreviousImage,
  });

  return (
    <Box>
      <ImageList variant="masonry" cols={cols} gap={gap}>
        {imageData.map((item, index) => (
          <ImageListItem
            key={item.img}
            onClick={() => openImage(item.original, index)}
          >
            <img src={item.original} alt={item.description} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
      {selectedImage && (
        <Box className="overlay" {...handlers}>
          <Box className="close-button" onClick={closeImage}>
            <FontAwesomeIcon icon={faTimesCircle} size="2x" />
          </Box>
          <img src={selectedImage} alt="Selected" className="selected-image" />
          {!isMobile && (
            <>
              <button
                className="previous-button"
                onClick={navigateToPreviousImage}
              >
                <AiOutlineLeft size={"40px"} />
              </button>
              <button className="next-button" onClick={navigateToNextImage}>
                <AiOutlineRight size={"40px"} />
              </button>
            </>
          )}
        </Box>
      )}
    </Box>
  );
}
