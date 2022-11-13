import React, { useEffect, useRef } from "react";
import LMCard from "../components/LMCard";
import ProcessCard from "../components/ProcessCard";
import style from "../styles/App.module.css";
import WCard from "../components/WCard";
import JoinCard from "../components/JoinCard";
import PricingCard from "../components/PricingCard";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import { create } from "@lottiefiles/lottie-interactivity";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const Home = () => {
  const lottie = useRef();

  useEffect(() => {
    lottie.current.addEventListener("load", function (e) {
      create({
        mode: "scroll",
        player: "#lottie",
        actions: [
          {
            visibility: [0, 1],
            type: "seek",
            frames: [0, 220],
          },
        ],
      });
      create({
        mode: "scroll",
        player: "#lottie3",
        actions: [
          {
            visibility: [0, 1],
            type: "seek",
            frames: [0, 500],
          },
          // {
          //   visibility: [1],
          //   type: "stop",
          //   frames: [500,600],
          // },
        ],
      });
      create({
        mode: "scroll",
        player: "#lottie2",
        container: "#home",
        actions: [
          {
            visibility: [0, 1],
            type: "seek",
            frames: [0, 600],
          },
        ],
      });

      // create({
      //   player: "#lottie3",
      //   mode: "cursor",
      //   actions: [
      //     {
      //       type: "toggle",
      //     },
      //   ],
      // });
    });
  });
  return (
    <div className={style.home} id="home">
      <div
        style={{
          display: "flex",
          height: "100vh",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          opacity: ".1",
          zIndex: "-2",
        }}
      >
        <lottie-player ref={lottie} id="lottie2" src="/assets/lottie/system.json" style={{ height: "1000px" }} />
        {/* <Player id="lottie3" src="/assets/lottie/crithm-loading.json" style={{ height: "200px" }} autoplay loop/> */}
      </div>
      <section id="home">
        <img src={"/assets/images/logo.png"} className={style.logo} alt="logo" />
        <div className={style.content}>
          <h1>CRITHM</h1>
          <div className={style.img}>
            <img src="/assets/images/ring.png" alt="" />
            <img src="/assets/images/curve-line.png" alt="" />
          </div>
        </div>
      </section>

      <section id="articles">
        <div style={{ position: "relative" }}>
          <div
            style={{ display: "grid", height: "100%", width: "100%", placeItems: "center", position: "absolute", top: "-300px", left: "0", opacity: "100%" }}
          >
            <lottie-player id="lottie3" src="/assets/lottie/bloodhunt2.json" style={{}} />
          </div>
          <div className={style.page3container}>
            <h3>Get to know Crithm, all what can you expect and learn</h3>
            <div className={style.cards}>
              <LMCard
                lm_content={
                  "Need applications that you demand? We are a professional group with high expertise. A company that specializes on providing high-end web solutions."
                }
                lm_img={`👌`}
              />
              <LMCard
                lm_content={"The service that we provide are a software solution where different types of industry softwares can be utilize."}
                lm_img={`🏬`}
              />
              <LMCard
                lm_content={
                  "We are versatile for the reason that we can satisfy our clients on their desired system, this includes: \nItem/Product Inventory \nMessaging platform \nEducational system \nSimple Information System"
                }
                lm_img={`🤑`}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={style.process} id="process">
        <div className={style.page4container}>
          <div className={style.process_upper}>
            <h3>The Process</h3>
            <p>Your system will take 12 weeks to develop from concept to launch. The steps are listed below:</p>
            <div className={style.process_middle}>
              <div className={style.process_ellipse2} />
              <div className={style.process_ellipse} />
              <p className={style.process_text}>Client request a project to the dev team</p>
            </div>
          </div>
          <div className={style.process_card_content}>
            <div className={style.process_ellipse3} />
            <div className={style.process_line1} />
            <div className={style.process_line2} />
            <ProcessCard title={"Step 1 | Mapping week 1"}>
              The development team maps the whole project. We already have some concept on how to execute the whole system. As the client answer the Project
              Registration From (PRF), the team will have the rough idea on what the client wants.
            </ProcessCard>
            <div className={style.process_ellipse4} />
            <div className={style.process_line3} />
            <ProcessCard title={"Step 2 | Development week 2"}>
              Start of development process. The dev team will start the project. Depending on the plan subscription, the team will begin the development of
              front-end and back-end then include all the necessary features from the PRF.
            </ProcessCard>
            <div className={style.process_ellipse5} />
            <div className={style.process_line4} />
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
              <div className={style.process_ellipse} />
              <p className={style.process_text}>Client has accept to continue the development</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing">
        <div style={{ position: "relative" }}>
          <div style={{ display: "grid", height: "100%", width: "100%", placeItems: "center", position: "absolute", top: "-500px", left: "0", opacity: "50%" }}>
            <lottie-player id="lottie" src="/assets/lottie/bloodhunt.json" style={{ height: "1200px" }} />
          </div>
          <div className={style.PricingContainer}>
            <PricingCard plan={"BASIC"} srp_price={"₱ 11,000"} price={"₱ 16,000.00"} feature={"1 Project"} features={"2 Features"}></PricingCard>
            <PricingCard plan={"STANDARD"} srp_price={"₱ 27,000"} price={"₱ 32,000"} feature={"3 Project"} features={"5 Features"}></PricingCard>
            <PricingCard plan={"PREMIUM"} srp_price={"₱ 82,000"} price={"₱ 87,000"} feature={"5 Project"} features={"10 Features"}></PricingCard>
          </div>
        </div>
      </section>

      <section className={style.whyus} id="why-us">
        <div className={style.page6container}>
          <div className={style.upper}>
            <h3> Why Us?</h3>
            <p>This is some of the reasons why you should work with us.</p>
          </div>
          <div className={style.wcardstyle}>
            <WCard
              W_content_job={"Software Developer"}
              W_content={"Because we've been there and done it. When you choose us, you'll feel the benefit of 15 years' experience of writing and editing."}
              W_circle={""}
              W_name={"Albalate"}
            />
            <WCard
              W_content_job={"Software Engineer"}
              W_content={"Because we're chosen by professionals. We're the 'go-to developers' for dozens of service marketing agencies."}
              W_circle={""}
              W_name={"Arroyo"}
            />
            <WCard
              W_content_job={"Team Leader"}
              W_content={"Because we know digital. With working knowledge of online, SEO and social media, we can make your dream app come true."}
              W_circle={""}
              W_name={"Bagabagon"}
            />
            <WCard
              W_content_job={"UX/UI Designer"}
              W_content={
                "Because we'll understand your brand. Before we even start coding, we think about your satisfaction and value suggestion, so every word builds your brand."
              }
              W_circle={""}
              W_name={"Bagalso"}
            />
            <WCard
              W_content_job={"Product Manager"}
              W_content={"Because we're easy to work with. We take the work seriously, but not ourselves. We're not prickly, precious or pretentious."}
              W_circle={""}
              W_name={"Esteban"}
            />
            <WCard
              W_content_job={"Founder & CEO"}
              W_content={"Because we focus on results. For us, it’s all about what adds value for you. Above all, we want our works satisfy you."}
              W_circle={""}
              W_name={"Gonzales"}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
