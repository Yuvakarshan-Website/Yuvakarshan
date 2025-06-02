import Home from './pages/home.js';
import Events from './pages/events/day1.js';
import EventsDay2 from './pages/events/day2.js';
import EventsBuffer from './pages/events/buffer.js';
import Gallery from './pages/gallery.js';
import Team from './pages/team.js';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';

import { Application } from 'https://unpkg.com/@splinetool/runtime@latest/build/runtime.js';

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

  const footerContainer = document.getElementById('footer');
  footerContainer.innerHTML = '';
  footerContainer.appendChild(Footer());

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
// window.addEventListener("scroll", () => {
//   const yuva = document.querySelector(".Yuva");
//   if (!yuva) return;

//   const scrollY = window.scrollY || window.pageYOffset;
//   const isPortrait = window.innerHeight > window.innerWidth;

//   if (isPortrait) {
//     handlePortraitScroll(yuva, scrollY);
//   } else {
//     handleLandscapeScroll(yuva, scrollY);
//   }
// });

// function handlePortraitScroll(yuva, scrollY) {
//   const h = window.innerHeight;

//   yuva.classList.toggle("scrolled", scrollY >= h * 0.1 && scrollY < h * 0.5);

//   yuva.classList.toggle("scrolled1", scrollY >= h * 0.5 && scrollY < h * 2.8);

//   yuva.classList.toggle("scrolled2", scrollY >= h * 2.8 && scrollY < h * 3);

//   yuva.classList.toggle("scrolled3", scrollY >= h * 3);
// }

// function handleLandscapeScroll(yuva, scrollY) {
//   const h = window.innerHeight;

//   yuva.classList.toggle("scrolled", scrollY >= h * 0.1 && scrollY < h * 0.75);

//   yuva.classList.toggle("scrolled1", scrollY >= h * 0.75 && scrollY < h * 3);

//   yuva.classList.toggle("scrolled2", scrollY >= h * 3 && scrollY < h * 3.5);

//   yuva.classList.toggle("scrolled3", scrollY >= h * 3.5);
// }

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);

app.load('https://prod.spline.design/UYbxlgt2QCwCQTMH/scene.splinecode').then(() => {
  const targetObject = app.findObjectByName('yuva');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const isPortrait = window.innerHeight > window.innerWidth;

    if (isPortrait) {
      handlePortraitScroll(targetObject, scrollY);
    } else {
      handleLandscapeScroll(targetObject, scrollY);
    }
  });
});

let state = "base";

function handleLandscapeScroll(targetObject, scrollY) {
  const h = window.innerHeight;

  if ((scrollY < h * 0.3) && state !== "base") {
    app.setVariable('States', 0);
    state = "base";
  } 
  else if (scrollY >= h * 0.3 && scrollY < h * 3) {
    if (state === "base") {
      app.setVariable('States', 1);
      state = "left";
    } else if (state === "down") {
      app.setVariable('States', -1);
      state = "left";
    }
  }
  else if (scrollY >= h * 3) {
    if (state !== "down") {
      app.setVariable('States', 2);
      state = "down";
    }
  }
  if (scrollY >= h * 3.6) {
    canvas.classList.add("active");
    
  } else {
    canvas.classList.remove("active");
  }
} 



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


