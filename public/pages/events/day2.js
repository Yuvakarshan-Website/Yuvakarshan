export default function EventsDay2() {
  const container = document.createElement('div');
  container.className = 'events-page-day-2';

  container.innerHTML = `
    <section class="events-list">
        <div class="scroll-prompt scroll-prompt-event">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div class="card-container">
          <div class="card-grid "> 
            <a href="/RaagaRock" data-link class="card">
              <img src="../assets/images/logos/16.webp" alt="Raaga Rock">
              <div class="card-title">Raaga <br /> Rock</div>
            </a>

            <a href="/BodhaBlitz" data-link class="card">
              <img src="../assets/images/logos/20.webp" alt="Bodha Blitz">
              <div class="card-title">Bodha <br /> Blitz</div>
            </a>

            <a href="/Nazakat" data-link class="card">
              <img src="../assets/images/logos/14.webp" alt="Nazakat">
              <div class="card-title">Nazakat <br /> ‎ </div>
            </a>

            <a href="/LeelaManch" data-link class="card">
              <img src="../assets/images/logos/12.webp" alt="Leela Manch">
              <div class="card-title">Leela <br /> Manch</div>
            </a>

            <a href="/Chitrakatha" data-link class="card">
              <img src="../assets/images/logos/21.webp" alt="Chitrakatha">
              <div class="card-title">Chitrakatha <br /> ‎ </div>
            </a>

            <a href="/AppUrva" data-link class="card">
              <img src="../assets/images/logos/2.webp" alt="AppUrva">
              <div class="card-title">AppUrva <br /> ‎ </div>
            </a>

            <a href="/VaigyanikVistaar" data-link class="card">
              <img src="../assets/images/logos/5.webp" alt="Vaigyanik Vistaar">
              <div class="card-title">Vaigyanik <br /> Vistaar</div>
            </a>

            <a href="/VanijyaVerse" data-link class="card">
              <img src="../assets/images/logos/9.webp" alt="Vanijya Verse">
              <div class="card-title">Vanijya <br /> Verse</div>
            </a>

            <a href="/Tarkanjali" data-link class="card">
              <img src="../assets/images/logos/23.webp" alt="Tarkanjali">
              <div class="card-title">Tarkanjali <br /> ‎ </div>
            </a>

            <a href="/Shataranj" data-link class="card">
              <img src="../assets/images/logos/29.webp" alt="Shataranj">
              <div class="card-title">Shataranj <br /> ‎ </div>
            </a>

            <a href="/NyayaYudh" data-link class="card">
              <img src="../assets/images/logos/24.webp" alt="Nyaya Yudh">
              <div class="card-title">Nyaya <br /> Yudh</div>
            </a>

            <a href="/VyapaarYagna" data-link class="card">
              <img src="../assets/images/logos/10.webp" alt="Vyapaar Yagna">
              <div class="card-title">Vyapaar <br /> Yagna</div>
            </a>
   
          </div>
        </div>

    <!-- Fixed Right Button -->
    <button class="side-button left-button"><a href="/eventsDay1" data-link>&larr; Day 1</a></button>

    <!-- Fixed Right Button -->
    <button class="side-button right-button"><a href="/eventsBuffer" data-link>Buffer &rarr;</a></button>

    <!-- page Center Label -->
    <div class="page-label">DAY TWO</div>
    
    </section>


  `;
 
  return container;
}
