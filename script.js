let index = 0;

function showSlide(newIndex) {
    const slides = document.querySelectorAll('.slide');
    const track = document.querySelector('.slide-track');
    if (newIndex >= slides.length) {
        index = 0;
    } else if (newIndex < 0) {
        index = slides.length - 1;
    } else {
        index = newIndex;
    }
    track.style.transform = `translateX(-${index * 100}%)`;
}

function moveSlides(direction) {
    showSlide(index + direction);
}

function autoSlide() {
    moveSlides(1);
    setTimeout(autoSlide, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    autoSlide();
});
