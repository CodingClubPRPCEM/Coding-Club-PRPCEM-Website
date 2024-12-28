document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: true
  });

  // Navbar handling
  const navbar = document.querySelector('.navbar');
  navbar.style.backgroundColor = 'transparent';
  navbar.style.color = 'white';

  // Card animation
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(50px)";
    setTimeout(() => {
      card.style.transition = "all 0.5s ease-in-out";
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, index * 200);
  });

  // Timeline items
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  // Scroll event handler
  window.addEventListener('scroll', function() {
    // Navbar scroll effect
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = 'black';
      navbar.classList.add('scrolled');
    } else {
      navbar.style.backgroundColor = 'transparent';
      navbar.classList.remove('scrolled');
    }

    // Timeline items animation
    timelineItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        item.classList.add('show');
      }
    });
  });

  // Back to top button
  document.querySelector(".back-to-top")?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Countdown timer
  const countDownDate = new Date("Jan 20, 2025 10:00:00").getTime();
  const timerUpdate = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance < 0) {
      clearInterval(timerUpdate);
      document.getElementById("timer").innerHTML = "EXPIRED";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  }, 1000);
});
// Problem statement card generation
