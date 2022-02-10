import { FC } from "react";

interface FooterProps {

}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-flex">
          <p id="developed-by">Developed with <span className="iconify" data-icon="bi:balloon-heart-fill" data-inline="false"></span><br />by Tarek Hammami</p>
          {/* <img src="/img/logo.png" alt="logo" id="logo-footer"> */}

          <div className="footer-icon-links">
            <a href="https://t.me/THammami01"
              target="_blank"><i className="fab fa-telegram fa-2x"></i
              ></a>
            <a href="https://github.com/THammami01"
              target="_blank"><i className="fab fa-github fa-2x"></i
              ></a>
            <a href="mailto:thammami.me@gmail.com"><i className="fas fa-envelope fa-2x"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;