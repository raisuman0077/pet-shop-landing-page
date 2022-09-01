import React from "react";
import logo from '../icon/Vector.png';
const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="brand-logo">
                <img className="icon" src={logo} alt="icon" />
            </div>
            <div className="nav-item">
                <div>Home</div>
                
            </div>
            <div className="nav-btn">
                <button>Sign Up</button>
            </div>
        </div>
     );
}
 
export default Navbar;