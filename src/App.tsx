import Contact from "./components/Contact"
import Education from "./components/Education"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import "./App.scss";
import "./background-animation.scss";

const App = () => {
  return (
    <>
      <Header />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />

      <a id="backToTopBtn" className="btn-blue">
        <i className="fa fa-chevron-up"></i>
      </a>
    </>
  )
}

export default App
