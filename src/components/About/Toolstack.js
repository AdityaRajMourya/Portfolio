import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiDocker,
  SiAzuredevops,
  SiAzurepipelines,
  SiMicrosoftazure,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <br></br>
        <span style={{ fontSize: "14px", color: "white" }}>Docker</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <br></br>
        <span style={{ fontSize: "14px", color: "white" }}>
          Visual studio code
        </span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <br></br>
        <span style={{ fontSize: "14px", color: "white" }}>Postman</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAzuredevops />
        <br></br>
        <span style={{ fontSize: "14px", color: "white" }}>Azure DevOps</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAzurepipelines />
        <br></br>
        <span style={{ fontSize: "14px", color: "white" }}>
          Azure Pipelines
        </span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
        <br></br>
        <span style={{ fontSize: "14px", color: "white" }}>
          Microsoft Azure
        </span>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <br></br>
        <span style={{ fontSize: "14px", color: "white" }}>GitHub</span>
      </Col>
    </Row>
  );
}

export default Toolstack;
