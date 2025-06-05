export default function Events() {
  const container = document.createElement('div');
  container.className = 'events-page';

  container.innerHTML = `
    <section class="events-list">
        <div class="card-container">
          <div class="card-grid ">
                <div class="card">
                  <img src="../assets/images/logo.png" alt="Raaga Sangam">
                  <div class="card-title">Raaga <br /> Sangam</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="Antakshari">
                  <div class="card-title">Antakshari</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="Nritya Katha">
                  <div class="card-title">Nritya <br /> Katha</div>
                </div>


                <div class="card">
                  <img src="../assets/images/logo.png" alt="Chakravyuh">
                  <div class="card-title">Chakravyuh</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="Bheem's Bhojnalay">
                  <div class="card-title">Bheem's <br /> Bhojnalay</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="Mecha Yaan">
                  <div class="card-title">Mecha Yaan</div>
                </div>
              
                <div class="card">
                  <img src="../assets/images/logo.png" alt="Cyber Siddhanta">
                  <div class="card-title">Cyber <br /> Siddhanta</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="Anveshan">
                  <div class="card-title">Anveshan</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="Arthashastra's Arena">
                  <div class="card-title"  style="font-size: 0.8rem;">Arthashastra's <br /> Arena</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="Indra's Influence">
                  <div class="card-title">Indra's <br /> Influence</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="Kubera Capital">
                  <div class="card-title">Kubera <br />Capital</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="Hanuman's Combat">
                  <div class="card-title">Hanuman's<br /> Combat</div>
                </div>
              
                <div class="card">
                  <img src="../assets/images/logo.png" alt="Vrittanta">
                  <div class="card-title">Vrittanta</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="Nukkad Natak">
                  <div class="card-title">Nukkad <br /> Natak</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="Agni Strikers">
                  <div class="card-title">Agni Strikers</div>
                </div>


                <div class="card">
                  <img src="../assets/images/logo.png" alt="Chakravyuh">
                  <div class="card-title">Chakravyuh</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="Maya Mandi">
                  <div class="card-title">Maya Mandi</div>
                </div>

          </div>
        </div>

    <!-- Fixed Right Button -->
    <button class="side-button right-button"><a href="/eventsDay2" data-link>Day 2 ▶</a></button> 
 
    <!-- page Center Label -->
    <div class="page-label">DAY ONE</div>
    
    </section>


  `;

  return container;
}
