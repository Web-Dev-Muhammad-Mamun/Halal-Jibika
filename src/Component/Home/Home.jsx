import Jobs from "../Blog/Jobs";
import "./Home.css";
import { Link } from "react-router-dom";
import hero from '../../assets/heroimagepng.png'
const Home = () => {
  return (
    <div className='container'>
      <div className='hero-section'>
        <div
          className='hero-text
        '>
          <h1>
            <span>Million </span>of Jobs is<br></br>Waiting for you
          </h1>
          <h4>
            30,0000 people trust us and they find the work of their <br></br>{" "}
            choice on our platform and they are very happy with us.
          </h4>
          <button className='explore-btn'>
            <Link to={"./signup"}>Explore Now</Link>
          </button>
        </div>

        <div className='hero-image'>
          <img src={hero} alt='' />
        </div>
      </div>
      <fieldset className='latest-job'>
        <legend>Latest Job</legend>
      </fieldset>

      <Jobs />
    </div>
  );
};

export default Home;
