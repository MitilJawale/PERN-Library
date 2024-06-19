import { useSelector } from "react-redux";
import { NavLink} from "react-router-dom";
import {useDispatch} from 'react-redux';
import { unauthenticateUser } from '../redux/slices/authSlice';

const Navbar = () => {
  const {isAuth} = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onLogout = () => {
    // localStorage.setItem('isAuth', 'false'); // Updatee local storage
    localStorage.removeItem("userMail");
    localStorage.removeItem("userId");
    dispatch(unauthenticateUser()); // Update Redux state
  };

  return (
    <nav className="navbar" style={{backgroundColor: "#806151"}} >
      <div className="container" >
        <div>
          <NavLink to="/">
            <span className="navbar-brand mb-0 h1" style={{fontFamily: "", fontWeight: "bold", fontSize: "25px", color: "white"}}>Book Hive</span>
          </NavLink>
        </div>

        {isAuth ? (
          <div classname="Logoutbtn">
            <NavLink to="/login" className="mx-3" style={{color:"white"}}>
              <span onClick={onLogout}>Logout</span>
            </NavLink>
          </div>
        ) : (
          <div >
            <NavLink to="/login">
              <span style={{color:"white"}}>Login</span>
            </NavLink>

            <NavLink to="/register" className="mx-3">
              <span style={{color:"white"}}>Register</span>
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};


export default Navbar;