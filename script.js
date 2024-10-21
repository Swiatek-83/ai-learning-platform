document.addEventListener("DOMContentLoaded", () => {
    // Przykładowa funkcja do obsługi kliknięcia przycisku
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
});
