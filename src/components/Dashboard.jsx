import React, { useState } from 'react'
import books from '../utils/books'
import './../styles/dash.scss';
import SearchBox from './SearchBox'
import Books from './Books'

const Dashboard = () => {

  const [searchResults , SetSearchResults] = useState([]);

  const  handleSeaech = (query) => {

    if (!query.trim()) {
      SetSearchResults([]);
      return;
    }

    const results  = books.filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
    );
    SetSearchResults(results);
  }

  return (
    <div className='dash'>
      <h1>Dashboard</h1>
      <h2>Welcome to School Library Information System</h2>

        <SearchBox onseacrh={handleSeaech}/>

        
           
        

        {/* DESKTOP HEADER */}
        <div className="table-header">
          <span>Title</span>
          <span>Author</span>
          <span className="status-head">Status</span>
        </div>    

         {searchResults.length > 0 ? (
            <div className="books-list">
        {searchResults.map((book) => (
          <div key={book.id} className="book-row">

            {/* LEFT: TITLE */}
            <h4 className="book-title">{book.title}</h4>

            {/* MIDDLE: AUTHOR */}
            <p className="book-author">{book.author}</p>

            {/* RIGHT: STATUS */}
            <span
              className={`status ${
                book.status === "Available" ? "available" : "borrowed"
              }`}
            >
              {book.status}
            </span>

          </div>
        ))}
      </div>
            ) : (
              <p className='pp'>No search yet</p>
            )}  

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
