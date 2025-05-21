export default function Home() {
  const container = document.createElement('div');
  container.className = 'home';

  container.innerHTML = `
      <div class="home-background">
      <h1 class="page-title">home</h1>
      </div>
  `;

  return container;
}

