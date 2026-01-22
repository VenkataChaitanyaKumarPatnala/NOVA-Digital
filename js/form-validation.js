const form = document.getElementById('contactForm');

if (form) {
    form.addEventListener('submit', (e) => {
        let isValid = true;
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        
        // Simple Email Regex check
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(emailInput.value)) {
            e.preventDefault(); // Stop form submission
            emailError.innerText = "Please enter a valid email address.";
            emailError.style.display = "block";
            isValid = false;
        } else {
            emailError.style.display = "none";
        }

        if(isValid) {
            alert("Form submitted successfully!");
        }
    });
}