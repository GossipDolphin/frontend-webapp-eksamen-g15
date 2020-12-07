import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../context/AuthProvider';
import { NavBarStyled } from '../styles/StyledComponents';
import { logout } from '../utils/userService.js';

const NavBar = () => {
  const { isLoggedIn, setUser, isAdmin } = useAuthContext();
  const handleLogout = async () => {
    await logout();
    setUser(null);
  };
  return (
    <NavBarStyled>
      <p>FG</p>
      <ul>
        {!isLoggedIn ? (
          <li>
            <NavLink activeClassName="active" to="/Login">
              Login
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink activeClassName="active" to="/Home" onClick={handleLogout}>
              Logout
            </NavLink>
          </li>
        )}

        <li>
          <NavLink activeClassName="active" to="/Contact">
            Kontakt
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/Articles">
            Fagartikler
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/Offices">
            Kontorer
          </NavLink>
        </li>
        {isAdmin && (
          <li>
            <NavLink activeClassName="active" to="/Admin">
              Admin
            </NavLink>
          </li>
        )}
        <li>
          <NavLink activeClassName="active" to="/Home">
            Hjem
          </NavLink>
        </li>
      </ul>
    </NavBarStyled>
  );
};

export default NavBar;
