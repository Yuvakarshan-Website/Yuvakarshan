
export default function Home() {
  const container = document.createElement('div');
  container.className = 'home';

  container.innerHTML = `
    <canvas id="canvas3d"></canvas>
    <div class="home-banner">
      <div class="welcome">WELCOME TO</div>
      <div class="title">YUVAKARSHAN</div>
      <div class="subtitle">2K25</div>
      <div class="tagline">Rise Like a Phoenix, Reign Like a God</div>
    </div>
    <div class="YuvaHistContainer">
      <div class="YuvaHist Title">
        From the Yuvakarshan Directors' Desk
      </div>
      <p class="YuvaHist">
         Derived from the Sanskrit word “Yuvakarshan,” meaning “the magnetic pull of the youth,” our fest stands as a celebration of youthful energy, intellect, artistry, and unyielding spirit. What distinguishes Yuvakarshan 2K25 is not just its scale or spirit but the soul of its theme, Indian Mythology. 
      </p>
      <p class="YuvaHist">  
         This year, we immerse our fest in the timeless wisdom, valor, and mystique of ancient Indian mythology not as a nod to the past, but as a bridge to the future. The epics and legends that shaped civilizations, forged moral codes, and inspired generations now take center stage, reminding us of the power of stories rooted in culture, values, and spiritual depth. 
      </p>
      <p class="YuvaHist">
        In an age driven by algorithms and ambition, revisiting these narratives is more than homage it is a reclamation of identity. It is our tribute to the richness of Indian heritage, a celebration of symbolism, archetypes, and cosmic battles that still echo in our collective consciousness. It is through these stories that we hope to awaken in every participant a deeper understanding of leadership, strategy, art, justice, and most of all purpose. 
      </p>
      <p class="YuvaHist">
        But Yuvakarshan is not one-dimensional. It is a vibrant tapestry woven from diverse threads of human potential. To ensure that every domain of creativity and skill receives its rightful spotlight, we have curated the fest into six distinct and thoughtfully structured segments
          <br><br> 
          &emsp;  ✧	Kartekya’s Combat <br>
          &emsp;  ✧	Chanakaya’s Council <br>
          &emsp;  ✧	Kalpana <br>
          &emsp;  ✧	Shastra Byte <br>
          &emsp;  ✧	Karigari Hub <br>
          &emsp;  ✧	Vikram's Vision<br><br>
        Each segment is rooted in mythological essence and yet designed to challenge and captivate the contemporary mind.
      </p>
      <div class="YuvaHist">
      Yuvakarshan is not just a fest it is an experience. A confluence of intellect and imagination. A platform where legends are not just remembered, but reimagined. And in this convergence, we invite schools from across the country to participate, to create, and to carve their own legacy in the grand tapestry of Yuvakarshan on the 24th and 25th of July.
      </div>
    </div>
    <div class="YuvaVid"> YUVA EVENT INTRO VIDEO </div>
    <div class="HomeNav">
      <div class="HomeNavGrid">
        <div class="grid-item left" style="grid-row: 1; grid-column: 1;">
          <a href="/eventsDay1" data-link>Events</a>
        </div>
        <div class="grid-item left" style="grid-row: 2; grid-column: 1;">
          <a href="/team" data-link>Team</a>
        </div>
        <div class="grid-item left" style="grid-row: 3; grid-column: 1;">
          <a href="https://dpsnewtownkolkata.com/">About DPSN</a>
        </div>
        <div class="grid-item right first" style="grid-row: 1; grid-column: 2;">
          <a href="/gallery" data-link>Gallery</a>
        </div>
        <div class="grid-item right" style="grid-row: 2; grid-column: 2;">
          <a href="/lottery" data-link>LOTTERY RESULTS</a>
        </div>
        <div class="grid-item right" style="grid-row: 3; grid-column: 2;">
          <a href="/rep-meet" data-link>reps' meet</a>
        </div>
      </div>
      <img class="HomeNavFrame" src="/assets/images/HomeNavFrame.png"></img>
    </div>
    <div class="dpsnHist">
      <div class="dpsnHistText"> DPS Newtown, under the aegis of the DPS society is a state-of-the-art modern school, the only DPS situated in the heart of Newtown. Spread over a sprawling 12-acre plush campus, the school is equipped with the best of amenities, giving the students ample opportunities to manifest their talents. <br><br>
      Since its inception on 25th April 2005, the school has striven to provide a holistic education experience that ensures high standards of academic excellence complemented by a kaleidoscope of co-curricular activities. The focus is on nurturing well-rounded personalities with the skills to excel in the world they will inherit in time.</div>
      <div class="dpsnHistTitle">ABOUT OUR SCHOOL</div>
    </div>
    <div class="footer">
      <div class="footer-content">
        <a href="https://www.instagram.com/yuvakarshan2k25/" target="_blank" rel="noopener" aria-label="Instagram" class="footer-icon instagram" >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"/>
          </svg>
        </a>
        <p>&copy; ${new Date().getFullYear()} YUVAKARSHAN DPSN. All rights reserved.</p>
        <a href="mailto:dpsnyuvakarshan@gmail.com" aria-label="Email" class="footer-icon email">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l8 5 8-5v10H4z"/>
          </svg>
        </a>
      </div>
    </div>
  `;

  return container;
}

 