import React from "react";
import books from "../utils/books";
import students from "../utils/students";
import "./../styles/reservation.scss";

const Reservation = () => {
  return (
    <div className="reservation-page">
      <h1 className="reservation-title">Book Reservations</h1>

      {/* Desktop header */}
      <div className="reservation-table-header">
        <span>Student</span>
        <span>Book</span>
        <span>Due Date</span>
        <span>Status</span>
      </div>

      <div className="reservation-list">
        {books.map((book, index) => {
          const student = students[index % students.length];

          return (
            <div key={book.id} className="reservation-row">

              {/* Student */}
              <div className="reservation-col reservation-student">
                <h4 className="reservation-student-name">{student.name}</h4>
              </div>

              {/* Book */}
              <div className="reservation-col reservation-book">
                <p className="reservation-book-title">{book.title}</p>
              </div>

              {/* Due Date */}
              <div className="reservation-col reservation-date">
                <p className="reservation-due-date">{book.dueDate || "2025-01-20"}</p>
              </div>

              {/* Status */}
              <div className="reservation-col reservation-status">
                <span
                  className={`reservation-status-badge ${
                    book.dueStatus === "Active" ? "reservation-active" : "reservation-overdue"
                  }`}
                >
                  {book.dueStatus}
                </span>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reservation;