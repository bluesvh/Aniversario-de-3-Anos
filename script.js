const album = document.querySelector('.album');
const images = [
  'img/img1.jpg',
  'img/img2.jpeg',
  'img/img3.jpeg',
  'img/img4.jpeg',
  'img/img5.jpeg',
  'img/img6.jpeg',
  'img/img7.jpeg',
  'img/img8.jpeg',
  'img/img9.jpeg',
  'img/img10.jpeg',
  'img/img11.jpeg',
  'img/img12.jpeg',
  'img/img13.jpeg',
  'img/img14.jpeg',
  'img/img15.jpeg',
  'img/img16.jpeg',
  'img/img17.jpeg',
  'img/img18.jpeg',
  'img/img19.jpeg',
  'img/img20.jpeg',
  'img/img21.jpeg',
  'img/img22.jpeg',
  'img/img23.jpeg',
  'img/img24.jpeg',
  'img/img25.jpeg',
  'img/img26.jpeg',
  'img/img27.jpeg',
  'img/img28.jpeg',
  'img/img29.jpeg',
  'img/img30.jpeg',
  'img/img31.jpeg',
  'img/img32.jpeg',
  'img/img33.jpeg',
  'img/img34.jpeg',
  'img/img35.jpeg',
  'img/img36.jpeg',
  'img/img37.jpeg',
  'img/img38.jpeg',
  'img/img39.jpeg',
  'img/img40.jpeg',
  'img/img41.jpeg',
  'img/img42.jpeg',
  'img/img43.jpeg',
  'img/img44.jpeg',
  'img/img45.jpeg',
  // ... adicione mais imagens aqui
];

images.forEach(image => {
  const img = document.createElement('img');
  img.src = image;
  album.appendChild(img);
});