// public/pages/home.js
export function Home() {
  const div = document.createElement('div');
  div.innerHTML = `
    <h1>Welcome to Yuvakarshan</h1>
    <p>This is the Home page.</p>
  `;
  return div;
}
