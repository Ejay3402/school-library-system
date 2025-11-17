import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Books from './Books';
import Reservation from './Reservation';



const BookApp = ( { onLogOut } ) => {
  return (
    <>
        <Router>
            <Header onLogOut={onLogOut}/>
            <Navbar />
            <Routes>
                <Route path='/' element={<Dashboard />}/>
                <Route path='/books' element={<Books />}/>
                <Route path='/reservation' element={<Reservation />}/>
            </Routes>
        </Router>
        
    </>
  )
}

export default BookApp
