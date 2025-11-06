const items = document.querySelectorAll('.carousel_item');
const total = items.length;
let currentIndex = 0;

function nextSlide() {
  const current = items[currentIndex];
  const nextIndex = (currentIndex + 1) % total;
  const next = items[nextIndex];

  // Animate out current image
  current.classList.add('slide-out-left');

  // Animate in next image
  next.classList.add('slide-in-right', 'active');

  // After animation ends, clean up classes
  setTimeout(() => {
    current.classList.remove('active', 'slide-out-left');
    next.classList.remove('slide-in-right');
    currentIndex = nextIndex;  // update current index
  }, 2000); // duration matches CSS animation
}

// Auto slide every 4 seconds
setInterval(nextSlide, 2000);

