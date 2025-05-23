export default function Events() {
  const container = document.createElement('div');
  container.className = 'events-page';

  container.innerHTML = `
    <section class="events-list">
        <div class="card-container">
          <div class="card-grid ">
            <!-- Repeat this block for each card -->
              <div class="card-row">
                <div class="card">
                  <img src="../assets/images/logo.png" alt="Moot Court">
                  <div class="card-title">MOOT COURT</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="Moot Court">
                  <div class="card-title">MOOT COURT</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="Moot Court">
                  <div class="card-title">MOOT COURT</div>
                </div>


                <div class="card">
                  <img src="../assets/images/logo.png" alt="Moot Court">
                  <div class="card-title">MOOT COURT</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="Moot Court">
                  <div class="card-title">MOOT COURT</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="Moot Court">
                  <div class="card-title">MOOT COURT</div>
                </div>
              </div>

                          <div class="card-row">
                <div class="card">
                  <img src="../assets/images/logo.png" alt="Moot Court">
                  <div class="card-title">MOOT COURT</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="Moot Court">
                  <div class="card-title">MOOT COURT</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="Moot Court">
                  <div class="card-title">MOOT COURT</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="Moot Court">
                  <div class="card-title">MOOT COURT</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="Moot Court">
                  <div class="card-title">MOOT COURT</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="Moot Court">
                  <div class="card-title">MOOT COURT</div>
                </div>
              </div>

                          <div class="card-row">
                <div class="card">
                  <img src="../assets/images/logo.png" alt="Moot Court">
                  <div class="card-title">MOOT COURT</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="Moot Court">
                  <div class="card-title">MOOT COURT</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="Moot Court">
                  <div class="card-title">MOOT COURT</div>
                </div>


                <div class="card">
                  <img src="../assets/images/logo.png" alt="Moot Court">
                  <div class="card-title">MOOT COURT</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="Moot Court">
                  <div class="card-title">MOOT COURT</div>
                </div>

                <div class="card">
                  <img src="../assets/images/logo.png" alt="Moot Court">
                  <div class="card-title">MOOT COURT</div>
                </div>
              </div>
          </div>
        </div>

    <!-- Fixed Right Button -->
    <button class="side-button right-button"><a href="/events/day2" data-link>Day 2 ▶</a></button> 

    <!-- Bottom Center Label -->
    <div class="bottom-label">DAY ONE</div>
    
    </section>


  `;

  return container;
}
