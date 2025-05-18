export default function Team() {
  const container = document.createElement('div');
  container.className = 'team-page';

  container.innerHTML = `
    <section class="team-members">
      <h1 class="page-title">Meet the Team</h1>
      <div class="member">
        <h3>Arya Singh</h3>
        <p>Founder & Visionary</p>
      </div>
      <div class="member">
        <h3>Ravi Kumar</h3>
        <p>Tech Lead</p>
      </div>
      <div class="member">
        <h3>Meera Joshi</h3>
        <p>Design Head</p>
      </div>
    </section>
  `;

  return container;
}
