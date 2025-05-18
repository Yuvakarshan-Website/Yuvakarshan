// public/app.js
import { Navbar } from './components/navbar.js';

const navbarContainer = document.getElementById('navbar');
const appContainer = document.getElementById('app');

// Load Navbar
navbarContainer.appendChild(Navbar());

// Basic hash-based routing
window.addEventListener('hashchange', renderPage);
window.addEventListener('load', renderPage);

function renderPage() {
  const route = window.location.hash.slice(1) || '/';
  appContainer.innerHTML = '';

  switch (route) {
    case '/':
      appContainer.innerHTML = '<h1>Welcome to Yuvakarshan</h1>';
      break;
    case '/about':
      appContainer.innerHTML = '<h1>About Yuvakarshan</h1>';
      break;
    case '/contact':
      appContainer.innerHTML = '<h1>Contact Us</h1>';
      break;
    default:
      appContainer.innerHTML = '<h1>404 - Page Not Found</h1>';
  }
}
