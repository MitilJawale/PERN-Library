import React from "react";
import "./bookCard.css";
import StarRating from "./starRating";
import { FaBookOpen } from "react-icons/fa";
import { CgUnavailable } from "react-icons/cg";

const BookCard = ({ props, showIssued}) => {

  const dueDate = (borrowedAt) => {
    const borrowedDate = new Date(borrowedAt);
    borrowedDate.setDate(borrowedDate.getDate() + 5);
    const year = borrowedDate.getFullYear();
    const month = String(borrowedDate.getMonth() + 1).padStart(2, "0");
    const day = String(borrowedDate.getDate()).padStart(2, "0");
  
    return `${month}-${day}-${year}`;
  };
  

  return (
    <div className="card" style={{ backgroundColor: "#D1B7A1" }}>
      <img
        alt="Book"
        className="book-image"
        src={props.cover_image}
        style={{ backgroundColor: "#D1B7A1", padding: "5px" }}
        data-toggle="modal"
        data-target={`#id${props.isbn}`}
      />
      <div className="card-body" style={{ backgroundColor: "#D1B7A1" }}>
        <div
          className="card-title"
          data-toggle="modal"
          data-target={`#id${props.isbn}`}
        >
          {props.title}
          <StarRating rating={props.ratings} />
        </div>
        <div
          style={{ display: "flex", justifyContent: "space-between" }}
          data-toggle="modal"
          data-target={`#id${props.isbn}`}
        >
          <div
            className="card-description"
          >
            {props.description}
          </div>
        </div>

        <div className="author-category mt-4" data-toggle="modal"
          data-target={`#id${props.isbn}`}>
          <label>
            <b>Author:</b> <i>{props.author}</i>
          </label>

          <label>
            <b>Category:</b> <i>{props.category}</i>
          </label>

          {props.availability ? (
            <button
              className="checkoutbtn"
              onClick={() => showIssued(props.isbn)}
              data-toggle="modal"
          data-target={`#id${props.isbn}`}
            >
              <FaBookOpen />
              &nbsp; Check out
            </button>
          ) : props.borrowed_by === localStorage.getItem("userMail") ? (
            <button className="unavailablebtn" disabled style={{backgroundColor: "#B83501", color: "white"}}>
              {"Due by: "}
              <br />
              {dueDate(props.borrowed_at)}
            </button>
          ) : (
            <button className="unavailablebtn" disabled>
              <CgUnavailable />
              &nbsp; Unavailable
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
