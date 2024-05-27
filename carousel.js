// Array de rutas de imágenes
const images = [
    'images/m1.jpg',
    'images/m2.jpg',
    'images/m3.jpeg',
    'images/m4.jpg',
    'images/m5.jpg'
  ];
  
  let currentIndex = 0;
  
  // Referencias a los elementos del DOM
  const carouselImage = document.getElementById('carouselImage');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  
  // Función para actualizar la imagen mostrada
  function updateImage() {
    carouselImage.src = images[currentIndex];
  }
  
  // Función para ir a la imagen anterior
  function showPrevImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
  }
  
  // Función para ir a la imagen siguiente
  function showNextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
  }
  
  // Asignar eventos a los botones
  prevButton.addEventListener('click', showPrevImage);
  nextButton.addEventListener('click', showNextImage);
  
  // Inicializar la primera imagen
  updateImage();
  