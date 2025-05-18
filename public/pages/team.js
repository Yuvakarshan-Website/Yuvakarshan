// public/pages/team.js
export function Team() {
  const div = document.createElement('div');
  div.innerHTML = `
    <h1>Our Team</h1>
    <p>Meet the people behind the vision.</p>
  `;
  return div;
}
