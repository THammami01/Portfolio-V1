import { FC } from "react";
import { Project01, Project02, Project03, Project04, Project05 } from "./ProjectsList";

interface ProjectsProps {

}

const Projects: FC<ProjectsProps> = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="main-font">Some <span className="text-blue main-font">Projects</span> I've done/I'm working on</h2>

        <Project01 />
        <Project02 />
        <Project03 />
        <Project04 />
        <Project05 />
      </div>
    </section>
  );
}

export default Projects;
