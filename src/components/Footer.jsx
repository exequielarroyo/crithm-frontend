import { Link } from "react-router-dom";
import style from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={style.container}>
        <div className={style.top}>
          <div className={style.logo}>
            <img src="/assets/images/logo2.png" alt="logo"/>
          </div>
          <div className={style.links}>
            <p>MAIN MENU</p>
            <Link to={"/"}>Home</Link>
            <Link to={"/product"}>Product</Link>
            <Link to={"/about"}>About us</Link>
            <Link to={"/contact"}>Contact</Link>
            {/* <Link to={"/team"}>Team</Link> */}
            <Link to={"/terms"}>Terms</Link>
          </div>
          <div className={style.links}>
            <p>FOLLOW US</p>
            <a href="https://github.com/Crithm"><i class="fab fa-github"/> Github</a>
            <a href="https://www.linkedin.com"><i class="fab fa-linkedin"/> LinkedIn</a>
            <a href="https://www.facebook.com"><i class="fab fa-facebook"/> Facebook</a>
            <a href="https://www.instagram.com"><i class="fab fa-instagram"/> Instagram</a>
            <a href="https://www.twitter.com"><i class="fab fa-twitter"/> Twitter</a>
          </div>
        </div>
        <hr className={style.line} />
        <div className={style.copyright}>
          <p>&copy; 2022</p>
          <p>Crithm</p>
        </div>
      </div>
    </>
  );
}
