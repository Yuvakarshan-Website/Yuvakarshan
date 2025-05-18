export default function Home() {
  const container = document.createElement('div');
  container.className = 'home';

  container.innerHTML = `
    <h1>Welcome to Yuvakarshan</h1>
    <p>This is the home page content.</p>
  `;

  return container;
}
