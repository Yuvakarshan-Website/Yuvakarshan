export default function Home() {
  const container = document.createElement('div');
  container.className = 'home';

  container.innerHTML = `
  <div>
  <div class="home-banner">
    <div class="welcome">WELCOME TO</div>
    <div class="title">YUVAKARSHAN</div>
    <div class="subtitle">2K25</div>
    <div class="tagline">TAGLINE</div>
  </div>
  <div class="test"> lol 1 pg </div>
  <img class="Yuva" src="/assets/images/Yuva.png"></img>
  </div>
  `;

  return container;
}

