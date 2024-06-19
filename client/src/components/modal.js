import React from "react";

const Modal = ({ onClose, children }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>Close</button>
        {children}
      </div>
    </div>

    // <div class="modal" id={`id${book.isbn}`}>
    //   <div class="modal-dialog">
    //     <div class="modal-content">
    //       <div class="modal-header">
    //         <h4 class="modal-title">Book Isbn:{book.isbn}</h4>
    //         <button type="button" class="close" data-dismiss="modal">
    //           &times;
    //         </button>
    //       </div>

    //       <div className="modal-body">
    //         <div className="form-group">
    //           <label htmlFor="title">Title</label>
    //           <input
    //             type="text"
    //             className="form-control"
    //             id="title"
    //             name="title"
    //             value={book.title}
    //           />
    //         </div>
    //         <div className="form-group">
    //           <label htmlFor="author">Author</label>
    //           <input
    //             type="text"
    //             className="form-control"
    //             id="author"
    //             name="author"
    //             value={book.author}
    //           />
    //         </div>
    //         <div className="form-group">
    //           <label htmlFor="description">Description</label>
    //           <textarea
    //             className="form-control"
    //             id="description"
    //             name="description"
    //             value={book.description}
    //           ></textarea>
    //         </div>

    //         <div className="form-group">
    //           <label htmlFor="pageCount">Page Count</label>
    //           <input
    //             type="number"
    //             className="form-control"
    //             id="pageCount"
    //             name="page_count"
    //             value={book.page_count}
    //           />
    //         </div>
    //       </div>

    //       <div class="modal-footer">
    //         <button type="button" class="deletebtn" onClick={onClose}>
    //           Close
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Modal;
