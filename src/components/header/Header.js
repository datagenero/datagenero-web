import React from 'react';
import "./header.scss";
import { NavLink } from "react-router-dom";
import {Link} from 'react-scroll'

const Header = () => {
    return (
      <header className="header">
        
        <NavLink className="link-button" exact to="/"><button className="logo"></button></NavLink>

        <nav className="navbar">
          <NavLink className="link proyecto" to="/mision">
            Proyecto
          </NavLink>
          <NavLink className="link who-we-are" exact to="/quienes-somos">
            Quiénes somos
          </NavLink>
          <a className="link blog" href="http://datagenero.medium.com">Blog</a> 
          <Link className="link contact" to="footer" spy={true} smooth={true}>Contacto</Link>
         </nav>
      </header>
    

    )
}

export default Header;