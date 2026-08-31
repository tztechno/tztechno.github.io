document.addEventListener('DOMContentLoaded', () => {
  // --- CAROUSEL LOGIC ---
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.getElementById('carousel-prev-btn');
  const nextBtn = document.getElementById('carousel-next-btn');
  let currentSlide = 0;
  let slideInterval;

  const showSlide = (index) => {
    // Wrap around index boundaries
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    // Toggle active classes
    slides.forEach((slide, i) => {
      if (i === currentSlide) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    dots.forEach((dot, i) => {
      if (i === currentSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  };

  const nextSlide = () => showSlide(currentSlide + 1);
  const prevSlide = () => showSlide(currentSlide - 1);

  // Setup event listeners for buttons
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetInterval();
    });
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetInterval();
    });
  }

  // Setup dots click listeners
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      showSlide(i);
      resetInterval();
    });
  });

  // Auto rotation
  const startInterval = () => {
    slideInterval = setInterval(nextSlide, 6000); // Rotate every 6s
  };

  const resetInterval = () => {
    clearInterval(slideInterval);
    startInterval();
  };

  startInterval();



  // --- HEADER GLITCH EFFECT MICRO-ANIMATION ---
  const brandText = document.querySelector('.nav-brand span');
  if (brandText) {
    setInterval(() => {
      brandText.style.textShadow = '0 0 15px var(--neon-green), 2px 2px var(--neon-red), -2px -2px var(--neon-cyan)';
      setTimeout(() => {
        brandText.style.textShadow = '0 0 8px rgba(57, 255, 20, 0.6)';
      }, 150);
    }, 4000);
  }
});
