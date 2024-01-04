import useFetch from "../CustomHook/CustomHook";
import SingleApplied from "../SingleApplied/SingleApplied";
// import './Favorite.css'
const AppliedJob = () => {
  const { loading, error, data } = useFetch("http://localhost:9000/jobs");
  const Applies = data.filter((singleData) => singleData.isApplied === true);

  return (
    <div className='favorite-card'>
      {Applies.map((applied) => {
        return <SingleApplied key={applied.id} applied={applied} />;
      })}
    </div>
  );
};

export default AppliedJob;
