import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/customHooks/useOnlineStatus";

const Header = () => {
  const [loginhandle, setLoginHandle] = useState("Login");

  const handleLogin = () => {
    setLoginHandle(loginhandle === "Login" ? "Logout" : "Login");
  };
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/png-vector/20211023/ourmid/pngtree-salon-logo-png-image_4004444.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Contact</Link>
          </li>
          <li>
            Online Status:{console.log("on" + onlineStatus)}
            {onlineStatus ? "🟢" : "🔴"}
          </li>
        </ul>
      </div>

      <div className="login-con">
        <button className="login-btn" onClick={handleLogin}>
          {loginhandle}
        </button>
      </div>
    </div>
  );
};
export default Header;
