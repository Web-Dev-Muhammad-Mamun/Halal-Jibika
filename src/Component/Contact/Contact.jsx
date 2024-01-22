import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import "./Contact.css";
const Contact = () => {
  return (
    <div className='contact-container'>
<img src="/src/assets/download-removebg-preview.png" alt="" />
      <h2>Contact Us</h2>
      <div className='contact-info'>
        <div className='single-address'>
          <strong>
            {" "}
            <FaLocationDot /> Address:
          </strong>
          <p>Badda, Dhaka</p>
        </div>
        <div className='single-address'>
          <strong>
            {" "}
            <FaPhoneAlt /> Phone:
          </strong>{" "}
          <p>01 123 456 789</p>
        </div>
        <div className='single-address'>
          <strong>
            {" "}
            <MdEmail /> Email:
          </strong>{" "}
          <p>HalalJibika@gmail.com</p>
        </div>
        <div className='single-address'>
          <strong>
            <TbWorld /> Website:
          </strong>
          <p>https://halal-jibika.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
