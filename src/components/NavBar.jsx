import React from "react";
import { NavLink } from 'react-router-dom'
import { useAuthContext } from "../context/AuthProvider";
import { NavBarStyled } from '../styles/StyledComponents';
import { logout } from '../utils/eventService.js';


const NavBar = () => {
    const {isLoggedId, isAdmin, setUser} = useAuthContext();
    const handleLogout = async (e) => {
        await logout();
        setUser(null);
    };
    return (
        <NavBarStyled>
            <p>FG</p>
            <ul>
                {isLoggedId ? 
                <li><NavLink activeClassName="active" to="/Login">Login</NavLink></li> 
                : <li><NavLink activeClassName="active" to="/Home" onClick={handleLogout}>Logout</NavLink></li>}
                
                <li><NavLink activeClassName="active" to="/Contact">Kontakt</NavLink></li>
                <li><NavLink activeClassName="active" to="/Articles">Fagartikler</NavLink></li>
                <li><NavLink activeClassName="active" to="/Offices">Kontorer</NavLink></li>
                <li><NavLink activeClassName="active" to="/Home">Hjem</NavLink></li>
            </ul>
        </NavBarStyled>
    )
}

export default NavBar;