let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const autoScrollInterval = 3000; 
let timer = null;

function showSlide(index) {
  if (slides.length === 0) return;

  if (index >= slides.length) currentIndex = 0;
  else if (index < 0) currentIndex = slides.length - 1;
  else currentIndex = index;

  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  slides[currentIndex].classList.add('active');
  if (dots[currentIndex]) {
    dots[currentIndex].classList.add('active');
  }
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
  stopTimer(); // Always clear any existing interval before creating a new one
  timer = setInterval(nextSlide, autoScrollInterval);
}

function stopTimer() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}

function resetTimer() {
  stopTimer();
  startTimer();
}

// Arrow Button Listeners
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

if (nextBtn) {
  nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    nextSlide();
    resetTimer();
  });
}

if (prevBtn) {
  prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    prevSlide();
    resetTimer();
  });
}

// Hover Pause / Resume
const container = document.querySelector('.carousel-container');
if (container) {
  container.addEventListener('mouseenter', stopTimer);
  container.addEventListener('mouseleave', startTimer);
}

// Initialize
showSlide(0);
startTimer();