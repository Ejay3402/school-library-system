import React from 'react'
import books from './../utils/books'

const Reservation = () => {
  return (
      <div className="books-page">

        <h1 className="page-title">Books Library</h1>
        <p className="page-sub">Browse through all available books in the library.</p>

        <div className="results-grid">
          {books.map((book) => (
            <div key={book.id} className="book-card">
              <h4>{book.title}</h4>
              <p>Author: {book.author}</p>
              <span className={`status ${
                book.status === "Available" ? "available" : "borrowed"
              }`}>
                {book.dueStatus}
              </span>
            </div>
          ))}
        </div>

      </div>
  )
}

export default Reservation
