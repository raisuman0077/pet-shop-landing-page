import React from "react";
import logo from '../icon/Vector.png';

const Navbar = () => {
    return ( 
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="navbar-brand pl-4" href="true">
          <img className="brand-icon" href="true" src={logo} alt="brand-logo-icon" />
          <a className="brand-logo" href="true"><span className="pre-logo">PET</span>SHOP</a>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="true">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="true">Featured</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="true">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="true">Contact us</a>
            </li>
          </ul>
          <form className="form-inline my-2 mx-3 my-lg-0">
            <button className="signup-btn" href="true">Sign up</button>
            <button className="login-btn mx-2" href="true">Login</button>
          </form>
        </div>
      </nav>
     );
}
 
export default Navbar;