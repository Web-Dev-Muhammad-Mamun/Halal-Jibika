import "./Signin.css";
import NavigateBtn from "../../NavigateBtn/NavigateBtn";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.init";
import Swal from "sweetalert2";
const Login = () => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((UserCredential) => {
        console.log(UserCredential.user.displayName);
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: error,
          text: "Something went wrong",
        });
      });
  };

  return (
    <div className='sign-in-container'>
      <div className='login-container'>
        {<h1></h1>}
        {<h1></h1>}
        <h2 className='login-title'>Sign In</h2>
        <form className='login-form' onSubmit={handleLogin}>
          <div className='form-group'>
            <input type='email' name='email' placeholder='Enter your email' />
          </div>
          <div className='form-group'>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Enter your password'
            />
          </div>
          <div className='form-group'>
            <button className='login-btn' type='submit'>
              Login
            </button>
          </div>
        </form>
        <div className='no-account'>
          <small>
            don't have an account ? <Link to='/signup '>sign up</Link>
          </small>
          <div className='back-btns'>
            <NavigateBtn />
          </div>{" "}
          <div className='or-sign-in'>
            <h1>or</h1>
            <h2 className=''>login with</h2>
          </div>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;

// /* eslint-disable no-unused-vars */
// import "./Signin.css";
// import { FaFacebook } from "react-icons/fa";
// import { FaGoogle } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import {
//   GoogleAuthProvider,
//   GithubAuthProvider,
//   FacebookAuthProvider,
//   TwitterAuthProvider,
//   signInWithPopup,
//   getAuth,
//   createUserWithEmailAndPassword,
// } from "firebase/auth";
// import { app, db } from "../../firebase.init";
// import { useState } from "react";
// import { collection, addDoc } from "firebase/firestore";
// const auth = getAuth(app);
// //creating database reference to add data in database
// const googleProvider = new GoogleAuthProvider();
// const githubProvider = new GithubAuthProvider();
// const FacebookProvider = new FacebookAuthProvider();
// const twitterProvider = new TwitterAuthProvider();
// const Signin = () => {
//   const [user, setUser] = useState({}); //this is for google, facebook , github, twitter
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [country, setCountry] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");

//   const dbref = collection(db, "userData");
//   console.log(dbref);
// 0
//   const register = async (e) => {
//     if (
//       name.length === 0 &&
//       email.length === 0 &&
//       country.length === 0 &&
//       phone.length === 0 &&
//       password.length === 0
//     ) {
//       alert("please fill all form");
//     } else {
//       e.preventDefault();
//       try {
//         const addUser = await createUserWithEmailAndPassword(
//           auth,
//           email,
//           password
//         );
//         if (addUser) {
//           // alert("user Register Successful");
//           //adding user data to datebase
//           const addData = await addDoc(dbref, {
//             Name: name,
//             Email: email,
//             Country: country,
//             Phone: phone,
//           });
//           //we are not storing password because of the user privacy
//           if (addData) {
//             alert("User Registration Successfully");
//           } else {
//             alert("error occured while register");
//           }
//         }
//       } catch (error) {
//         alert(error);
//         console.log(error);
//       }
//     }
//   };
//   //google handler
//   const handleGoogle = () => {
//     signInWithPopup(auth, googleProvider)
//       .then((result) => {
//         const user = result.user;
//         setUser(user);
//         console.log(user);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   //github handler
//   const handleGithub = () => {
//     signInWithPopup(auth, githubProvider)
//       .then((result) => {
//         const user = result.user;
//         setUser(user);
//         console.log(user);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   const handleFacebook = () => {
//     signInWithPopup(auth, FacebookProvider)
//       .then((result) => {
//         const user = result.user;
//         console.log(user);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   const handleTwitter = async () => {
//     try {
//       const result = await signInWithPopup(auth, twitterProvider);
//       const user = result.user;
//       {
//         user.providerData.map((data) => setUser(data));
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   return (
//     <div>
//       <div className='login-container'>
//         <div className='row'>
//           <h2>Login with Social Media or Manually</h2>
//           <div className='login-form'>
//             <form>
//               <input
//                 type='email'
//                 name='email'
//                 placeholder='your mail'
//                 onChange={(e) => setEmail(e.target.value)}
//                 value={email}
//               />
//               <input
//                 type='password'
//                 name='password'
//                 placeholder='Password'
//                 onChange={(e) => setPassword(e.target.value)}
//                 value={password}
//               />
//               <button onClick={register}>Register</button>
//             </form>
//           </div>
//         </div>
//         <div className='col'>
//           <button onClick={handleGoogle} className='google btn'>
//             <i>
//               <FaGoogle />
//             </i>
//           </button>
//           <button onClick={handleFacebook} className='fb btn'>
//             <i>
//               <FaFacebook />
//             </i>
//           </button>
//           <button onClick={handleGithub} className='github btn'>
//             <i>
//               <FaGithub />
//             </i>
//           </button>
//           <button onClick={handleTwitter} className='twitter btn'>
//             <i>
//               <FaTwitter />
//             </i>
//           </button>
//         </div>
//         <div className='bottom-container'>
//           <a href='#' className='btn'>
//             Sign up
//           </a>
//         </div>
//         <div className='col'>
//           <a href='#' className='btn'>
//             Forgot password?
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signin;
