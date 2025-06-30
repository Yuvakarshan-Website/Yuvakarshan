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
                  <button class="accordion-button">AppUrva & Vaigyaanik Vistaar - Themes announced! <span style='color: rgba(182, 182, 182, 0.68); font-size: 1.2rem;'> on 30th June </span></button>
                  <div class="accordion-content">
                    <p>The themes of the two events - AppUrva and Vaigyaanik Vistaar, have been announced. Schools are requested to check the respective event pages for details.</p>
                  </div>
                </div>
            </div>

            <div class="notice">
                <div class="accordion">
                  <button class="accordion-button">Lottery Results Out! <span style='color: rgba(182, 182, 182, 0.68); font-size: 1.2rem;'> on 1st July </span></button>
                  <div class="accordion-content">
                    <p>Lottery results are out for the events - Nazakat, Nritya Katha and Indra's Influence. Check it out - <a href='/lotteryResults' class='notice-board-link' data-link>here.</a></p>
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

 
