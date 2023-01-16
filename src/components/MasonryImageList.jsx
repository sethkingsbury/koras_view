import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ItemData from '../images/images'

export default function MasonryImageList() {
  return (
    <Box>
      <ImageList variant="masonry" cols={2} gap={3}>
        {ItemData.map((item) => (
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

