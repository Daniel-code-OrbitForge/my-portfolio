// ======= THEME TOGGLE =======
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle?.querySelector('i');

// Check for saved user preference, if any, on load of the website
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

// Add click event listener to the theme toggle button
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Update the theme and save preference
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update the icon
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  if (themeIcon) {
    themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
}

// ======= NAVIGATION TOGGLE =======
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("open");
});


// ======= SMOOTH SCROLLING =======
const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    if (link.hash !== "") {
      e.preventDefault();
      document.querySelector(link.hash).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ======= CONTACT FORM VALIDATION (mock) =======
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    if (name && email && message) {
      alert(`Thank you ${name}! Your message has been sent.`);
      contactForm.reset();
    } else {
      alert("Please fill in all fields before submitting.");
    }
  });
}

// ======= SCROLL REVEAL EFFECT =======
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);