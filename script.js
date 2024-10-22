document.addEventListener("DOMContentLoaded", () => {
    // Obsługa kliknięcia przycisku "Wyzwanie rozpoczęte"
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Wyzwanie rozpoczęte!');
        });
    });

    // Walidacja formularza
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Formularz wysłany!');
            // Można tu dodać kod do wysyłki formularza
        });
    }

    // Obsługa karuzeli
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    const prevButton = document.querySelector('.carousel-btn.prev');
    const nextButton = document.querySelector('.carousel-btn.next');

    let currentIndex = 0;
    const imageWidth = images[0].clientWidth;

    nextButton.addEventListener('click', () => {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            carouselImages.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
        } else {
            currentIndex = 0;
            carouselImages.style.transform = `translateX(0px)`;
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            carouselImages.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
        } else {
            currentIndex = images.length - 1;
            carouselImages.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
        }
    });
});
