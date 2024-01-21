import { useEffect, useState } from "react";
import useFetch from "../CustomHook/CustomHook";
import SingleFavoriteJob from "./../SingleFavorite/SingleFavoriteJob";
import "./Favorite.css";
import { Link } from "react-router-dom";
const Favorite = () => {
  const { loading, error, data } = useFetch(
    "https://api-server-6ak4.onrender.com/jobs"
  );
  const [faveState, setFaveState] = useState(data);

  const favorites = faveState.filter(
    (singleData) => singleData.isTrue === true
  );

  useEffect(() => {
    setFaveState(data);
  }, [data]);

  return (
    <div className='favorite-card'>
      {favorites.length > 0 ? (
        favorites.map((favorite) => {
          return <SingleFavoriteJob key={favorite.id} favorite={favorite} />;
        })
      ) : (
        <div className='no-favorite-jobs'>
          <img
            src='https://cdn.dribbble.com/users/12570/screenshots/13987694/media/1635918fab6854e489723a301619b7b2.jpg?resize=400x0'
            alt=''
          />
          <div className='add-to-favorite'>
            {" "}
            <Link to={"/jobs"}>
              <button>Add Favorite Jobs</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorite;
