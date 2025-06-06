export default function Team() {
  const container = document.createElement('div');
  container.className = 'team-page';

  container.innerHTML = `
    <div class="teamBg"></div>
    <section class="CoreCommittee">
      
      <div class="scroll-prompt-team">SCROLL DOWN!</div>


      <div class="CoreColumn Left">
        <div class="SectionTitle">
        Core Committee
        </div>
        <div class="Highlighted core">
        </div>
      </div>
      <div class="CoreColumn Right">
        <div class="CoreCard Sarengi" style="background-image: url('/assets/images/Sarengi.png'); "></div>
        <div class="CoreCard Richa" style="background-image: url('/assets/images/Richa.png'); "></div>
        <div class="CoreCard Madhav" style="background-image: url('/assets/images/Madhav.png'); "></div>
        <div class="CoreCard Aryaman" style="background-image: url('/assets/images/Aryaman.png'); "></div>
        <div class="CoreCard Soham" style="background-image: url('/assets/images/Soham.png'); "></div>
        <div class="CoreCard Visesh" style="background-image: url('/assets/images/Visesh.png'); "></div>
        <div class="CoreCard Urjjosan" style="background-image: url('/assets/images/Urjjossan.png'); "></div>
      </div>
    </section>

    <section class="SarikaMaam">
    </section>
    
    <section class="Website">
    </section>
  `;

  return container;
}
 