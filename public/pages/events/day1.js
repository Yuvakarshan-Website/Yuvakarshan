export default function Events() {
  const container = document.createElement('div');
  container.className = 'events-page';

  container.innerHTML = `
    <section class="events-list">
        <div class="scroll-prompt scroll-prompt-event">
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <div class="card-container">
          <div class="card-grid ">
                <div class="card">
                  <img src="../assets/images/logos/17.png" alt="Raaga Sangam">
                  <div class="card-title">Raaga <br /> Sangam</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logos/11.png" alt="Antakshari">
                  <div class="card-title">Antakshari <br /> ‎ </div>
                </div>

                <div class="card">
                  <img src="../assets/images/logos/13.png" alt="Nritya Katha">
                  <div class="card-title">Nritya <br /> Katha</div>
                </div>


                <div class="card">
                  <img src="../assets/images/logos/35.png" alt="Chakravyuh">
                  <div class="card-title">Chakravyuh <br /> ‎ </div>
                </div>

                <div class="card">
                  <img src="../assets/images/logos/19.png" alt="Bheem's Bhojnalay">
                  <div class="card-title">Bheem's <br /> Bhojnalay</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logos/4.png" alt="Mecha Yaan">
                  <div class="card-title">Mecha <br/> Yaan </div>
                </div>
              
                <div class="card">
                  <img src="../assets/images/logos/3.png" alt="Cyber Siddhanta">
                  <div class="card-title">Cyber <br /> Siddhanta</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logos/1.png" alt="Anveshan">
                  <div class="card-title">Anveshan <br /> ‎ </div>
                </div>

                <div class="card">
                  <img src="../assets/images/logos/7.png" alt="Arthashastra's Arena">
                  <div class="card-title"  style="font-size: 0.8rem;">Arthashastra's <br /> Arena</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logos/6.png" alt="Indra's Influence">
                  <div class="card-title">Indra's <br /> Influence</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logos/8.png" alt="Kubera Capital">
                  <div class="card-title">Kubera <br />Capital</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logos/26.png" alt="Hanuman's Combat">
                  <div class="card-title">Hanuman's<br /> Combat</div>
                </div>
              
                <div class="card">
                  <img src="../assets/images/logos/18.png" alt="Vrittanta">
                  <div class="card-title">Vrittanta <br/> ‎ </div>
                </div>

                <div class="card">
                  <img src="../assets/images/logos/15.png" alt="Nukkad Natak">
                  <div class="card-title">Nukkad <br /> Natak</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logos/34.png" alt="Agni Strikers">
                  <div class="card-title">Agni <br /> Strikers</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logos/22.png" alt="Maya Mandi">
                  <div class="card-title">Maya <br /> Mandi</div>
                </div>

          </div>
        </div>

    <!-- Fixed Right Button -->
    <button class="side-button right-button"><a href="/eventsDay2" data-link>Day 2 &rarr;</a></button> 
 
    <!-- page Center Label -->
    <div class="page-label">DAY ONE</div>
    
    </section>


  `;

  return container;
}
