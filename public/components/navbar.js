// navbar.js

export function Navbar() {
  const nav = document.createElement('nav');
  nav.className = 'navbar';

  nav.innerHTML = `
    <ul class="nav-list">
      <li><a class="nav-link" href="/">Home</a></li>
      <li><a class="nav-link" href="/about">About</a></li>
      <li><a class="nav-link" href="/contact">Contact</a></li>
    </ul>
  `;

  return nav;
}
