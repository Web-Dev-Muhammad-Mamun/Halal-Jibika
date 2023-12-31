import "./Footer.css";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='column'>
        <h3>Company</h3>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Privacy Policy</p>
      </div>
      <div className='column'>
        <h3>Job Seekers</h3>
        <p>Search Jobs</p>
        <p>Create Resume</p>
        <p>Job Alerts</p>
      </div>
      <div className='column'>
        <h3>Employers</h3>
        <p>Post a Job</p>
        <p>Browse Resumes</p>
        <p>Employer Dashboard</p>
      </div>
      <div className='column'>
        <h3>Connect with Us</h3>
        <div className='socialLinks'>
          <a href='#' className='socialIcon' title='LinkedIn'>
            <FaLinkedin />
          </a>
          <a href='#' className='socialIcon' title='Twitter'>
            <FaTwitter />
          </a>
          <a href='#' className='socialIcon' title='GitHub'>
            <FaGithub />
          </a>
          <a href='#' className='socialIcon' title='Email'>
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
