import { useEffect, useState } from "react";
import axios from "axios";
// import avatar from "../images/IMG_7977.jpg";

const baseURL = "https://reqres.in/api/users/";
const Fetch = () => {
  const [data, setData] = useState(null);
  //   const [error, setError] = useState("");
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data.data);
    });
  }, []);
  console.log(data);
  if (!data) return null;
  return (
    <div style={{ color: "white" }}>
      <h2>Axios Library in react js</h2>

      {data.length &&
        data.map((d) => {
          return (
            <div key={d.id}>
           <div>
           <h1 key={d.id}>{d.first_name}</h1>
            <p key={d.id}>{d.email}</p>
            <img src={d.avatar} alt={d.avatar} />
           </div>
            </div>
          );
        })}
    </div>
  );
};

export default Fetch;

//  axios
// .post("https://reqres.in/api/users/2", {
//     name: "Mamun",
//     job: "Developer",
//     address: "dhaka",
//     avatar: avatar,
//   })
//   .then((res) => setData(res.data))
//   .catch((err) => setError(err));
