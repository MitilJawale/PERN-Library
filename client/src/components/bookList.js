import { useEffect, useState, Fragment } from "react";
import { getAllBooks, deleteBook, returnBook } from "../api/librarian";
import EditBook from "./editBook";
import "./librarian.css";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [showReturn, setShowReturn] = useState("");

  useEffect(() => {
    fetchData();
  }, [books]);

  const fetchData = async () => {
    try {
      const response = await getAllBooks();
      setBooks(response.data.books);
    } catch (err) {
      console.error(err.message);
    }
  };

  const dueDate = (borrowedAt) => {
    const borrowedDate = new Date(borrowedAt);
    borrowedDate.setDate(borrowedDate.getDate() + 5);
    const year = borrowedDate.getFullYear();
    const month = String(borrowedDate.getMonth() + 1).padStart(2, "0");
    const day = String(borrowedDate.getDate()).padStart(2, "0");
    return `${month}-${day}-${year}`;
  };

  const handleDeleteBook = async (isbn) => {
    try {
      await deleteBook(isbn);
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 2500);
    } catch (err) {
      console.log(err.message);
    }
  };

  const showReturned = async (isbn) => {
    try {
      await returnBook(isbn);
      setShowReturn(true);
      setTimeout(() => {
        setShowReturn(false);
      }, 2500);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Fragment>
      {showMessage && (
        <div className="alert alert-success">Book deleted successfully</div>
      )}

      {showReturn && (
        <div className="alert alert-success">Book has been Returned</div>
      )}

      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Title</th>
            <th>Edit</th>
            <th>Return</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {books.map((i) => (
            <tr key={i.isbn}>
              <td>{i.title}</td>
              <td>
                <EditBook book={i} />
              </td>
              {i.availability ? (
                <td>
                  <button class="librarianAvailablebtn">Available</button>
                </td>
              ) : (
                <td>
                  <button
                    class="returnbtn"
                    onClick={() => showReturned(i.isbn)}
                  >
                    <span style={{ fontSize: "13px" }}>Due by: </span>
                    <span style={{ fontSize: "13px" }}>{dueDate(i.borrowed_at)}</span>

                    
                  </button>
                </td>
              )}
              <td>
                <button
                  class="deletebtn"
                  onClick={() => handleDeleteBook(i.isbn)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default BookList;
