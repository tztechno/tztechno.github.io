// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle && navMenu) {
  mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
    
    // Animate bars of the toggle button
    const bars = mobileMenuToggle.querySelectorAll('.bar');
    if (mobileMenuToggle.classList.contains('active')) {
      bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
      bars[1].style.opacity = '0';
      bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
    } else {
      bars[0].style.transform = 'none';
      bars[1].style.opacity = '1';
      bars[2].style.transform = 'none';
    }
  });

  // Close mobile menu when clicking a link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      mobileMenuToggle.classList.remove('active');
      const bars = mobileMenuToggle.querySelectorAll('.bar');
      bars.forEach(bar => bar.style.transform = 'none');
      bars[1].style.opacity = '1';
    });
  });
}

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const item = question.parentElement;
    const answer = item.querySelector('.faq-answer');
    
    // Toggle active class
    item.classList.toggle('active');
    
    if (item.classList.contains('active')) {
      // Set max-height to scrollHeight to trigger smooth expansion
      answer.style.maxHeight = answer.scrollHeight + 'px';
      answer.style.padding = '0 30px 24px 30px';
    } else {
      answer.style.maxHeight = '0';
      // Use setTimeout to remove padding after transition closes to avoid visual jump
      setTimeout(() => {
        if (!item.classList.contains('active')) {
          answer.style.padding = '0 30px';
        }
      }, 300);
    }
  });
});

// Scroll Fade-in Animation (Intersection Observer)
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.mechanic-card, .feature-item, .arena-card, .pricing-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => {
    // Initial states for smooth fade-in
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1), transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
    observer.observe(el);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  animateOnScroll();
});
