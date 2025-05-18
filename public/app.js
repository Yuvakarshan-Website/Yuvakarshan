import Home from './pages/home.js';
import Events from './pages/events.js';
import Gallery from './pages/gallery.js';
import Team from './pages/team.js';
import Navbar from './components/navbar.js';

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
