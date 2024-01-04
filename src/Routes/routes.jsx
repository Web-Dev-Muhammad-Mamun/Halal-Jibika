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
        path: "/appliedjob",
        element: <AppliedJob />,
      },

      {
        path: "/jobdetails/:id",
        element: <JobDetails />,
        loader: ({ params }) => {
          return fetch(`http://localhost:9000/jobs/${params.id}`);
        },
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
      {
        path: "/addjobs",
        element: <AddNewJob />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default Routes;
