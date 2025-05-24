export default function Gallery() {
  const container = document.createElement('div');
  container.className = 'gallery-page';

  container.innerHTML = `
    <section class="gallery-grid">
        <h1 style='position: absolute'> Hello </h1>
    </section>
  `;

  return container;
}
