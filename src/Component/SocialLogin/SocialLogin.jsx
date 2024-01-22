import { FcGoogle } from "react-icons/fc";
import { FaGithubSquare } from "react-icons/fa";

import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { auth } from "./../../firebase.init";

const SocialLogin = () => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const navigate = useNavigate();
  const handleGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res.user);
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
          footer: "Try Again",
        });
      });
  };

  const handleGIthub = () => {
    signInWithPopup(auth, githubProvider)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Welcome",
          text: "successfully login ",
        });
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
          footer: "Try Again",
        });
      });
  };
  return (
    <div>
      <div className='social-login-container'>
        <button
          onClick={() => {
            handleGoogle();
          }}>
          <FcGoogle size={40} />
        </button>
        <button onClick={handleGIthub}>
          <FaGithubSquare size={40} />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
