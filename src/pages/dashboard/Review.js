import React from "react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import ProcessCard from "../../components/ProcessCard";
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
      <div className={style.page4container}>
            <div className={style.process_upper}>
              <h3>The Process</h3>
              <p>Your system will take 12 weeks to develop from concept to launch. The steps are listed below:</p>
              <div className={style.process_middle}>
                <ellipse className={style.process_ellipse2} />
                <ellipse className={style.process_ellipse} />
                <p className={style.process_text}>Client request a project to the dev team</p>
              </div>
            </div>
            <div className={style.process_card_content}>
              <ellipse className={style.process_ellipse3} />
              <line className={style.process_line1} />
              <line className={style.process_line2} />
              <ProcessCard title={"Step 1 | Mapping week 1"}>
                The development team maps the whole project. We already have some concept on how to execute the whole system. As the client answer the Project
                Registration From (PRF), the team will have the rough idea on what the client wants.
              </ProcessCard>
              <ellipse className={style.process_ellipse4} />
              <line className={style.process_line3} />
              <ProcessCard title={"Step 2 | Development week 2"}>
                Start of development process. The dev team will start the project. Depending on the plan subscription, the team will begin the development of
                front-end and back-end then include all the necessary features from the PRF.
              </ProcessCard>
              <ellipse className={style.process_ellipse5} />
              <line className={style.process_line4} />
              <ProcessCard title={"Step 3 | Demonstration week 3"}>
                <p>
                  Show a live demo of the software or project. The demo will not the finished product as per it will be only to present for the client to see and
                  understand the flow of the project.
                </p>
                <p>
                  Once the client is satisfied with the demonstration work flow, the dev team will now proceed to the lunching of the project. If the client is
                  not satisfied, they have the authority to decide if they want to cancel or revise the project.{" "}
                </p>
              </ProcessCard>
              <div className={style.process_bottom}>
                <ellipse className={style.process_ellipse} />
                <p className={style.process_text}>Client has accept to continue the development</p>
              </div>
            </div>
          </div>
        <div>
        </div>
      </div>
    </>
  );
};

export default Review;
