import Home from './pages/home.js';
import GeneralGuidelines from './pages/generalGuidelines.js';
import Events from './pages/events/day1.js';
import EventsDay2 from './pages/events/day2.js';
import EventsBuffer from './pages/events/buffer.js';
import Gallery from './pages/gallery.js';
import Team from './pages/team.js';
import Navbar from './components/navbar.js';
import repsEvent from './pages/events/repsEvent.js';
import eventDetails from './pages/eventDetails.js';
import LotteryResults from './pages/lotteryResults.js';

import { Application } from 'https://unpkg.com/@splinetool/runtime@latest/build/runtime.js';
import NoticeBoard from './pages/noticeBoard.js';

let ClickPromptShown = false;

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
  '/generalGuidelines': GeneralGuidelines,
  '/repsEvent': repsEvent,
  '/eventsDay1': Events,
  '/eventsDay2': EventsDay2,
  '/eventsBuffer': EventsBuffer,
  '/gallery': Gallery,
  '/team': Team,
  '/lotteryResults': LotteryResults,
  '/noticeBoard': NoticeBoard,
  '/SudarshansSpin': eventDetails,
  '/RudrasRacquet': eventDetails,
  '/VaayuSmash': eventDetails,
  '/Neerangana': eventDetails,
  '/RadiantRumble': eventDetails,
  '/VedicRace': eventDetails,
  '/ChakraLeague': eventDetails,
  '/IndraShock': eventDetails,
  '/ShivSadhna': eventDetails,
  '/RaagaRock': eventDetails,
  '/BodhaBlitz': eventDetails,
  '/Nazakat': eventDetails,
  '/LeelaManch': eventDetails,
  '/Chitrakatha': eventDetails,
  '/AppUrva': eventDetails,
  '/VaigyanikVistaar': eventDetails,
  '/VanijyaVerse': eventDetails,
  '/Tarkanjali': eventDetails,
  '/Shataranj': eventDetails,
  '/NyayaYudh': eventDetails,
  '/VyapaarYagna': eventDetails,
  '/RaagaSangam': eventDetails,
  '/Antakshari': eventDetails,
  '/NrityaKatha': eventDetails,
  '/Chakravyuh': eventDetails,
  '/BheemsBhojnalay': eventDetails,
  '/MechaYaan': eventDetails,
  '/CyberSiddhanta': eventDetails,
  '/Anveshan': eventDetails,
  '/ArthashastraArena': eventDetails,
  '/IndrasInfluence': eventDetails,
  '/KuberaCapital': eventDetails,
  '/HanumansCombat': eventDetails,
  '/Vrittanta': eventDetails,
  '/NukkadNatak': eventDetails,
  '/AgniStrikers': eventDetails,
  '/MayaMandi': eventDetails,
};

// Normalize path (removes trailing slash, ensures fallback to "/")
function normalizePath(path) {
  return path.replace(/\/+$/, '') || '/';
}

// Render the correct page based on path
function render(path) {
  const app = document.getElementById('app');

  window.scrollTo(0, 0);

  const normalized = normalizePath(path);
  const Page = routes[normalized] || NotFound;
  const isPortrait = window.innerHeight > window.innerWidth;

  app.innerHTML = '';
  app.appendChild(Page());

  const scrollPrompt = document.querySelector('.scroll-prompt');

  scrollPrompt?.addEventListener("click", () => {
      window.scrollBy({ 
      top: 1.3* window.innerHeight, 
      behavior: 'smooth' 
    });
  });

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const threshold = 0.2 * window.innerHeight;

    const isActive = scrollPrompt.classList.contains('active');

    if (scrollY > threshold && !isActive) {
      scrollPrompt.classList.add('active');
    } else if (scrollY <= threshold && isActive) {
      scrollPrompt.classList.remove('active');
    }
  });

  //for events page

  const eventContainer = document.querySelector('.card-grid');

  if (eventContainer) {
    eventContainer.addEventListener('scroll', () => {
      const scrollY = eventContainer.scrollTop;
      const threshold = 0.05 * eventContainer.clientHeight;

      const isActive = scrollPrompt.classList.contains('active');

      if (scrollY > threshold && !isActive) {
        scrollPrompt.classList.add('active');
      } else if (scrollY <= threshold && isActive) {
        scrollPrompt.classList.remove('active');
      }
    });
  }


  if (normalized === '/' || normalized === '/home') {

      const canvas = document.getElementById('canvas3d');
      const app = new Application(canvas);

      if (isPortrait) {
          app.load('https://prod.spline.design/dvDgIP6WrikB45aj/scene.splinecode').then(() => {
          document.getElementById('loader').classList.add('fade-out');
          const targetObject = app.findObjectByName('yuva');
          handlePortraitScroll(targetObject, window.scrollY || window.pageYOffset);
          window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || window.pageYOffset;
            handlePortraitScroll(targetObject, scrollY);
          });
        });
      } 
      else {
        app.load('https://prod.spline.design/UYbxlgt2QCwCQTMH/scene.splinecode').then(() => {
        document.getElementById('loader').classList.add('fade-out');
        let size = (window.innerWidth/1366)*2.6;
        app.setVariable('Size', size);
        const targetObject = app.findObjectByName('yuva');
        handleLandscapeScroll(targetObject, window.scrollY || window.pageYOffset);

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

  if (normalized === '/team') {
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

    VanillaTilt.init(document.querySelectorAll(".Highlighted"), {
      max: 15,
      speed: 500,
      glare: true,
      "max-glare": 0.0,
      scale: 1.08, 
    });

    VanillaTilt.init(document.querySelectorAll(".wtBg"), {
      max: 22,
      speed: 2000,
      glare: true,
      "max-glare": 0.6,
      scale: 1.08,
    });
  }

  if (normalized === '/eventsDay1') {
    const prompt = document.getElementById('eventClickPrompt');

    if (prompt && !ClickPromptShown) {
      ClickPromptShown = true;

      prompt.classList.remove('hidden');

      // Auto-hide after 3 seconds
      setTimeout(() => {
        prompt.classList.add('hidden');
      }, 3000);

      // Optional: allow manual dismiss on click
      prompt.addEventListener('click', () => {
        prompt.classList.add('hidden');
      });
    }
  }
  if (normalized !== '/home' && normalized!== '/') {
  document.getElementById('loader').classList.add('fade-out');}
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


function observeCards() {
  const cards = document.querySelectorAll('.WTCard');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fly-in');
      } else {
        entry.target.classList.remove('fly-in'); // optional: remove if you want replay on scroll
      }
    });
  }, { threshold: 0.4 });

  cards.forEach(card => observer.observe(card));
}

// Observe on load and DOM changes
document.addEventListener("DOMContentLoaded", observeCards);
window.addEventListener("load", observeCards);
const cardMutationObserver = new MutationObserver(() => observeCards());
cardMutationObserver.observe(document.body, { childList: true, subtree: true });
function eventDetailsScroll() {
  const desc = document.querySelector('.event-description');
  const scrollContainer = document.querySelector('.eventDetailsBg');

  if (!desc || !scrollContainer) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const ratio = entry.intersectionRatio;

      if (ratio > 0.7) {
        desc.classList.add('unscrolled');
      } else if (ratio < 0.2) {
        desc.classList.remove('unscrolled');
      }

      // Optional: console.log visibility for debugging
      // console.log("Visibility:", ratio);
    });
  }, {
    root: scrollContainer,
    threshold: [0, 0.2, 0.7, 1] // observe at key %s
  });

  observer.observe(desc);
}

document.addEventListener("DOMContentLoaded", eventDetailsScroll);
window.addEventListener("load", eventDetailsScroll);
