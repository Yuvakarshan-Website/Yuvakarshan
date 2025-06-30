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
                  <button class="accordion-button">No notices yet! <span style='color: rgba(182, 182, 182, 0.2); font-size: 1.2rem;'> on 1st July </span></button>
                  <div class="accordion-content">
                    <p>Our magical phoenix has nothing to deliver for now!</p>
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

 
