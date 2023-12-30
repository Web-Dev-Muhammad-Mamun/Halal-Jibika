import "./Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer-section'>
      <ul>
        <div className='left-footer'>
          <Link to= "./about"><li>About Us</li></Link>
          <Link to = "./privacy"><li>Privacy Policy</li></Link>
          <li>Terms Of Use</li>
        </div>
        <div className='right-side'></div>
        <li>
          © 2019 Key. All Right Reserved | Design By <span>Mohammad Mamun</span>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Footer;
