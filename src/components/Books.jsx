import React from "react";
import books from "../utils/books";
import "../styles/boks.scss";

const Books = () => {
  return (
    <div className="books-page">
      <h1 className="page-title">Book Catalog</h1>

      {/* DESKTOP HEADER */}
      <div className="table-header">
        <span>Title</span>
        <span>Author</span>
        <span className="status-head">Status</span>
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
                book.status === "Available" ? "available" : "borrowed"
              }`}
            >
              {book.status}
            </span>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;