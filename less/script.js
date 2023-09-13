document.addEventListener('DOMContentLoaded', () => {
    const errorButton = document.querySelector('.error-button');
    const successButton = document.querySelector('.success-button');
    const errorMessage = document.querySelector('.error-message');
    const successMessage = document.querySelector('.success-message');

    errorButton.addEventListener('click', () => {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    });

    successButton.addEventListener('click', () => {
        errorMessage.style.display = 'none';
        successMessage.style.display = 'block';
    });
});
