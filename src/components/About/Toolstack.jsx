import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiDocker,
  SiGithub,
  SiAwsamplify,
  SiKubernetes,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { icon: <SiGithub />, label: "GitHub" },
    { icon: <SiVisualstudiocode />, label: "VS Code" },
    { icon: <SiPostman />, label: "Postman" },
    { icon: <SiDocker />, label: "Docker" },
    { icon: <SiKubernetes />, label: "Kubernetes" },
    { icon: <SiAwsamplify />, label: "AWS" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          {tool.icon}
          <div className="tech-label">{tool.label}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
