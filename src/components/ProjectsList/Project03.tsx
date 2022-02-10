import { FC } from "react";
import project03Img from "../../img/Project03.png";

interface Project03Props {

}

const Project03: FC<Project03Props> = () => {
  return (
    <div className="project-row" data-aos="fade-up">
      <div className="project-left">
        <img src={project03Img} alt="" />
      </div>
      <div className="project-right">
        <h3>RECTN Movie Recommender</h3>
        <ul className="tech-stack-list">
          <p className="text-grey"><b>Stack: </b></p>
          <li><span className="iconify" data-icon="logos:nodejs-icon" data-inline="false"></span></li>
          <li><span className="iconify" data-icon="logos:javascript" data-inline="false"></span></li>
          <li><span className="iconify" data-icon="logos:react" data-inline="false"></span></li>
          <li><span className="iconify" data-icon="simple-icons:express" data-inline="false"></span></li>
          <li><span className="iconify" data-icon="logos:python" data-inline="false"></span></li>
          {/* <li><span className="iconify" data-icon="logos:flask" data-inline="false"></span></li> */}
        </ul>

        {/* <p style={{fontSize: ".9rem", margin: ".75rem 0"}}>Project is Undergoing Development.</p> */}

        <div className="project-links">
          <a href="https://rectn.herokuapp.com/" className="btn-blue btn-small hover-bg-light" target="_blank"><span className="iconify" data-icon="charm:link-external"></span> Demo</a>
          <a href="https://github.com/THammami01/RECTN" className="btn-blue-outline btn-small mx-1" target="_blank"> <i className="fab fa-github"></i
          > Code</a>
          {/* <p className="btn-blue-outline btn-small mx-1" style={{ cursor: "initial" }}> <i className="fab fa-github"></i
          > Code is private</p> */}
        </div>
      </div>
    </div>

  );
}

export default Project03;
