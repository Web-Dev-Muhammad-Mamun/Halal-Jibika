import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Contact.css";
const Contact = () => {
  return (
    <div className='contact-container'>
      <h2>Contact Us</h2>
      <div className='contact-info'>
        <div className='single-address'>
          <strong>
            {" "}
            <FaLocationDot /> Address:</strong>
          
          <p>Main Street, Cityville, Country</p>
        </div>
        <div className='single-address'>
          <strong>
            <FaPhoneAlt /> Phone:
          </strong>{" "}
          
          <p>+1 (123) 456-7890</p>
        </div>
        <div className='single-address'>
          <strong>
            <MdEmail /> Email:
          </strong>{" "}
          
          <p>info@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
