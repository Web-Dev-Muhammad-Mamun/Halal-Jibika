// AboutPage.js
import "./About.css";

const AboutPage = () => {
  return (
    <div className='about-container'>
      <img src='https://shomoyeralo.com/2023/07/17/salo_1689533992.jpg' alt='Halal Jibika' className='about-image' />
      <div className='about-content'>
        <h2>About Halal Jibika</h2>
        <p>
          <span>Welcome </span>to Halal Jibika, your trusted source for halal financial
          solutions. We are committed to providing ethical and Sharia-compliant
          financial services to meet your unique needs.
        </p>
        <p>
          Our mission is to empower individuals and businesses with financial
          tools that align with Islamic principles. Explore our range of
          services and discover the halal way to manage your finances.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
