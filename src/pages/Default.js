import React from "react";
import LMCard from "../components/LMCard";
import Button from "../components/Button";
import ProCard from "../components/ProCard";
import PriceCard from "../components/PriceCard";

const Default = () => {
  return (
    <div>
      <>
        <LMCard
          lm_content={
            "Need applications that you demand? We are a professional group with high expertise. A company that specializes on providing high-end web solutions."
          }
          lm_button={"Learn More"}
          lm_img={"👌"}
        ></LMCard>
      </>

      <>
        <ProCard
          p_content={
            "Step 1 | Mapping week 1 The development team maps the whole project. We already have some concept on how to execute the whole system. As the client answer the Project Registration From (PRF), the team will have the rough idea on what the client wants. "
          }
         
         ></ProCard>
      </>
      <>
        <PriceCard
          pri_card={"Android/IOS"}
          pri_card1={"$ 400"}
          pri_card2={
            "Price may vary depending on the features and complexity of the system."
          }
          pri_card3={"Examples: Social Media Apps GPS"}
        ></PriceCard>
      </>
    </div>
  );
};

export default Default;
