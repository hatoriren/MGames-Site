import React from "react";
import '../style/style.css';
import sekiro from '../img/sekiro__coming.jpg';





const Coming = () => {
    return(
        <section class="coming" id="coming">
      <h2 class="heading">Coming Soon</h2>
      <div class="coming-container">
          <div class="image-box">
              <a href="" class="coming-trailer">
                  <img src={sekiro} alt="Sekiro" />
              </a>
          </div>
          <div class="trailer-box">
              <h3>Sekiro: Shadows Die Twice</h3>
              <button>Watch Now</button>
          </div>
      </div>
  </section>
    );
};

export default Coming;