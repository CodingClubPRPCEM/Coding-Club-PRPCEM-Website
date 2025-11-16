// Event Detail Page JavaScript

// Comprehensive event data - in a real application, this would come from an API or database
const eventData = {
  // UPCOMING EVENTS
  
  // PAST EVENTS
  'technical-quiz-2024': {
    title: 'Technical Quiz Competition',
    subtitle: 'Test your technical knowledge and win exciting prizes',
    date: 'August 28, 2024',
    time: '2:00 PM - 4:00 PM',
    location: 'Seminar Hall, PRPCEM',
    category: 'Competition',
    capacity: '60 participants',
    price: 'Free',
    status: 'Completed',
    isPast: true,
    participantCount: 58,
    winnersCount: 6,
    completionRate: '100%',
    image: 'images/events.png',
    icon: 'fas fa-brain',
    tags: ['quiz', 'competition', 'technical', 'knowledge'],
    organizer: 'Coding Club PRPCEM',
    difficulty: 'All Levels',
    gallery: [
      { src: 'images/events.png', caption: 'Quiz competition in progress', alt: 'Technical Quiz Session' },
      { src: 'images/hero.jpg', caption: 'Participants answering challenging questions', alt: 'Quiz Participants' },
      { src: 'images/college-photo.jpg', caption: 'Winners with their prizes', alt: 'Winners Announcement' },
      { src: 'images/about.png', caption: 'Group photo with all participants', alt: 'Group Photo' }
    ],
    highlights: [
      '58 participants tested their knowledge',
      'Multiple rounds with increasing difficulty',
      'Questions covering various tech domains',
      'Exciting prizes for top performers',
      'Great learning experience for all',
      'Certificates for all participants'
    ],
    winners: [
      { position: '1st Place', team: 'Rajesh Kumar', project: 'Perfect Score', prize: '₹3,000' },
      { position: '2nd Place', team: 'Priya Sharma', project: 'Excellent Performance', prize: '₹2,000' },
      { position: '3rd Place', team: 'Amit Patel', project: 'Great Knowledge', prize: '₹1,000' }
    ],
    description: `
      <p>Our Technical Quiz Competition was an exciting test of knowledge and quick thinking! 58 enthusiastic participants gathered to showcase their technical expertise across various domains.</p>
      <p>The quiz covered topics ranging from programming fundamentals to advanced concepts in software development, databases, networking, and emerging technologies.</p>
      <p>Multiple rounds challenged participants with questions of varying difficulty levels, ensuring both beginners and experienced students could participate meaningfully.</p>
      <p>The competitive atmosphere, combined with learning opportunities, made this event both educational and entertaining for all participants!</p>
    `,
    agenda: [
      {
        time: '02:00 PM',
        title: 'Registration & Welcome',
        description: 'Participant check-in and introduction to quiz format.'
      },
      {
        time: '02:30 PM',
        title: 'Round 1: Fundamentals',
        description: 'Basic programming and computer science concepts.'
      },
      {
        time: '03:00 PM',
        title: 'Round 2: Advanced Topics',
        description: 'Complex technical questions and problem-solving.'
      },
      {
        time: '03:30 PM',
        title: 'Final Round',
        description: 'Rapid-fire questions for top performers.'
      },
      {
        time: '04:00 PM',
        title: 'Results & Prize Distribution',
        description: 'Winner announcement and certificate distribution.'
      }
    ],
    prerequisites: [
      'Basic understanding of programming concepts',
      'General computer science knowledge',
      'Quick thinking and problem-solving skills',
      'Competitive spirit',
      'No specific preparation required'
    ],
    learnings: [
      'Testing knowledge under time pressure',
      'Learning from diverse technical questions',
      'Competitive problem-solving experience',
      'Exposure to various technology domains',
      'Networking with fellow tech enthusiasts',
      'Understanding knowledge gaps for improvement'
    ]
  },
  
  'git-github-workshop ': {
    title: 'Master Git & GitHub Workshop',
    subtitle: 'Essential version control skills for every developer',
    date: 'March 21, 2025',
    time: '10:00 AM - 4:00 PM',
    location: 'Computer Lab 1, PRPCEM',
    category: 'Workshop',
    capacity: '45 participants',
    price: 'Free',
    status: 'Upcoming',
    isPast: false,
    registeredCount: 28,
    seatsAvailable: 17,
    image: 'images/events.png',
    icon: 'fab fa-git-alt',
    tags: ['git', 'github', 'version-control', 'collaboration'],
    organizer: 'Coding Club PRPCEM',
    difficulty: 'Beginner to Intermediate',
    description: `
      <p>Master the essential tools that every developer needs! This comprehensive workshop will teach you everything about Git version control and GitHub collaboration.</p>
      <p>Whether you're a beginner starting your coding journey or looking to improve your development workflow, this workshop will provide hands-on experience with industry-standard tools.</p>
      <p>Learn to manage your code professionally, collaborate with teams, and contribute to open-source projects with confidence.</p>
    `,
    agenda: [
      {
        time: '10:00 AM',
        title: 'Introduction to Version Control',
        description: 'Understanding the importance and basics of version control systems.'
      },
      {
        time: '11:00 AM',
        title: 'Git Fundamentals',
        description: 'Installation, configuration, and basic Git commands.'
      },
      {
        time: '12:30 PM',
        title: 'Lunch Break',
        description: 'Networking and discussions over lunch.'
      },
      {
        time: '01:30 PM',
        title: 'GitHub Essentials',
        description: 'Creating repositories, managing projects, and collaboration.'
      },
      {
        time: '02:30 PM',
        title: 'Branching & Merging',
        description: 'Advanced Git workflows and team collaboration.'
      },
      {
        time: '03:30 PM',
        title: 'Open Source Contribution',
        description: 'How to contribute to open-source projects effectively.'
      },
      {
        time: '04:00 PM',
        title: 'Q&A and Best Practices',
        description: 'Questions, tips, and industry best practices.'
      }
    ],
    prerequisites: [
      'Basic programming knowledge in any language',
      'Laptop with internet connection',
      'GitHub account (will help create during workshop)',
      'Text editor or IDE installed',
      'Willingness to learn collaboration tools'
    ],
    learnings: [
      'Complete Git workflow mastery',
      'GitHub repository management',
      'Branching and merging strategies',
      'Collaborative development practices',
      'Open-source contribution skills',
      'Professional development workflows'
    ]
  },
  
  'codethon-2024': {
    title: 'CODETHON 2024',
    subtitle: 'A competitive coding event that tested problem-solving abilities and programming skills',
    date: 'October 7, 2024',
    time: '1:00 PM - 3:00 PM',
    location: 'Seminar Hall PRPCEM & CSE Building, Amravati',
    category: 'Coding Competition',
    capacity: '100 participants',
    price: 'Free',
    status: 'Completed',
    isPast: true,
    participantCount: 100,
    roundsCompleted: 2,
    winnersCount: 5,
    image: 'images/events.png', 
    icon: 'fas fa-code',
    tags: ['coding', 'competition', 'algorithms', 'problem-solving', 'hackerrank'],
    organizer: 'Department of CSE in association with Coding Club PRPCEM & FLICS',
    difficulty: 'All Levels',
    platform: 'HackerRank',
    gallery: [
      { src: 'images/events.png', caption: 'CODETHON 2024 competition in progress', alt: 'CODETHON Competition' },
      { src: 'images/hero.jpg', caption: 'Students solving coding challenges', alt: 'Coding Challenges' },
      { src: 'images/college-photo.jpg', caption: 'Participants during Round 1 qualifying', alt: 'Round 1 Competition' },
      { src: 'images/about.png', caption: 'Prize distribution ceremony at Parents Meet', alt: 'Prize Distribution' },
      { src: 'images/events.png', caption: 'Winners with their certificates and prizes', alt: 'Winners Celebration' },
      { src: 'images/hero.jpg', caption: 'All participants receiving certificates', alt: 'Participation Certificates' }
    ],
    highlights: [
      '100 student participants from various departments',
      'Two challenging rounds of coding problems',
      'Collaboration with HackerRank platform',
      'Real-world coding situations and challenges',
      'Prizes worth ₹5,000 and certificates for all',
      'Attended by college dignitaries and faculty'
    ],
    winners: [
      { position: '1st Place', team: 'Ayush Chainani', project: '3rd Year AI & DS Student', prize: '₹3,000 + Certificate' },
      { position: '2nd Place', team: 'Atharv Ital', project: '3rd Year CSE (Section-C) Student', prize: '₹2,000 + Certificate' },
      { position: 'Certificate of Achievement', team: 'Tarun Sahu', project: 'Outstanding Performance', prize: 'Certificate' },
      { position: 'Certificate of Achievement', team: 'Aditya Manapure', project: 'Outstanding Performance', prize: 'Certificate' },
      { position: 'Certificate of Achievement', team: 'Vaishnavi Baraskar', project: 'Outstanding Performance', prize: 'Certificate' }
    ],
    description: `
      <p>CODETHON 2024 was a highly successful competitive coding event organized by the Department of Computer Science and Engineering in association with Coding Club PRPCEM and FLICS. The event brought together 100 passionate students to showcase their problem-solving and coding abilities.</p>
      <p>Held at P. R. Pote Patil College of Engineering & Management, Amravati (NAAC A++ accredited), the competition was designed to improve students' logical thinking, promote teamwork, and prepare them for national and international coding competitions.</p>
      <p>Using the HackerRank platform, participants faced various coding challenges that tested their problem-solving skills, logical reasoning, and algorithmic knowledge. The event featured two competitive rounds with challenging programming problems.</p>
      <p>The event was graced by esteemed dignitaries including Dr. P. M. Khodke (Director), Dr. P. M. Jawandhiya (Principal), and other faculty members. The prize distribution ceremony was held on October 26, 2024, during the Parents Meet at Swami Vivekanand Auditorium.</p>
    `,
    agenda: [
      {
        time: '12:30 PM',
        title: 'Registration & Setup',
        description: 'Participant check-in and HackerRank platform setup.'
      },
      {
        time: '01:00 PM',
        title: 'Round 1: Qualifying Round',
        description: 'First round of coding challenges to select top performers for Round 2.'
      },
      {
        time: '02:00 PM',
        title: 'Round 2: Final Challenge',
        description: 'Advanced coding problems for qualified participants from Round 1.'
      },
      {
        time: '03:00 PM',
        title: 'Competition Completion',
        description: 'Final submissions and evaluation of solutions by judges.'
      },
      {
        time: '03:30 PM',
        title: 'Results Compilation',
        description: 'Judges evaluating solutions and finalizing winners.'
      },
      {
        time: 'October 26, 2024',
        title: 'Prize Distribution Ceremony',
        description: 'Awards ceremony at Swami Vivekanand Auditorium during Parents Meet.'
      }
    ],
    prerequisites: [
      'Basic to advanced programming skills in any language',
      'Strong problem-solving and logical reasoning abilities',
      'Knowledge of algorithms and data structures',
      'Laptop with internet connection and web browser',
      'HackerRank account for platform access'
    ],
    learnings: [
      'Enhanced logical thinking and coding skills',
      'Competitive programming techniques',
      'Working under time pressure and deadlines',
      'Real-world coding problem-solving approaches',
      'Algorithmic thinking and optimization',
      'Preparation for national and international coding competitions'
    ]
  }
};

// Get event ID from URL parameters
function getEventId() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('event') || 'hackathon-2025'; // Default event
}

// Load event data
function loadEventData() {
  const eventId = getEventId();
  const event = eventData[eventId];
  
  if (!event) {
    // If event not found, show default content
    showEventNotFound();
    return;
  }
  
  // Update page title
  document.title = `${event.title} | Coding Club PRPCEM`;
  
  // Update meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.content = `${event.title} - ${event.subtitle}. ${event.description.substring(0, 150)}...`;
  }
  
  // Update header content
  document.getElementById('event-title').textContent = event.title;
  document.getElementById('event-subtitle').textContent = event.subtitle;
  document.getElementById('event-breadcrumb').textContent = event.title;
  
  // Update header elements
  document.getElementById('event-date').textContent = event.date;
  document.getElementById('event-time').textContent = event.time;
  document.getElementById('event-location').textContent = event.location;
  document.getElementById('event-capacity').textContent = event.capacity;
  
  // Update category badge
  document.getElementById('event-category-text').textContent = event.category;
  document.getElementById('event-icon').className = event.icon;
  
  // Update header image and stats
  document.getElementById('header-event-image').src = event.image;
  document.getElementById('header-event-image').alt = event.title;
  
  // Handle past vs upcoming events differently
  if (event.isPast) {
    // For past events, show participant count and completion stats
    document.getElementById('header-registered-count').textContent = event.participantCount || event.attendeeCount || 0;
    document.querySelector('#header-registered-count').parentElement.querySelector('.stat-label').textContent = 'Participated';
    
    if (event.projectsSubmitted) {
      document.getElementById('header-seats-available').textContent = event.projectsSubmitted;
      document.querySelector('#header-seats-available').parentElement.querySelector('.stat-label').textContent = 'Projects';
    } else if (event.winnersCount) {
      document.getElementById('header-seats-available').textContent = event.winnersCount;
      document.querySelector('#header-seats-available').parentElement.querySelector('.stat-label').textContent = 'Winners';
    } else {
      document.getElementById('header-seats-available').textContent = event.completionRate || '100%';
      document.querySelector('#header-seats-available').parentElement.querySelector('.stat-label').textContent = 'Success Rate';
    }
    
    // Update header status for past events
    document.getElementById('header-event-status').innerHTML = `<i class="fas fa-check-circle"></i><span>Completed</span>`;
    
    // Change action buttons for past events
    const primaryBtn = document.querySelector('.primary-action-btn');
    const secondaryBtn = document.querySelector('.secondary-action-btn');
    
    primaryBtn.innerHTML = '<i class="fas fa-images"></i><span>View Gallery</span>';
    primaryBtn.onclick = () => openGallery();
    
    secondaryBtn.innerHTML = '<i class="fas fa-trophy"></i><span>View Results</span>';
    secondaryBtn.onclick = () => scrollToResults();
    
  } else {
    // For upcoming events, show registration stats
    document.getElementById('header-registered-count').textContent = event.registeredCount;
    document.querySelector('#header-registered-count').parentElement.querySelector('.stat-label').textContent = 'Registered';
    document.getElementById('header-seats-available').textContent = event.seatsAvailable;
    document.querySelector('#header-seats-available').parentElement.querySelector('.stat-label').textContent = 'Seats Left';
    
    // Update header status for upcoming events
    const statusIcon = event.status === 'Registration Open' ? 'fas fa-calendar-plus' : 'fas fa-calendar-check';
    document.getElementById('header-event-status').innerHTML = `<i class="${statusIcon}"></i><span>${event.status}</span>`;
  }
  
  // Update event image
  document.getElementById('event-image').src = event.image;
  document.getElementById('event-image').alt = event.title;
  
  // Update event status
  const statusElement = document.getElementById('event-status');
  statusElement.innerHTML = `<i class="fas fa-calendar-check"></i><span>${event.status}</span>`;
  
  // Update registration info
  document.getElementById('event-price').innerHTML = `
    <span class="price-label">Registration</span>
    <span class="price-value">${event.price}</span>
  `;
  document.getElementById('registered-count').textContent = event.registeredCount;
  document.getElementById('seats-available').textContent = event.seatsAvailable;
  
  // Update sidebar info
  document.getElementById('sidebar-date').textContent = event.date;
  document.getElementById('sidebar-time').textContent = event.time;
  document.getElementById('sidebar-location').textContent = event.location;
  document.getElementById('sidebar-capacity').textContent = event.capacity;
  document.getElementById('sidebar-category').textContent = event.category;
  
  // Update event description
  document.getElementById('event-description').innerHTML = event.description;
  
  // Handle different content for past vs upcoming events
  if (event.isPast) {
    // For past events, modify the content structure
    updatePastEventContent(event);
  } else {
    // For upcoming events, show regular content
    updateUpcomingEventContent(event);
  }
  
  // Update related events
  updateRelatedEvents(eventId);
}

// Update agenda section
function updateAgenda(agenda, isPast = false) {
  const agendaContainer = document.getElementById('event-agenda');
  const agendaTitle = agendaContainer.parentElement.querySelector('.content-title');
  
  // Update title based on event type
  agendaTitle.innerHTML = `
    <i class="fas fa-list-alt"></i>
    ${isPast ? 'Event Schedule (What Happened)' : 'Event Agenda'}
  `;
  
  agendaContainer.innerHTML = '';
  
  agenda.forEach(item => {
    const agendaItem = document.createElement('div');
    agendaItem.className = 'agenda-item';
    agendaItem.innerHTML = `
      <div class="agenda-time">${item.time}</div>
      <div class="agenda-content">
        <h4>${item.title}</h4>
        <p>${item.description}</p>
        ${isPast ? '<div class="completed-badge"><i class="fas fa-check"></i> Completed</div>' : ''}
      </div>
    `;
    agendaContainer.appendChild(agendaItem);
  });
}

// Update prerequisites section
function updatePrerequisites(prerequisites, isPast = false) {
  const prerequisitesContainer = document.getElementById('event-prerequisites');
  const prerequisitesTitle = prerequisitesContainer.parentElement.querySelector('.content-title');
  
  // Update title based on event type
  prerequisitesTitle.innerHTML = `
    <i class="fas fa-check-circle"></i>
    ${isPast ? 'What Participants Brought' : 'Prerequisites & Requirements'}
  `;
  
  const ul = document.createElement('ul');
  
  prerequisites.forEach(prereq => {
    const li = document.createElement('li');
    li.textContent = prereq;
    ul.appendChild(li);
  });
  
  prerequisitesContainer.innerHTML = '';
  prerequisitesContainer.appendChild(ul);
}

// Update learning outcomes section
function updateLearnings(learnings, isPast = false) {
  const learningsContainer = document.getElementById('event-learnings');
  const learningsTitle = learningsContainer.parentElement.querySelector('.content-title');
  
  // Update title based on event type
  learningsTitle.innerHTML = `
    <i class="fas fa-graduation-cap"></i>
    ${isPast ? 'What Participants Learned' : 'What You\'ll Learn'}
  `;
  
  const grid = document.createElement('div');
  grid.className = 'learning-grid';
  
  learnings.forEach(learning => {
    const item = document.createElement('div');
    item.className = 'learning-item';
    item.innerHTML = `
      <i class="${isPast ? 'fas fa-check-circle' : 'fas fa-lightbulb'}"></i>
      <span>${learning}</span>
    `;
    grid.appendChild(item);
  });
  
  learningsContainer.innerHTML = '';
  learningsContainer.appendChild(grid);
}

// Update content for past events
function updatePastEventContent(event) {
  // Update agenda with past tense
  updateAgenda(event.agenda, true);
  
  // Add gallery section if available
  if (event.gallery && event.gallery.length > 0) {
    addGallerySection(event.gallery);
  }
  
  // Add highlights section
  if (event.highlights) {
    addHighlightsSection(event.highlights);
  }
  
  // Add winners section if available
  if (event.winners) {
    addWinnersSection(event.winners);
  }
  
  // Update prerequisites to past tense
  updatePrerequisites(event.prerequisites, true);
  
  // Update learning outcomes to past tense
  updateLearnings(event.learnings, true);
}

// Update content for upcoming events
function updateUpcomingEventContent(event) {
  // Update agenda
  updateAgenda(event.agenda);
  
  // Update prerequisites
  updatePrerequisites(event.prerequisites);
  
  // Update learning outcomes
  updateLearnings(event.learnings);
}

// Add gallery section for past events
function addGallerySection(gallery) {
  const eventMainContent = document.querySelector('.event-main-content');
  
  // Create gallery section
  const gallerySection = document.createElement('div');
  gallerySection.className = 'content-card';
  gallerySection.innerHTML = `
    <h2 class="content-title">
      <i class="fas fa-images"></i>
      Event Gallery
    </h2>
    <div class="event-gallery" id="event-gallery">
      ${gallery.map((photo, index) => `
        <div class="gallery-item" onclick="openLightbox(${index})">
          <img src="${photo.src}" alt="${photo.alt}" />
          <div class="gallery-overlay">
            <i class="fas fa-search-plus"></i>
          </div>
          <div class="gallery-caption">${photo.caption}</div>
        </div>
      `).join('')}
    </div>
  `;
  
  // Insert gallery after description
  const descriptionCard = eventMainContent.querySelector('.content-card');
  descriptionCard.after(gallerySection);
}

// Add highlights section for past events
function addHighlightsSection(highlights) {
  const eventMainContent = document.querySelector('.event-main-content');
  
  const highlightsSection = document.createElement('div');
  highlightsSection.className = 'content-card';
  highlightsSection.innerHTML = `
    <h2 class="content-title">
      <i class="fas fa-star"></i>
      Event Highlights
    </h2>
    <div class="event-highlights">
      ${highlights.map(highlight => `
        <div class="highlight-item">
          <i class="fas fa-check-circle"></i>
          <span>${highlight}</span>
        </div>
      `).join('')}
    </div>
  `;
  
  eventMainContent.appendChild(highlightsSection);
}

// Add winners section for hackathons
function addWinnersSection(winners) {
  const eventMainContent = document.querySelector('.event-main-content');
  
  const winnersSection = document.createElement('div');
  winnersSection.className = 'content-card';
  winnersSection.innerHTML = `
    <h2 class="content-title">
      <i class="fas fa-trophy"></i>
      Winners & Results
    </h2>
    <div class="winners-grid">
      ${winners.map(winner => `
        <div class="winner-card">
          <div class="winner-position">${winner.position}</div>
          <div class="winner-info">
            <h4>${winner.team}</h4>
            <p>${winner.project}</p>
            <div class="winner-prize">${winner.prize}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  
  eventMainContent.appendChild(winnersSection);
}

// Update related events section
function updateRelatedEvents(currentEventId) {
  const relatedContainer = document.getElementById('related-events');
  relatedContainer.innerHTML = '';
  
  // Get other events (excluding current one)
  const otherEvents = Object.entries(eventData).filter(([id]) => id !== currentEventId).slice(0, 3);
  
  otherEvents.forEach(([id, event]) => {
    const date = new Date(event.date);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    
    const relatedItem = document.createElement('div');
    relatedItem.className = 'related-event-item';
    relatedItem.onclick = () => window.location.href = `event-detail.html?event=${id}`;
    relatedItem.innerHTML = `
      <div class="related-event-date">
        <span class="month">${month}</span>
        <span class="day">${day}</span>
      </div>
      <div class="related-event-info">
        <h5>${event.title}</h5>
        <p>${event.category} • ${event.location}</p>
        <div class="event-type-badge ${event.isPast ? 'past' : 'upcoming'}">
          ${event.isPast ? 'Completed' : 'Upcoming'}
        </div>
      </div>
    `;
    relatedContainer.appendChild(relatedItem);
  });
}

// Show event not found message
function showEventNotFound() {
  document.getElementById('event-title').textContent = 'Event Not Found';
  document.getElementById('event-subtitle').textContent = 'The requested event could not be found.';
  document.getElementById('event-description').innerHTML = `
    <p>Sorry, the event you're looking for doesn't exist or may have been removed.</p>
    <p><a href="events.html" style="color: #00d4ff;">← Back to Events</a></p>
  `;
}

// Modal functions
function openRegistrationModal() {
  document.getElementById('registrationModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeRegistrationModal() {
  document.getElementById('registrationModal').classList.remove('active');
  document.body.style.overflow = 'auto';
}

function openJoinModal() {
  document.getElementById('joinModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeJoinModal() {
  document.getElementById('joinModal').classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Form handlers
function initEventDetailPage() {
  // Load event data
  loadEventData();
  
  // Registration form handler
  const registrationForm = document.getElementById('registrationForm');
  registrationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(registrationForm);
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const phone = document.getElementById('regPhone').value;
    const year = document.getElementById('regYear').value;
    const expectations = document.getElementById('regExpectations').value;
    
    // Simulate registration process
    const submitBtn = registrationForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Registering...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
      alert(`Thank you ${name}! Your registration has been confirmed. You'll receive a confirmation email shortly.`);
      registrationForm.reset();
      closeRegistrationModal();
      
      // Update registration count
      const currentCount = parseInt(document.getElementById('registered-count').textContent);
      const currentSeats = parseInt(document.getElementById('seats-available').textContent);
      document.getElementById('registered-count').textContent = currentCount + 1;
      document.getElementById('seats-available').textContent = currentSeats - 1;
      
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }, 2000);
  });
  
  // Join form handler
  const joinForm = document.getElementById('joinForm');
  joinForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('joinName').value;
    const submitBtn = joinForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Joining...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
      alert(`Welcome to the Coding Club family, ${name}! Check your email for next steps.`);
      joinForm.reset();
      closeJoinModal();
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }, 2000);
  });
  
  // Close modals when clicking outside
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
      closeRegistrationModal();
      closeJoinModal();
    }
  });
  
  // Close modals with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeRegistrationModal();
      closeJoinModal();
    }
  });
}

// Social sharing functions
function shareOnTwitter() {
  const eventTitle = document.getElementById('event-title').textContent;
  const url = window.location.href;
  const text = `Check out this amazing event: ${eventTitle}`;
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
}

function shareOnLinkedIn() {
  const url = window.location.href;
  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
}

function shareOnWhatsApp() {
  const eventTitle = document.getElementById('event-title').textContent;
  const url = window.location.href;
  const text = `Check out this amazing event: ${eventTitle} ${url}`;
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
}

function copyEventLink() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    alert('Event link copied to clipboard!');
  }).catch(() => {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = url;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Event link copied to clipboard!');
  });
}

// Share event function for header button
function shareEvent() {
  const eventTitle = document.getElementById('event-title').textContent;
  const url = window.location.href;
  
  if (navigator.share) {
    navigator.share({
      title: eventTitle,
      text: `Check out this amazing event: ${eventTitle}`,
      url: url
    }).catch(() => {
      // Fallback to copy link
      copyEventLink();
    });
  } else {
    // Show share options modal or copy link
    copyEventLink();
  }
}

// Gallery and lightbox functionality
let currentGallery = [];
let currentImageIndex = 0;

function openGallery() {
  const eventId = getEventId();
  const event = eventData[eventId];
  if (event && event.gallery) {
    currentGallery = event.gallery;
    openLightbox(0);
  }
}

function openLightbox(index) {
  currentImageIndex = index;
  const lightbox = createLightbox();
  updateLightboxContent();
  document.body.appendChild(lightbox);
  document.body.style.overflow = 'hidden';
}

function createLightbox() {
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  lightbox.className = 'lightbox-overlay';
  lightbox.innerHTML = `
    <div class="lightbox-container">
      <div class="lightbox-header">
        <div class="lightbox-counter">
          <span id="lightbox-current">1</span> / <span id="lightbox-total">1</span>
        </div>
        <button class="lightbox-close" onclick="closeLightbox()">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="lightbox-content">
        <button class="lightbox-nav lightbox-prev" onclick="prevImage()">
          <i class="fas fa-chevron-left"></i>
        </button>
        <div class="lightbox-image-container">
          <img id="lightbox-image" src="" alt="" />
        </div>
        <button class="lightbox-nav lightbox-next" onclick="nextImage()">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
      <div class="lightbox-caption" id="lightbox-caption"></div>
    </div>
  `;
  return lightbox;
}

function updateLightboxContent() {
  const image = currentGallery[currentImageIndex];
  document.getElementById('lightbox-image').src = image.src;
  document.getElementById('lightbox-image').alt = image.alt;
  document.getElementById('lightbox-caption').textContent = image.caption;
  document.getElementById('lightbox-current').textContent = currentImageIndex + 1;
  document.getElementById('lightbox-total').textContent = currentGallery.length;
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.remove();
    document.body.style.overflow = 'auto';
  }
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % currentGallery.length;
  updateLightboxContent();
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + currentGallery.length) % currentGallery.length;
  updateLightboxContent();
}

function scrollToResults() {
  const winnersSection = document.querySelector('.winners-grid');
  if (winnersSection) {
    winnersSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', function(e) {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    switch(e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowLeft':
        prevImage();
        break;
      case 'ArrowRight':
        nextImage();
        break;
    }
  }
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initEventDetailPage);
