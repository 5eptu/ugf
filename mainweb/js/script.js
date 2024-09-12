// Enable horizontal scrolling on the gallery using the mouse wheel
document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.querySelector('.gallery-container');
    const fadeLeft = document.querySelector('.fade-left');
    const fadeRight = document.querySelector('.fade-right');

    // Handle horizontal scroll with the mouse wheel
    galleryContainer.addEventListener('wheel', (event) => {
        if (event.deltaY !== 0) {
            event.preventDefault();
            galleryContainer.scrollLeft += event.deltaY;
        }

        // Show or hide fade effect based on scroll position
        updateFadeVisibility(galleryContainer, fadeLeft, fadeRight);
    });

    // Update fade effect on scroll
    galleryContainer.addEventListener('scroll', () => {
        updateFadeVisibility(galleryContainer, fadeLeft, fadeRight);
    });

    // Initially check the scroll position
    updateFadeVisibility(galleryContainer, fadeLeft, fadeRight);
});

// Function to manage visibility of the left and right fade effects
function updateFadeVisibility(container, fadeLeft, fadeRight) {
    const scrollLeft = container.scrollLeft;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    // Show left fade if not at the far left
    if (scrollLeft > 0) {
        fadeLeft.style.opacity = '1';
    } else {
        fadeLeft.style.opacity = '0';
    }

    // Show right fade if not at the far right
    if (scrollLeft < maxScrollLeft) {
        fadeRight.style.opacity = '1';
    } else {
        fadeRight.style.opacity = '0';
    }
}

// Smooth transition effect between pages with a futuristic animation
document.addEventListener('DOMContentLoaded', () => {
    // Fade in when loading the page
    document.body.classList.add('fade-in');

    // Smooth transition when clicking on links
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const target = event.target.href;
            
            // Add fade-out effect
            document.body.classList.add('fade-out');

            setTimeout(() => {
                window.location.href = target;
            }, 500); // Adjust duration to match CSS animation time
        });
    });
});
