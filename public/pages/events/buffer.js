export default function EventsBuffer() {
  const container = document.createElement('div');
  container.className = 'events-page-buffer';

  container.innerHTML = `
    <section class="events-list">
        <div class="card-container">
          <div class="card-grid ">
            <!-- Repeat this block for each card -->
              
                <div class="card">
                  <img src="../assets/images/logo.png" alt="Sudarshan's Spin">
                  <div class="card-title">Sudarshan's <br /> Spin  </div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="Rudra's Racquet">
                  <div class="card-title">Rudra's <br /> Racquet</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="Vaayu Smash ">
                  <div class="card-title">Vaayu <br /> Smash</div>
                </div>


                <div class="card">
                  <img src="../assets/images/logo.png" alt="Neeraganga">
                  <div class="card-title">Neeraganga </div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="Radiant Rumble">
                  <div class="card-title">Radiant<br />Rumble</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="Vedic Race">
                  <div class="card-title">Vedic Race<br /> </div>
                </div>
              
                <div class="card">
                  <img src="../assets/images/logo.png" alt="Chakra League">
                  <div class="card-title">Chakra<br /> League<br /> </div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="IndraShock">
                  <div class="card-title">IndraShock </div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="Shiv Sadhna">
                  <div class="card-title">Shiv<br /> Sadhna<br />  </div>
                </div>

              
          </div>
        </div>
 
    <!-- Fixed Right Button -->
    <button class="side-button left-button"><a href="/eventsDay2" data-link>◀ Day 2 </a> </button>

    <!-- page Center Label -->
    <div class="page-label">BUFFER</div>
    
    </section>


  `;

  return container;
}
