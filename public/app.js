// app.js

import { Navbar } from './components/navbar.js';

const navbarContainer = document.getElementById('navbar');
const appContainer = document.getElementById('app');

navbarContainer.appendChild(Navbar());

window.addEventListener('popstate', renderPage);

document.addEventListener('click', function (e) {
  if (e.target.matches('a.nav-link')) {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    history.pushState(null, '', href);
    renderPage();
  }
});

function renderPage() {
  const route = window.location.pathname;
  appContainer.innerHTML = '';

  switch (route) {
    case '/':
      appContainer.innerHTML = '<h1>Welcome to Yuvakarshan</h1>';
      break;
    case '/about':
      appContainer.innerHTML = '<h1>About Us</h1>';
      break;
    case '/contact':
      appContainer.innerHTML = '<h1>Contact Page</h1>';
      break;
    default:
      appContainer.innerHTML = '<h1>404 - Page Not Found</h1>';
  }
}
