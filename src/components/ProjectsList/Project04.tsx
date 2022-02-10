import { FC } from "react";
import project04Img from "../../img/Project04.gif";

interface Project04Props {

}

const Project04: FC<Project04Props> = () => {
  return (
    <div className="project-row" data-aos="fade-up">
      <div className="project-left">
        <img src={project04Img} alt="" />
      </div>
      <div className="project-right">
        <h3>SG des Relevés de Notes</h3>
        <ul className="tech-stack-list">
          <p className="text-grey"><b>Stack: </b></p>
          <li>
            <span className="iconify" data-icon="logos:java" data-inline="false"></span>
          </li>
        </ul>

        {/* <p style={{fontSize: ".s9rem", margin: ".75rem 0"}}>Project is Undergoing Development.</p> */}

        <div className="project-links">
          <a href="https://github.com/THammami01/SGRN/blob/main/SGRN.exe" className="btn-blue btn-small hover-bg-light" target="_blank"><span className="iconify" data-icon="charm:link-external"></span> Demo</a>
          <a href="https://github.com/THammami01/SGRN" className="btn-blue-outline btn-small mx-1" target="_blank"> <i className="fab fa-github"></i
        > Code</a>
          {/* <p className="btn-blue-outline btn-small mx-1" style={{ cursor: "initial" }}> <i className="fab fa-github"></i
          > Code is private</p> */}
        </div>
      </div>
    </div>
  );
}

export default Project04;
