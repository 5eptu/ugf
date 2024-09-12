document.addEventListener("DOMContentLoaded", function() {
    // Fade in effect on page load
    document.body.classList.add('fade-in');

    // Add smooth transition to all navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const targetPage = this.getAttribute('href');

            // Add fade-out effect when the link is clicked
            document.body.classList.add('fade-out');

            // Wait for the fade-out transition to finish before navigating to the new page
            setTimeout(() => {
                window.location.href = targetPage;
            }, 600); // Match the delay with the CSS transition duration
        });
    });
});
