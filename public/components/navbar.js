// public/components/navbar.js
export function Navbar() {
  const nav = document.createElement('nav');
  nav.innerHTML = `
    <ul class="nav-list">
      <li><a class="nav-link" href="/home">Home</a></li>
      <li><a class="nav-link" href="/events">Events</a></li>
      <li><a class="nav-link" href="/gallery">Gallery</a></li>
      <li><a class="nav-link" href="/team">Team</a></li>
    </ul>
  `;
  return nav;
}
