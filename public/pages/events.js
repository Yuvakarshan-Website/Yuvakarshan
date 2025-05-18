export default function Events() {
  const container = document.createElement('div');
  container.className = 'events-page';

  container.innerHTML = `
    <section class="events-list">
      <h1 class="page-title">Events</h1>
      <ul>
        <li>Hackathon 2025</li>
        <li>Science Expo</li>
        <li>Literary Debate</li>
      </ul>
    </section>
  `;

  return container;
}
