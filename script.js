document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Clear previous errors
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.remove());
    
    let isValid = true;
    
    // Validate Full Name
    const fullName = document.getElementById('fullName');
    if (fullName.value.trim() === '') {
        showError(fullName, 'Full Name is required.');
        isValid = false;
    }
    
    // Validate Email
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
        showError(email, 'Email Address is required.');
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        showError(email, 'Please enter a valid email address.');
        isValid = false;
    }
    
    // Validate Subject
    const subject = document.getElementById('subject');
    if (subject.value.trim() === '') {
        showError(subject, 'Subject is required.');
        isValid = false;
    }
    
    // Validate Message
    const message = document.getElementById('message');
    if (message.value.trim() === '') {
        showError(message, 'Message is required.');
        isValid = false;
    }
    
    if (isValid) {
        // Hide form and show success message
        this.style.display = 'none';
        const successMessage = document.getElementById('successMessage');
        successMessage.style.display = 'block';
        setTimeout(() => {
            this.reset();
            successMessage.style.display = 'none';
            this.style.display = 'block';
        }, 3000);
    }
});

function showError(element, message) {
    const error = document.createElement('div');
    error.className = 'error';
    error.textContent = message;
    element.parentNode.appendChild(error);
}