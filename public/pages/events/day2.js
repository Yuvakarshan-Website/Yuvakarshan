export default function EventsDay2() {
  const container = document.createElement('div');
  container.className = 'events-page-day-2';

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
    <button class="side-button left-button"><a href="/eventsDay1" data-link>◀ Day 1</a></button>

    <!-- Fixed Right Button -->
    <button class="side-button right-button"><a href="/eventsBuffer" data-link>Buffer ▶</a></button>

    <!-- page Center Label -->
    <div class="page-label">DAY TWO</div>
    
    </section>


  `;
 
  return container;
}
