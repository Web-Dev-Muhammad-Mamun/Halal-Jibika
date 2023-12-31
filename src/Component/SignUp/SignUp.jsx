import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./SignUp.css";
import NavigateBtn from "../../NavigateBtn/NavigateBtn";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
import { auth } from "../../firebase.init";

//start ///////////////////////////
const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please fill the form",
      });
      return;
    }

    if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must be at least 8 characters, one uppercase letter, one lowercase letter, and one number",
      });
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
      return;
    }

    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        console.log(user);
      }
    );
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
              already have an account ? <Link to='/signin '>sign in</Link>
            </small>
          </div>
          <NavigateBtn />
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
