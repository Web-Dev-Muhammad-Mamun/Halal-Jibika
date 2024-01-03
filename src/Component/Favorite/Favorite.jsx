import useFetch from "../CustomHook/CustomHook";
import SingleFavoriteJob from "./../SingleFavorite/SingleFavoriteJob";
import './Favorite.css'
const Favorite = () => {
  const { loading, error, data } = useFetch("http://localhost:9000/jobs");
  const favorites = data.filter((singleData) => singleData.isTrue === true);

  return (
    <div className='favorite-card'>
      {favorites.map((favorite) => {
        return <SingleFavoriteJob key={favorite.id} favorite={favorite} />;
      })}
    </div>
  );
};

export default Favorite;
