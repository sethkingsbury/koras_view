const ItemData = [
    {
      img: require('./IMG_0000.jpeg'),
      title: '0',
    },
  ];

for (let i = 0; i < 10; i++) {
  ItemData.push({
    img: require(`./IMG_000${i}.jpeg`),
    title: i.toString(),
  })
}

for (let i = 10; i < 51; i++) {
  ItemData.push({
    img: require(`./IMG_00${i}.jpeg`),
    title: i.toString(),
  })
}

  export default ItemData