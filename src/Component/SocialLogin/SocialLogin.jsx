import { FcGoogle } from "react-icons/fc";
import { FaGithubSquare } from "react-icons/fa";
// import auth from "./../../Firebase/Firebase.config";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  //   const googleProvider = new GoogleAuthProvider();
  //   const navigate = useNavigate();
  //   const handleGoogle = () => {
  //     signInWithPopup(auth, googleProvider)
  //       .then((res) => {
  //         console.log(res.user);
  //         navigate("/");
  //       })
  //       .catch((err) => {
  //         Swal.fire({
  //           icon: "error",
  //           title: "Oops...",
  //           text: err.message,
  //           footer: "Try Again",
  //         });
  //       });
  //   };
  return (
    <div>
      <div className='social-login-container'>
        <button
          onClick={() => {
            // handleGoogle();
          }}>
          <FcGoogle size={40} />
        </button>
        <button>
          <FaGithubSquare size={40} />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
