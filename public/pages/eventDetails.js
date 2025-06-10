import { eventData } from '/pages/eventData.js';

export default function eventDetails() {
  const path = window.location.pathname;
  const data = eventData[path];

  const container = document.createElement('div');
  container.className = 'eventDetails';

  container.innerHTML = `
    <div class="eventDetailsBg">
      <img class="event-logo" src="${data.logo}"></img>
      <div class="event-name">${data.name}</div>
      <div class="event-segment">Segment: ${data.segment}</div>
      <div class="event-segmentFrame">Frame: ${data.segmentFrame}</div>
      <div class="event-subject">Subject: ${data.subject}</div>
      <div class="event-description">${data.description}</div>
    </div>
  `;

  return container;
}

 