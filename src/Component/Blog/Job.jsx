/* eslint-disable react/prop-types */
import { FaHeart, FaEdit, FaTrash } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import "./job.css";
import { Link } from "react-router-dom";
import axios from "axios";
const Job = ({ handleDelete, job, setFaveState, faveState }) => {
  const { id, logo, title, companyName, position, description } = job;

  const handleClickFavorite = (job) => {
    console.log(job);
    const status = job.isTrue === "undefined" ? true : !job.isTrue;
    axios
      .put(`https://api-server-6ak4.onrender.com/jobs/${job.id}`, {
        ...job,
        isTrue: status,
      })
      .then(() => {
        setFaveState(
          faveState.map((fav) => {
            if (fav.id === job.id) {
              return {
                ...fav,
                isTrue: status,
              };
            }
            return fav;
          })
        );
      });
  };

  return (
    <div>
      <div >
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
                handleClickFavorite(job);
              }}
              className='favorite-button'>
              <FaHeart
                className={`icons favorite-icon ${
                  job.isTrue ? " heart" : null
                }`}
              />
            </button>

            <button className='edit-button'>
              <Link to={`/jobsDetails/${id}`}>
                <FaEdit className='icons edit-icon' />
              </Link>
            </button>
            <button className='delete-button' onClick={() => handleDelete(id)}>
              <FaTrash className='icons delete-icon' />
            </button>
            <button className='see_details'>
              <Link to={`/jobdetails/${id}`}> See Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
