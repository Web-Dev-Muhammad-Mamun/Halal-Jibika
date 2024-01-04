import { useEffect, useState } from "react";
import useFetch from "../CustomHook/CustomHook";
import SingleApplied from "../SingleApplied/SingleApplied";
// import './Favorite.css'
const AppliedJob = () => {
  const { loading, error, data } = useFetch("http://localhost:9000/jobs");
  const [applyState, setApply] = useState(data);

  const Applies = applyState.filter(
    (singleApply) => singleApply.isApplyed === true
  );

  useEffect(() => {
    setApply(data);
  }, [data]);
  return (
    <div className='favorite-card'>
      {Applies.map((applied) => {
        return <SingleApplied key={applied.id} applied={applied} />;
      })}
    </div>
  );
};

export default AppliedJob;
