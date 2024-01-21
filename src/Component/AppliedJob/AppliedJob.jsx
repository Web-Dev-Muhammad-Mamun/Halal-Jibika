import { useEffect, useState } from "react";
import useFetch from "../CustomHook/CustomHook";
import SingleApplied from "../SingleApplied/SingleApplied";
import { Link } from "react-router-dom";
import './Applied.css'
// import './Favorite.css'
const AppliedJob = () => {
  const { loading, error, data } = useFetch(
    "https://api-server-6ak4.onrender.com/jobs"
  );
  const [applyState, setApply] = useState(data);

  const Applies = applyState.filter(
    (singleApply) => singleApply.isApplyed === true
  );
  useEffect(() => {
    setApply(data);
  }, [data]);

  if (loading) {
    return <p>Loading...</p>; // Show a loading message
  }

  if (error) {
    return <p>Error: {error}</p>; // Handle the error
  }
  return (
    <div className='favorite-card'>
      {Applies.length > 0 ? (
        Applies.map((applied) => {
          return <SingleApplied key={applied.id} applied={applied} />;
        })
      ) : (
        <div className='no-applied-jobs'>
          <img
            src='https://t4.ftcdn.net/jpg/04/75/01/23/360_F_475012363_aNqXx8CrsoTfJP5KCf1rERd6G50K0hXw.jpg'
            alt=''
          />
          <div className='add-to-applied'>
            {" "}
            <Link to={"/jobs"}>
              <button>Apply Job</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppliedJob;
