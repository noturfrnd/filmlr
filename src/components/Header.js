import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    // menu
    return(
       <header>
           <div className="container">
               <div className="inner-content">
                   <div className="brand">
                       <Link to="/">Filmes</Link>
                   </div>
                   <ul className="nav-links">
                       <li>
                           <Link to="/">Filmes</Link>
                       </li>
                       <li>
                           <Link to="/watched">Assistidos</Link>
                       </li>
                       <li>
                           <Link to="/add">+Adicionar</Link>
                       </li>
                   </ul>
               </div>
           </div>
       </header>
    )
}

export default Header;