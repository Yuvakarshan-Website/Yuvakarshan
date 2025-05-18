// public/pages/events.js
export function Events() {
  const div = document.createElement('div');
  div.innerHTML = `
    <h1>Events</h1>
    <p>Check out our latest events!</p>
  `;
  return div;
}
