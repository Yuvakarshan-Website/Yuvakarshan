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
                  <img src="https://i.pinimg.com/564x/18/39/15/183915d24b8fbcdaf77cdb0c40526f3d.jpg" alt="Moot Court">
                  <div class="card-title">MOOT COURT</div>
                </div>

                <div class="card">
                  <img src="../assets/moot-icon.png" alt="Moot Court">
                  <div class="card-title">MOOT COURT</div>
                </div>

                <div class="card">
                  <img src="../assets/moot-icon.png" alt="Moot Court">
                  <div class="card-title">MOOT COURT</div>
                </div>


                <div class="card">
                  <img src="../assets/moot-icon.png" alt="Moot Court">
                  <div class="card-title">MOOT COURT</div>
                </div>

                <div class="card">
                  <img src="../assets/moot-icon.png" alt="Moot Court">
                  <div class="card-title">MOOT COURT</div>
                </div>
              </div>
          </div>
        </div>

    </section>
  `;

  return container;
}
