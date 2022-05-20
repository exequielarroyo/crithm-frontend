import { Link } from "react-router-dom";
import style from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={style.container}>
        <div className={style.top}>
          <div className={style.logo}>
            <img src="/assets/images/logo2.png" />
          </div>
          <div className={style.links}>
            <p>TITLE</p>
            <Link to={"/"}>Home</Link>
            <Link to={"/"}>Team</Link>
            <Link to={"/"}>About us</Link>
            <Link to={"/"}>Product</Link>
            <Link to={"/"}>Contact</Link>
            <Link to={"/"}>Terms</Link>
          </div>
          <div className={style.links}>
            <p>FOLLOW US</p>
            <Link to={"/"}>Home</Link>
            <Link to={"/"}>Home</Link>
            <Link to={"/"}>Home</Link>
            <Link to={"/"}>Home</Link>
            <Link to={"/"}>Home</Link>
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
