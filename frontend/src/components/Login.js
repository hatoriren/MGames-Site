import React from "react";
import '../style/login.css';


const Login = () =>{
    return(
        <>
        <div className="container">
          <span style={{ "--clr": "#eeff00" }}></span>
          <span style={{ "--clr": "#00ffdd" }}></span>
          <span style={{ "--clr": "#e900d5" }}></span>
          <div className="form-container">
            <h2>Login form</h2>
            <div className="input-container">
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-container">
              <input type="password" placeholder="Password" />
            </div>
            <div className="input-container">
              <input type="submit" value="Sign in" />
            </div>
            <div className="links-container">
              <a href="#">Forget Password</a>
              <a href="#">Signup</a>
            </div>
          </div>
        </div>
      </>
    );
};

export default Login;