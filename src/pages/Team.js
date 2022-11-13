import React from "react";
import style from "../styles/Team.module.css";

const About = () => {
  return (
    <>
      <div className={style.nav_team}>
        <nav className={style.nav_bar}>
          <h1 className={style.nav_title}>Meet our Dev Team</h1>
          <p className={style.nav_content}>
            Spanning far and wide, this small but mighty team is bringing developers new solutions to old problems. We're here to muddy the waters.
          </p>
        </nav>
      </div>

      <div className={style.about}>
        <div className={style.container}>
          <div>
            <div className={style.image1} />
            <h3 className={`${style.padding} ${style.h3}`}>Albalate, Mher Jazer</h3>
          </div>
          <p className={`${style.padding} ${style.p}`}>
            Software Developer of Crithm. A committed and humble person and a person who looks for adventure and more challenging things.
          </p>
        </div>

        <div className={style.container}>
          <div>
            <div className={style.image2} />
            <h3 className={`${style.padding} ${style.h3}`}>Arroyo, Exequiel</h3>
          </div>
          <p className={`${style.padding} ${style.p}`}>
            Software Developer of Crithm. A committed and humble person and a person who looks for adventure and more challenging things.
          </p>
        </div>
        <div className={style.container}>
          <div>
            <div className={style.image3} />
            <h3 className={`${style.padding} ${style.h3}`}>Bagabagon, Neil Jordan</h3>
          </div>
          <p className={`${style.padding} ${style.p}`}>
            Software Developer of Crithm. A committed and humble person and a person who looks for adventure and more challenging things.
          </p>
        </div>
        <div className={style.container}>
          <div>
            <div className={style.image4} />
            <h3 className={`${style.padding} ${style.h3}`}>Bagalso, Robert</h3>
          </div>
          <p className={`${style.padding} ${style.p}`}>
            Software Developer of Crithm. A committed and humble person and a person who looks for adventure and more challenging things.
          </p>
        </div>
        <div className={style.container}>
          <div>
            <div className={style.image5} />
            <h3 className={`${style.padding} ${style.h3}`}>Esteban, Marc Steven</h3>
          </div>
          <p className={`${style.padding} ${style.p}`}>
            Software Developer of Crithm. A committed and humble person and a person who looks for adventure and more challenging things.
          </p>
        </div>
        <div className={style.container}>
          <div>
            <div className={style.image6} />
            <h3 className={`${style.padding} ${style.h3}`}>Gonzales, Marvin</h3>
          </div>
          <p className={`${style.padding} ${style.p}`}>
            Software Developer of Crithm. A committed and humble person and a person who looks for adventure and more challenging things.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
