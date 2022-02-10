import { FC } from "react";
import project02Img from "../../img/Project02.png";

interface Project02Props {

}

const Project02: FC<Project02Props> = () => {
  return (
    <div className="project-row" data-aos="fade-up">
      <div className="project-left">
        <img src={project02Img} alt="" />
      </div>
      <div className="project-right">
        <h3>El Béji E-Shop</h3>
        <ul className="tech-stack-list">
          <p className="text-grey"><b>Stack: </b></p>
          <li><span className="iconify" data-icon="logos:nodejs-icon" data-inline="false"></span></li>
          <li><span className="iconify" data-icon="logos:typescript-icon" data-inline="false"></span></li>
          <li><span className="iconify" data-icon="logos:react" data-inline="false"></span></li>
          <li><span className="iconify" data-icon="simple-icons:express" data-inline="false"></span></li>
          <li><span className="iconify" data-icon="vscode-icons:file-type-mongo" data-inline="false"></span></li>
        </ul>

        <p style={{fontSize: ".9rem", margin: ".75rem 0"}}>Project is Undergoing Development.</p>

        <div className="project-links">
          <a href="https://el-beji.web.app/" className="btn-blue btn-small hover-bg-light" target="_blank"><span className="iconify" data-icon="charm:link-external"></span> Demo</a>
          {/* <a href="https://github.com/THammami01/El-Beji" className="btn-blue-outline btn-small mx-1" target="_blank"> <i className="fab fa-github"></i
        > Code is private</a> */}
          <p className="btn-blue-outline btn-small mx-1" style={{ cursor: "not-allowed" }}> <i className="fab fa-github"></i
          > Private</p>
        </div>
      </div>
    </div>

  );
}

export default Project02;
