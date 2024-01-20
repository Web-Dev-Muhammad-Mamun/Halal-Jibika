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
import NotFound from "../Component/NotFound/NotFound";
import AppliedJob from "../Component/AppliedJob/AppliedJob";
import AddNewJob from "./../Component/AddNewJob/AddNewJob";
import PrivateRoutes from "./PrivateRoute";
const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    id: "root",
    loader: () => {
      return axios.get("https://api-server-6ak4.onrender.com/jobs/");
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
        path: "/appliedjob",
        element: (
          <PrivateRoutes>
            <AppliedJob />
          </PrivateRoutes>
        ),
      },

      {
        path: "/jobdetails/:id",
        element: (
          <PrivateRoutes>
            <JobDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) => {
          return fetch(`https://api-server-6ak4.onrender.com/jobs/${params.id}`);
        },
      },
      {
        path: "/jobsDetails/:editJobs",
        element: (
          <PrivateRoutes>
            <UpdateData />
          </PrivateRoutes>
        ),
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
        element: (
          <PrivateRoutes>
            {" "}
            <Favorite />
          </PrivateRoutes>
        ),
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/addjobs",
        element: (
          <PrivateRoutes>
            <AddNewJob />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default Routes;
