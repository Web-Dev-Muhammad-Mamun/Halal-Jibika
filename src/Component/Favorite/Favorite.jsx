import { useEffect, useState } from "react";
import useFetch from "../CustomHook/CustomHook";
import SingleFavoriteJob from "./../SingleFavorite/SingleFavoriteJob";
import "./Favorite.css";
const Favorite = () => {
  const { loading, error, data } = useFetch("https://api-server-6ak4.onrender.com/jobs");
  const [faveState, setFaveState] = useState(data);

  const favorites = faveState.filter(
    (singleData) => singleData.isTrue === true
  );

  useEffect(() => {
    setFaveState(data);
  }, [data]);

  return (
    <div className='favorite-card'>
      {favorites.map((favorite) => {
        return <SingleFavoriteJob key={favorite.id} favorite={favorite} />;
      })}
    </div>
  );
};

export default Favorite;
