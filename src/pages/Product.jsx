import style from "../styles/Product.module.css";

export default function Product() {
  return (
    <>
      <div className={style.container}>
        <div className={style.hero}>
          <img src="/assets/images/product.png" alt="sample service product" />
          <div className={style.content}>
            <h1>Our product is a full service web development for your company.</h1>
            <p className={style.p}>
              If you have a website idea you want to turn into reality, we can do that too. Give us call and we'll be happy to talk with you about our services
              and how they can help your business grow.
            </p>
          </div>
        </div>
        <div className={style.feature}>
          <div>
            <h1>You have a project in mind?</h1>
            <p className={style.p}>Register your own by filling up the Project Registration Form in only 2 minutes.</p>
          </div>
          <img src="/assets/images/product1.jpeg" alt="sample service product" />
        </div>
        <div className={style.feature}>
          <img src="/assets/images/product2.jpeg" alt="sample service product" />
          <div>
            <h1>See your project status live at your screen.</h1>
            <p className={``}>This is a live feed of your project status. You can see the progress of your work in real time.</p>
            <p className={style.p}>The live feed is an interactive screen that provides you with a visual representation of what you're working on. This allows you to view your project's progress in real-time, and make changes quickly without having to wait for feedback from others.</p>
          </div>
        </div>
        <div className={style.feature}>
          <div>
            <h1>Manage your project easily in your dashboard</h1>
            <p className={style.p}>The project dashboard is a great tool for managing your projects easily.</p>
          </div>
          <img src="/assets/images/product4.jpeg" alt="sample service product" />
        </div>
        <div className={style.feature}>
          <img src="/assets/images/product3.jpeg" alt="sample service product" />
          <div>
            <h1>Update your profile</h1>
            <p className={style.p}>This helps us to contact you in case of a problem occurs.</p>
          </div>
        </div>
      </div>
    </>
  );
}
