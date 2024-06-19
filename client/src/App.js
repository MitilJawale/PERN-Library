import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Register from "./pages/register";
import { useSelector } from "react-redux";
import { useState } from "react";



const PrivateRoutes = () => {
  const { isAuth } = useSelector((state) => state.auth);

  return <>{isAuth ? <Outlet /> : <Navigate to="/login" />}</>;
};

const RestrictedRoutes = () => {
  const { isAuth } = useSelector((state) => state.auth); // if isAuth is false, then go to Outlet

  return <>{!isAuth ? <Outlet /> : <Navigate to="/dashboard" />}</>;
};




const App = () => {

  const [role, setRole] = useState('');
  const [userMail, setUserMail] = useState('');

  const handleRoleChange = (newRoleData) => {
    setRole(newRoleData);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard role={role} userMail={userMail}/>} />
        </Route>

        <Route element={<RestrictedRoutes />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login role={role} onRoleChange={handleRoleChange} setUserMail={setUserMail}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
