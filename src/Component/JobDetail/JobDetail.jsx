/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { FaHeart, FaEdit } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";

import Swal from "sweetalert2";

const JobDetail = ({ appliedJobs }) => {
  //
  console.log(appliedJobs);
  const param = useParams().id;
  const [allJobs, setAllJobs] = useState([]);
  const [singleJob, setSingleJob] = useState({});
  const [clicked, setClicked] = useState(false);
  //
  const handleClickApply = () => {
    setClicked(true);
    Swal.fire({
      icon: "success",
      title: "successfully Applied.",
      position: "top-right",
      timer: 5000,
      width: "300px",
    });
  };
  const handleApplied = () => {
    Swal.fire({
      icon: "",
      title: "Already Applied",
      position: "top-right",
      timer: 5000,
      width: "300px",
    });
  };
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
    allJobs.find((job) => {
      if (job.id == +param) {
        setSingleJob(job);
      }
    });
  }, [allJobs, param]);
  const { id, logo, title, companyName, position, description } = singleJob;
  return (
    <div>
      <div className='details-card'>
        <div className='details-image-company'>
          <img src={logo} alt='' />
          <p>{companyName}</p>
        </div>
        <h2>{title}</h2>
        <h3>
          <GiPositionMarker color='#f0555b' />
          {position}
        </h3>
        <p>{description}</p>

        <div className='details-button-container'>
          {!clicked ? (
            <button
              onClick={() => handleClickApply()}
              className='details-apply-button'>
              Apply Now
            </button>
          ) : (
            <button onClick={handleApplied} className='details-apply-button'>
              Applied
            </button>
          )}

          <Link to={`/jobsDetails/${id}`}></Link>
          <Link to={-1}>
            {" "}
            <button className='details-back'>back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
