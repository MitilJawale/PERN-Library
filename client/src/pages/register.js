import { useState } from "react";
import Layout from "../components/layout";
import { onRegistration } from '../api/auth';

const Register = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };


  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await onRegistration(values);
      setError('');
      setSuccess(data.data.message);
      setValues({email: '', password: '', confirmPassword: ''});

    } catch (error) {
      // console.log(error.response.data.errors[0].msg);
      setError(error.response.data.errors[0].msg);
      setSuccess('');

    }
  };
  console.log(values);
  return (
    <Layout>
      <form onSubmit={(e) => onSubmit(e)} className="loginDetail mt-3">
        <h1>Register</h1><br/>
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


        <div className="mb-3">
          <label htmlFor="password" className="textcolour">
            Confirm Password
          </label>

          <input
            onChange={(e) => onChange(e)}
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            style={{width:"50%"}}
            value={values.confirmPassword}
            placeholder="password"
            required
          />
        </div>

        <div style={{color: 'red', margin: '10px 0'}}>{error}</div>
        <div style={{color: 'green', margin: '10px 0'}}>{success}</div>


        <button type="submit" className="editbtn">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default Register;
