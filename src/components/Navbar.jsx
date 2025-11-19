import { Link} from 'react-router-dom';
import React from 'react'

import './../styles/nav.scss'
import { GrDashboard } from 'react-icons/gr';
import { MdDashboard } from 'react-icons/md';
import { BiBook } from 'react-icons/bi';
import { SiHoppscotch } from 'react-icons/si';
import { PiStudent } from 'react-icons/pi';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-grid">
            <Link to='/'><button className='btn1'> <MdDashboard className='dash-i'/> Dashboard</button></Link>
            <Link to='/books'><button className='btn2'><BiBook className='dash-i'/> Books</button></Link>
            <Link to='/student'><button className='btn2'><PiStudent className='dash-i'/> Student</button></Link>
            <Link to='/reservation'><button className='btn3'><SiHoppscotch className='dash-i'/> Reservation</button></Link>
      </div>
    </div>
  )
}

export default Navbar
