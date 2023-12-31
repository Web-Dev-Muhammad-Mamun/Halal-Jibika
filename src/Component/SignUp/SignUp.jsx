import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./SignUp.css";
//start ///////////////////////////
const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const navigate = useNavigate();
  const handleback = () => {
    navigate(-1);
  };
  const handlehome = () => {
    navigate("/");
  };
  return (
    <div className='sign-up-container'>
      <div className='uppercase text-orange-300 shadow-xl p-1 m-2'>
        {/* <h1>Name : {currUser?.displayName}</h1> */}
      </div>
      <div className='sign-up'>
        <div className=' sign-up-inner'>
          <div className='heading'>
            <h1>CREATE AN ACCOUNT</h1>
          </div>
          <div className='inputs'>
            <form onSubmit={handleSubmit} className='sign-up-form'>
              <div className='form-inner'>
                <label>
                  <input
                    className='all-input'
                    type='text'
                    placeholder='Your Name'
                    name='name'
                  />
                </label>
                <br></br>
                <label>
                  <input
                    className='all-input'
                    type='email'
                    placeholder='Your Mail'
                    name='email'
                  />
                </label>
                <br></br>
                <label>
                  <input
                    className='all-input'
                    type='text'
                    placeholder='Your Password'
                    name='password'
                  />
                </label>
                <br></br>
                <label>
                  <input
                    className='all-input'
                    type='text'
                    placeholder='Confirm Your Password'
                    name='confirmPassword'
                  />
                </label>
              </div>
              <button className='register-btn'>register</button>
            </form>
          </div>
          <div className='have-account'>
            <small>
              already have an account? <Link to='/signin '>sign in</Link>
            </small>
          </div>
          <div className='all-handle-btn'>
            <button className='handle-btn' onClick={handleback}>
              Go back
            </button>
            <button className=' handle-btn back-home-btn' onClick={handlehome}>
              Go Home
            </button>
          </div>
          <div className='or-login'>
            <h1>or</h1>
            <h2 className=''>login with</h2>
          </div>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
