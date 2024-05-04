import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <h1 style={{ textAlign: "center" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p
              className="home-about-body"
              style={{ fontSize: 0, textAlign: "justify" }}
            >
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
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
