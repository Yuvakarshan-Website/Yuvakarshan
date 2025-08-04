export default function Gallery() {
  const container = document.createElement('div');
  container.className = 'gallery-page';

  container.innerHTML = `
    <div class="galleryBg">
        <a href="https://drive.google.com/drive/u/1/folders/1CMm8py-Y1xZeiACU8cwbHdnSzPRPYLML" class="galleryMessage">Drive Link 👆</a>
    </div>
  `;

  return container;
}
 