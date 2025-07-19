/**
 * Form Management
 * Handles form submissions and validation
 */

class FormManager {
    constructor() {
        this.forms = {};
        this.init();
    }

    /**
     * Initialize form functionality
     */
    init() {
        this.setupContactForm();
    }

    /**
     * Setup contact form handling
     */
    setupContactForm() {
        const contactForm = document.getElementById('contact-form');
        
        if (contactForm) {
            this.forms.contact = contactForm;
            
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleContactFormSubmission(contactForm);
            });

            // Add real-time validation
            this.addFormValidation(contactForm);
        }
    }

    /**
     * Handle contact form submission
     * @param {HTMLFormElement} form - The contact form element
     */
    handleContactFormSubmission(form) {
        try {
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Validate form data
            if (this.validateContactForm(data)) {
                // Here you would typically send the data to your server
                console.log('Form submitted:', data);
                
                // Show success message
                this.showSuccessMessage();
                
                // Reset form
                form.reset();
                
                // Clear any validation errors
                this.clearValidationErrors(form);
            }
        } catch (error) {
            console.error('Error handling form submission:', error);
            this.showErrorMessage('An error occurred. Please try again.');
        }
    }

    /**
     * Validate contact form data
     * @param {Object} data - Form data object
     * @returns {boolean} Validation result
     */
    validateContactForm(data) {
        const requiredFields = ['firstName', 'lastName', 'email', 'message'];
        let isValid = true;

        // Check required fields
        requiredFields.forEach(field => {
            if (!data[field] || data[field].trim() === '') {
                this.showFieldError(field, 'This field is required.');
                isValid = false;
            }
        });

        // Validate email format
        if (data.email && !this.isValidEmail(data.email)) {
            this.showFieldError('email', 'Please enter a valid email address.');
            isValid = false;
        }

        return isValid;
    }

    /**
     * Validate email format
     * @param {string} email - Email to validate
     * @returns {boolean} Validation result
     */
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * Show field-specific error message
     * @param {string} fieldName - Name of the field with error
     * @param {string} message - Error message to display
     */
    showFieldError(fieldName, message) {
        const field = document.getElementById(fieldName);
        if (field) {
            // Add error class
            field.classList.add('error');
            
            // Create or update error message
            let errorElement = field.parentNode.querySelector('.error-message');
            if (!errorElement) {
                errorElement = document.createElement('div');
                errorElement.className = 'error-message';
                field.parentNode.appendChild(errorElement);
            }
            errorElement.textContent = message;
        }
    }

    /**
     * Clear validation errors for a form
     * @param {HTMLFormElement} form - Form element
     */
    clearValidationErrors(form) {
        const errorFields = form.querySelectorAll('.error');
        const errorMessages = form.querySelectorAll('.error-message');
        
        errorFields.forEach(field => field.classList.remove('error'));
        errorMessages.forEach(message => message.remove());
    }

    /**
     * Add real-time validation to form fields
     * @param {HTMLFormElement} form - Form element
     */
    addFormValidation(form) {
        const inputs = form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });
            
            input.addEventListener('input', () => {
                // Clear error when user starts typing
                if (input.classList.contains('error')) {
                    input.classList.remove('error');
                    const errorMessage = input.parentNode.querySelector('.error-message');
                    if (errorMessage) {
                        errorMessage.remove();
                    }
                }
            });
        });
    }

    /**
     * Validate individual field
     * @param {HTMLElement} field - Field element to validate
     */
    validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        
        // Clear previous error
        field.classList.remove('error');
        const existingError = field.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Validate based on field type
        if (field.hasAttribute('required') && !value) {
            this.showFieldError(fieldName, 'This field is required.');
        } else if (field.type === 'email' && value && !this.isValidEmail(value)) {
            this.showFieldError(fieldName, 'Please enter a valid email address.');
        }
    }

    /**
     * Show success message
     */
    showSuccessMessage() {
        alert('Thank you for your message! We will get back to you within 24 hours.');
    }

    /**
     * Show error message
     * @param {string} message - Error message to display
     */
    showErrorMessage(message) {
        alert(`Error: ${message}`);
    }
}

// Initialize form manager when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new FormManager();
});

// Export for potential use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FormManager;
} 