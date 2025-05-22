export default function Home() {
  const container = document.createElement('div');
  container.className = 'home';

  container.innerHTML = `
    <div class="home-banner">
      <div class="welcome">WELCOME TO</div>
      <div class="title">YUVAKARSHAN</div>
      <div class="subtitle">2K25</div>
      <div class="tagline">TAGILNE</div>
    </div>
    <img class="Yuva" src="/assets/images/Yuva.png"></img>
    <div class="YuvaHistContainer">
      <div class="YuvaHist">
        Excitement mounts and fills the air as we eagerly await the vibrant beats of live performances, the kaleidoscope of colours and the fiesta of innovations that are ushered in by ‘Yuvakarshan’- Delhi Public School Newtown’s very own fest. As we count down the days, the hallways, classrooms and auditorium of DPS Newtown will be a repository of unforgettable memories, unparalleled experiences and newfound connections. 
      </div>
      <div class="YuvaHist">  
        ‘Yuvakarshan’, in consonance with its name, rightfully encapsulates the unassailable spirit of the youth fuelled by enthusiasm, curiosity and an unquenchable thirst for change. Yuvakarshan aims to harness the various talents of the youth, provide them with a platform to showcase their fiery determination and their adeptness in different domains. It not only challenges their involvement and exploitation of the world of creativity to its fullest, immersing oneself in cultural abundance and exploring their talents in the field of sports but also the level of artistry they can employ to effectively steer through practical situations in life. 
      </div>
      <div class="YuvaHist">
        Each event of Yuvakarshan embeds within itself a certain skill that an individual requires to imbibe in order to be successful in the long run. By seamlessly amalgamating solidarity, mutual support and positive competitiveness, Yuvakarshan will not only boost your confidence but also enhance your interpersonal skills and prepare you for the world at large and help you stride towards achieving higher goals. 
      </div>
      <div class="YuvaHist">
        We welcome you to the celebration of the infectious energy that inspires innovation, activism and relentless pursuit of dreams, at Yuvakarshan 2K25 on the 23rd and 24th of July, 2025.
      </div>
    </div>
    <div class="YuvaVid"> YUVA EVENT INTRO VIDEO </div>
  `;

  return container;
}

