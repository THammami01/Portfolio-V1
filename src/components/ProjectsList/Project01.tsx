import { FC } from "react";
import project01Img from "../../img/Project01.png";

interface Project01Props {

}

const Project01: FC<Project01Props> = () => {
  return (
    <div className="project-row" data-aos="fade-up">
      <div className="project-left">
        <img src={project01Img} alt="" />
      </div>
      <div className="project-right">
        <h3>Personal Portfolio</h3>
        <ul className="tech-stack-list">
          <p className="text-grey"><b>Stack: </b></p>
          <li><span className="iconify" data-icon="logos:nodejs-icon" data-inline="false"></span></li>
          <li><span className="iconify" data-icon="logos:typescript-icon" data-inline="false"></span></li>
          <li><span className="iconify" data-icon="logos:react" data-inline="false"></span></li>
        </ul>

        <p style={{ fontSize: ".9rem", margin: ".75rem 0" }}>Project is Undergoing Development.</p>

        <div className="project-links">
          <a href="#" className="btn-blue btn-small hover-bg-light"><span className="iconify" data-icon="charm:link-external"></span> Demo</a>
          <a href="https://github.com/THammami01/Portfolio-V1" className="btn-blue-outline btn-small mx-1" target="_blank"> <i className="fab fa-github"></i
          > Code</a>
          {/* <p className="btn-blue-outline btn-small mx-1" style={{ cursor: "initial" }}> <i className="fab fa-github"></i
          > Code is private</p> */}
        </div>
      </div>
    </div>

  );
}

export default Project01;
