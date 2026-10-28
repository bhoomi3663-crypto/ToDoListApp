import "./Navbar.css";
import { BsFillCloudSunFill } from "react-icons/bs";
import { MdOutlineDone } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Button from "../Button/Button";
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ConfirmModel from "../../CommonComponent/ConfirmationModel/ConfirmModel";
import ModeContext from "../Context/Context";

function Navbar() {
  const { mode, toggleTheme } = useContext(ModeContext);
  console.log(mode);
  // const [theme, setTheme] = useState(true);
  const [showModel, setShowModel] = useState(false);
  const navigate = useNavigate();
  // const logOutBtn = (e) => {
  //   e.preventDefault();
  //   navigate("/confirmModel");
  // };

  // const handleTheme = () => {
  //   setTheme(!theme);
  // };

  const handleClose = () => {
    setShowModel(false);
  };

  const confirmLogOutBtn = (e) => {
    e.preventDefault();
    localStorage.removeItem("LoginUser");
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar-layer">
        <div className="todo-logo">
          <h1>TODO</h1>
          <MdOutlineDone className="logo-icon" />
        </div>
        <div className="nav-links">
          {/* <div>Home</div>
          <div>About</div>
          <div>All Todos</div> */}
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "link-active" : "link-name"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "link-active" : "link-name"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/alltodo"
            className={({ isActive }) =>
              isActive ? "link-active" : "link-name"
            }
          >
            All Todos
          </NavLink>

          <NavLink
            to="/useCallback"
            className={({ isActive }) =>
              isActive ? "link-active" : "link-name"
            }
          >
            useCallback
          </NavLink>
        </div>
        <div className="nav-logout">
          <div className="cloud-icon" onClick={toggleTheme}>
            {mode === "dark" ? (
              <span>
                <BsFillMoonStarsFill size={20} />
              </span>
            ) : (
              <span>
                <BsFillCloudSunFill size={20} />
              </span>
            )}
          </div>
          <Button
            className="logout-btn"
            label="Logout"
            onClick={() => setShowModel(true)}
          />
        </div>
      </nav>
      {showModel && (
        <ConfirmModel
          title="Are Want To Logout ?"
          onClose={handleClose}
          onSuccess={confirmLogOutBtn}
          name={"Logout"}
        />
      )}
    </>
  );
}
export default Navbar;
