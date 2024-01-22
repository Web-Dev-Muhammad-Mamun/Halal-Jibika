import { useNavigate } from "react-router-dom";

const NavigateBtn = () => {
  const navigate = useNavigate();
  const handleback = () => {
    navigate(-1);
  };
  const handlehome = () => {
    navigate("/");
  };
  return (
    <div className='all-handle-btn'>
      <button className='handle-btn' onClick={handleback}>
        Go back
      </button>
      <button className=' handle-btn back-home-btn' onClick={handlehome}>
        Go Home
      </button>
    </div>
  );
};

export default NavigateBtn;
