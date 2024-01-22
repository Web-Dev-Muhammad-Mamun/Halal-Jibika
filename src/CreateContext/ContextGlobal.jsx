/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const global = createContext();

const ContextGlobal = ({ children }) => {
  const [theallJobs, setAllJobs] = useState([]);

  return (
    <global.Provider value={{ setAllJobs, theallJobs }}>
      {children}
    </global.Provider>
  );
};

export default ContextGlobal;
