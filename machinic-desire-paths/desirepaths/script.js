const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let current = 0;

function show(index) {
  current = Math.max(0, Math.min(index, slides.length - 1));

  slides.forEach((slide, i) => {
    slide.hidden = i !== current;
  });

  prevButton.disabled = current === 0;
  nextButton.disabled = current === slides.length - 1;

  history.replaceState(null, '', '#' + (current + 1));
}

function next() {
  show(current + 1);
}

function prev() {
  show(current - 1);
}

nextButton.addEventListener('click', next);
prevButton.addEventListener('click', prev);

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ' || e.key === 'PageDown') {
    e.preventDefault();
    next();
  }
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
    e.preventDefault();
    prev();
  }
});

let touchStartX = 0;

document.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].clientX;
});

document.addEventListener('touchend', (e) => {
  const distance = e.changedTouches[0].clientX - touchStartX;
  if (distance < -50) next();
  if (distance > 50) prev();
});

const start = parseInt(location.hash.slice(1), 10);
show(Number.isNaN(start) ? 0 : start - 1);