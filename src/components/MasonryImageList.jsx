import React, { useState } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageData from '../images/images';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

export default function MasonryImageList({ isMobile }) {
  const cols = isMobile ? 2 : 4;
  const gap = isMobile ? 3 : 6;
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <Box>
      <ImageList variant="masonry" cols={cols} gap={gap}>
        {ImageData.map((item) => (
          <ImageListItem key={item.img} onClick={() => openImage(item.img)}>
            <img src={item.img} alt={item.title} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
      {selectedImage && (
        <Box
          position="fixed"
          top={0}
          right={0}
          bottom={0}
          left={0}
          display="flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor="rgba(0, 0, 0, 0.95)"
          zIndex={9999}
        >
          <Box position="absolute" top={10} right={10}>
            <button onClick={closeImage} style={{ color: '#fff', fontSize: 20 }}>
              <FontAwesomeIcon icon={faTimesCircle} size='3x' />
            </button>
          </Box>
          <img src={selectedImage} alt="Selected" style={{ maxWidth: '90%', maxHeight: '90%' }} />
        </Box>
      )}
    </Box>
  );
}
