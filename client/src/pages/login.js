import { useState, useEffect } from "react";
import Layout from "../components/layout";
import { onLogin } from "../api/auth";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../redux/slices/authSlice";
import Dashboard from "./dashboard";
import { useSelector } from "react-redux";


const Login = ({ role, onRoleChange, setUserMail }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    role: "",
  });

  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  useEffect(() => {
    // Retrieve role from local storage on component mount
    const storedRole = localStorage.getItem("role");
    if (storedRole) {
      setValues((prevValues) => ({
        ...prevValues,
        role: storedRole,
      }));
    }
  }, []);



  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };


  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await onLogin(values);
      dispatch(authenticateUser());
      setError("");
      onRoleChange(values.role);
      setUserMail(values.email);
      localStorage.setItem("userMail", values.email);
      localStorage.setItem("role", values.role);

    } catch (error) {
      setError(error.response.data.errors[0].msg);
      console.log(error);
    }
  };

  return (
    <Layout>
      <div
        className="loginDetail mt-3"
        
      >
        <form onSubmit={(e) => onSubmit(e)} className="p-5">
          <h1>Login</h1>
          <br />
          <div className="mb-3">
            <label htmlFor="email" className="textcolour">
              Email address
            </label>
            <input
              onChange={(e) => onChange(e)}
              type="email"
              className="form-control"
              id="email"
              name="email"
              style={{width:"50%"}}
              value={values.email}
              placeholder="test@gmail.com"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="textcolour">
              Password
            </label>
            <input
              onChange={(e) => onChange(e)}
              type="password"
              className="form-control"
              id="password"
              name="password"
              style={{width:"50%"}}

              value={values.password}
              placeholder="password"
              required
            />
          </div>

          <div className="flex">
            <div className="row">
              <div className="col-md-auto">
                <label className="textcolour mt-1">Select your role : </label>
              </div>
              <div className="col-md-auto">
                <div className="dropdown">
                  <select
                    value={values.role}
                    name="role"
                    onChange={(e) => onChange(e)}
                    className="btn btn-secondary dropdown-toggle"
                  >
                    <option value="">Select</option>
                    <option value="Librarian">Librarian</option>
                    <option value="Student">Student</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div style={{ color: "red", margin: "10px 0" }}>{error}</div>
          <br />
          <button type="submit" className="editbtn">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;


