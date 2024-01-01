import { Link, NavLink, useNavigate } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import "./NavBar.css";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.init";
//
const NavBar = () => {
  const navigate = useNavigate();
  const logOut = () => {
    signOut(auth).then((res) => {
      navigate("/");
      console.log(res);
    });
  };
  const [openBurger, setOpenBurger] = useState(false);
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
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
                {auth.currentUser ? (
                  <NavLink
                    className='sign-btn'
                    style={navLinkStyle}
                    onClick={logOut}>
                    Sign Out
                  </NavLink>
                ) : (
                  <NavLink
                    className='sign-btn'
                    style={navLinkStyle}
                    to='./signin'>
                    Sign IN
                  </NavLink>
                )}
              </li>

              <div className='user-info'>
                <li>
                  {auth.currentUser ? (
                    <NavLink>
                      {" "}
                      <span>User Name: </span>
                      {auth.currentUser?.displayName}
                    </NavLink>
                  ) : (
                    <NavLink>
                      <span>User Name :</span>
                      <strong>No User</strong>
                    </NavLink>
                  )}
                </li>
                {auth.currentUser?.photoURL ? (
                  <img src={auth.currentUser?.photoURL} alt='profilePic' />
                ) : (
                  <img
                    src='/src/assets/512x512bb-removebg-preview.png'
                    alt=''
                  />
                )}
              </div>
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
// import { auth } from './../../firebase.init';
{
  /* <div className='social-section'>
  //{" "}
  <li className='social'>
    //{" "}
    <a href='https://www.facebook.com/'>
      // <FaFacebookF size={20} />
      // <i></i>
      //{" "}
    </a>
    //{" "}
  </li>
  //{" "}
  <li className='social'>
    //{" "}
    <a href='https://www.instagram.com/'>
      // <FaInstagram size={20} />
      // <i></i>
      //{" "}
    </a>
    //{" "}
  </li>
  //{" "}
  <li className='social'>
    //{" "}
    <a href='https://twitter.com/'>
      // <CiTwitter size={22} />
      // <i></i>
      //{" "}
    </a>
    //{" "}
  </li>
  //{" "} */
}
{
  /* </div>; */
}
