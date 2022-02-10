import { FC } from "react";

interface HeaderProps {

}

const Header: FC<HeaderProps> = () => {
  return (
    <>
      <header id="header" style={{ paddingBottom: "5rem" }}>
        <div id="stars-container">
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
        </div>
        
        <div className="seperator-skew">
          <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <polygon className="fill-white" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>

        <div id="particles-js">
          <nav id="nav" data-aos="fade-in">
            <div className="container nav-container">
              <p id="logo">
                <span style={{ fontFamily: 'AquireFont', fontSize: '1.5rem', color: "#3b82f6", letterSpacing: ".15rem" }}>TH01</span>
              </p>
              <ul className="hide-for-mobile nav-links flex">
                <li>
                  <a href="#projects" className="link">
                    <i className="fas fa-code"></i> Projects
                  </a>
                </li>
                <li>
                  <a href="#skills-title" className="link"
                  ><i className="fas fa-tools"></i> Toolset</a
                  >
                </li>
                <li>
                  <a href="#education" className="link"
                  ><i className="fas fa-user-graduate"></i> Education</a
                  >
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1yLVIlHDfogVpU_sytkuixqnHhTRHkJbe/view?usp=sharing"
                    className="link"
                    target="_blank"
                  ><i className="fas fa-file"></i> CV</a
                  >
                </li>
                <li>
                  <a href="#contact" className="link"
                  ><i className="fas fa-envelope"></i> Contact</a
                  >
                </li>
              </ul>
            </div>


            <div className="mobile-menu hide-for-desktop">


              <div className="container">
                <div className="mobile-menu-links">
                  <ul className="flex">
                    <li>
                      <a href="#projects" className="link blue-hover"
                      >Projects</a
                      >
                    </li>
                    <li>
                      <a href="#skills-title" className="link blue-hover"
                      >Toolset</a
                      >
                    </li>
                    <li>
                      <a href="https://drive.google.com/file/d/1yLVIlHDfogVpU_sytkuixqnHhTRHkJbe/view?usp=sharing" className="link blue-hover" target="_blank"
                      >CV</a
                      >
                    </li>
                    <li>
                      <a href="#contact" className="link blue-hover"
                      >Contact</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>

          <div className="hero">
            <div data-aos="fade-up">
              <h1 className="h1" style={{ marginTop: "5rem" }}>
                Hi<span style={{ fontFamily: "Alfa Slab One" }}>,</span> I'm <span className="main-font text-blue">Tarek</span>
              </h1>
              <p className="student" id="student" style={{ fontSize: "1.05rem", lineHeight: "2rem" }}>
                I'm a <span style={{ borderBottom: "1px solid white" }}>Junior Software Developer</span> at <a href="https://www.hortensia-agency.tn/" className="blue-link-underline" target="_blank">Hortensia</a> digital agency,<br />a part-time <span style={{ borderBottom: "1px solid white" }}>Freelencer</span>,<br />and a <span style={{ borderBottom: "1px solid white" }}>CS Student</span> at <a href="http://www.islaib.rnu.tn/Fr/actualit%C3%A9s-et-ev%C3%A9nements_7_643" className="blue-link-underline" target="_blank">the HIALCS of Beja</a>.
              </p>
              <div className="hero-btns">
                <a href="#projects" className="btn-blue"><i className="fas fa-code"></i> Projects</a>

                <a href="https://github.com/THammami01" className="btn-blue-outline mx-1" id="projects-btn"
                  target="_blank"><i className="fab fa-github"></i> Github</a
                >

                <a href="https://drive.google.com/drive/u/0/folders/1CZXZMKrixa3LJu56_nXz-NAAMB7Wr7Dd" className="btn-blue-outline" id="certificates-btn"
                  target="_blank">

                  <span className="iconify" data-icon="clarity:certificate-solid"></span> Certificates</a
                >
              </div>
            </div>
          </div>

          <div className="socials" data-aos="fade-in">
            <ul>
              <li className="bg-blue">
                <a href="https://t.me/THammami01"
                  target="_blank"><span className="socials-text">Telegram</span><i className="fab fa-telegram fa-2x"></i
                  ></a>
              </li>
              <li className="bg-dark-grey"> <a href="https://github.com/THammami01"
                target="_blank"><span className="socials-text">GitHub</span><i className="fab fa-github fa-2x"></i
                ></a></li>
              <li className="bg-white"><a className="text-dark-grey" href="mailto:thammami.me@gmail.com"><span className="socials-text">Email</span><i className="fas fa-envelope fa-2x"></i></a></li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;