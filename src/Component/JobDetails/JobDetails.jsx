/* eslint-disable no-unused-vars */
import "./JobDetails.css";
/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
// import { FaHeart, FaEdit } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";

import Swal from "sweetalert2";
import JobDetail from "./../JobDetail/JobDetail";
const JobDetails = () => {
  const [allJobs, setAllJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9000/jobs");
        setAllJobs(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const { title, logo, companyName, position, description, id } =
    useLoaderData();
  console.log(title);
  return (
    <div>
      {allJobs.map((alljob) => (
        <JobDetail
          key={alljob.id}
          alljob={alljob}
          id={id}
          title={title}
          logo={logo}
          companyName={companyName}
          position={position}
          description={description}
        />
      ))}
    </div>
  );
};

export default JobDetails;
