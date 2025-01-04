import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../Utils/customHooks/useOnlineStatus";
import { removeToken } from "../Utils/Auth";

const Header = () => {
  const [loginhandle, setLoginHandle] = useState("Logout");
  const navigate = useNavigate();
  const handleLogin = () => {
    if (loginhandle === "Logout") {
      setLoginHandle("Logout");
      removeToken();
      navigate("/login");
    } else {
      setLoginHandle("Login");
    }
  };
  const onlineStatus = useOnlineStatus();

  return (
    <div className=" flex bg-amber-100 h-20 justify-between items-center shadow-lg fixed top-0 left-0 w-full z-10">
      <div className="">
        <img
          className="w-20"
          src="https://dynamic.brandcrowd.com/preview/logodraft/428e27a5-6d1c-4886-8936-124d41ab87e7/image/large.png"
        />
      </div>
      <div className="flex ">
        <ul className="flex">
          <li className="px-2 ">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 ">
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/chat">ChatRoom</Link>
          </li>
          <li className="px-2 ">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-2 ">
            Online Status:{console.log("on" + onlineStatus)}
            {onlineStatus ? "🟢" : "🔴"}
          </li>
        </ul>
        <div className="login-con">
          <button
            className="w-20 bg-cyan-200 px-2 py-1 rounded-lg mx-2"
            onClick={handleLogin}
          >
            {loginhandle}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
