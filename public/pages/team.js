export default function Team() {
  const container = document.createElement('div');
  container.className = 'team-page';

  container.innerHTML = `
    <div class="homeBg"></div>
    <section class="CoreCommittee">
      
      <div class="scroll-prompt team">
        <span></span>
        <span></span>
        <span></span>
      </div>


      <div class="CoreColumn Left">
        <div class="SectionTitle">
        Core Committee
        </div>
        <div class="Highlighted core">
        </div>
      </div>
      <div class="CoreColumn Right">
        <div class="CoreCard Sarengi" style="background-image: url('https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files@main/Sarengi.webp'); "></div>
        <div class="CoreCard Richa" style="background-image: url('https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files@main/Richa.webp'); "></div>
        <div class="CoreCard Madhav" style="background-image: url('https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files@main/Madhav.webp'); "></div>
        <div class="CoreCard Aryaman" style="background-image: url('https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files@main/Aryaman.webp'); "></div>
        <div class="CoreCard Soham" style="background-image: url('https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files@main/Soham.webp'); "></div>
        <div class="CoreCard Visesh" style="background-image: url('https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files@main/Visesh.webp'); "></div>
        <div class="CoreCard Urjjosan" style="background-image: url('https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files@main/Urjjossan.webp'); "></div>
      </div>
    </section>
    <section class="WebsiteTeam">
      <div class="SectionTitle website">
        Website Team
      </div>
      <div class="WTCardContainer">
        <div class="WTCard left">
          <div class="wtBg">
            <div class="wtName">Riddhiman Ghosh</div>
            <div class="wtDetails">XI-D</div>
            <div class="wtFooter">Innovation Club Core</div>
          </div>
          <div class="HoverPrompt"> HOVER </div>
        </div>
        <img class="wtFiller" src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files@main/wtFiller.png"></img>
        <div class="WTCard right">
          <div class="wtBg">
            <div class="wtName">Aviral Kochgaway</div>
            <div class="wtDetails">XI-B</div>
            <div class="wtFooter">Innovation Club Core</div>
          </div>
          <div class="HoverPrompt"> HOVER </div>
        </div>
      </div>
    </section>
  `;

  return container;
}
 