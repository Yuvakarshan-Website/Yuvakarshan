export default function Navbar() {
  const nav = document.createElement('nav');
  nav.className = 'navbar';

  nav.innerHTML = `
    <div class="nav-left">
      <img class="nav-image" src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files@main/navbarImage.webp" alt="Logo" />
      <div class="nav-title-container">
        <a href="/" class="nav-title" data-link>YUVAKARSHAN</a>
        <a href="/" class="nav-subtitle" data-link>2K25</a>
      </div>
    </div>
    <div class="nav-hamburger">
      <span class="nav-hamburger-bar"></span>
       <span class="nav-hamburger-bar"></span>
       <span class="nav-hamburger-bar"></span>
    </div>
    <div class="nav-right">
      <ul class="nav-list">
        <li><a href="/" class="nav-link" data-link>Home</a></li>
        <li><a href="/generalGuidelines" class="nav-link" data-link>Guidelines</a></li>
        <li><a href="/eventsDay1" class="nav-link" data-link>Events</a></li>
        <li><a href="/gallery" class="nav-link" data-link>Gallery</a></li>
        <li><a href="/team" class="nav-link" data-link>Team</a></li>
      </ul>
    <div class="nav-right">
  `;
 
  return nav;
}


