import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
  DiVisualstudio,
} from "react-icons/di";
import {
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiDocker,
  SiKubernetes,
  SiSolidity,
  SiEthereum,
  SiLinux,
} from "react-icons/si";

function Techstack() {
  const skills = [
    { icon: <DiJava />, label: "Java" },
    { icon: <DiPython />, label: "Python" },
    { icon: <DiJavascript1 />, label: "JavaScript" },
    { icon: <SiTypescript />, label: "TypeScript" },
    { icon: <DiReact />, label: "React.js" },
    { icon: <SiTailwindcss />, label: "Tailwind CSS" },
    { icon: <SiBootstrap />, label: "Bootstrap" },
    { icon: <SiSolidity />, label: "Solidity" },
    { icon: <SiEthereum />, label: "Ethereum" },
    { icon: <SiDocker />, label: "Docker" },
    { icon: <SiKubernetes />, label: "Kubernetes" },
    { icon: <DiGit />, label: "Git" },
    { icon: <DiHtml5 />, label: "HTML5" },
    { icon: <DiCss3 />, label: "CSS3" },
    { icon: <SiLinux />, label: "Linux" },
    // { icon: <DiVisualstudio />, label: "VS Code" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          {skill.icon}
          <div className="tech-label">{skill.label}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
