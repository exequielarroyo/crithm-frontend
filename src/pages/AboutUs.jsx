import { useNavigate } from "react-router-dom";
import JoinCard from "../components/JoinCard";
import style from "../styles/AboutUs.module.css";

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <>
      <section id="creative-software">
        <div className={style.page2container}>
          <p className={`${style.part1} ${style.one}`}>Better designs and functions ready for the future</p>
          <p className={`${style.part1} ${style.two}`}>
            We are a Web Solutions company that specializes in developing cutting-edge software solutions. We assist corporate clients in untangling complicated
            issues that arise frequently along their digital transformation journey.
          </p>
        </div>
        <div className={style.bgcolor}>
          <div className={`${style.page2container} ${style.part2}`}>
          <p>
              Crithm delivers technology driven computing solutions, experienced consulting, and efficient IT/CS support that are tailored to the demands of any
              enterprise, allowing our customers to maximize their return of investment and expand their workforce's capabilities. We have been a visionary and
              dependable software engineering partner for world-class brands since the year 2022.
            </p>
            <img src="/assets/images/logo.png" alt="awd" />
          </div>
        </div>
      </section>

      <section className={style.join} id="join">
        <div className={style.joinContainer}>
          <div className={style.content}>
            <h1>CRITHM</h1>
            <div className={style.img}>
              <img src="/assets/images/ring.png" alt="" />
              <img src="/assets/images/curve-line.png" alt="" />
            </div>
          </div>
        </div>
        <JoinCard title={"Mission"}>
          Exceed customer expectations and deliver excellent software solutions
          that transforms data into information and boost the capabilities of
          their workforce.
        </JoinCard>
        <JoinCard title={"Vision"}>
          Our vision is to deliver imaginative and trustworthy software
          engineering for further innovation and constructive research to
          improve software quality. We value work that is accurate and of the
          highest quality. In various industries, we wish to be renowned as a
          dependable, innovtive, and user-friendly software service provider.
        </JoinCard>
        <button className={style.buttonReg} onClick={()=>{navigate('/signup')}}>Register</button>

        <div>
        <div className={style.nav_team}>
        <nav className={style.nav_bar}>
          <h1 className={style.nav_title}>Meet our Dev Team</h1>
          <p className={style.nav_content}>
            Spanning far and wide, this small but mighty team is bringing developers new solutions to old problems. We're here to muddy the waters.
          </p>
        </nav>
      </div>

      <div className={style.about}>
        <div className={style.profilecontainer}>
          <div>
            <div className={style.image1} />
            <h3 className={`${style.padding} ${style.h3}`}>Albalate, Mher Jazer</h3>
          </div>
          <p className={`${style.padding} ${style.p}`}>
            Software Developer of Crithm. A committed and humble person and a person who looks for adventure and more challenging things.
          </p>
        </div>

        <div className={style.profilecontainer}>
          <div>
            <div className={style.image2} />
            <h3 className={`${style.padding} ${style.h3}`}>Arroyo, Exequiel</h3>
          </div>
          <p className={`${style.padding} ${style.p}`}>
          CEO & Software Developer, pushing the whole team to the success of software development process. A software fanatic  with a huge passion for technology and entrepreneurship.
          </p>
        </div>
        <div className={style.profilecontainer}>
          <div>
            <div className={style.image3} />
            <h3 className={`${style.padding} ${style.h3}`}>Bagabagon, Neil Jordan</h3>
          </div>
          <p className={`${style.padding} ${style.p}`}>
          Team Leader and UI Designer of Crithm. A simple and calm person who leads the team all throughout the development of a system. The one who says "Let's Go" and not "Go"
          </p>
        </div>
        <div className={style.profilecontainer}>
          <div>
            <div className={style.image4} />
            <h3 className={`${style.padding} ${style.h3}`}>Bagalso, Robert</h3>
          </div>
          <p className={`${style.padding} ${style.p}`}>
          The Network administrator of crithm. He is very dedicated to his craft and also very diligent to his career. He is also seclusive yet calm-minded person. He is simple and humble to his profession.
          </p>
        </div>
        <div className={style.profilecontainer}>
          <div>
            <div className={style.image5} />
            <h3 className={`${style.padding} ${style.h3}`}>Esteban, Marc Steven</h3>
          </div>
          <p className={`${style.padding} ${style.p}`}>
          A database manager of crithm He is responsible for developing and maintaining an organization's systems that store and organize data for companies. By implementing several security programs, they ensure the safety of stored data.
          </p>
        </div>
        <div className={style.profilecontainer}>
          <div>
            <div className={style.image6} />
            <h3 className={`${style.padding} ${style.h3}`}>Gonzales, Marvin</h3>
          </div>
          <p className={`${style.padding} ${style.p}`}>
          QA analyst or tester of crithm, he is making sure of quality requirements are met. Looking for bugs and software flaws to avoid any software issues.
          </p>
        </div>
      </div>
        </div>
      </section>
    </>
  );
}
