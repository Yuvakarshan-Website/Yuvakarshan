export default function Home() {
  const container = document.createElement('div');
  container.className = 'home';

  container.innerHTML = `
    <div class="home-banner">
      <div class="welcome">WELCOME TO</div>
      <div class="title">YUVAKARSHAN</div>
      <div class="subtitle">2K25</div>
      <div class="tagline"><pre>Rise Like a Phoenix, Reign Like a God</pre> </div>
    </div>
    <img class="Yuva" src="/assets/images/Yuva.png"></img>
    <div class="YuvaHistContainer">
      <div class="YuvaHist Title">
        From the Yuvakarshan Directors' Desk
      </div>
      <div class="YuvaHist">
        <p> Derived from the Sanskrit word “Yuvakarshan,” meaning “the magnetic pull of the youth,” our fest stands as a celebration of youthful energy, intellect, artistry, and unyielding spirit. What distinguishes Yuvakarshan 2025 is not just its scale or spirit but the soul of its theme, Indian Mythology. </p>
      </div>
      <div class="YuvaHist">  
        <p> This year, we immerse our fest in the timeless wisdom, valor, and mystique of ancient Indian mythology not as a nod to the past, but as a bridge to the future. The epics and legends that shaped civilizations, forged moral codes, and inspired generations now take center stage, reminding us of the power of stories rooted in culture, values, and spiritual depth. </p>
      </div>
      <div class="YuvaHist">
        <p> In an age driven by algorithms and ambition, revisiting these narratives is more than homage it is a reclamation of identity. It is our tribute to the richness of Indian heritage, a celebration of symbolism, archetypes, and cosmic battles that still echo in our collective consciousness. It is through these stories that we hope to awaken in every participant a deeper understanding of leadership, strategy, art, justice, and most of all purpose. </p>
      </div>
      <div class="YuvaHist">
        But Yuvakarshan is not one-dimensional. It is a vibrant tapestry woven from diverse threads of human potential. To ensure that every domain of creativity and skill receives its rightful spotlight, we have curated the fest into six distinct and thoughtfully structured segments
          <br><br>
          <div class="segments"> 
            1.	Kartekya’s Combat <br>
            2.	Chanakaya’s council <br>
            3.	Kalpana <br>
            4.	Shastra Byte <br>
            5.	Karigari Hub <br>
            6.	Vikram Vision<br><br> 
          </div>
        Each segment is rooted in mythological essence and yet designed to challenge and captivate the contemporary mind.
      </div>
      <div class="YuvaHist">
      Yuvakarshan is not just a fest it is an experience. A confluence of intellect and imagination. A platform where legends are not just remembered, but reimagined. And in this convergence, we invite schools from across the country to participate, to create, and to carve their own legacy in the grand tapestry of Yuvakarshan on the 24th and 25th of July.
      </div>
    </div>
    <div class="YuvaVid"> YUVA EVENT INTRO VIDEO </div>
    <div class="HomeNav">
      <div class="HomeNavGrid">
        <div class="grid-item left"><a href="/eventsDay1" data-link>Events</a></div>
        <div class="grid-item right"><a href="/gallery" data-link>Gallery</a></div>
        <div class="grid-item left"><a href="/team" data-link>Team</a></div>
        <div class="grid-item right"><a href="/lottery" data-link>LOTTERY RESULTS</a></div>
        <div class="grid-item left"><a href="https://dpsnewtownkolkata.com/" >About DPSN</a></div>
        <div class="grid-item right"><a href="/rep-meet" data-link>reps' meet</a></div>
      </div>
      <img class="HomeNavFrame" src="/assets/images/HomeNavFrame.png"><img class="YuvaMobile" src="/assets/images/Yuva.png"></img></img>
    </div>
    <div class="dpsnHist">
      <div class="dpsnHistText"> DPS Newtown, under the aegis of the DPS society is a state-of-the-art modern school, the only DPS situated in the heart of Newtown. Spread over a sprawling 12-acre plush campus, the school is equipped with the best of amenities, giving the students ample opportunities to manifest their talents. <br><br>
      Since its inception on 25th April 2005, the school has striven to provide a holistic education experience that ensures high standards of academic excellence complemented by a kaleidoscope of co-curricular activities. The focus is on nurturing well-rounded personalities with the skills to excel in the world they will inherit in time.</div>
      <div class="dpsnHistTitle">ABOUT OUR SCHOOL</div>
    </div>
  `;

  return container;
}

