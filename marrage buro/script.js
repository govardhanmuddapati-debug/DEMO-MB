/* ============================================
   ShubhVivah – JavaScript (All Interactions)
   ============================================ */

/* ===== PROFILE DATA ===== */
const profilesData = [
  {
    id: 1, name: 'Priya Sharma', age: 24, type: 'bride', religion: 'hindu',
    profession: 'Software Engineer', education: 'B.Tech, JNTU', city: 'Hyderabad',
    height: "5'4\"", caste: 'Brahmin', horoscope: 'Taurus', income: '8 LPA',
    img: 'img1.png', about: 'I am a fun-loving, family-oriented girl looking for a kind and understanding partner.'
  },
  {
    id: 2, name: 'Rahul Verma', age: 28, type: 'groom', religion: 'hindu',
    profession: 'Doctor (MBBS)', education: 'MBBS, Osmania', city: 'Hyderabad',
    height: "5'10\"", caste: 'Kamma', horoscope: 'Gemini', income: '15 LPA',
    img: 'img2.png', about: 'Hardworking and caring doctor. Looking for a life partner with similar values.'
  },
  {
    id: 3, name: 'Ayesha Khan', age: 23, type: 'bride', religion: 'muslim',
    profession: 'Teacher', education: 'M.A. English', city: 'Nizamabad',
    height: "5'3\"", caste: 'Syed', horoscope: 'Leo', income: '5 LPA',
    img: 'img3.png', about: 'Simple, cultured, and well-educated girl from a respectable family.'
  },
  {
    id: 4, name: 'Suresh Naidu', age: 31, type: 'groom', religion: 'hindu',
    profession: 'Civil Engineer', education: 'M.Tech', city: 'Vijayawada',
    height: "5'11\"", caste: 'Reddy', horoscope: 'Virgo', income: '12 LPA',
    img: 'img4.png', about: 'A responsible and mature person looking for a loving companion.'
  },
  {
    id: 5, name: 'Mary Joseph', age: 26, type: 'bride', religion: 'christian',
    profession: 'Nurse', education: 'B.Sc Nursing', city: 'Visakhapatnam',
    height: "5'5\"", caste: 'Christian', horoscope: 'Scorpio', income: '6 LPA',
    img: 'img2.png', about: 'Compassionate and hardworking nurse. Family values are very important to me.'
  },
  {
    id: 6, name: 'Kiran Kumar', age: 29, type: 'groom', religion: 'hindu',
    profession: 'Bank Manager', education: 'MBA Finance', city: 'Warangal',
    height: "5'9\"", caste: 'Naidu', horoscope: 'Capricorn', income: '14 LPA',
    img: 'img1.png', about: 'Stable career, good family background. Seeking a life partner to grow together.'
  },
  {
    id: 7, name: 'Sunita Reddy', age: 25, type: 'bride', religion: 'hindu',
    profession: 'CA (Chartered Accountant)', education: 'CA, ICAI', city: 'Guntur',
    height: "5'4\"", caste: 'Reddy', horoscope: 'Pisces', income: '18 LPA',
    img: 'img3.png', about: 'Independent and ambitious CA. Looking for an equally driven life partner.'
  },
  {
    id: 8, name: 'Mohammed Arif', age: 30, type: 'groom', religion: 'muslim',
    profession: 'IT Professional', education: 'B.Tech CSE', city: 'Hyderabad',
    height: "5'10\"", caste: 'Sheikh', horoscope: 'Aries', income: '20 LPA',
    img: 'img4.png', about: 'Tech professional at a leading MNC. Looking for a compatible and kind-hearted partner.'
  }
];

let currentSlide = 0;
let slideInterval;
let visibleProfiles = 8;
let currentFilter = 'all';

/* ===== SLIDER ===== */
function initSlider() {
  const slides = document.querySelectorAll('.slide');
  const indicators = document.querySelectorAll('.indicator');

  function goTo(n) {
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
  }

  window.goToSlide = (n) => { clearInterval(slideInterval); goTo(n); startAutoSlide(); };

  function startAutoSlide() {
    slideInterval = setInterval(() => goTo(currentSlide + 1), 5000);
  }

  startAutoSlide();
}

/* ===== NAVBAR ===== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll-to-top visibility
    const scrollTopBtn = document.getElementById('scrollTop');
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }

    // Active nav link
    let current = '';
    sections.forEach(section => {
      const sTop = section.offsetTop - 100;
      if (window.scrollY >= sTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });

  // Smooth click scroll
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        closeMenu();
      }
    });
  });
}

function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('open');
}

function closeMenu() {
  document.getElementById('navLinks').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}

window.toggleMenu = toggleMenu;

/* ===== COUNTER ANIMATION ===== */
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        counter.textContent = target.toLocaleString('en-IN');
        clearInterval(timer);
      } else {
        counter.textContent = Math.floor(current).toLocaleString('en-IN');
      }
    }, 16);
  });
}

/* ===== SCROLL REVEAL ===== */
function initScrollReveal() {
  const revealEls = document.querySelectorAll(
    '.about-grid, .feature-card, .profile-card, .step-card, .story-card, .plan-card, .contact-card, .contact-form-wrap, .section-header'
  );

  revealEls.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(el => observer.observe(el));

  // Counter observer
  const heroSection = document.querySelector('.hero');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  if (heroSection) counterObserver.observe(heroSection);
}

/* ===== PROFILES ===== */
function renderProfiles(filter = 'all') {
  const grid = document.getElementById('profilesGrid');
  const filtered = filter === 'all'
    ? profilesData
    : profilesData.filter(p => p.type === filter || p.religion === filter);

  grid.innerHTML = filtered.map(p => `
    <div class="profile-card reveal" data-type="${p.type}" data-religion="${p.religion}" onclick="viewProfile(${p.id})">
      <div class="profile-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
        <span class="profile-badge">${p.type === 'bride' ? '👰 Bride' : '🤵 Groom'}</span>
        <span class="profile-verified">✅ Verified</span>
      </div>
      <div class="profile-info">
        <h4>${p.name}</h4>
        <div class="profile-details">
          <span>🎂 ${p.age} yrs | ${p.height}</span>
          <span>💼 ${p.profession}</span>
          <span>📍 ${p.city}</span>
        </div>
        <div class="profile-tags">
          <span class="profile-tag">${p.religion.charAt(0).toUpperCase() + p.religion.slice(1)}</span>
          <span class="profile-tag">${p.caste}</span>
          <span class="profile-tag">${p.income}</span>
        </div>
        <div class="profile-actions">
          <button class="btn-interest" onclick="event.stopPropagation(); sendInterest(${p.id}, '${p.name}')">💌 Interest</button>
          <button class="btn-view" onclick="event.stopPropagation(); viewProfile(${p.id})">View</button>
        </div>
      </div>
    </div>
  `).join('');

  // Re-init scroll reveal for new cards
  const newCards = grid.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  newCards.forEach(card => observer.observe(card));
}

function filterProfiles(filter, btn) {
  currentFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProfiles(filter);
}

window.filterProfiles = filterProfiles;

function loadMoreProfiles() {
  openModal('registerModal');
  showToast('Please register to view all profiles!');
}
window.loadMoreProfiles = loadMoreProfiles;

function sendInterest(id, name) {
  showToast(`💌 Interest sent to ${name}! Login to connect.`);
}
window.sendInterest = sendInterest;

function viewProfile(id) {
  const p = profilesData.find(pr => pr.id === id);
  if (!p) return;

  const content = document.getElementById('profileModalContent');
  content.innerHTML = `
    <div class="profile-detail">
      <div>
        <img src="${p.img}" alt="${p.name}" class="profile-detail-img" />
      </div>
      <div class="profile-detail-info">
        <h2>${p.name}</h2>
        <p class="profile-detail-subtitle">${p.type === 'bride' ? '👰 Bride Profile' : '🤵 Groom Profile'} | ✅ Verified</p>
        <div class="profile-detail-table">
          <div class="detail-row">
            <span class="detail-label">Age</span>
            <span class="detail-value">${p.age} Years</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Height</span>
            <span class="detail-value">${p.height}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Religion</span>
            <span class="detail-value">${p.religion.charAt(0).toUpperCase() + p.religion.slice(1)}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Caste</span>
            <span class="detail-value">${p.caste}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Education</span>
            <span class="detail-value">${p.education}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Profession</span>
            <span class="detail-value">${p.profession}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">City</span>
            <span class="detail-value">${p.city}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Income</span>
            <span class="detail-value">${p.income}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Horoscope</span>
            <span class="detail-value">${p.horoscope}</span>
          </div>
        </div>
        <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.7; margin-top: 8px; font-style: italic;">"${p.about}"</p>
        <div class="profile-detail-actions">
          <button class="btn-primary" onclick="sendInterest(${p.id}, '${p.name}'); closeModal('profileModal')">💌 Send Interest</button>
          <button class="btn-load-more" onclick="openModal('registerModal'); closeModal('profileModal')">View Contact</button>
        </div>
      </div>
    </div>
  `;
  openModal('profileModal');
}
window.viewProfile = viewProfile;

/* ===== SEARCH ===== */
function searchProfiles() {
  const gender = document.getElementById('gender').value.toLowerCase();
  const type = gender === 'bride' ? 'bride' : 'groom';
  const profileSection = document.getElementById('profiles');
  profileSection.scrollIntoView({ behavior: 'smooth' });

  setTimeout(() => {
    renderProfiles(type);
    const activeBtn = document.querySelector(`.filter-btn[onclick*="${type}"]`);
    if (activeBtn) {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      activeBtn.classList.add('active');
    }
    showToast(`🔍 Showing all ${type === 'bride' ? 'Bride' : 'Groom'} profiles!`);
  }, 600);
}
window.searchProfiles = searchProfiles;

/* ===== MODALS ===== */
function openModal(id) {
  document.getElementById(id).classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  document.getElementById(id).classList.remove('active');
  document.body.style.overflow = '';
}

function closeModalOutside(event, id) {
  if (event.target.id === id) closeModal(id);
}

function switchModal(from, to) {
  closeModal(from);
  setTimeout(() => openModal(to), 300);
}

window.openModal = openModal;
window.closeModal = closeModal;
window.closeModalOutside = closeModalOutside;
window.switchModal = switchModal;

// ESC to close modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.active').forEach(m => {
      m.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
});

/* ===== FORM SUBMISSIONS ===== */
function submitRegister(e) {
  e.preventDefault();
  const name = document.getElementById('rFirstName').value;
  closeModal('registerModal');
  showToast(`🎉 Welcome ${name}! Profile created successfully!`);
  document.getElementById('registerForm').reset();
}

function submitLogin(e) {
  e.preventDefault();
  closeModal('loginModal');
  showToast(`✅ Login successful! Welcome back!`);
  document.getElementById('loginForm').reset();
}

function submitContact(e) {
  e.preventDefault();
  const name = document.getElementById('cName').value;
  showToast(`📨 Message sent, ${name}! We'll contact you soon.`);
  document.getElementById('contactForm').reset();
}

window.submitRegister = submitRegister;
window.submitLogin = submitLogin;
window.submitContact = submitContact;

/* ===== TOAST NOTIFICATION ===== */
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}
window.showToast = showToast;

/* ===== SCROLL TO TOP ===== */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.scrollToTop = scrollToTop;

/* ===== INPUT ANIMATIONS ===== */
function initInputAnimations() {
  document.querySelectorAll('input, select, textarea').forEach(input => {
    input.addEventListener('focus', () => {
      input.parentElement.classList.add('focused');
    });
    input.addEventListener('blur', () => {
      input.parentElement.classList.remove('focused');
    });
  });
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  initSlider();
  initNavbar();
  initScrollReveal();
  renderProfiles();
  initInputAnimations();

  // Add staggered animation delays for feature cards
  document.querySelectorAll('.feature-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.06}s`;
  });

  document.querySelectorAll('.step-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.1}s`;
  });

  // Start counter animation on load for above-fold
  setTimeout(animateCounters, 1000);
});
