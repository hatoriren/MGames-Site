import React from "react";
import '../style/style.css'; 




const Newsletter = () =>{
    return (
        <section className="newsletter" id="newsletter">
          
        <div className="newsletter-container">
          <img src="img/logo.png" alt="" />
          <h2>Subscribe to the MGames Email List</h2>
          <p>Sign up for our email newsletter to get info on game announcements and updates, details on special events and offers, and more from MGames.</p>
          <form>
            <input type="email" className="email" placeholder="Enter Email..." required />
            <input type="submit" value="Subscribe" className="btn" />
          </form>
        </div>
      </section>
    );
};

export default Newsletter;