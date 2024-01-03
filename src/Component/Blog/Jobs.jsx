import { useContext, useEffect } from "react";
import Job from "./Job";
import "./jobs.css";
import axios from "axios";
import { global } from "../../CreateContext/ContextGlobal";

const Jobs = () => {
  const { setAllJobs, theallJobs } = useContext(global);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9000/jobs");
        setAllJobs(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className='jobsContainer'>
      {theallJobs.map((job) => (
        <Job key={job.id} job={job}></Job>
      ))}
    </div>
  );
};

export default Jobs;
