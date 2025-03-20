// imageImporter.js

// This function imports all images from a given context and returns an array of image objects
export const importAllImages = (context) => {
    return context.keys().map((key) => ({
      original: context(key),
      thumbnail: context(key),
      description: key.split('./')[1].split('.')[0], // Extract image filename as description
    }));
  };