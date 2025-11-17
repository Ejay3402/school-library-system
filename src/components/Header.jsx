import React from 'react'
import { BiLogOut } from 'react-icons/bi';

import './../styles/header.scss'

const Header = ( {onLogOut}) => {
  return (
    <header>
        <div className="header">
            <h1>School Library</h1>
        </div>

        <div className="user-area">
            <button onClick={onLogOut}>logout <BiLogOut/></button>
        </div>
    </header>
  )
}

export default Header
