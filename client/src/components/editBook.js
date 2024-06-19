import React, { Fragment } from "react";
import { useState } from "react";
import { editBook } from "../api/librarian";

const EditBook = ({ book }) => {
  const [bookVal, setBookVal] = useState(book);


  const onChange = (e) => {
    console.log(e);
    setBookVal({ ...bookVal, [e.target.name]: e.target.value });
  };

  const updateBook = async (e) => {
    e.preventDefault();

    try {
      await editBook(bookVal);

    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        class="editbtn"
        data-toggle="modal"
        data-target={`#id${book.isbn}`}
      >
        Edit
      </button>

      <div class="modal" id={`id${book.isbn}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Book Isbn:{bookVal.isbn}</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={bookVal.title}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="author">Author</label>
                <input
                  type="text"
                  className="form-control"
                  id="author"
                  name="author"
                  value={bookVal.author}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  value={bookVal.description}
                  onChange={(e) => onChange(e)}
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="pageCount">Page Count</label>
                <input
                  type="number"
                  className="form-control"
                  id="pageCount"
                  name="page_count"
                  value={bookVal.page_count}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="editbtn"
                onClick={ (e) => updateBook(e)}
                data-dismiss="modal"
              >
                Update
              </button>

              <button type="button" class="deletebtn" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditBook;
