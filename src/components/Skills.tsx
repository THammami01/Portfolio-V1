import { FC } from "react";

interface SkillsProps {

}

const Skills: FC<SkillsProps> = () => {
  return (
    <section id="skills" className="skills">
      <div className="seperator-skew-top">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon className="fill-white" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
      <div className="container" data-aos="fade-in">
        <h2 className="text-white main-font" id="skills-title"><span className="text-blue main-font">Tools</span> I use the most</h2>
        <ul className="skills-icons">
          <li><span className="iconify" data-icon="vscode-icons:file-type-html" data-inline="false" data-width="90px" data-height="90px"></span><span>HTML</span></li>
          <li><span className="iconify" data-icon="vscode-icons:file-type-scss" data-inline="false" data-width="90px" data-height="90px"></span><span>SCSS</span></li>
          <li><span className="iconify" data-icon="logos:typescript-icon" data-inline="false" data-width="90px" data-height="90px"></span><span>TypeScript</span></li>
          <li><span className="iconify" data-icon="logos:react" data-inline="false" data-width="90px" data-height="90px"></span><span>React</span></li>
          <li><span className="iconify" data-icon="logos:redux" data-inline="false" data-width="90px" data-height="90px"></span><span>Redux</span></li>
          <li><span className="iconify" data-icon="logos:bootstrap" data-inline="false" data-width="90px" data-height="90px"></span><span>Bootstrap</span></li>
          <li><span className="iconify" data-icon="logos:material-ui" data-inline="false" data-width="90px" data-height="90px"></span><span>Material UI</span></li>
          <li><span className="iconify" data-icon="logos:nodejs-icon" data-inline="false" data-width="90px" data-height="90px"></span><span>Node.js</span></li>
          <li><span className="iconify" data-icon="simple-icons:express" data-inline="false" data-width="90px" data-height="90px"></span><span>Express</span></li>
          <li><span className="iconify" data-icon="vscode-icons:file-type-mongo" data-inline="false" data-width="90px" data-height="90px"></span><span>MongoDB</span></li>
          <li><span className="iconify" data-icon="logos:mysql" data-inline="false" data-width="90px" data-height="90px"></span><span>MySQL</span></li>
          <li><span className="iconify" data-icon="logos:redis" data-inline="false" data-width="90px" data-height="90px"></span><span>Redis</span></li>
          <li><span className="iconify" data-icon="logos:jwt-icon" data-inline="false" data-width="90px" data-height="90px"></span><span>JWT</span></li>
          <li><span className="iconify" data-icon="vscode-icons:file-type-jest" data-inline="false" data-width="90px" data-height="90px"></span><span>Jest</span></li>
          <li><span className="iconify" data-icon="logos:python" data-inline="false" data-width="90px" data-height="90px"></span><span>Python</span></li>
          <li><span className="iconify" data-icon="logos:java" data-inline="false" data-width="90px" data-height="90px"></span><span>Java</span></li>
          <li><span className="iconify" data-icon="logos:ubuntu" data-inline="false" data-width="90px" data-height="90px"></span><span>Ubuntu</span></li>
          <li><span className="iconify" data-icon="codicon:terminal-bash" data-inline="false" data-width="90px" data-height="90px"></span><span>Bash</span></li>
          <li><span className="iconify" data-icon="logos:git-icon" data-inline="false" data-width="90px" data-height="90px"></span><span>Git</span></li>
          <li><span className="iconify" data-icon="vscode-icons:file-type-vscode" data-inline="false" data-width="90px" data-height="90px"></span><span>VS Code</span></li>
          <li><span className="iconify" data-icon="vscode-icons:file-type-docker" data-inline="false" data-width="90px" data-height="90px"></span><span>Docker</span></li>
          <li><span className="iconify" data-icon="vscode-icons:file-type-photoshop" data-inline="false" data-width="90px" data-height="90px"></span><span>Photoshop</span></li>
          <li><span className="iconify" data-icon="grommet-icons:figma" data-inline="false" data-width="90px" data-height="90px"></span><span>Figma</span></li>
          <li><span className="iconify" data-icon="simple-icons:jirasoftware" data-inline="false" data-width="90px" data-height="90px" style={{color: "#0052CC"}}></span><span>Jira</span></li>
          {/* <li><span className="iconify" data-icon="logos:spotify-icon" data-inline="false" data-width="90px" data-height="90px"></span><span>Spotify ;)</span></li> */}
        </ul>
      </div>

      <div className="seperator-skew-bottom">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon className="fill-white" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </section>
  );
}

export default Skills;