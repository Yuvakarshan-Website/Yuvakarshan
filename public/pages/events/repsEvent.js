export default function repsEvent() {
  const container = document.createElement('div');
  container.className = 'repsEvent';

  container.innerHTML = `
    <section class="events-list">
      
    <!-- Fixed Right Button -->
    <button class="side-button right-button"><a href="/eventsDay1" data-link>Day 1 &rarr;</a></button> 
 
    <!-- page Center Label -->
    <div class="page-label">REP'S EVENT</div>
    <div class="card-grid ">
      <div>
    </section>


  `;

  return container;
}
