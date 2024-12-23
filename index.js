document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.navbar li a');
  const nav = document.querySelector('.nav');

  // Listen to the scroll event
  window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
          // When scrolling down, change navbar's background and text color
          navbar.style.backgroundColor = 'rgba(255, 255, 255,0)'; // Transparent white background
          navbar.style.color = 'black';  // Change text color to black when scrolling down
      } else {
          // When at the top, restore the original background and text color
          navbar.style.backgroundColor = '#b8dcfc'; // Set background to original color when at the top
          navbar.style.color = 'white'; // Set text color to white when at the top
      }
  });
});

  
