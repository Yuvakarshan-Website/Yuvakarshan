export default function repsEvent() {
  const container = document.createElement('div');
  container.className = 'events-page';

  container.innerHTML = `
    <section class="events-list">
      
    <!-- Fixed Right Button -->
    <button class="side-button right-button"><a href="/eventsDay1" data-link>Day 1 &rarr;</a></button> 
 
    <!-- page Center Label -->
    <div class="page-label">REP'S EVENT</div>
    <div class="card-container">
      <div class="card-grid ">
        <h1 class='get-ready'>Get Ready - A surprise event is in store for both the representatives on the Rep's Meet on 11th July, 2K25!</h1>
      <div>
    </div>
    </section>


  `;

  return container;
}
