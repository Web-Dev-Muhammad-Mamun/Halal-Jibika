import { Link } from "react-router-dom";
import error from "../../assets/404-error-page-not-found-miss-paper-with-white-vector-20577349-removebg-preview.png";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div data-aos='fade-up' data-aos-anchor-placement='bottom-bottom'>
      <div className='notFound-container'>
        <img src={error} alt='' />
      </div>
      <div className='back-to-home-btn'>
        <Link to={"/"}>
          {" "}
          <button>Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
