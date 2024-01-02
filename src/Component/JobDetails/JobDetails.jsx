/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaHeart, FaEdit } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import "./JobDetails.css";
const JobDetails = () => {
  const param = useParams().id;
  const [allJobs, setAllJobs] = useState([]);
  const [singleJob, setSingleJob] = useState({});
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

  useEffect(() => {
    allJobs.filter((job) => {
      if (job.id == +param) {
        setSingleJob(job);
      }
    });
  }, [allJobs, param]);

  const { id, image, title, company, position, description } = singleJob;

  return (
    <div>
      <div className='details-card'>
        <div className='details-image-company'>
          <img src={image} alt='' />
          <p>{company}</p>
        </div>
        <h2>{title}</h2>
        <h3>
          <GiPositionMarker color='#f0555b' />
          {position}
        </h3>
        <p>{description}</p>

        <div className='details-button-container'>
          <button className='details-favorite-button'>
            <FaHeart className='details-icons favorite-icon' />
          </button>
          <button className='details-apply-button'>Apply Now</button>
          <Link to={`/jobsDetails/${id}`}>
            <button className='details-edit-button'>
              <FaEdit className='details-icons edit-icon' />
            </button>
          </Link>
        </div>
        <Link to={-1}>
          {" "}
          <button className='details-back'>back</button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
