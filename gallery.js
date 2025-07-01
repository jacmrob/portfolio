// Array of image URLs (replace with your own)
const imageUrls = [
  'fish_and_owl2.jpg',
  'fish_and_owl3.jpg',
  'fish_and_owl4.jpg',
  'carlson_orchard.jpg',
  'grasping_jroberti.JPG',
  'iceland.jpg',
  'venice_wc.png',
  'roma1.jpg',
  'tripyramids.jpg',
  'mackerel.jpg',
  'black_butte.jpg'
];

const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

// Populate gallery
// biome-ignore lint/complexity/noForEach: <explanation>
imageUrls.forEach(name => {
  const img = document.createElement('img');
  img.src = `https://static.jackieroberti.com/${name}`;
  img.alt = name;
  img.addEventListener('click', () => {
    lightboxImg.src = `https://static.jackieroberti.com/${name}`;
    lightbox.style.display = 'flex';
  });
  gallery.appendChild(img);
});

// Close lightbox on click
lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
