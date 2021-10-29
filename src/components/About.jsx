import React, { useState } from "react";
import Modal from "react-modal";
import Brand from "./Brand";

Modal.setAppElement("#root");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="tokyo_tm_about">
        <div className="about_image">
          <img src="assets/img/slider/4.png" alt="about" />
        </div>
        {/* END ABOUT IMAGE */}
        <div className="description">
          <h3 className="name">
            Santiago Zapata
            <h6>Software Developer</h6>
          </h3>
          <div className="description_inner">
            <div className="left">
              <p>
                Highly motivated, task-driven, self-starting programmer. Familiar with development and deployment process for many web-based, mobile and native technologies.
              </p>
              <div className="tokyo_tm_button">
                <button onClick={toggleModal} className="ib-button">
                  Read More
                </button>
              </div>
              {/* END TOKYO BUTTON */}
            </div>
            {/* END LEFT */}
            <div className="right">
              <ul>
                <li>
                  <p>
                    <span>Age:</span>22
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email:</span>
                    <a href="mailto:mail@gmail.com">gelatina@cosmica.dev</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Phone:</span>
                    <a href="tel:+770221770505">+57 322 245-7476</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Github:</span>
                    <a href="https://github.com/gelatinaCosmica" target="_blank.">/gelatinaCosmica</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Freelance:</span>Available
                  </p>
                </li>
              </ul>
              {/* END UL */}
            </div>
            {/* END RIGHT */}
          </div>
          {/* END DESCRIPTION INNER */}
        </div>
      </div>

      {/* START ABOUT POPUP BOX */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_about">
          <button className="close-modal" onClick={toggleModal}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END POPUP CLOSE BUTTON */}
          <div className="box-inner">
            <div className="description_wrap scrollable">
              <div className="my_box">
                <div className="left">
                  <div className="about_title">
                    <h3>Skills</h3>
                  </div>
                  {/* END ABOUT TITLE */}

                  <div className="tokyo_progress">
                    <div className="progress_inner" data-value="80">
                      <span>
                        <span className="label">Node</span>
                        <span className="number">80%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" style={{ width: 80 + '%' }}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="80">
                      <span>
                        <span className="label">React</span>
                        <span className="number">80%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" style={{ width: 80 + '%' }}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="75">
                      <span>
                        <span className="label">Mongo</span>
                        <span className="number">75%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" style={{ width: 75 + '%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>


                  {/* END PROGRESS */}
                </div>
                <div className="left">
                  <div className="about_title">
                    <h3>Skills</h3>
                    {/* <br /> */}
                  </div>
                  {/* END ABOUT TITLE */}

                  <div className="tokyo_progress">
                    <div className="progress_inner" data-value="80">
                      <span>
                        <span className="label">Node</span>
                        <span className="number">80%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" style={{ width: 80 + '%' }}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="80">
                      <span>
                        <span className="label">React</span>
                        <span className="number">80%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" style={{ width: 80 + '%' }}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="75">
                      <span>
                        <span className="label">Mongo</span>
                        <span className="number">75%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" style={{ width: 75 + '%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* END PROGRESS */}
                </div>
                {/* END LEFT */}

                <div className="right">
                  <div className="about_title">
                    <h3>Language</h3>
                  </div>
                  {/* END TITLE */}
                  <div className="tokyo_progress">
                    <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label">English</span>
                        <span className="number">95%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" style={{ width: 95 + '%' }}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="100">
                      <span>
                        <span className="label">Spanish</span>
                        <span className="number">100%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" style={{ width: 100 + '%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* EDN TOKYO PROGRESS */}
                </div>
                {/* END RIGHT */}
              </div>
              {/* END MYBOX */}

              <div className="counter">
                <div className="about_title">
                  <h3>Fun Facts</h3>
                </div>
                <ul>
                  <li>
                    <div className="list_inner">
                      <h3>777+</h3>
                      <span>Projects Completed</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>3K</h3>
                      <span>Happy Clients</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>9K+</h3>
                      <span>Lines of Code</span>
                    </div>
                  </li>
                </ul>
                {/* END COUNTER CONTENT */}
              </div>
              {/* END COUNTER */}

              <div className="partners">
                <div className="about_title">
                  <h3>Our Partners</h3>
                </div>
                <Brand />
              </div>
              {/* END PARTNER SLIDER */}
            </div>
          </div>
        </div>
      </Modal>
      {/* END ABOUT POPUP BOX */}
    </>
  );
};

export default About;
