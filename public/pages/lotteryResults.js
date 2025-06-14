export default function LotteryResults() {
  const container = document.createElement('div');
  container.className = 'lottery-page';

  container.innerHTML = `
    <div class="lotteryBg">
        <div class="lotteryMessage">COMING SOON! </div>
    </div>
  `;

  return container;
}
 