// public/pages/gallery.js
export function Gallery() {
  const div = document.createElement('div');
  div.innerHTML = `
    <h1>Gallery</h1>
    <p>Take a look at our best moments!</p>
  `;
  return div;
}
