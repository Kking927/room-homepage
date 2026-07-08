// Header Menu Open and Close
const menuBtn = document.querySelector('.header__menu');
const header = document.querySelector('.header');

menuBtn.addEventListener('click', () => {
  header.classList.toggle('is-open');
  
  const isOpen = header.classList.contains('is-open');
  menuBtn.setAttribute('aria-expanded', isOpen);
  menuBtn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

// Slideshow Functionality
// 1. Array holding all the images for the slideshow
const slides = [
  {
    desktop: "https://raw.githubusercontent.com/Kking927/room-homepage/main/images/desktop-image-hero-1.jpg",
    mobile: "https://raw.githubusercontent.com/Kking927/room-homepage/main/images/mobile-image-hero-1.jpg"
  },
  {
    desktop: "https://raw.githubusercontent.com/Kking927/room-homepage/main/images/desktop-image-hero-2.jpg",
    mobile: "https://raw.githubusercontent.com/Kking927/room-homepage/main/images/mobile-image-hero-2.jpg"
  },
  {
    desktop: "https://raw.githubusercontent.com/Kking927/room-homepage/main/images/desktop-image-hero-3.jpg",
    mobile: "https://raw.githubusercontent.com/Kking927/room-homepage/main/images/mobile-image-hero-3.jpg"
  }
];

let currentIndex = 0;

// 2. DOM Selectors
const desktopSource = document.getElementById("hero-desktop");
const mobileImg = document.getElementById("hero-mobile");
const prevBtn = document.querySelector(".hero-grid__btn--prev");
const nextBtn = document.querySelector(".hero-grid__btn--next");

// 3. The Update Controller
function updateSlide() {
  desktopSource.srcset = slides[currentIndex].desktop;
  mobileImg.src = slides[currentIndex].mobile;
}

// 4. Click Event Listeners with Seamless Looping
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length; // Loops back to 0 at the end
  updateSlide();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loops to end if below 0
  updateSlide();
});

// Keyboard Arrow Accessibility
window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    nextBtn.click(); // Triggers the nextBtn click logic
  } else if (e.key === 'ArrowLeft') {
    prevBtn.click(); // Triggers the prevBtn click logic
  }
});
