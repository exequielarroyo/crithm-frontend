import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";

const Default = () => {
  return (
    <div>
      <Card className="lm1">
        <div>
        <div className="img"> 👌</div>
        
        <p className="content">Need applications that you demand? We are a professional group with high expertise. A company that specializes on providing high-end web solutions.</p>
        <Button>Learn More</Button>
        </div>
      
      </Card>
      <Card className="lm2">Login</Card>
      <Card className="lm3">Login</Card>
      <div className="ellipse"></div>
    </div>
  );
};

export default Default;
