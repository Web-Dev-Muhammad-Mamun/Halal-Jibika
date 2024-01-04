import { useContext, useEffect, useState } from "react";
import Job from "./Job";
import "./jobs.css";
import axios from "axios";
import { global } from "../../CreateContext/ContextGlobal";
import Swal from "sweetalert2";
import useFetch from "./../CustomHook/CustomHook";

const Jobs = () => {
  const { data } = useFetch("http://localhost:9000/jobs");
  const [faveState, setFaveState] = useState(data);

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

  useEffect(() => {
    setFaveState(data);
  }, [data]);
  return (
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
  );
};

export default Jobs;
