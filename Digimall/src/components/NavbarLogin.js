import React from 'react';
import { Link } from 'react-router-dom'
 const NavbarLogin = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo" style={{"color" : "black"}}>DigiMall</Link>
                    
                    <ul className="right">
                        {/* <li><Link to="/dashboard" className="brand-logo">Shopping</Link></li> */}
                        {/* <li><Link to="/dashboard" style={{"color" : "black"}}>Shop</Link></li>
                        <li><Link to="/cart" style={{"color" : "black"}}   >My cart</Link></li>
                        <li><Link to="/cart" style={{"color" : "black"}}><i className="material-icons">shopping_cart</i></Link></li> */}
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default NavbarLogin;