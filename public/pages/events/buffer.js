export default function EventsBuffer() {
  const container = document.createElement('div');
  container.className = 'events-page-buffer';

  container.innerHTML = `
    <section class="events-list">
        <div class="card-container">  
          <div class="card-grid ">
            <!-- Repeat this block for each card -->
              
                <a href="/SudarshansSpin" data-link class="card">
                  <img src="/assets/images/logos/31.webp" alt="Sudarshan's Spin">
                  <div class="card-title">Sudarshan's<br>Spin</div>
                </a>

                <a href="/RudrasRacquet" data-link class="card">
                  <img src="/assets/images/logos/28.webp" alt="Rudra's Racquet">
                  <div class="card-title">Rudra's<br>Racquet</div>
                </a>

                <a href="/VaayuSmash" data-link class="card">
                  <img src="/assets/images/logos/32.webp" alt="Vaayu Smash">
                  <div class="card-title">Vaayu<br>Smash</div>
                </a>

                <a href="/Neeraganga" data-link class="card">
                  <img src="/assets/images/logos/27.webp" alt="Neeragana">
                  <div class="card-title">Neeragana<br>‎</div>
                </a>

                <a href="/RadiantRumble" data-link class="card">
                  <img src="/assets/images/logos/37.webp" alt="Radiant Rumble">
                  <div class="card-title">Radiant<br>Rumble</div>
                </a>

                <a href="/VedicRace" data-link class="card">
                  <img src="/assets/images/logos/33.webp" alt="Vedic Race">
                  <div class="card-title">Vedic Race<br>‎</div>
                </a>

                <a href="/ChakraLeague" data-link class="card">
                  <img src="/assets/images/logos/25.webp" alt="Chakra League">
                  <div class="card-title">Chakra<br>League</div>
                </a>

                <a href="/IndraShock" data-link class="card">
                  <img src="/assets/images/logos/36.webp" alt="IndraShock">
                  <div class="card-title">IndraShock <br> ‎ </div>
                </a>

                <a href="/ShivSadhna" data-link class="card">
                  <img src="/assets/images/logos/30.webp" alt="Shiv Sadhna">
                  <div class="card-title">Shiv<br>Sadhna</div>
                </a>


              
          </div>
        </div>
 
    <!-- Fixed Right Button -->
    <button class="side-button left-button"><a href="/eventsDay2" data-link>&larr; Day 2 </a> </button>

    <!-- page Center Label -->
    <div class="page-label">BUFFER</div>
    
    </section>


  `;

  return container;
}
