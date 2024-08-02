document.addEventListener('DOMContentLoaded', () => {
    const openModalButton = document.getElementById('openModal');
    const closeModalButton = document.getElementById('closeModal');
    const modal = document.getElementById('modal');

    // Open modal function
    openModalButton.addEventListener('click', () => {
        modal.classList.add('is-open');
    });

    // Close modal function
    closeModalButton.addEventListener('click', () => {
        modal.classList.remove('is-open');
    });

    // Close modal when clicking outside the content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('is-open');
        }
    });
});
