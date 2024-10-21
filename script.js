// Funkcjonalność karuzeli
const carouselImages = document.querySelector('.carousel-images');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

const updateCarousel = () => {
    const totalImages = carouselImages.children.length;
   
