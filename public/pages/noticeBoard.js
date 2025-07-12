export default function NoticeBoard() {
  const container = document.createElement('div');
  container.className = 'noticeBoard';

  container.innerHTML =`
    <div class="homeBg"></div>
    <section class="noticeBoardContainer">
        <div class="YuvaHist Title additional">NOTICE BOARD</div>
        
        <div class="notice-container">

            <div class="notice">
                <div class="accordion">
                  <button class="accordion-button">🚨 All events on July 17th postponed to July 18th<span style='color: rgba(182, 182, 182, 0.68); font-size: clamp(1rem, 1.2vw, 1.2rem);'> on 12th July </span></button>
                  <div class="accordion-content">
                    <p>Due to clashes with CISCE events, all events scheduled in the buffer section on the <b style="color: #ffd700;">17th of July</b> will now be held on the <b style="color: #ffd700;">18th of July</b></p>
                  </div>
                </div>
            </div>

            <div class="notice">
                <div class="accordion">
                  <button class="accordion-button">Theme for Chitrakatha out! <span style='color: rgba(182, 182, 182, 0.68); font-size: clamp(1rem, 1.2vw, 1.2rem);'> on 12th July </span></button>
                  <div class="accordion-content">
                    <p>The theme for Chitrakatha has been declared. Check it out <a href="/Chitrakatha" data-link style="color: #ffd700;">here</a>.</p>
                  </div>
                </div>
            </div>

            <div class="notice">
                <div class="accordion">
                  <button class="accordion-button">Final Date for Chakra League confirmed!<span style='color: rgba(182, 182, 182, 0.68); font-size: clamp(1rem, 1.2vw, 1.2rem);'> on 12th July </span></button>
                  <div class="accordion-content">
                    <p>To clear all confusion regarding the rescheduling of Chakra League, the final date of the event is <b style="color: #ffd700;">18th July</b></p>
                  </div>
                </div>
            </div>

            <div class="notice">
                <div class="accordion">
                  <button class="accordion-button">Nyaya Yudh Case Files out!<span style='color: rgba(182, 182, 182, 0.68); font-size: clamp(1rem, 1.2vw, 1.2rem);'> on 12th July </span></button>
                  <div class="accordion-content">
                    <p>Please find the case files for Nyaya Yudh, shared on the Whatsapp Group</p>
                  </div>
                </div>
            </div>

            <div class="notice">
                <div class="accordion">
                  <button class="accordion-button">Kubera Kapital resources out!<span style='color: rgba(182, 182, 182, 0.68); font-size: clamp(1rem, 1.2vw, 1.2rem);'> on 12th July </span></button>
                  <div class="accordion-content">
                    <p>Please find the mock retirement plan and case study for Kubera Kapital, shared on the Whatsapp Group</p>
                  </div>
                </div>
            </div>

            <div class="notice">
                <div class="accordion">
                  <button class="accordion-button">Vyapaar Yagna and CyberSiddhanta - details updated! <span style='color: rgba(182, 182, 182, 0.68); font-size: clamp(1rem, 1.2vw, 1.2rem);'> on 10th July </span></button>
                  <div class="accordion-content">
                    <p>Kindly note a few minor changes in the event details of <a href="/VyapaarYagna" data-link style="color: #ffd700;">Vyapaar Yagna</a> and <a href="/CyberSiddhanta" data-link style="color: #ffd700;">CyberSiddhanta</a> by visiting their respective event pages.</a></p>
                  </div>
                </div>
            </div>
        
            <div class="notice">
                <div class="accordion">
                  <button class="accordion-button">IndraShock, Anveshan, Chakravyuh & Sudarshan's Spin - a change in details! <span style='color: rgba(182, 182, 182, 0.68); font-size: clamp(1rem, 1.2vw, 1.2rem);'> on 8th July </span></button>
                  <div class="accordion-content">
                      <p>
                      Kindly note a few minor changes in the event details of 
                      <a href="/Anveshan" data-link style="color: #ffd700;">Anveshan</a>, 
                      <a href="/IndraShock" data-link style="color: #ffd700;">IndraShock</a>, 
                      <a href="/Chakravyuh" data-link style="color: #ffd700;">Chakravyuh</a> and 
                      <a href="/SudarshansSpin" data-link style="color: #ffd700;">Sudarshan's Spin</a> 
                      by visiting their respective event pages.
                    </p>
                  </div>
                </div>
            </div>

            <div class="notice">
                <div class="accordion">
                  <button class="accordion-button">Lottery Results Out! <span style='color: rgba(182, 182, 182, 0.68); font-size: clamp(1rem, 1.2vw, 1.2rem);'> on 1st July </span></button>
                  <div class="accordion-content">
                    <p>Lottery results are out for the events - Nazakat, Nritya Katha and Indra's Influence. Check it out - <a href='/lotteryResults' class='notice-board-link' data-link>here.</a></p>
                  </div>
                </div>
            </div>

            <div class="notice">
                <div class="accordion">
                  <button class="accordion-button">AppUrva & Vaigyaanik Vistaar - Themes announced! <span style='color: rgba(182, 182, 182, 0.68); font-size: clamp(1rem, 1.2vw, 1.2rem)'> on 30th June </span></button>
                  <div class="accordion-content">
                    <p>The themes of the two events - <a href="/AppUrva" data-link style="color: #ffd700;">AppUrva</a> and <a href="/VaigyaanikVistaar" data-link style="color: #ffd700;">Vaigyaanik Vistaar</a>, have been announced. Schools are requested to check the respective event pages for details.</p>
                  </div>
                </div>
            </div>
        </div>
    </section>

  `;

  const accordionButtons = container.querySelectorAll('.accordion-button');

  accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('active');
      const content = button.nextElementSibling;
      if (button.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.padding = "5px 20px";
      } else {
        content.style.maxHeight = null;
        content.style.padding = "5px 20px";
      }
    });
  });

  return container;
}

 
