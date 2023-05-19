// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageData from '../images/images';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTimesCircle, faCircleLeft, faCircleRight } from '@fortawesome/free-regular-svg-icons';

// export default function MasonryImageList({ isMobile }) {
//   const cols = isMobile ? 2 : 4;
//   const gap = isMobile ? 3 : 6;
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [selectedIndex, setSelectedIndex] = useState(null);

//   const openImage = (image, index) => {
//     setSelectedImage(image);
//     setSelectedIndex(index);
//   };

//   const closeImage = () => {
//     setSelectedImage(null);
//     setSelectedIndex(null);
//   };

//   const navigateToNextImage = () => {
//     const nextIndex = (selectedIndex + 1) % ImageData.length;
//     setSelectedImage(ImageData[nextIndex].img);
//     setSelectedIndex(nextIndex);
//   };

//   const navigateToPreviousImage = () => {
//     const previousIndex = (selectedIndex - 1 + ImageData.length) % ImageData.length;
//     setSelectedImage(ImageData[previousIndex].img);
//     setSelectedIndex(previousIndex);
//   };

//   return (
//     <Box>
//       <ImageList variant="masonry" cols={cols} gap={gap}>
//         {ImageData.map((item, index) => (
//           <ImageListItem key={item.img} onClick={() => openImage(item.img, index)}>
//             <img src={item.img} alt={item.title} loading="lazy" />
//           </ImageListItem>
//         ))}
//       </ImageList>
//       {selectedImage && (
//         <Box
//           position="fixed"
//           top={0}
//           right={0}
//           bottom={0}
//           left={0}
//           display="flex"
//           justifyContent="center"
//           alignItems="center"
//           backgroundColor="rgba(0, 0, 0, 0.80)"
//           zIndex={9999}
//         >
//           <Box position="absolute" top={10} right={10}>
//             <button onClick={closeImage} style={{ color: '#fff', fontSize: 20 }}>
//               <FontAwesomeIcon icon={faTimesCircle} size="3x" />
//             </button>
//           </Box>
//           <button
//             onClick={navigateToPreviousImage}
//             style={{ position: 'absolute', top: '50%', left: 10, transform: 'translateY(-50%)', color: '#fff', fontSize: 40 }}
//           >
//             <FontAwesomeIcon icon={faCircleLeft} />
//           </button>
//           <button
//             onClick={navigateToNextImage}
//             style={{ position: 'absolute', top: '50%', right: 10, transform: 'translateY(-50%)', color: '#fff', fontSize: 40 }}
//           >
//             <FontAwesomeIcon icon={faCircleRight} />
//           </button>
//           <img src={selectedImage} alt="Selected" style={{ maxWidth: '90%', maxHeight: '90%' }} />
//         </Box>
//       )}
//     </Box>
//   );
// }

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageData from '../images/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faCircleLeft, faCircleRight } from '@fortawesome/free-regular-svg-icons';
import '../styles/masonryImageList.css'

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
        <Box className="overlay">
          <Box className="close-button" onClick={closeImage}>
            <FontAwesomeIcon icon={faTimesCircle} size="3x" />
          </Box>
          <button className="previous-button" onClick={navigateToPreviousImage}>
            <FontAwesomeIcon icon={faCircleLeft} />
          </button>
          <button className="next-button" onClick={navigateToNextImage}>
            <FontAwesomeIcon icon={faCircleRight} />
          </button>
          <img src={selectedImage} alt="Selected" className="selected-image" />
        </Box>
      )}
    </Box>
  );
}
