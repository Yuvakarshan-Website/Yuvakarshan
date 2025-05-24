export default function Footer() {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  footer.innerHTML = `
    <div class="footer-container">
      <div class="footer-left">
        <img src="/assets/images/Yuva.png" alt="Yuvakarshan Logo" class="footer-logo" />
        <p class="footer-tagline">Ignite the Myth. Inspire the Future.</p>
      </div>
      <div class="footer-right">
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/eventsDay1" data-link>Events</a></li>
            <li><a href="/gallery" data-link>Gallery</a></li>
            <li><a href="/team" data-link>Team</a></li>
            <li><a href="/lottery" data-link>Lottery Results</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Connect</h4>
          <ul>
            <li><a href="/rep-meet" data-link>Reps' Meet</a></li>
            <li><a href="https://dpsnewtownkolkata.com/" target="_blank">About DPSN</a></li>
            <li><a href="mailto:yuvakarshan@dpsn.org">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      &copy; 2025 Yuvakarshan · DPS Newtown · All rights reserved.
    </div>
  `;

  return footer;
}
