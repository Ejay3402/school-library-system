import React, { useState } from 'react'
import books from '../utils/books'
import './../styles/dash.scss'
import SearchBox from './SearchBox'
import Books from './Books'

const Dashboard = () => {

  const [searchResults , SetSearchResults] = useState([]);

  const  handleSeaech = (query) => {

    if (!query.trim()) {
      SetSearchResults([]);
      return;
    }

    const results  = books.filter(book => book.title.toLowerCase().includes(query.toLowerCase()) || book.author.toLowerCase().includes(query.toLowerCase()))
    SetSearchResults(results);
  }

  return (
    <div className='dash'>
      <h1>Dashboard</h1>
      <h2>Welcome to School Library Information System</h2>

        <SearchBox onseacrh={handleSeaech}/>

        <div className="search-box">
            {searchResults.length > 0 ? (
            <div className='results-grid'>
                {searchResults.map((book) => (
                  <div key={book.id} className="book-card">
                    <h4>{book.title}</h4>
                    <p>Author: {book.author}</p>
                    <span className={`status ${
                      book.status === "Available" ? "available" : "borrowed"
                    }`}>
                      {book.status}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p>No search yet</p>
            )}
        </div> 
        

        <h3>Statistics</h3>


        <div className="Statistics-grid">
            
            <div className="Statistics-box"  data-aos="zoom-in">
            <h3><span>152</span></h3>
            <h4>Total Books</h4>
        </div>

        <div className="Statistics-box" data-aos="zoom-in">
            <h3><span>25</span></h3>
            <h4>Total Students</h4>
        </div>

        <div className="Statistics-box" data-aos="zoom-in">
            <h3><span>10+</span></h3>
            <h4>Reservations</h4>
        </div>

        </div>

    </div>
  )
}

export default Dashboard
