export default function Events() {
  const container = document.createElement('div');
  container.className = 'events-page';

  container.innerHTML = `
    <section class="events-list">

        <div id="eventClickPrompt" class="eventClickPrompt hidden">
          Click any event to see its details
        </div>

        <div class="scroll-prompt scroll-prompt-event">
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <div class="card-container">
          <div class="card-grid ">
            <a href="/RaagaSangam" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files@main/logos/17.webp" alt="Raaga Sangam">
              <div class="card-title">Raaga <br /> Sangam</div>
            </a>

            <a href="/Antakshari" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files@main/logos/11.webp" alt="Antakshari">
              <div class="card-title">Antakshari <br /> ‎ </div>
            </a>

            <a href="/NrityaKatha" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files@main/logos/13.webp" alt="Nritya Katha">
              <div class="card-title">Nritya <br /> Katha</div>
            </a>

            <a href="/Chakravyuh" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files@main/logos/35.webp" alt="Chakravyuh">
              <div class="card-title">Chakravyuh <br /> ‎ </div>
            </a>

            <a href="/BheemsBhojnalay" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files@main/logos/19.webp" alt="Bheem's Bhojnalay">
              <div class="card-title">Bheem's <br /> Bhojnalay</div>
            </a>

            <a href="/MechaYaan" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files@main/logos/4.webp" alt="Mecha Yaan">
              <div class="card-title">Mecha <br/> Yaan </div>
            </a>

            <a href="/CyberSiddhanta" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files@main/logos/3.webp" alt="Cyber Siddhanta">
              <div class="card-title">Cyber <br /> Siddhanta</div>
            </a>

            <a href="/Anveshan" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files@main/logos/1.webp" alt="Anveshan">
              <div class="card-title">Anveshan <br /> ‎ </div>
            </a>

            <a href="/ArthashastraArena" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files@main/logos/7.webp" alt="Arthashastra Arena">
              <div class="card-title" style="font-size: 0.8rem;">Arthashastra <br /> Arena</div>
            </a>

            <a href="/IndrasInfluence" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files@main/logos/6.webp" alt="Indra's Influence">
              <div class="card-title">Indra's <br /> Influence</div>
            </a>

            <a href="/KuberaKapital" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files@main/logos/8.webp" alt="Kubera Kapital">
              <div class="card-title">Kubera <br />Capital</div>
            </a>

            <a href="/HanumansCombat" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files@main/logos/26.webp" alt="Hanuman's Combat">
              <div class="card-title">Hanuman's<br /> Combat</div>
            </a>

            <a href="/Vrittanta" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files@main/logos/18.webp" alt="Vrittanta">
              <div class="card-title">Vrittanta <br/> ‎ </div>
            </a>

            <a href="/NukkadNatak" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files@main/logos/15.webp" alt="Nukkad Natak">
              <div class="card-title">Nukkad <br /> Natak</div>
            </a>

            <a href="/AgniStrikers" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files@main/logos/34.webp" alt="Agni Strikers">
              <div class="card-title">Agni <br /> Strikers</div>
            </a>

            <a href="/MayaMandi" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files@main/logos/22.webp" alt="Maya Mandi">
              <div class="card-title">Maya <br /> Mandi</div>
            </a>
          </div>
        </div>

    <!-- Fixed Right Button -->
    <button class="side-button left-button"><a href="/repsEvent" data-link>&larr; Rep's</a></button>
    <button class="side-button right-button"><a href="/eventsDay2" data-link>Day 2 &rarr;</a></button> 
 
    <!-- page Center Label -->
    <div class="page-label">DAY ONE</div>
    
    </section>


  `;

  return container;
}
