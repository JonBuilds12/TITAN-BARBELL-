const sliders = document.querySelectorAll('.before-after-slider');
sliders.forEach(slider => {
    const beforeImage = slider.querySelector('.before-image');
    const afterImage = slider.querySelector('.after-image');
    const handle = slider.querySelector('.slider-handle');
    let isDragging = false;
    slider.addEventListener('mousedown', () => {
    isDragging = true;
});
document.addEventListener('mouseup', () => {
    isDragging = false;
});
slider.addEventListener('mousemove', (e) => {
    // Touch support for mobile
slider.addEventListener('touchstart', () => {
  isDragging = true;
});

document.addEventListener('touchend', () => {
  isDragging = false;
});

slider.addEventListener('touchmove', (e) => {
  if (!isDragging) return;

  const sliderRect = slider.getBoundingClientRect();
  
  // Touch position instead of mouse position
  let position = e.touches[0].clientX - sliderRect.left;
  
  let percentage = (position / sliderRect.width) * 100;
  
  if (percentage < 0) percentage = 0;
  if (percentage > 100) percentage = 100;

  handle.style.left = percentage + '%';
  beforeImage.style.width = percentage + '%';
});
    if (!isDragging) return;
    const sliderRect = slider.getBoundingClientRect();
    let position = e.clientX - sliderRect.left;
    let percentage = (position / sliderRect.width) * 100;
    if (percentage < 0) percentage = 0;
if (percentage > 100) percentage = 100;
handle.style.left = percentage + '%';
beforeImage.style.width = percentage + '%';
handle.style.left = percentage + '%';
beforeImage.style.width = percentage + '%';
  });
});
// HAMBURGER MENU
const hamburger = document.getElementById('hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', function() {
  navbar.classList.toggle('active');
});
// Close navbar when a link is clicked
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});