import { Fragment, useState, useEffect } from "react";
import { getAllBooks } from "../api/librarian";
import { getAllAuthors, getAllUserRatings, getUserId, issueBook, rateBook } from "../api/student";
import BookCard from "../components/bookCard";
import SearchBar from "../components/searchBar";
import Sidebar from "../components/sideBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons'; 
import "./studentDashboard.css";
import { useSelector } from "react-redux";


// As we have obtained userMail from Login method, during login it registers email in useState. But when we refresh, the whole
// app is rendered but due to isAuth state we skip login page and userMail is UNDEFINED. Because of which API calls are giving 
// wrong output. Now I have stored in localStorage in key userMail and used it everywhere, because of which REDUX STATE IS V V IMP....
const StudentDashBoard = ({userMail}) => {
  const [books, setBooks] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState({
    horror: false,
    biography: false,
    fiction: false,
    thriller: false,
    motivational: false,
    romance: false,
  });
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [response, setResponse] = useState([]);
  const [sort, setSort] = useState("");
  const [selectedAuthors, setSelectedAuthors] = useState({});
  const [rating, setRating] = useState(0);
  const [userRatings, setUserRatings] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);


  useEffect(() => {
    filterAndSortBooks();
  }, [books, selectedCategories, selectedAuthors, sort]);



  const handleBookClick = async (value,book) => {
    setRating(value);

    try {
      const userIdMetaData = await getUserId(localStorage.getItem("userMail"))
      let dd = await rateBook(userIdMetaData.data.user_id, book.isbn, value);
      console.log(dd);
      fetchData();
    } catch (err) {
      console.error(err.message);
    }
  };


  const closeButtonHandler = (e) => {
    e.preventDefault();
    setIsSideBarOpen(!isSideBarOpen);
  };


  const toggleSideBar = async () => {
    setIsSideBarOpen(!isSideBarOpen);
    try {
      const responseData = await getAllAuthors();
      console.log(responseData.authors);
      setResponse(responseData.data.users);
    } catch (err) {
      console.error(err.message);
    }
  };

  

  const fetchData = async () => {
    try {
      const res = await getAllBooks();
      setBooks(res.data.books);
      const initialAuthors = mapAuthorsToObject(response);
      setSelectedAuthors(initialAuthors);
      const userIdMetaData = await getUserId(localStorage.getItem("userMail"));

      const userId = userIdMetaData.data.user_id;
      const ur = await getAllUserRatings(userId); // get ratings for the specific user
      console.log(ur.data.user_ratings);
      setUserRatings(ur.data.user_ratings);

    } catch (err) {
      console.error(err.message);
    }
  };


  const showIssued = async (isbn) => {
    try {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1;
      var yyyy = today.getFullYear();
      today = yyyy + '-' + mm + '-' + dd;

      await issueBook(isbn,localStorage.getItem("userMail"),today);
      setShowMessage(true);
      fetchData();
      setTimeout(() => {
        setShowMessage(false);
      }, 2500);
    } catch (err) {
      console.log(err.message);
    }
  };

  const filterAndSortBooks = () => {
    let filteredBooks = [...books];

    if (Object.values(selectedCategories).some((value) => value)) {
      filteredBooks = books.filter((book) => {
        return Object.keys(selectedCategories).some((category) => {
          return selectedCategories[category] && book.category === category;
        });
      });
    }

    if (Object.values(selectedAuthors).some((value) => value)) {
      filteredBooks = filteredBooks.filter((book) => {
        return Object.keys(selectedAuthors).some((author) => {
          return selectedAuthors[author] && book.author === author;
        });
      });
    }

    switch (sort) {
      case "ratings":
        filteredBooks.sort((a, b) => b.ratings - a.ratings);
        break;
      case "title":
        filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "pageCount":
        filteredBooks.sort((a, b) => a.page_count - b.page_count);
        break;
      default:
        break;
    }

    setFilteredBooks(filteredBooks);
  };

  

  const mapAuthorsToObject = (response) => {
    const initialObject = {};
    Object.keys(response).forEach((key) => {
      initialObject[response[key].author] = false;
    });

    return initialObject;
  };

  const convertDate = (d) => { 
    const publicationDate = new Date(d);
    const formattedDate = `${publicationDate.getMonth() + 1}/${publicationDate.getDate()}/${publicationDate.getFullYear()}`;  
    return formattedDate.toString();
  } 




  return (
    <Fragment>
      <div className="studentbg">
        <div
          className={`search-bar-container ${isSideBarOpen ? "shifted" : ""}`}
        >
          <br />
          <SearchBar
            setSort={setSort}
            books={books}
            setFilteredBooks={setFilteredBooks}
          />
        </div>

        {showMessage && (
          <div className="alert alert-success">
            Book checked out successfully
          </div>
        )}

        <Sidebar
          isSideBarOpen={isSideBarOpen}
          toggleSideBar={toggleSideBar}
          closeHandler={closeButtonHandler}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          authorsData={response}
          setSelectedAuthors={setSelectedAuthors}
          selectedAuthors={selectedAuthors}
          clearSelectedAuthors={() => mapAuthorsToObject(response)}
        />
        <div className={`content ${isSideBarOpen ? "shifted" : ""}`}>
          <table className="table mt-5 text-center">
            <tbody>
              {filteredBooks.map((book) => (
                <div>
                  <BookCard
                    key={book.id}
                    props={book}
                    showIssued={showIssued}
                  />
                </div>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal starts here */}
      {filteredBooks.map((book) => (
        <div class="modal" id={`id${book.isbn}`} key={`modal-${book.isbn}`}>
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Book : {book.title}</h4>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div className="modal-body">
                <div className="form-group">
                  <div className="image-collaborator">
                    <img src={book.cover_image} height="200px"></img>
                    <div className="ml-4">
                      <label htmlFor="isbn">ISBN: {book.isbn} </label>
                      <br></br>
                      <label htmlFor="author">Author: {book.author}</label>
                      <br></br>
                      <label htmlFor="ratings">Ratings: {book.ratings} </label>
                      <br></br>
                      <label htmlFor="category">
                        Category: {book.category}{" "}
                      </label>
                      <br></br>
                      <label htmlFor="page_count">
                        Page Count: {book.page_count}
                      </label>
                      <br></br>
                    </div>
                  </div>
                  <br></br>
                  <label htmlFor="description">
                    Description: {book.description}
                  </label>
                  <br></br>
                  <br></br>

                  <label htmlFor="publisher">Publisher: {book.publisher}</label>
                  <br></br>
                  <label htmlFor="publication_date">
                    Publication Date: {convertDate(book.publication_date)}
                  </label>
                </div>
              </div>

              {userRatings.filter((i) => i.book_isbn === book.isbn).length >
              0 ? (
                <div
                  style={{
                    color: "#A18167",
                    backgroundColor: "#efddce",
                    textAlign: "center",
                  }}
                >
                  You have rated it{" "}
                  {
                    userRatings.filter(
                      (rating) => rating.book_isbn === book.isbn
                    )[0]?.ratings
                  }
                </div>
              ) : (
                <div className="book-rating">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <span
                      key={value}
                      className={value <= (0) ? "book active" : "book"}
                      onClick={() => handleBookClick(value, book)}
                    >
                      <FontAwesomeIcon icon={faBook} />
                      {"   "}
                    </span>
                  ))}
                </div>
              )}

              <div class="modal-footer">
                <button type="button" class="deletebtn" data-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default StudentDashBoard;
