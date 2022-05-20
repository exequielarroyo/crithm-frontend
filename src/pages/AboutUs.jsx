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
      </section>
    </>
  );
}
