import React from "react";

const WCard = ({ W_content_job, W_content, W_div,  W_name, W_circle }) => {
  return (
    <div className="WhyusCard">
      <div>
        {" "}
        <p className="W_content_job">{W_content_job}</p>
        <p className="W_content">{W_content}</p>
        
          <div className="W_circle">{W_circle}</div>
          <p className="W_name">{W_name}</p>
        
      </div>
    </div>
  );
};

export default WCard;