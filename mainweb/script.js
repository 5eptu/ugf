document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add('fade-in');

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetPage = this.getAttribute('href');
            document.body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = targetPage;
            }, 600); // Time to match the CSS transition duration
        });
    });
});
