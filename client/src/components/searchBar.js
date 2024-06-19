import { FaSearch } from "react-icons/fa";
import { useState } from "react";


const SearchBar = (props) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredBooks = props.books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const onSearchHandler = (e) => {
    e.preventDefault();
    console.log(searchQuery);
    console.log(filteredBooks);
    props.setFilteredBooks(filteredBooks);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "100%" }}>
        <input
          type="text"
          placeholder="  Search here"
          value={searchQuery}
          onChange={(e) => handleSearchInputChange(e)}
          style={{
            width: "80%",
            backgroundColor: "#c8baaf",
            borderTopLeftRadius: "7px",
            borderEndStartRadius: "7px",
            borderStyle: "hidden",
            height: "30px",
          }}
        ></input>
        <button
          style={{
            backgroundColor: "#c8baaf",
            borderTopRightRadius: "7px",
            borderEndEndRadius: "7px",
            borderStyle: "hidden",
            height: "30px",
          }}
          onClick={(e) => onSearchHandler(e)}
        >
          <FaSearch />
        </button>
      </div>

      <div>
        <div className="col-md-auto">
          <div className="dropdown">
            <select
              name="bookSort"
              className="dropdown-toggle"
              style={{
                backgroundColor: "#8c7a6c",
                padding: "6px",
                color: "white",
                borderRadius: "5px",
              }}
              onChange={(e) => props.setSort(e.target.value)}
            >
              <option value="">Book sort</option>
              <option value="ratings">⭐️By Ratings</option>
              <option value="title"> 📚By Title</option>
              <option value="pageCount"> 📄By Page count</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
