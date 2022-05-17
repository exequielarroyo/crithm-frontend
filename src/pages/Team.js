import React from "react";
import style from "../styles/Team.module.css";

const About = () => {
  return (
    <>
      <div className={style.nav_team}>
        <nav className={style.nav_bar}>
          <h1 className={style.nav_title}>OUR TEAM</h1>
          <p className={style.nav_content}>
            We are a team of passionate and creative people who love to create
            and build products.
          </p>
        </nav>
      </div>

      <div className={style.about}>
        <div className={style.container}>
          <div>
            <img src={"/assets/images/11.jpg"} alt="jazer.jpg" />

            <h3>Mher Jazer P. Albalate</h3>
          </div>

          <p>
            Software Developer of Crithm. A committed and humble person and a
            person who looks for adventure and more challenging things.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
