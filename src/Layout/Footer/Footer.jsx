import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="column">
        <h4>About Us</h4>
        <p>Your job search starts here. We connect talented individuals with great opportunities.</p>
      </div>
      <div className="column">
        <h4>Job Categories</h4>
        <ul>
          <li>Technology</li>
          <li>Healthcare</li>
          <li>Finance</li>
          <li>Marketing</li>
        </ul>
      </div>
      <div className="column">
        <h4>Contact Us</h4>
        <p>Email: info@jobfinder.com</p>
        <p>Phone: +1 (555) 123-4567</p>
      </div>
      <div className="column">
        <h4>Follow Us</h4>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
