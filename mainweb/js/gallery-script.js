document.querySelector('.gallery-container').addEventListener('wheel', (evt) => {
    evt.preventDefault();
    document.querySelector('.gallery-grid').scrollLeft += evt.deltaY;
});
