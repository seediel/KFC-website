let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const autoScrollInterval = 3000; 
let timer;

function showSlide(index) {
  if (index >= slides.length) currentIndex = 0;
  else if (index < 0) currentIndex = slides.length - 1;
  else currentIndex = index;

  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  slides[currentIndex].classList.add('active');
  if (dots[currentIndex]) dots[currentIndex].classList.add('active');
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function goToSlide(index) {
  showSlide(index);
  resetTimer();
}

// Auto-scroll controls
function startTimer() {
  timer = setInterval(nextSlide, autoScrollInterval);
}

function resetTimer() {
  clearInterval(timer);
  startTimer();
}

document.querySelector('.next').addEventListener('click', () => {
  nextSlide();
  resetTimer();
});

document.querySelector('.prev').addEventListener('click', () => {
  prevSlide();
  resetTimer();
});

const container = document.querySelector('.carousel-container');
container.addEventListener('mouseenter', () => clearInterval(timer));
container.addEventListener('mouseleave', startTimer);

showSlide(0)
startTimer();