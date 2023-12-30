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
      <div className=''>
        <div className=' sign-up-inner'>
          <div className='heading'>
            <h1>CREATE AN ACCOUNT</h1>
          </div>
          <div className='inputs'>
            <form onSubmit={handleSubmit} className=''>
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
              <button className='register-btn'>
                register
              </button>
            </form>
          </div>
          <small className="have-account"> 
            already have an account? <Link to='/login'>log in</Link>
          </small>
          <div className='mt-5 flex gap-3'>
            <button
              className='w-24 bg-slate-300 rounded-xl hover:bg-slate-400 ease-in-out duration-300'
              onClick={handleback}>
              Go back
            </button>
            <button
              className='w-24 bg-slate-300 rounded-xl hover:bg-slate-400 ease-in-out duration-300'
              onClick={handlehome}>
              Go Home
            </button>
          </div>
          <div className=' text-black-300 text-center'>
            <h1>or</h1>
            <h2 className=' uppercase text-2xl'>login with</h2>
          </div>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
