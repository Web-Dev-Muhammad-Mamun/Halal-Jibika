import "./Home.css";
import { Link } from "react-router-dom";
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
            30,000 people trust us and they find the work of their <br></br>{" "}
            choice on our platform and they are very happy with us.
          </h4>
          <button className='explore-btn'>
            <Link to={"./signup"}>Explore Now</Link>
          </button>
        </div>

        <div className='hero-image'>
          <img
            src='/src/assets/Screenshot_2023-12-30_171752-removebg-preview.png'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default Home;