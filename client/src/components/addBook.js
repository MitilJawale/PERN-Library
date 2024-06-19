import { useState } from "react";
import { onAddBook } from "../api/librarian";

const AddBook = ({ handleShowAddBook }) => {
  const [bookVal, setBookVal] = useState({
    isbn: "",
    title: "",
    author: "",
    description: "",
    publisher: "",
    publicationDate: "",
    coverImage: "",
    pageCount: "",
    category: "",
  });

  const [error, setError] = useState(false);


  // const handleFileChange = (e) => {
  //   const file = e.target.files[0]; // Assuming only one file is selected
  //   const reader = new FileReader();

  //   reader.onload = (event) => {
  //     const base64String = event.target.result;
  //     setBookVal({ ...bookVal, coverImage: base64String });
  //   };

  //   reader.readAsDataURL(file); // Read the file as a data URL
  // };


  const onChange = (e) => {
    setBookVal({ ...bookVal, [e.target.name]: e.target.value });
  };


  const onAdd = async (e) => {
    e.preventDefault();
    handleShowAddBook();
    console.log(bookVal);

    try {
      await onAddBook(bookVal);
      setError('');
      
    } catch (error) {
      setError(error.response.data.errors[0].msg);
      console.log(error);
    }
  };

  return (
    <div>
    <form onSubmit={(e) => onAdd(e)}>
      <div class="form-group">
        <label className="textcolour mt-1">Title</label>
        <input
          type="text"
          name="title"
          class="form-control"
          value={bookVal.title}
          id="title"
          onChange={(e) => onChange(e)}
          placeholder="Enter book name"
          required
        />
      </div>

      <div class="form-group mt-3">
        <label className="textcolour mt-1">ISBN</label>
        <input
          type="number"
          name="isbn"
          value={bookVal.isbn}
          id="isbn"
          onChange={(e) => onChange(e)}
          class="form-control"
          placeholder="Enter ISBN"
          required
        />
      </div>

      <div class="form-group mt-3">
        <label className="textcolour mt-1">Author</label>
        <input
          type="text"
          name="author"
          value={bookVal.author}
          id="author"
          onChange={(e) => onChange(e)}
          class="form-control"
          placeholder="Enter author's name"
          required
        />
      </div>

      <div class="form-group mt-3">
        <label className="textcolour mt-1">Description</label>
        <textarea
          type="text"
          name="description"
          value={bookVal.description}
          id="description"
          onChange={(e) => onChange(e)}
          class="form-control"
          placeholder="Enter description in 100 words"
          rows="4"
        />
      </div>

      <div class="form-group mt-3">
        <label className="textcolour mt-1">Publisher</label>
        <input
          type="text"
          name="publisher"
          value={bookVal.publisher}
          id="publisher"
          onChange={(e) => onChange(e)}
          class="form-control"
          placeholder="Enter publisher"
        />
      </div>

      <div class="form-group mt-3">
        <label className="textcolour mt-1">Publication date</label>
        <input
          type="date"
          name="publicationDate"
          value={bookVal.publicationDate}
          id="publicationDate"
          onChange={(e) => onChange(e)}
          class="form-control"
          placeholder="Enter publication date"
          required
        />
      </div>

      <div class="form-group mt-3">
        <label className="textcolour mt-1">Set Cover Image</label>
        <input
          type="text"
          name="coverImage"
          value={bookVal.coverImage}
          id="coverImage"
          onChange={(e) => onChange(e)}
          class="form-control"
          placeholder="Paste Cover Image Link"
          
        />
      </div>

      <div class="form-group mt-3">
        <label className="textcolour mt-1">Page count</label>
        <input
          type="number"
          name="pageCount"
          value={bookVal.pageCount}
          id="pageCount"
          onChange={(e) => onChange(e)}
          class="form-control"
          placeholder="Enter number of pages"
          required
        />
      </div>

      <div className="flex mt-3">
        <div className="row">
          <div className="col-md-auto">
            <label className="textcolour mt-1">Category </label>
          </div>

          <div className="col-md-auto">
            <div className="dropdown">
              <select
                name="category"
                className="btn btn-secondary dropdown-toggle"
                value={bookVal.category}
                onChange={(e) => onChange(e)}
              >
                <option value="">Select</option>
                <option value="fiction">Fiction</option>
                <option value="horror">Horror</option>
                <option value="romance">Romance</option>
                <option value="biography">Biography</option>
                <option value="thriller">Thriller</option>
                <option value="motivational">Motivational</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div
        className=" mt-4"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <button
          type="button"
          class="deletebtn"
          style={{ margin: "10px" }}
          onClick={handleShowAddBook}
        >
          Cancel
        </button>

        <button
          type="submit"
          class="editbtn"
          style={{ margin: "10px" }}
        >
          Add
        </button>
      </div>
    </form>


    <div style={{ color: "red", margin: "10px 0" }}>{error}</div>
    </div>
  );
};

export default AddBook;
