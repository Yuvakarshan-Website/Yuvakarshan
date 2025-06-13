import { eventData } from '/pages/eventData.js';

export default function eventDetails() {
  const path = window.location.pathname;
  const data = eventData[path];

  const segmentStyles = {
    'Kalpana': ['#FFA94D', '#7a3f00'],             // pastel orange, deep amber
    'Karigari Hub': ['#B197FC', '#3f1d78'],        // lavender, dark violet
    "Vikram's Vision": ['#63E6BE', '#1b5f48'],     // mint, forest green
    "Chanakya's Council": ['#66D9E8', '#134b56'],  // cyan, deep teal
    "Kartikeya's Combat": ['#FFD43B', '#665c00'],  // bright yellow, ochre
    'Shastra-Byte': ['#FF6B6B', '#6b0000']          // coral, blood red
  };

  const [fontColor, glowColor] = segmentStyles[data.segment] || ['#FFFFFF', '#000000'];

  const container = document.createElement('div');
  container.className = 'eventDetails';

  container.innerHTML = `
    <div class="eventDetailsBg">
      <div class="event-segment"
           style="
             color: ${fontColor};
             text-shadow: 0 0 4px ${glowColor}, 0 0 6px ${glowColor};
           ">
        ${data.segment}
      </div>
      <div class="logoContainer">
        <img class="event-logo" src="${data.logo}"></img>
      </div>
      <div class="event-segmentFrame" style="background-image: url('${data.segmentFrame}'); background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
      <div class="event-name">${data.name}<div class="event-subject">${data.subject}</div></div>
      <div class="event-overlay">
        <div class="event-description">
          <div class="event-desc-title">EVENT DETAILS</div>
            <br><br>
            <div class="event-desc-text">
            ${data.description}
            </div>
          </div>
      </div>
    </div>
  `;

  return container;
}
