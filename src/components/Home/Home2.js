import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body" style={{ textAlign: "justify" }}>
              Starting with my education I have done my graduation (BCA) from
              Institute Of Innovation In Technology & Management & currently
              pursuing my post-graduation (MCA) from the Jagan Institute of
              Management Studies affiliated with Guru Gobind Singh Indraprastha
              University in Delhi. I am passionate about learning new things. I
              have good academic background in Computer Applications and I'm
              also nourishing my Technical skills.
              <br />
              <br />
              In addition I also run a YouTube channel 'Cloud Kaksha.' On Cloud
              Kaksha, I share educational content focused on cloud computing,
              covering topics such as cloud architecture, deployment strategies,
              and best practices. Through engaging tutorials and insightful
              discussions, my goal is to empower learners to navigate the
              complexities of cloud technology effectively. Join me on Cloud
              Kaksha as we explore the endless possibilities of cloud computing
              together!"
              <br />
              <br /> My strength lies in my attitude to learning more and more
              about internal concepts which in turn enhances my aptitude for a
              subject that I apply to solve problems that lie under the hood and
              are not directly visible. <br />
              <br />
              (Graduation (BCA) And Post Graduation (MCA) Extra Curricular
              activities Experience )<br></br>Ex-President of IT CLUB at IITM ||
              Ex-President of SNKC Committee at IITM || Ex-Member of Grievance
              Redressal Society at IITM || Placement Coordinator (2020-2023) ||
              Member of Geek_Room at JIMS <br />
              <br></br>let's connect!
              <br></br>Reach me on:
              <br />
              Mail me - adityaraj12457@gmail.com
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AdityaRajMourya"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="www.linkedin.com/in/aditya-raj-mourya-905b81242"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_a_adityaaa?igsh=MW81cGo0eHdhbXVkeA%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
