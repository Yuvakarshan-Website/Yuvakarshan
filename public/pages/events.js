export default function Events() {
  const container = document.createElement('div');
  container.className = 'events-page';

  container.innerHTML = `
    <section class="events-list">
        <div class="card-container">
          <div class="card-grid ">
            <!-- Repeat this block for each card -->
            <div class="card">
              <img src="https://media.istockphoto.com/id/1345681613/vector/creative-people-logo-vector-illustration-design-editable-resizable-eps-10.jpg?s=612x612&w=0&k=20&c=9XUHICA1ljbxBcLw8ERp0kDDxLNQ8Bp2yR4aUSS6SBs=" alt="Moot Court">
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

    </section>
  `;

  return container;
}
