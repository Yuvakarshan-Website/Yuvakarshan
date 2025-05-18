// public/app.js
import { Home } from './pages/home.js';
import { Events } from './pages/events.js';
import { Gallery } from './pages/gallery.js';
import { Team } from './pages/team.js';
import { Navbar } from './components/navbar.js';

const appContainer = document.getElementById('app');
const navbarContainer = document.getElementById('navbar');


// Inject navbar once
navbarContainer.appendChild(Navbar());

const routes = {
  '/': Home,
  '/home': Home,
  '/events': Events,
  '/gallery': Gallery,
  '/team': Team
};

function renderRoute(path) {
  const PageComponent = routes[path] || (() => {
    const div = document.createElement('div');
    div.innerHTML = '<h1>404 - Page Not Found</h1>';
    return div;
  });

  appContainer.innerHTML = '';
  appContainer.appendChild(PageComponent());
}

// Handle initial load
window.addEventListener('DOMContentLoaded', () => {
  renderRoute(window.location.pathname);
});

// Handle history navigation
window.addEventListener('popstate', () => {
  renderRoute(window.location.pathname);
});

// Handle nav link clicks
document.addEventListener('click', (e) => {
  if (e.target.matches('a.nav-link')) {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    history.pushState(null, '', href);
    renderRoute(href);
  }
});
