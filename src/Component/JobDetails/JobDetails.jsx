/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaHeart, FaEdit, FaTrash } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";

const JobDetails = () => {
  const param = useParams().id;
  const [allJobs, setAllJobs] = useState([]);
  const [singleJob, setSingleJob] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("../../../public/db.json");
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
      <div className='card'>
        <div className='image-company'>
          <img src={image} alt='' />
          <p>{company}</p>
        </div>
        <h2>{title}</h2>
        <h3>
          <GiPositionMarker color='#f0555b' />
          {position}
        </h3>
        <p>{description}</p>

        <div className='button-container'>
          <button className='favorite-button'>
            <FaHeart className='icons favorite-icon' />
          </button>
          <button className='apply-button'>Apply Now</button>
          <button className='edit-button'>
            <FaEdit className='icons edit-icon' />
          </button>
          <button className='delete-button'>
            <FaTrash className='icons delete-icon' />
          </button>
        </div>
        <Link to={`/jobs/${id}`}>
          {" "}
          <button className='see_details'>See Details</button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
