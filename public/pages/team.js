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
        <div class="CoreCard Sarengi" style="background-image: url('/assets/images/Sarengi.webp'); "></div>
        <div class="CoreCard Richa" style="background-image: url('/assets/images/Richa.webp'); "></div>
        <div class="CoreCard Madhav" style="background-image: url('/assets/images/Madhav.webp'); "></div>
        <div class="CoreCard Aryaman" style="background-image: url('/assets/images/Aryaman.webp'); "></div>
        <div class="CoreCard Soham" style="background-image: url('/assets/images/Soham.webp'); "></div>
        <div class="CoreCard Visesh" style="background-image: url('/assets/images/Visesh.webp'); "></div>
        <div class="CoreCard Urjjosan" style="background-image: url('/assets/images/Urjjossan.webp'); "></div>
      </div>
    </section>

    <section class="SarikaMaam">
    </section>
    
    <section class="Website">
    </section>
  `;

  return container;
}
 