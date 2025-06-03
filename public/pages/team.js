export default function Team() {
  const container = document.createElement('div');
  container.className = 'team-page';

  container.innerHTML = `
    <section class="CoreCommittee">
      <div class="CoreColumn Left">
        <div class="SectionTitle">
        Core Committee
        </div>
        <div class="Highlighted core">
        </div>
      </div>
      <div class="CoreColumn Right">
        <div class="CoreCard Sarengi" style="background-image: url('/assets/images/Sarengi.png'); background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
        <div class="CoreCard Richa" style="background-image: url('/assets/images/Richa.png'); background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
        <div class="CoreCard Madhav" style="background-image: url('/assets/images/Madhav.png'); background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
        <div class="CoreCard Aryaman" style="background-image: url('/assets/images/Aryaman.png'); background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
        <div class="CoreCard Soham" style="background-image: url('/assets/images/Soham.png'); background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
        <div class="CoreCard Visesh" style="background-image: url('/assets/images/Visesh.png'); background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
        <div class="CoreCard Urjjosan" style="background-image: url('/assets/images/Urjjossan.png'); background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
      </div>
    </section>

    <section class="SarikaMaam">
    </section>
    
    <section class="Website">
    </section>
  `;

  return container;
}
 