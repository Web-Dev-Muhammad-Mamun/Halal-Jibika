/* eslint-disable react/prop-types */
import axios, { all } from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { FaHeart, FaEdit } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";

import Swal from "sweetalert2";
import useFetch from "../CustomHook/CustomHook";
const JobDetail = ({
  id,
  description,
  position,
  companyName,
  logo,
  title,
  alljob,
}) => {
  const [clicked, setClicked] = useState(false);
  //

  const { data } = useFetch("https://api-server-6ak4.onrender.com/jobs");
  const [applyState, setapplyState] = useState(data);
  const handleClickApply = (alljob) => {
    const status = alljob.isApplyed === "undefined" ? true : !alljob.isApplyed;
    axios
      .put(`https://api-server-6ak4.onrender.com/jobs/${alljob.id}`, {
        ...alljob,
        isApplyed: status,
      })
      .then(() => {
        setapplyState(
          applyState.map((appl) => {
            if (appl.id === alljob.id) {
              return {
                ...appl,
                isApplyed: status,
              };
            }
            return appl;
          })
        );
      });
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
              onClick={() => handleClickApply(alljob)}
              className={`details-apply-button ${
                alljob.isApplyed ? "done" : null
              }`}>
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
