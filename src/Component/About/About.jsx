import { IoIosArrowForward } from "react-icons/io";
import "./About.css";
import profile from "../images/my photo 2.png";
const About = () => {
  return (
    <div className='containers'>
      <div className='about-section'>
        <div className='about-section-image'>
          <img src={profile} alt='' />
        </div>
        <div className='about-section-text'>
          <h1>
            failure is the condiment that <br></br> gives <span>success</span>
          </h1>
          <h4>
            Spend more time focusing on the important aspects of your business.
            <br></br> Turn to McCartney HR LLC in Brooklyn, NY for HR solutions.
            As an<br></br> advanced virtual HR company, we are offering online
            HR systems that<br></br> can be customized depending on your
            business needs.
          </h4>
          <button>
            DOWNLOAD CV{" "}
            <i>
              <IoIosArrowForward />
            </i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
