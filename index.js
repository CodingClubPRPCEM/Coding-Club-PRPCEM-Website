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


  

  document.querySelector(".back-to-top").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


    document.addEventListener("DOMContentLoaded", function() {
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
    });

    document.addEventListener('DOMContentLoaded', function() {
        AOS.init({
            duration: 1000,
            once: true
        });

        var items = document.querySelectorAll('.timeline-item');
        items.forEach(function(item) {
            var rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                item.classList.add('show');
            }
        });

        window.addEventListener('scroll', function() {
            items.forEach(function(item) {
                var rect = item.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    item.classList.add('show');
                }
            });
        });
    });

    AOS.init({
        duration: 1000,
        once: true
    });

    window.addEventListener('scroll', function() {
        var items = document.querySelectorAll('.timeline-item');
        items.forEach(function(item) {
            var rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                item.classList.add('show');
            }
        });
    });

    // Set the date we're counting down to
    var countDownDate = new Date("Jan 20, 2025 10:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the elements with id="days", "hours", "minutes", "seconds"
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "EXPIRED";
        }
    }, 1000);