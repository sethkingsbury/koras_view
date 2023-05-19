const ImageData = [];

for (let i = 0; i < 10; i++) {
  ImageData.push({
    img: require(`./IMG_000${i}.jpeg`),
    title: i.toString(),
  })
}

for (let i = 10; i < 51; i++) {
  ImageData.push({
    img: require(`./IMG_00${i}.jpeg`),
    title: i.toString(),
  })
}

  export default ImageData