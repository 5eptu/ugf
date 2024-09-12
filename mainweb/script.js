document.addEventListener("DOMContentLoaded", function() {
    const page = document.querySelector('.page');
    const overlay = document.createElement('div');
    overlay.classList.add('transition-overlay');
    overlay.innerHTML = `<span class="transition-text">Decoding...</span>`;
    document.body.appendChild(overlay);

    // Smooth transition effect for navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const targetPage = this.getAttribute('href');

            // Add slide-out effect and activate decoding transition
            page.classList.remove('
