import { useEffect, useState } from "react";
import Job from "./Job";
import './jobs.css'

const Jobs = () => {
  const [allJobs, setAllJobs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../../public/db.json");
        const data = await response.json();
        setAllJobs(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="jobsContainer"> 
      {allJobs.map((job) => (
        <Job key={job.id} job={job}></Job>
      ))}
    </div>
  );
};

export default Jobs;
