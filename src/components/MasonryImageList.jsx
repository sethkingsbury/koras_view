import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageData from '../images/images'

export default function MasonryImageList({ isMobile }) {
  const cols = isMobile ? 2 : 4;
  const gap = isMobile ? 3 : 6;

  return (
    <Box>
      <ImageList variant="masonry" cols={cols} gap={gap}>
        {ImageData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}


