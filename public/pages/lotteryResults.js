export default function LotteryResults() {
  const container = document.createElement('div');
  container.className = 'lottery-page';

  container.innerHTML = `
    <div class="homeBg"></div>
      <section class="noticeBoardContainer">
        <div class="YuvaHist Title additional lottery-header">LOTTERY RESULTS</div>
        
        <div class="notice-container result">
            <div class="lottery">
                <h1 class='heading'> NAZAKAT </h1>

                <table class="table">
                  <tbody>
                    <tr><td>St. Xaviers Collegiate School</td><td>Mesopotamian</td></tr>
                    <tr><td>National English School, Baguiati</td><td>Native American</td></tr>
                    <tr><td>St. Francis Xavier's</td><td>Japanese</td></tr>
                    <tr><td>St. Augustine Day School Barrackpore</td><td>Russian</td></tr>
                    <tr><td>Delhi Public School Megacity</td><td>Aztec</td></tr>
                    <tr><td>Delhi Public School Newtown</td><td>Greek</td></tr>
                    <tr><td>Methodist School Dankuni</td><td>Korean</td></tr>
                    <tr><td>St. Augustine Day School, Shyamnagar</td><td>Norse</td></tr>
                    <tr><td>Mangalam Vidya Niketan</td><td>Celtic</td></tr>
                    <tr><td>The Bhawanipur Gujrati Education Society</td><td>Egyptian</td></tr>
                    <tr><td>Narayana School Newtown</td><td>Mayan</td></tr>
                    <tr><td>Salt Lake School</td><td>Chinese</td></tr>
                    <tr><td>North Point</td><td>Persian</td></tr>
                  </tbody>
                </table>
            </div>
        </div>

         <div class="notice-container result">
            <div class="lottery">
                <h1 class='heading'> NRITYA KATHA </h1>

                <table class="table">
                  <tbody>
                    <tr><td>St. Xaviers Collegiate School</td><td>Mesopotamian</td></tr>
                    <tr><td>National English School, Baguiati</td><td>Native American</td></tr>
                    <tr><td>St. Francis Xavier's</td><td>Japanese</td></tr>
                    <tr><td>St. Augustine Day School Barrackpore</td><td>Russian</td></tr>
                    <tr><td>Delhi Public School Megacity</td><td>Aztec</td></tr>
                    <tr><td>Delhi Public School Newtown</td><td>Greek</td></tr>
                    <tr><td>Methodist School Dankuni</td><td>Korean</td></tr>
                    <tr><td>St. Augustine Day School, Shyamnagar</td><td>Norse</td></tr>
                    <tr><td>Mangalam Vidya Niketan</td><td>Celtic</td></tr>
                    <tr><td>The Bhawanipur Gujrati Education Society</td><td>Egyptian</td></tr>
                    <tr><td>Narayana School Newtown</td><td>Mayan</td></tr>
                    <tr><td>Salt Lake School</td><td>Chinese</td></tr>
                    <tr><td>North Point</td><td>Persian</td></tr>
                  </tbody>
                </table>
            </div>
        </div>


        <div class="notice-container result">
            <div class="lottery">
                <h1 class='heading'> INDRA'S INFLUENCE </h1>

                <table class="table">
                  <thead>
                    <tr>
                      <th>School</th>
                      <th>Industry</th>
                      <th>Associated Cities</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>St. Francis Xavier</td>
                      <td>Chemical &amp; Fertilizers</td>
                      <td>Vadodara &amp; Mahabaleshwar</td>
                    </tr>
                    <tr>
                      <td>Delhi Public School Newtown</td>
                      <td>Information Technology &amp; ITES</td>
                      <td>Bhubaneswar &amp; Patna</td>
                    </tr>
                    <tr>
                      <td>National English School, Baguiati</td>
                      <td>Handicraft</td>
                      <td>Jaipur &amp; Hassan</td>
                    </tr>
                    <tr>
                      <td>Salt Lake School</td>
                      <td>Pharmaceutical &amp; Biotech</td>
                      <td>Pune &amp; Chhindwara</td>
                    </tr>
                    <tr>
                      <td>Delhi Public School Rubypark</td>
                      <td>Real Estate</td>
                      <td>Ayodhya &amp; Darbanga</td>
                    </tr>
                    <tr>
                      <td>St. Xavier's Collegiate School</td>
                      <td>Education</td>
                      <td>Kota &amp; Muzaffarpur</td>
                    </tr>
                    <tr>
                      <td>Delhi Public School Megacity</td>
                      <td>Renewable Energy</td>
                      <td>Tirunelveli &amp; Kohima</td>
                    </tr>
                  </tbody>
                </table>
            </div>
        </div>
    </section>
  `;

  return container;
}
