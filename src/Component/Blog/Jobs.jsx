import { useEffect, useState } from "react";
import Job from "./Job";
import "./jobs.css";
import axios from "axios";

const Jobs = () => {
  const [allJobs, setAllJobs] = useState([]);
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
      {allJobs.map((job) => (
        <Job key={job.id} job={job}></Job>
      ))}
    </div>
  );
};

export default Jobs;
