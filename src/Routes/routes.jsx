import { createBrowserRouter } from "react-router-dom";
import About from "../Component/About/About";
import Contact from "../Component/Contact/Contact";

import App from "../App";
import Home from "../Component/Home/Home";
import Jobs from "../Component/Blog/Jobs";
import Favorite from "../Component/Favorite/Favorite";
import Signin from "../Component/login/Signin";
import SignUp from "../Component/SignUp/SignUp";
import JobDetails from "../Component/JobDetails/JobDetails";
import UpdateData from "../Component/UpdateData/UpdateData";
import axios from "axios";
// import axios from "axios";
// import { axios } from 'axios';
const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    id: "root",
    loader: () => {
      return axios.get("http://localhost:9000/jobs/");
    },
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/jobs/:id",
        element: <JobDetails />,
      },
      {
        path: "/jobsDetails/:editJobs",
        element: <UpdateData />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/favorite",
        element: <Favorite />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default Routes;
