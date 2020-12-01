import React from "react";
import { NavLink } from 'react-router-dom'
import { NavBarStyled } from '../styles/StyledComponents';


const NavBar = () => {
    return (
        <NavBarStyled>
            <p>FG</p>
            <ul>
                <li><NavLink activeClassName="active" to="/Login">Login</NavLink></li>
                <li><NavLink activeClassName="active" to="/Contact">Kontakt</NavLink></li>
                <li><NavLink activeClassName="active" to="/Articles">Fagartikler</NavLink></li>
                <li><NavLink activeClassName="active" to="/Offices">Kontorer</NavLink></li>
                <li><NavLink activeClassName="active" to="/Home">Hjem</NavLink></li>
            </ul>
        </NavBarStyled>
    )
}

export default NavBar;