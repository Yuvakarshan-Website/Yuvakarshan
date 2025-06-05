export default function EventsDay2() {
  const container = document.createElement('div');
  container.className = 'events-page-day-2';

  container.innerHTML = `
    <section class="events-list">
        <div class="card-container">
          <div class="card-grid ">
            <!-- Repeat this block for each card -->
              
                <div class="card">
                  <img src="../assets/images/logo.png" alt="Raaga Rock">
                  <div class="card-title">Raaga Rock</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="Bodha Blitz ">
                  <div class="card-title">Bodha Blitz </div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="Nazakat">
                  <div class="card-title">Nazakat</div>
                </div>


                <div class="card">
                  <img src="../assets/images/logo.png" alt="Leela Manch">
                  <div class="card-title">Leela <br />  Manch</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="Chitrakatha">
                  <div class="card-title">Chitrakatha</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="AppUrva">
                  <div class="card-title">AppUrva</div>
                </div>
              
                <div class="card">
                  <img src="../assets/images/logo.png" alt="Vaigyanik Vistaar">
                  <div class="card-title">Vaigyanik <br /> Vistaar</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="Vanijya Verse">
                  <div class="card-title">Vanijya <br />  Verse</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="Tarkanjali">
                  <div class="card-title">Tarkanjali</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="Shataranj">
                  <div class="card-title">Shataranj</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="Nyaya Yudh">
                  <div class="card-title">Nyaya Yudh</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="Vyapaar Yagna">
                  <div class="card-title">Vyapaar <br />  Yagna</div>
                </div>
              
          </div>
        </div>

    <!-- Fixed Right Button -->
    <button class="side-button left-button"><a href="/eventsDay1" data-link>◀ Day 1</a></button>

    <!-- Fixed Right Button -->
    <button class="side-button right-button"><a href="/eventsBuffer" data-link>Buffer ▶</a></button>

    <!-- page Center Label -->
    <div class="page-label">DAY TWO</div>
    
    </section>


  `;
 
  return container;
}
