import { Link, NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import "./NavBar.css";
import { useState } from "react";
//
const NavBar = () => {
  const [openBurger, setOpenBurger] = useState(true);
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "underline" : "none",
      color: isActive ? "#f0555b" : "white",
    };
  };
  return (
    <div className='nav-bar-container'>
      <div className='navigation-bar-section'>
        <div className='logo-section'>
          <Link to='/'>
            <img
              className='logo'
              src='/src/assets/Screenshot_2023-12-30_164300-removebg-preview.png'
              alt=''
            />
          </Link>
        </div>

        <div onClick={() => setOpenBurger(!openBurger)} className='toggle-btn'>
          {openBurger ? (
            <i className='closeHam'>
              <IoMdClose />
            </i>
          ) : (
            <i className='openHam'>
              <CiMenuBurger />
            </i>
          )}
        </div>

        <div className={`navBar ${openBurger && "show"}`}>
          <ul>
            <div className='navigation-name'>
              <li>
                <NavLink style={navLinkStyle} to='/'>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink style={navLinkStyle} to='./jobs'>
                  Jobs
                </NavLink>
              </li>

              <li>
                <NavLink style={navLinkStyle} to='./about'>
                  About
                </NavLink>
              </li>

              <li>
                <NavLink style={navLinkStyle} to='./contact'>
                  Contact
                </NavLink>
              </li>

              <li>
                <NavLink style={navLinkStyle} to='./favorite'>
                  Favorite
                </NavLink>
              </li>

              <li>
                <NavLink style={navLinkStyle} to='./signin'>
                  Sign IN
                </NavLink>
              </li>

              <li>
                <NavLink style={navLinkStyle} to='./signup'>
                  Sign Up
                </NavLink>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

// import { FaFacebookF } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { CiTwitter } from "react-icons/ci";
// <div className='social-section'>
// <li className='social'>
//   <a href='https://www.facebook.com/'>
//     <FaFacebookF size={20} />
//     <i></i>
//   </a>
// </li>

// <li className='social'>
//   <a href='https://www.instagram.com/'>
//     <FaInstagram size={20} />
//     <i></i>
//   </a>
// </li>

// <li className='social'>
//   <a href='https://twitter.com/'>
//     <CiTwitter size={22} />
//     <i></i>
//   </a>
// </li>
// </div>
