import { useContext, useEffect } from "react";
import Job from "./Job";
import "./jobs.css";
import axios from "axios";
import { global } from "../../CreateContext/ContextGlobal";
import Swal from "sweetalert2";

const Jobs = () => {
  const { setAllJobs, theallJobs } = useContext(global);

  const handleDelete = async (id) => {
    axios.delete(`http://localhost:9000/jobs/${id}`);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9000/jobs");
        setAllJobs(response.data);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "something went wrong",
          timer: 3000,
        });
      }
    };
    fetchData();
  }, []);
  return (
    <div className='jobsContainer'>
      {theallJobs.map((job) => (
        <Job key={job.id} job={job} handleDelete={handleDelete}></Job>
      ))}
    </div>
  );
};

export default Jobs;
