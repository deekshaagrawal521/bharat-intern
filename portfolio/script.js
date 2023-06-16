// Image Carousel
$('.carousel').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  });
  
  // Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    // Perform form validation here
  
    // Simulate form submission
    setTimeout(() => {
      contactForm.reset();
      alert('Message sent successfully!');
    }, 1000);
  });
  
  // Smooth Scrolling
  document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
  
    for (const link of links) {
      link.addEventListener('click', smoothScroll);
    }
  });
  
  function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
  
    if (targetSection) {
      const targetOffsetTop = targetSection.offsetTop;
      window.scrollTo({
        top: targetOffsetTop,
        behavior: 'smooth'
      });
    }
  }
  