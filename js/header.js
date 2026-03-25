

// --- СЛАЙДЕР (без изменений) ---
const hero = document.querySelector('.header_wrapp');
const title = document.querySelector('.text-main-title');
const slides = [
  { img: 'images/BG-header.jpg', text: 'Engineering over decoration' },
  { img: './images/bg2.jpg', text: 'Explained watchmaking' }
];

let index = 0;
title.classList.add('text-animate');

setInterval(() => {
  index = (index + 1) % slides.length;
  title.classList.remove('text-animate');
  void title.offsetWidth; 
  hero.style.backgroundImage = `url(${slides[index].img})`;
  title.textContent = slides[index].text;
  title.classList.add('text-animate');
}, 5000);