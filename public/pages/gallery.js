export default function Gallery() {
  const container = document.createElement('div');
  container.className = 'gallery-page';

  container.innerHTML = `
    <div class="galleryBg">
    <div class="galleryMessage">STAY TUNED</div>
  `;

  return container;
}
 