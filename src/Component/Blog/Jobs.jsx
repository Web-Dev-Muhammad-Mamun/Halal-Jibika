import { useContext, useEffect, useState } from "react";
import Job from "./Job";
import "./jobs.css";
import axios from "axios";
import { global } from "../../CreateContext/ContextGlobal";
import Swal from "sweetalert2";
import useFetch from "./../CustomHook/CustomHook";
import { Link } from "react-router-dom";

const Jobs = () => {
  const { data } = useFetch("https://api-server-6ak4.onrender.com/jobs");
  const [faveState, setFaveState] = useState(data);

  const { setAllJobs, theallJobs } = useContext(global);

  const handleDelete = async (id) => {
    axios.delete(`https://api-server-6ak4.onrender.com/jobs/${id}`);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api-server-6ak4.onrender.com/jobs");
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

  useEffect(() => {
    setFaveState(data);
  }, [data]);
  return (
    <div>
      <div className='add-job-link'>
        <li>
          <Link to={"/addjobs"}>Add Your Own JOb</Link>
        </li>
      </div>
      <div className='jobsContainer'>
        {faveState.map((job) => (
          <Job
            key={job.id}
            job={job}
            faveState={faveState}
            setFaveState={setFaveState}
            handleDelete={handleDelete}></Job>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
