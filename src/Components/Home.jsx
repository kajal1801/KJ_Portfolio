import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home">
    <div className="upper-right"></div>
    <div className="lower-left"></div>
      <p className="preface">Hello!</p>
      <div className="home-heading">Dynamic Web Developer</div>
      <div className="home-heading">Sparking Passion Through </div>
      <div className="tag">Problem - Solving <div className="tagline"></div></div>
      <div className="tag"><div className="tagline"></div> Community Building</div>
      <p className="preface">
        I&apos;m Kajal, an undergraduate student from Kolkata. I&apos;m an upcoming SDE Intern at Amazon. While my main focus is on Frontend Development, I&apos;m also exploring opportunities in Backend Development.
      </p>
      <div className="btn-container">
        <a href="https://drive.google.com/file/d/1L1GxrdXWSJ5EtaVyWZRxzpTY31JI2Xjx/view?usp=sharing" download="Kajal_Jaiswal_Resume" rel="noreferrer" target="_blank">
        <button className="main-btn" id="resume">
          <div>My Resume</div>
          <div className="sideline">
            <span className="line" id="line11"></span>
            <span className="line" id="line21"></span>
            <span className="line" id="line31"></span>
          </div>
        </button>
        </a>

        <button className="main-btn" id="connect">
          <div>Let&apos;s Connect</div>
          <div className="sideline">
            <span className="sideline-internal"><span className="line" id="line12"></span><span className="icons"><a href="https://www.x.com/kajal_1801" rel="noreferrer" target="_blank"><FaTwitter /></a></span></span>
            <span className="sideline-internal"><span className="line" id="line22"></span><span className="icons"><a href="https://www.linkedin.com/in/kajal1801" rel="noreferrer" target="_blank"><FaLinkedin /></a></span></span>
            <span className="sideline-internal"><span className="line" id="line32"></span><span className="icons"><a href="https://github.com/kajal1801" rel="noreferrer" target="_blank"><FaGithub /></a></span></span>
            <span className="icons"><a href="#"><FaEnvelope /></a></span>
          </div>  
        </button>
      </div>
    </div>
  )
}

export default Home