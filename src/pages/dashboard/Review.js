import React from "react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import style from "../../styles/Review.module.css";

const Review = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  function handlePay(e) {
    navigate('/dashboard/payment');
  }

  return (
    <>
      {id === "create" && <Navigate to={"/dashboard"} state={{ from: location }} replace />}
      <div className={style.container}>
        <div>
          <button onClick={handlePay}>Pay</button>
        </div>
      </div>
    </>
  );
};

export default Review;
