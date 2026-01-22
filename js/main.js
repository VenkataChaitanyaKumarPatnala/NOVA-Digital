document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            // Toggles the 'active' class on the list
            navLinks.classList.toggle('active');
        });
    }
});