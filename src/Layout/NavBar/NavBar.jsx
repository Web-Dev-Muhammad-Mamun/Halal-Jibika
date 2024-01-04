import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.init";
import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const logOut = () => {
    signOut(auth).then((res) => {
      navigate("/");
      console.log(res);
    });
  };

  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    };
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest(".nav-bar-container")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

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

        <div className='toggle-btn' onClick={toggleNav}>
          ☰
        </div>

        <div className={`navBar ${isOpen ? "open" : ""}`}>
          <ul>
            <div className='navigation-name'>
              <li>
                <NavLink style={navLinkStyle} to='/'>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink style={navLinkStyle} to='./appliedjob'>
                  Applied Job
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

              <div className='right-side-sec'>
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
                      <NavLink> {auth.currentUser?.displayName}</NavLink>
                    ) : (
                      <NavLink>
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
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
