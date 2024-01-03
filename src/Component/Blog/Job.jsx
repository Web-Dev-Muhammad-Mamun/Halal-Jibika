/* eslint-disable react/prop-types */
import { FaHeart, FaEdit, FaTrash } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import "./job.css";
import { Link } from "react-router-dom";
import axios from "axios";
// import axios from "axios";
const Job = ({ job }) => {
  const { id, logo, title, companyName, position, description } = job;
  // const handleDelete = async (id) => {
  //   axios.delete(`http://localhost:9000/jobs/${id}`);
  // };
  const handleClickApply = (job) => {
    console.log(job);
    const status = job.isTrue === "undefined" ? true : !job.isTrue;
    axios.put(`http://localhost:9000/jobs/${job.id}`, {
      ...job,
      isTrue: status,
    });
  };
  return (
    <div>
      <div className='card'>
        <div className='image-company'>
          <img src={logo} alt='' />
          <p>{companyName}</p>
        </div>
        <h2>{title}</h2>
        <h3>
          <GiPositionMarker color='#f0555b' />
          {position}
        </h3>
        <p>{description}</p>

        <div className='button-container'>
          <button
            onClick={() => {
              handleClickApply(job);
            }}
            className='favorite-button'>
            <FaHeart
              className={`icons favorite-icon ${job.isTrue ? " heart" : null}`}
            />
          </button>
          {/* <button className='apply-button'>Apply Now</button> */}
          {/* <button className='edit-button'>
            <Link to={`/jobsDetails/${id}`}>
              <FaEdit className='icons edit-icon' />
            </Link>
          </button> */}
          {/* <button className='delete-button' onClick={() => handleDelete(id)}>
            <FaTrash className='icons delete-icon' />
          </button> */}
          <button className='see_details'>
            <Link to={`/jobs/${id}`}> See Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Job;
