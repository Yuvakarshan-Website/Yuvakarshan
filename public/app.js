import Home from './pages/home.js';
import Events from './pages/events.js';
import Gallery from './pages/gallery.js';
import Team from './pages/team.js';
import Navbar from './components/navbar.js';

//check

const routes = {
  '/': Home,
  '/home': Home,
  '/events': Events,
  '/gallery': Gallery,
  '/team': Team,
};

function render(path) {
  const app = document.getElementById('app');
  app.innerHTML = ''; // Clear old content

  const Page = routes[path] || NotFound;
  app.appendChild(Page()); // Insert new content
}

function setupRouter() {
  const navbarContainer = document.getElementById('navbar');
  navbarContainer.innerHTML = '';
  navbarContainer.appendChild(Navbar());

  document.body.addEventListener('click', e => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      const path = new URL(e.target.href).pathname;
      history.pushState(null, '', path);
      render(path);
    }
  });

  window.addEventListener('popstate', () => render(location.pathname));

  render(location.pathname);
}

setupRouter();


const hamburger = document.querySelector('.nav-hamburger');
const navRight = document.querySelector('.nav-right');
const links = document.querySelectorAll('.nav-link');

hamburger.addEventListener("click", () =>{
    navRight.classList.toggle("active");
    hamburger.classList.toggle("active");
});


links.forEach(link => {
  link.addEventListener("click", () => {
    navRight.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
});

  window.addEventListener("scroll", () => {
    const yuva = document.querySelector(".Yuva");
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY >= (window.innerHeight*0.1) && scrollY <= (window.innerHeight*0.75)) {
      yuva.classList.add("scrolled");
    } else {
      yuva.classList.remove("scrolled"); 
    }

    if (scrollY >= (window.innerHeight*0.75) && scrollY <= (window.innerHeight*2)) {
      yuva.classList.add("scrolled1");
    } else {
      yuva.classList.remove("scrolled1");
    }

    if (scrollY >= (window.innerHeight*2)) {
      yuva.classList.add("scrolled2");
    } else {
      yuva.classList.remove("scrolled2");
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    const targets = document.querySelectorAll('.YuvaHist');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.2
    });

    targets.forEach(target => observer.observe(target));
  });





