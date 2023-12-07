const img = document.querySelectorAll('.carousel__item');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');
const carouselLength = document.getElementById('carousel-length')

// Images are from unsplash
const pictures = ['./assets/images/main/slider_img.png', './assets/images/main/slider_img.png', './assets/images/main/slider_img.png'];

img.src = pictures[0];
let position = 0;

const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

const moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);