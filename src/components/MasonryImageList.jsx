import React, { useState } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageData from '../images/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faCircleLeft, faCircleRight } from '@fortawesome/free-regular-svg-icons';
import '../styles/masonryImageList.css';
import { useSwipeable } from 'react-swipeable';

export default function MasonryImageList({ isMobile }) {
  const cols = isMobile ? 2 : 4;
  const gap = isMobile ? 3 : 6;
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openImage = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
    setSelectedIndex(null);
  };

  const navigateToNextImage = () => {
    const nextIndex = (selectedIndex + 1) % ImageData.length;
    setSelectedImage(ImageData[nextIndex].img);
    setSelectedIndex(nextIndex);
  };

  const navigateToPreviousImage = () => {
    const previousIndex = (selectedIndex - 1 + ImageData.length) % ImageData.length;
    setSelectedImage(ImageData[previousIndex].img);
    setSelectedIndex(previousIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: navigateToNextImage,
    onSwipedRight: navigateToPreviousImage,
  });

  return (
    <Box>
      <ImageList variant="masonry" cols={cols} gap={gap}>
        {ImageData.map((item, index) => (
          <ImageListItem key={item.img} onClick={() => openImage(item.img, index)}>
            <img src={item.img} alt={item.title} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
      {selectedImage && (
        <Box className="overlay" {...handlers}>
          <Box className="close-button" onClick={closeImage}>
            <FontAwesomeIcon icon={faTimesCircle} size="3x" />
          </Box>
          <img src={selectedImage} alt="Selected" className="selected-image" />
          {!isMobile && (
            <>
              <button className="previous-button" onClick={navigateToPreviousImage}>
                <FontAwesomeIcon icon={faCircleLeft} />
              </button>
              <button className="next-button" onClick={navigateToNextImage}>
                <FontAwesomeIcon icon={faCircleRight} />
              </button>
            </>
          )}
        </Box>
      )}
    </Box>
  );
}
