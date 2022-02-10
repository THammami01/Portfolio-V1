import { FC } from "react";
import islaibLogo from "../img/islaib-logo.png";

interface EducationProps {

}

const Education: FC<EducationProps> = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="main-font" data-aos="fade-in"><span className="text-blue main-font">Education</span></h2>

        <div className="education-card" data-aos="zoom-in">

          <div className="education-card-column">
            <div className="card-column-image">
              <img src={islaibLogo} alt="" />
            </div>

            <div className="card-column-large">
              <h4 className="education-year">2019 — Present</h4>
              <h4>Higher Institute of Applied Languages and Computer Science, Béja</h4>
              <p>Undergratuate in Software Engineering and Information Systems</p>
              <p>Currently in the Final Year</p>
              {/* <ul>
                <li>Major in computer science</li>
                <li>Minor in networks & security</li>
                <li>Minor in mobile applications</li>
                <li>Science & Engineering Dean's List 2019</li>
              </ul> */}
              <hr />
            </div>
          </div>

          <div className="education-card-column">
            <div className="card-column-image empty">
              {/* <img src="/img/jpc-logo.jpg" alt="" /> */}
            </div>

            <div className="card-column-large">
              <h4 className="education-year">2019</h4>
              <h4>Al-Faraby High School, Mornaguia, Manouba</h4>
              <p>Baccalaureate Degree in Computer Science</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;