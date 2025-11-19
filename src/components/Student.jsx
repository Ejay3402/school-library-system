import React from 'react'
import student from '../utils/students';

const Student = () => {
  return (
     <div className="books-page">
      <h1 className="page-title">Student Directory</h1>

      {/* DESKTOP HEADER */}
      <div className="table-header">
        <span>Student</span>
        <span>Email</span>
        <span className="status-head">Books</span>
      </div>

      <div className="books-list">
        {student.map(({name,booksNums,email }) => (
          <div key={Math.random()} className="book-row">

            {/* LEFT: TITLE */}
            <h4 className="book-title">{name}</h4>

            {/* MIDDLE: AUTHOR */}
            <p className="book-author">{email}</p>

            {/* RIGHT: STATUS */}
            <span>
              {booksNums}
            </span>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Student
