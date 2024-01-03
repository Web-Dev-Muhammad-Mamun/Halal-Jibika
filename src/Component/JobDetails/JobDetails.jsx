/* eslint-disable no-unused-vars */
import "./JobDetails.css";
import JobDetail from "../JobDetail/JobDetail";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { global } from "../../CreateContext/ContextGlobal";
const JobDetails = () => {
  // const [datas, setDatas] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:9000/jobs");
  //       setDatas(response.data);
  //       console.log(datas);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // const mepJobs = theallJobs.map((singleJob) => (
  //   <JobDetail key={singleJob.id} singleJob={singleJob} />
  // ));
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
      {theallJobs.map((appliedJobs) => (
        <JobDetail key={appliedJobs.id} appliedJobs={appliedJobs} />
      ))}
    </div>
  );
};

export default JobDetails;
