import { useState } from "react";
import axios from "axios";
import "./AddNewJob.css";
const AddNewJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    logo: "",
    companyName: "",
    position: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePostRequest = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    try {
      const response = await axios.post("http://localhost:9000/jobs", formData);

      // Handle the response as needed
      console.log("Response:", response.data);
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
    }
  };
  return (
    <div className='addjob-container'>
      <form onSubmit={handlePostRequest}>
        <label className='update-label'>
          Title:
          <input
            className='update-input'
            type='text'
            name='title'
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className='update-label'>
          logo:
          <input
            className='update-input'
            type='text'
            name='logo'
            value={formData.logo}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className='update-label'>
          Company Name:
          <input
            className='update-input'
            type='text'
            name='companyName'
            value={formData.companyName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className='update-label'>
          Position:
          <input
            className='update-input'
            type='text'
            name='position'
            value={formData.position}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className='update-label'>
          Description:
          <textarea
            className='update-input'
            name='description'
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <br />
        {/*  */}
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AddNewJob;
