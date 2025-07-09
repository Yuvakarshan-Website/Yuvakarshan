
export default function Home() {
  const container = document.createElement('div');
  container.className = 'home';

  container.innerHTML = `
    <div class="homeBg"></div>
    <canvas id="canvas3d"></canvas>
    <div class="home-banner">
      <div class="welcome">24TH & 25TH JULY</div>
      <div class="title">YUVAKARSHAN</div>
      <div class="subtitle">2K25</div>
      <div class="tagline">Rise Like a Phoenix, Reign Like a God</div>
    </div>
    
    <div class="scroll-prompt">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div class="YuvaHistContainer">
      <div class="YuvaHist Title">
        From the Yuvakarshan Directors' Desk
      </div>
      <p class="YuvaHist">
         Derived from the Sanskrit term Yuvakarshan, meaning “the magnetic pull of the youth”, this fest serves as a tribute to youthful energy, intellectual curiosity, artistic expression, and an indomitable spirit. Yuvakarshan 2K25 distinguishes itself not merely by its scale or enthusiasm, but by the profound significance of its theme: Indian Mythology.
      </p>
      <p class="YuvaHist">
      In 2025, the fest explores the enduring wisdom, courage, and mystique embedded in ancient Indian mythology. This thematic focus is not intended as a nostalgic reflection on the past, but as a meaningful engagement with narratives that continue to influence cultural identity and ethical values. The epics and legends that once shaped civilizations and inspired generations are revisited, revealing their relevance in a contemporary context and their capacity to inspire thought, purpose, and creativity.
      </p>
      <p class="YuvaHist">
        Yuvakarshan is conceived as a multidimensional celebration of human potential. To ensure a comprehensive platform for diverse forms of talent and expression, the fest is structured into six distinct and purposefully curated segments:
        <br><br> 
          <span style='color:#ffd700'> &ensp;  ✧	Kartikeya’s Combat </span> <span style='color:rgba(255, 255, 255, 0.59); font-style: italic'> (Sports) </span> <br>
          <span style='color:rgb(102, 222, 255)'> &ensp;  ✧	Chanakya’s Council </span> <span style='color:rgba(255, 255, 255, 0.59); font-style: italic'> (Business) </span> <br>
          <span style='color:rgb(222, 108, 42)'> &ensp;  ✧	Kalpana </span>  <span style='color:rgba(255, 255, 255, 0.59); font-style: italic'> (Creativity) </span> <br>
          <span style='color:rgb(255, 74, 74)'> &ensp;  ✧	Shastra Byte </span> <span style='color:rgba(255, 255, 255, 0.59); font-style: italic'> (E-Sports) </span> <br>
          <span style='color:rgb(170, 110, 255)'> &ensp;  ✧	Karigari Hub </span> <span style='color:rgba(255, 255, 255, 0.59); font-style: italic'> (Skill-Based) </span> <br>
          <span style='color:rgb(63, 227, 23)'> &ensp;  ✧	Vikram's Vision </span > <span style='color:rgba(255, 255, 255, 0.59); font-style: italic'> (Innovation) </span> <br><br>
        Each segment draws inspiration from mythological archetypes, yet is designed to resonate with the aspirations and intellectual pursuits of the present generation.
      </p>
    </div>
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
          <a href="/lotteryResults" data-link>LOTTERY RESULTS</a>
        </div>
        <div class="grid-item right" style="grid-row: 3; grid-column: 2;">
          <a href="https://instagram.com/yuvakarshan2k25/">Socials</a>
        </div>
      </div>
      <img class="HomeNavFrame" loading="eager" src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files@main/HomeNavFrame.webp"></img>
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
        <div class="footerText">
        <p>&copy; ${new Date().getFullYear()} YUVAKARSHAN DPSN. All rights reserved.</p>
        <div class="sign">Made by Riddhiman Ghosh and Aviral Kochgaway</div>
        </div>

        
        <a href="mailto:yuvakarshan@dpsn.org.in" aria-label="Email" class="footer-icon email">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l8 5 8-5v10H4z"/>
          </svg>
        </a>
      </div>

    </div>
  `;

  return container;
}

 