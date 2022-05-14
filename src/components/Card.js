import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import style from "../styles/Project.module.css";
import { useNavigate } from "react-router-dom";

const Card = ({ title, description, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (id === undefined) {
      id = 'create';
    }
    navigate(`/dashboard/register/${id}`);
  };

  return (
    <div className={style.card} onClick={handleClick}>
      {!title ? (
        <div className={style.icon}>
          <FontAwesomeIcon icon={faPlus} size="6x" />
        </div>
      ) : (
        <div className={style.insideCard}>
          <h2>{title}</h2>
          <p className={style.p}>{description}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
