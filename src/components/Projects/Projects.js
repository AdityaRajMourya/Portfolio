import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Placement from "../../Assets/Projects/Placement.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>Here are few projects I've worked on.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Placement}
              isBlog={false}
              title="Placement Office"
              description="Placement Office is a MERN stack project facilitating job placement. Admins can post jobs and manage interview questions, while students can browse jobs, submit resumes, and prepare for interviews."
              ghLink="https://github.com/AdityaRajMourya/Placement-Office"
              // demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
