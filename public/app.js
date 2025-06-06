import Home from './pages/home.js';
import Events from './pages/events/day1.js';
import EventsDay2 from './pages/events/day2.js';
import EventsBuffer from './pages/events/buffer.js';
import Gallery from './pages/gallery.js';
import Team from './pages/team.js';
import Navbar from './components/navbar.js';

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

  const normalized = normalizePath(path);
  const Page = routes[normalized] || NotFound;
  const isPortrait = window.innerHeight > window.innerWidth;

  app.innerHTML = '';
  app.appendChild(Page());
  if (normalized === '/' || normalized === '/home') {
      loadPromptForPage(0)

      const canvas = document.getElementById('canvas3d');
      const app = new Application(canvas);

      if (isPortrait) {
          app.load('https://prod.spline.design/dvDgIP6WrikB45aj/scene.splinecode').then(() => {

          const targetObject = app.findObjectByName('yuva');

          window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || window.pageYOffset;
            handlePortraitScroll(targetObject, scrollY);
          });
        });
      } 
      else {
        app.load('https://prod.spline.design/UYbxlgt2QCwCQTMH/scene.splinecode').then(() => {
      
        let size = (window.innerWidth/1366)*2.6;
        app.setVariable('Size', size);
        const targetObject = app.findObjectByName('yuva');

        window.addEventListener('scroll', () => {
          const scrollY = window.scrollY || window.pageYOffset;
          handleLandscapeScroll(targetObject, scrollY);
        });
        });      
      }


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
        canvas.classList.toggle("active", scrollY >= h * 3.6);
      } 

      function handlePortraitScroll(targetObject, scrollY) {
        const h = window.innerHeight;

        if ((scrollY < h * 0.1) && state !== "base") {
          app.setVariable('States', 0);
          state = "base";
        } 
        else if (scrollY >= h * 0.1 && scrollY < h * 3.15) {
          if (state === "base") {
            app.setVariable('States', 1);
            state = "left";
          } else if (state === "down") {
            app.setVariable('States', -1);
            state = "left";
          }
        }
        else if (scrollY >= h * 3.15) {
          if (state !== "down") {
            app.setVariable('States', 2);
            state = "down";
          }
        }
        canvas.classList.toggle("active", scrollY >= h * 3.2);
      } 
  }

  if (normalized === '/eventsDay1'){
    loadPromptForPage(1)
  }

  if (normalized === '/eventsDay2'){
    loadPromptForPage(2)
  }

  if (normalized === '/eventsBuffer'){
    loadPromptForPage(3)
  }

  if (normalized === '/team') {

    loadPromptForPage(4)

    let lastHiddenCard = null;
    const coreCards = document.querySelectorAll('.CoreCard');

    const sarengiCard = document.querySelector('.CoreCard.Sarengi');
    if (sarengiCard) {
      updateHighlighted(sarengiCard);
      sarengiCard.style.display = 'none';
      lastHiddenCard = sarengiCard;
    }
    coreCards.forEach(card => {
      card.addEventListener('click', () => {
        if (lastHiddenCard) {
          lastHiddenCard.style.display = 'flex'; // restore previous
        }

        updateHighlighted(card); // update bg
        card.style.display = 'none'; // hide current
        lastHiddenCard = card;
      });
    });

    function updateHighlighted(card) {
      const highlight = document.querySelector('.Highlighted.core');
      if (card && highlight) {
        const bgImage = window.getComputedStyle(card).backgroundImage;
        highlight.style.backgroundImage = bgImage;
        highlight.style.backgroundSize = (isPortrait)?'100%':'90%';
        highlight.style.backgroundRepeat = 'no-repeat';
        highlight.style.backgroundPosition = 'bottom';
      }
    }
  }
}

//function for prompt loading

const pages = [
  ".scroll-prompt",
  ".scroll-prompt-day1",
  ".scroll-prompt-day2",
  ".scroll-prompt-buffer",
  ".scroll-prompt-team",
]

const loadPromptForPage = (pg) => {
    let hasScrolled = false;

    let page = pages[pg]

    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        hasScrolled = true;
        const prompt = document.querySelector(page);
        if (prompt) prompt.style.display = 'none';
      }
    });

    window.addEventListener("load", () => {
      setTimeout(() => {
        if (!hasScrolled) {
          const prompt = document.querySelector(page);
          if (prompt) prompt.style.display = 'block';
        }
      }, 6000);
    });
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


