import React from "react";
import '../style/style.css'; 
import 'boxicons';




const Footer = () => {
    return(
        <footer class="footer" id="footer">
      <div class="footer-middle">
        <div class="footer-legal-links">
          <a href="#">Corporate</a>
          <a href="#">Privacy</a>
          <a href="#">Legal</a>
          <a href="#">Do Not Sell or Share My Personal Information</a>
        </div>
        <div class="footer-social-icons">
          <a href="#"><i class='bx bxl-instagram'></i></a>
          <a href="#"><i class='bx bxl-facebook'></i></a>
          <a href="#"><i class='bx bxl-twitter'></i></a>
          <a href="#"><i class='bx bxl-youtube'></i></a>
          <a href="#"><i class='bx bxl-telegram'></i></a>
        </div>
      </div>
    
      <div class="footer-bottom">
        <div class="footer-company">
          <p>MGames</p>
        </div>
        <div class="footer-locations">
          <span> New York</span>
          <span>London</span>
          <span>Paris</span>
          <span>Bogotá</span>
        </div>
        <div class="footer-year">
          <p>&#169; All Rights Reserved.</p>
        </div>
      </div>
    </footer>
    );
};

export default Footer;