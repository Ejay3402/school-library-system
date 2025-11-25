import { NavLink } from 'react-router-dom';
import React from 'react';

import './../styles/nav.scss'
import { MdDashboard } from 'react-icons/md';
import { BiBook } from 'react-icons/bi';
import { SiHoppscotch } from 'react-icons/si';
import { PiStudent } from 'react-icons/pi';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-grid">
        
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}
        >
          <MdDashboard className='dash-i' /> Dashboard
        </NavLink>

        <NavLink 
          to="/books" 
          className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}
        >
          <BiBook className='dash-i' /> Books
        </NavLink>

        <NavLink 
          to="/student" 
          className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}
        >
          <PiStudent className='dash-i' /> Student
        </NavLink>

        <NavLink 
          to="/reservation" 
          className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}
        >
          <SiHoppscotch className='dash-i' /> Reservation
        </NavLink>

      </div>
    </div>
  );
};

export default Navbar;



/* 



import { NavLink } from 'react-router-dom';
import React from 'react';

import './../styles/nav.scss'
import { MdDashboard } from 'react-icons/md';
import { BiBook } from 'react-icons/bi';
import { SiHoppscotch } from 'react-icons/si';
import { PiStudent } from 'react-icons/pi';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-grid">
        
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}
        >
          <MdDashboard className='dash-i' /> Dashboard
        </NavLink>

        <NavLink 
          to="/books" 
          className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}
        >
          <BiBook className='dash-i' /> Books
        </NavLink>

        <NavLink 
          to="/student" 
          className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}
        >
          <PiStudent className='dash-i' /> Student
        </NavLink>

        <NavLink 
          to="/reservation" 
          className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}
        >
          <SiHoppscotch className='dash-i' /> Reservation
        </NavLink>

      </div>
    </div>
  );
};

export default Navbar;





*/
