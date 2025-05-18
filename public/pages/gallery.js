export default function Gallery() {
  const container = document.createElement('div');
  container.className = 'gallery-page';

  container.innerHTML = `
    <section class="gallery-grid">
      <h1 class="page-title">Gallery</h1>
      <div class="images">
      </div>
    </section>
  `;

  return container;
}
