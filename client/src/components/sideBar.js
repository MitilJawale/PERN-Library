import React, { useState } from "react";
import "./sideBar.css";


const Sidebar = (props) => {
  const [category, setCategory] = useState({
    horror: false,
    biography: false,
    fiction: false,
    thriller: false,
    motivational: false,
    romance: false,
  });

  


  const applyHandler = (e) => {
    e.preventDefault();
    props.setSelectedCategories(props.selectedCategories);
    
  };


  const clearAllHandler = (e) => {
    e.preventDefault();
    props.setSelectedCategories(category);
    props.setSelectedAuthors(props.clearSelectedAuthors());
  };

  return (
    <div>
      <div className="toggle-button" onClick={props.toggleSideBar}>
        ☰
      </div>

      {props.isSideBarOpen && (
        <div className="sidebar">
          <div className="close-icon" onClick={props.closeHandler}>
            &#10006;
          </div>
          <div className="head-sidebar"> Book Hive</div>
          <hr color="white" />

          <div className="filter-container">
            <form onSubmit={(e) => applyHandler(e)}>
              <label style={{ fontSize: "20px", fontFamily: "monospace" ,color:"#272c18"}}>
                Category :
              </label>
              <div className="category-container">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="horror"
                    id="horror"
                    onChange={(e) =>
                      props.setSelectedCategories({
                        ...props.selectedCategories,
                        [e.target.id]: e.target.checked,
                      })
                    }
                    checked={props.selectedCategories.horror}
                  />
                  <label class="form-check-label" for="horror">
                    Horror
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="biography"
                    id="biography"
                    onChange={(e) =>
                      props.setSelectedCategories({
                        ...props.selectedCategories,
                        [e.target.id]: e.target.checked,
                      })
                    }
                    checked={props.selectedCategories.biography}
                  />
                  <label class="form-check-label" for="biography">
                    Biography
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="fiction"
                    id="fiction"
                    onChange={(e) =>
                      props.setSelectedCategories({
                        ...props.selectedCategories,
                        [e.target.id]: e.target.checked,
                      })
                    }
                    checked={props.selectedCategories.fiction}
                  />
                  <label class="form-check-label" for="fiction">
                    Fiction
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="thriller"
                    id="thriller"
                    onChange={(e) =>
                      props.setSelectedCategories({
                        ...props.selectedCategories,
                        [e.target.id]: e.target.checked,
                      })
                    }
                    checked={props.selectedCategories.thriller}
                  />
                  <label class="form-check-label" for="thriller">
                    Thriller
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="motivational"
                    id="motivational"
                    onChange={(e) =>
                      props.setSelectedCategories({
                        ...props.selectedCategories,
                        [e.target.id]: e.target.checked,
                      })
                    }
                    checked={props.selectedCategories.motivational}
                  />
                  <label class="form-check-label" for="motivational">
                    Motivational
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="romance"
                    id="romance"
                    onChange={(e) =>
                      props.setSelectedCategories({
                        ...props.selectedCategories,
                        [e.target.id]: e.target.checked,
                      })
                    }
                    checked={props.selectedCategories.romance}
                  />
                  <label class="form-check-label" for="romance">
                    Romance
                  </label>
                </div>
                <br />
              </div>

              <label style={{ fontSize: "20px", fontFamily: "monospace" ,color:"#272c18"}}>
                Authors :
              </label>
              <div className="category-container">
                {props.authorsData.map((author, index) => (
                  <div className="form-check" key={index}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      
                      id={author.author}
                      onChange={(e) => props.setSelectedAuthors({
                        ...props.selectedAuthors,
                        [e.target.id]: e.target.checked,
                      })}
                      checked={props.selectedAuthors[author.author]}
                    />
                    <label className="form-check-label" htmlFor={author.author}>
                      {author.author}
                    </label>
                  </div>
                ))}
              </div>
              <br/>
              
              <div style={{display: "grid"}}>
              <button className="clearBtn" onClick={(e) => clearAllHandler(e)}>
                Clear All
              </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
