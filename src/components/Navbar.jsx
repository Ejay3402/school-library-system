import { Link} from 'react-router-dom';
import React from 'react'

import './../styles/nav.scss'
import { GrDashboard } from 'react-icons/gr';
import { MdDashboard } from 'react-icons/md';
import { BiBook } from 'react-icons/bi';
import { SiHoppscotch } from 'react-icons/si';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-grid">
            <Link to='/'><button> <MdDashboard className='dash-i'/> Dashboard</button></Link>
            <Link to='/books'><button><BiBook className='dash-i'/> Books</button></Link>
            <Link to='/reservation'><button><SiHoppscotch className='dash-i'/> Reservation</button></Link>
      </div>
    </div>
  )
}

export default Navbar
