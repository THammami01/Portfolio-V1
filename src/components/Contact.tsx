import { FC, useState } from "react";
import { useForm, ValidationError } from '@formspree/react';

interface ContactProps {

}

const Contact: FC<ContactProps> = () => {
  const [state, handleSubmit] = useForm("xlezjydv");
  const [status, setStatus] = useState("");

  const localHandleSubmit = (e: any) => {
    e.preventDefault();

    setStatus("");

    if (!e.target.name.value || !e.target.email.value || !e.target.message.value) {
      setTimeout(() => setStatus("Please fill all the fields first."), 100);
      return;
    }

    handleSubmit(e);
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title main-font" data-aos="fade-in">Connect with <span className="text-blue main-font">Me</span></h2>
        <div className="card-container">
          <div className="card" data-aos="fade-in">
            <i className="fab fa-telegram"></i>
            <h3>Telegram</h3>
            <a href="https://t.me/THammami01" className="text-blue" target="_blank">THammami01</a>
          </div>

          <div className="card" data-aos="fade-in" data-aos-delay="200">
            <i className="fab fa-github"></i
            >
            <h3>GitHub</h3>
            <a href="https://github.com/THammami01" className="text-blue" target="_blank">THammami01</a>
          </div>

          <div className="card" data-aos="fade-in" data-aos-delay="400">
            <i className="fas fa-envelope"></i>
            <h3>Email</h3>
            <a href="mailto:thammami.me@gmail.com" className="text-blue">thammami.me@gmail.com</a>
            {/* <p>tarek.hammami@hortensia-agency.com</p>
            <p>tarekhammami@islaib.u-jendouba.tn</p> */}
          </div>
        </div>

        <form id="contact-form" data-aos="zoom-in" data-aos-delay="300" onSubmit={localHandleSubmit} method="POST">
          {
            state.succeeded ?
              <h2 className="main-font">Message <span className="text-blue main-font">sent successfully</span>.</h2>
              :
              <>
                <h2 className="main-font">Send me a <span className="text-blue main-font">Message</span></h2>

                <div className="form-group">
                  <input type="text" id="name" name="name" placeholder="Name" />
                  {/* <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  /> */}
                </div>

                <div className="form-group">
                  <input type="email" id="email" name="email" placeholder="Your email" />
                  {/* <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  /> */}
                </div>

                <div className="form-group">
                  <textarea name="message" id="message" rows={7} placeholder="Message" style={{ minHeight: "80px" }}></textarea>
                  {/* <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  /> */}
                </div>

                <button type="submit" className="btn-email" disabled={state.submitting}>
                  <span className="default">Send</span>
                </button>

                <div id="status">{status}</div>
              </>
          }
        </form>
      </div>
    </section>
  );
}

export default Contact;