import { Link } from "react-router-dom";

import { GiPositionMarker } from "react-icons/gi";
import Swal from "sweetalert2";
import { useState } from "react";
import "./SingleFavorite.css";
/* eslint-disable react/prop-types */
const SingleFavoriteJob = ({ favorite }) => {
  // eslint-disable-next-line no-unused-vars
  const { id, logo, title, companyName, position, description } = favorite;
  console.log(favorite);
  return (
    <div>
      <div className='details-card'>
      <h1 style={{color: 'white'}}>Favorite Job :  {id}</h1>
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
          <Link to={-1}>
            {" "}
            <button className='details-back'>back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleFavoriteJob;
