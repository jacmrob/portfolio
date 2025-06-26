// Array of image URLs (replace with your own)
const imageUrls = [
    'assets/swatch1.png',
    'assets/swatch2.png'
  ];
  
  const gallery = document.getElementById('gallery');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  
  // Populate gallery
  imageUrls.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Gallery image';
    img.addEventListener('click', () => {
      lightboxImg.src = url;
      lightbox.style.display = 'flex';
    });
    gallery.appendChild(img);
  });
  
  // Close lightbox on click
  lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });
  