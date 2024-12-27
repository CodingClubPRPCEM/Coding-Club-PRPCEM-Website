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
const problemStatements = {
  hardware: [
    { id: 'PRPCEMH1', text: 'Smart Education: Monitoring System for classroom session in skill training program.' },
    { id: 'PRPCEMH2', text: 'BioTech / HealthTech: Queuing models in OPDs/ availability of beds/ admission of patients. A hospital based solution is ideal which can be integrated with city wide module.' },
    { id: 'PRPCEMH3', text: 'AI-Healthcare systems: Wearable sensor with Artificial Intelligence for prevention of falls in elderly people.' },
    { id: 'PRPCEMH4', text: 'Smart Automation: System to check the healthiness of earthing system and alert staff in case of any malfunction.' },
    { id: 'PRPCEMH5', text: 'Smart Farming system: Farmer Assistance and Support Solutions.' },
    { id: 'PRPCEMH6', text: 'Intelligent Automation: Designing Innovative Products for Empowering the Delivery Workforce.' },
    { id: 'PRPCEMH7', text: 'Students Innovation (Hardware-Innovative, Creative and Impactful solutions).' }
  ],
  software: [
    { id: 'PRPCEMS1', text: 'AI enabled Clean & Green Technology: Solutions could be in the form of waste segregation, disposal, and improve sanitization system.' },
    { id: 'PRPCEMS2', text: 'Fitness & Sports: Ideas that can boost fitness activities and assist in keeping fit.' },
    { id: 'PRPCEMS3', text: 'Smart Automation: Urban areas often face significant traffic congestion, especially at intersections where multiple routes converge.' },
    { id: 'PRPCEMS4', text: 'Educational Game: Challenges your creative minds to conceptualize and develop unique toys & games.' },
    { id: 'PRPCEMS5', text: 'Smart Education: Development of an educational game (web-based and mobile-based) on groundwater conservation and management.' },
    { id: 'PRPCEMS6', text: 'AI Enabled Education: Smart Competency Diagnostic and Candidate Profile Score Calculator.' },
    { id: 'PRPCEMS7', text: 'Agriculture, FoodTech & Rural Development: AI-Driven Crop Disease Prediction and Management System.' },
    { id: 'PRPCEMS8', text: 'Smart farming & Agriculture Development: Assured Contract Farming System for Stable Market Access.' },
    { id: 'PRPCEMS9', text: 'Blockchain & security: Fake social media accounts and their detection.' },
    { id: 'PRPCEMS10', text: 'AI driven Smart Education: AI-based Personalized Career Guidance Platform.' },
    { id: 'PRPCEMS11', text: 'Health care System: Virtual Healthcare Assistant for Rural Areas.' },
    { id: 'PRPCEMS12', text: 'Cyber Security: Fraud Detection in E-commerce Transactions.' },
    { id: 'PRPCEMS13', text: 'Clean & Green Technology: Use of Digital Knowledge Sharing Platform like Wikis on sharing of water efficient techniques and methods for minimizing water scarcity.' },
    { id: 'PRPCEMS14', text: 'Smart Education: Create an Annual Report Portal for institute where all the departmental reports can be integrated and customized.' },
    { id: 'PRPCEMS15', text: 'Students Innovation (Software-Innovative, Creative and Impactful solutions).' }
  ]
};

function generateProblemCards(type) {
  return problemStatements[type].map(statement => `
    <div class="col-md-4 mb-4">
      <div class="card h-100 shadow-sm bg-light">
        <div class="card-body">
          <h5 class="card-title">${statement.id}</h5>
          <p class="card-text">${statement.text}</p>
        </div>
      </div>
    </div>
  `).join('');
}

window.addEventListener('load', function() {
  document.getElementById('hardware-cards').innerHTML = generateProblemCards('hardware');
  document.getElementById('software-cards').innerHTML = generateProblemCards('software');
});
// Add tab switching animation
document.querySelectorAll('.nav-link').forEach(tab => {
  tab.addEventListener('click', () => {
    const targetPane = document.querySelector(tab.dataset.bsTarget);
    const cards = targetPane.querySelectorAll('.card');
    
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
});