export default function Navbar() {
  const nav = document.createElement('nav');
  nav.className = 'navbar';

  nav.innerHTML = `
    <div class="nav-left">
      <img class="nav-image" src="/favicon.ico" alt="Logo" />
      <div class="nav-title">YUVAKARSHAN</div>
    </div>
    <ul class="nav-list">
      <li><a href="/" class="nav-link" data-link>Home</a></li>
      <li><a href="/events" class="nav-link" data-link>Events</a></li>
      <li><a href="/gallery" class="nav-link" data-link>Gallery</a></li>
      <li><a href="/team" class="nav-link" data-link>Team</a></li>
    </ul>
  `;

  return nav;
}
