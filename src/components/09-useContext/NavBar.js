import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export const NavBar = () => {

    // the NavBar component was designed to have a user-friendly display, the NavLink component
    // is exported from the react-router-dom and it comes with a ternary operation in its className,
    // which will highlight the link component where the user is located, if the user is not located in the
    // respective component then the text on the NavBar text will appear slightly faded
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  
          <Link className="navbar-brand" to="/">UseContext</Link>
          
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className={`nav-link ${ (navData) => navData.isActive && 'active' }`}  to="/">Home Screen</NavLink>
              <NavLink className={`nav-link ${ (navData) => navData.isActive && 'active' }`}  to="/login">Login Screen</NavLink>
              <NavLink className={`nav-link ${ (navData) => navData.isActive && 'active' }`}  to="/logout">Logout Screen</NavLink>
            </div>
          </div>

      </nav>
    )
}
