import { useState } from "react";
import AddBook from "../components/addBook";
import BookList from "../components/bookList";
import Layout from "../components/layout";
import StudentDashBoard from "./studentDashboard";

const Dashboard = ({ role, userMail }) => {
  const [showAddBook, setShowAddBook] = useState(false);

  const handleShowAddBook = () => {
    setShowAddBook(false);
  };



  const storedRole = localStorage.getItem("role");
  if (storedRole) {
    console.log("Retrieved role:", storedRole);

  } else {
    console.log("Role not found in local storage");
  }

  return (
    <Layout>
      {storedRole === "Student" ? (
        <div>
          <StudentDashBoard userMail={userMail} />
        </div>
      ) : (
        <div className="card mt-3">
          <h1 className="card-header">List of Books : </h1>
          <div className="card-body">
            {!showAddBook && (
              <div class="d-grid gap-2 mt-5">
                <button
                  class="editbtn"
                  type="button"
                  onClick={() => {
                    setShowAddBook(true);
                  }}
                >
                  Add Book
                </button>
              </div>
            )}

            {showAddBook && (
              <div>
                <AddBook handleShowAddBook={handleShowAddBook} />
              </div>
            )}

            <div>
              <BookList />
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Dashboard;
