import React from "react";
import { Link, useNavigate } from "react-router-dom"; 
import DisneyLogo from "../../assets/images/logo.svg";
import {
  BsCameraVideo,
  BsFillTvFill,
  BsHouseDoorFill,
  BsPlusLg,
  BsSearch,
  BsStarFill,
} from "react-icons/bs";
import { useAuth } from "../../pages/AuthContext"; // ✅ import AuthContext

function Navbar() {
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated } = useAuth(); // ✅ get auth state

  const NavItem = ({ children, onClick }) => {
    return (
      <div onClick={onClick} className="relative flex cursor-pointer items-center space-x-3 navitem-hover:w-full">
        {children}
        <span className="absolute right-0 bottom-[-5px] left-[-12px] h-[3px] w-0 rounded-sm bg-white transition-all duration-150 ease-linear"></span>
      </div>
    );
  };

  const handleAuthClick = () => {
    if (isAuthenticated) {
      setIsAuthenticated(false);
      navigate("/login");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 w-full overflow-hidden bg-body-bg">
      <div className="container mx-auto flex items-center justify-between px-10 py-3">
        <div className="flex items-center gap-16">
          <Link to="/">
            <img className="w-28" src={DisneyLogo} alt="disney-logo" />
          </Link>
          <div className="hidden gap-10 xl:flex">
            <NavItem onClick={() => navigate("/")}>
              <BsHouseDoorFill className="w-7 h-7" />
              <p>Home</p>
            </NavItem>

            <NavItem onClick={() => navigate("/search")}>
              <BsSearch className="w-6 h-6" />
              <p>Search</p>
            </NavItem>

            <NavItem onClick={() => navigate("/watchlist")}>
              <BsPlusLg className="w-6 h-6" />
              <p>Watchlist</p>
            </NavItem>

            <NavItem onClick={() => navigate("/originals")}>
              <BsStarFill className="w-6 h-6" />
              <p>Originals</p>
            </NavItem>

            <NavItem onClick={() => navigate("/movies")}>
              <BsCameraVideo className="w-6 h-6" />
              <p>Movies</p>
            </NavItem>

            <NavItem onClick={() => navigate("/series")}>
              <BsFillTvFill className="w-6 h-6" />
              <p>Series</p>
            </NavItem>
          </div>
        </div>

        <button
          onClick={handleAuthClick}
          className="transparent rounded border border-white bg-black bg-opacity-60 px-5 py-2 text-lg uppercase tracking-wider
          text-white transition-colors duration-200 ease-linear hover:bg-white hover:text-black"
        >
          {isAuthenticated ? "Logout" : "Login"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
