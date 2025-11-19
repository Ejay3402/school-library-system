import React from "react";
import books from "../utils/books";
import "../styles/boks.scss";

const Books = () => {
  return (
    <div className="books-page">
      <h1 className="page-title">Book Reservations</h1>

      {/* Desktop header */}
      <div className="table-header">
        <span className="head-title">Title</span>
        <span className="head-author">Author</span>
        <span className="head-status">Status</span>
      </div>

       <div className="books-list">
        {books.map((book) => (
          <div key={book.id} className="book-row">

            {/* LEFT: TITLE */}
            <h4 className="book-title">{book.title}</h4>

            {/* MIDDLE: AUTHOR */}
            <p className="book-author">{book.author}</p>

            {/* RIGHT: STATUS */}
            <span
              className={`status ${
                book.dueStatus === "Active" ? "available" : "borrowed"
              }`}
            >
              {book.dueStatus}
            </span>

          </div>
        ))}
      </div>
     
    </div>
  );
};

export default Books;