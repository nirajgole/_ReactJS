import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            REACT-CRUD-APP
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <NavLink className='nav-link' exact to='/'>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' exact to='/about'>
                  About
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' exact to='/contact'>
                  Contact
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' exact to='/grid-view'>
                  Card View
                </NavLink>
              </li>
            </ul>
          </div>

          <Link className='btn btn-outline-light' to='/users/add'>
            Add User
          </Link>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
