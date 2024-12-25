document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector('.navbar');
  
  // Initial navbar color settings
  navbar.style.backgroundColor = 'transparent';
  navbar.style.color = 'white';  // Initially white text

  window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
          navbar.style.backgroundColor = 'black';  // Navbar turns black when scrolled
          navbar.style.color = 'white';  // Text stays white when scrolled
      } else {
          navbar.style.backgroundColor = 'transparent';  // Navbar is transparent when at the top
          navbar.style.color = 'white';  // Text stays white at the top
      }
  });
});

  // Detect scroll event
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });


  

