import React from "react";
import LMCard from "../components/LMCard";
import ProcessCard from "../components/ProcessCard";
import style from "../styles/App.module.css";
import WCard from "../components/WCard";
import JoinCard from "../components/JoinCard";
import PriceCard from "../components/PriceCard";

const Home = () => {
  return (
    <div className={style.home}>
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

      <section id="creative-software">
        <div className={style.page2container}>
          <p className={`${style.part1} ${style.one}`}>Better designs and functions ready for the future</p>
          <p className={`${style.part1} ${style.two}`}>
            We are a Web Solutions and Digital Marketing company that specializes in developing cutting-edge software solutions. We assist corporate clients in
            untangling complicated issues that arise frequently along their digital transformation journey.
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

      <section id="articles">
        <div className={style.page3container}>
          <h3>Get to know Crithm, all what can you expect and learn</h3>
          <div className={style.cards}>
            <LMCard
              lm_content={
                "Need applications that you demand? We are a professional group with high expertise. A company that specializes on providing high-end web solutions."
              }
              lm_img={`👌`}
              lm_button={"Learn more"}
            />
            <LMCard
              lm_content={"The service that we provide are a software solution where different types of industry softwares can be utilize."}
              lm_img={`🏬`}
              lm_button={"Learn more"}
            />
            <LMCard
              lm_content={
                "We are versatile for the reason that we can satisfy our clients on their desired system, this includes: \nItem/Product Inventory \nMessaging platform \nEducational system \nSimple Information System"
              }
              lm_img={`🤑`}
              lm_button={"Learn more"}
            />
          </div>
        </div>
      </section>

      <section id="process">
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
      </section>

      <section id="pricing">
        <div className={style.nav}>
          <nav className={style.nav_bar}>
            <h1>Pricing</h1>
            <img src={"/assets/images/logo.png"} className={style.app_logo} alt="logo" />
          </nav>
        </div>

        <div class={style.PricingContainer}>
          <PriceCard
            pri_card={"Android/IOS"}
            pri_card1={"$ 400"}
            pri_card2={"Price may vary depending on the features and complexity of the system."}
            pri_card3={""}
          />
          <PriceCard
            pri_card={"Android/IOS"}
            pri_card1={"$ 400"}
            pri_card2={"Price may vary depending on the features and complexity of the system."}
            pri_card3={""}
          />
          <PriceCard
            pri_card={"Android/IOS"}
            pri_card1={"$ 400"}
            pri_card2={"Price may vary depending on the features and complexity of the system."}
            pri_card3={""}
          />
        </div>
      </section>

      <section id="why-us">
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
      <section id="join">
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
          Exceed customer expectations and deliver excellent software solutions that transforms data into information and boost the capabilities of their
          workforce.
        </JoinCard>
        <JoinCard title={"Vision"}>
          Our vision is to deliver imaginative and trustworthy software engineering for further innovation and constructive research to improve software
          quality. We value work that is accurate and of the highest quality. In various industries, we wish to be renowned as a dependable, innovtive, and
          user-friendly software service provider.
        </JoinCard>
        <button className={style.buttonReg}>Register</button>
      </section>
      <section id="terms">
        <textarea
          readOnly
          className={style.termsContainer}
          value={`USER AGREEMENT

Welcome to crithm!

These terms and conditions outline the rules and regulations for the use of Crithm's Website, located at crithm.cf.

By accessing this website we assume you accept these terms and conditions. Do not continue to use crithm if you do not agree to take all of the terms and conditions stated on this page.

The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.

Cookies
We employ the use of cookies. By accessing crithm, you agreed to use cookies in agreement with the Crithm's Privacy Policy.

Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.

License
Unless otherwise stated, Crithm and/or its licensors own the intellectual property rights for all material on crithm. All intellectual property rights are reserved. You may access this from crithm for your own personal use subjected to restrictions set in these terms and conditions.

You must not:

Republish material from crithm
Sell, rent or sub-license material from crithm
Reproduce, duplicate or copy material from crithm
Redistribute content from crithm
This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the Terms And Conditions Template.

`}
        />
      </section>
    </div>
  );
};

export default Home;
