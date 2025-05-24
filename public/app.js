import Home from './pages/home.js';
import Events from './pages/events/day1.js';
import EventsDay2 from './pages/events/day2.js';
import EventsBuffer from './pages/events/buffer.js';
import Gallery from './pages/gallery.js';
import Team from './pages/team.js';
import Navbar from './components/navbar.js';

// Fallback 404 component
function NotFound() {
  const div = document.createElement('div');
  div.innerHTML = '<h1>404 - Page Not Found</h1>';
  return div;
}

// Route definitions
const routes = {
  '/': Home,
  '/home': Home,
  '/eventsDay1': Events,
  '/eventsDay2': EventsDay2,
  '/eventsBuffer': EventsBuffer,
  '/gallery': Gallery,
  '/team': Team,
};

// Normalize path (removes trailing slash, ensures fallback to "/")
function normalizePath(path) {
  return path.replace(/\/+$/, '') || '/';
}

// Render the correct page based on path
function render(path) {
  const app = document.getElementById('app');
  if (!app) throw new Error("Element with ID 'app' not found.");

  const normalized = normalizePath(path);
  const Page = routes[normalized] || NotFound;

  app.innerHTML = '';
  app.appendChild(Page());
}

// Setup SPA-style routing
function setupRouter() {
  const navbarContainer = document.getElementById('navbar');
  navbarContainer.innerHTML = '';
  navbarContainer.appendChild(Navbar());

  // Intercept link clicks
  document.body.addEventListener('click', e => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      const path = new URL(e.target.href).pathname;
      const normalized = normalizePath(path);
      history.pushState(null, '', normalized);
      render(normalized);
    }
  });

  // Handle back/forward buttons
  window.addEventListener('popstate', () => render(normalizePath(location.pathname)));

  // Initial render
  render(location.pathname);
}

setupRouter();

// Hamburger menu toggle
const hamburger = document.querySelector('.nav-hamburger');
const navRight = document.querySelector('.nav-right');
const links = document.querySelectorAll('.nav-link');

hamburger?.addEventListener("click", () => {
  navRight.classList.toggle("active");
  hamburger.classList.toggle("active");
});

links.forEach(link => {
  link.addEventListener("click", () => {
    navRight.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
});

// Scroll-based class toggling
window.addEventListener("scroll", () => {
  const yuva = document.querySelector(".Yuva");
  if (!yuva) return;

  const scrollY = window.scrollY || window.pageYOffset;
  const isPortrait = window.innerHeight > window.innerWidth;

  yuva.classList.toggle("scrolled", scrollY >= window.innerHeight * 0.1 && scrollY <= window.innerHeight * 0.75);
  yuva.classList.toggle("scrolled1", scrollY >= window.innerHeight * 0.75 && scrollY <= window.innerHeight * 3);

  const inScrolled2 = (!isPortrait && scrollY >= window.innerHeight * 3 && scrollY <= window.innerHeight * 3.5)
                   || (isPortrait && scrollY >= window.innerHeight * 2.4);
  yuva.classList.toggle("scrolled2", inScrolled2);

  yuva.classList.toggle("scrolled3", !isPortrait && scrollY >= window.innerHeight * 3.5);
});

// Intersection observer for .YuvaHist elements
function observeYuvaHist() {
  const targets = document.querySelectorAll('.YuvaHist');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle('visible', entry.isIntersecting);
    });
  }, { threshold: 0.2 });

  targets.forEach(target => observer.observe(target));
}

// Observe on load and DOM changes
document.addEventListener("DOMContentLoaded", observeYuvaHist);
window.addEventListener("load", observeYuvaHist);
const bodyObserver = new MutationObserver(() => observeYuvaHist());
bodyObserver.observe(document.body, { childList: true, subtree: true });
