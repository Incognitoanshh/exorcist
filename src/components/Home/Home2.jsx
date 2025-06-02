import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
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
            <p className="home-about-body">
              I’m a full-stack developer passionate about building scalable,
              secure, and decentralized applications.
              <br />
              <br />I have strong hands-on experience with&nbsp;
              <i>
                <b className="purple">
                  Java, Python, JavaScript, and TypeScript
                </b>
              </i>
              &nbsp;and have also explored&nbsp;
              <b className="purple"> Solidity, Web3, and IPFS </b>
              for blockchain development.
              <br />
              <br />I enjoy building modern UIs with&nbsp;
              <i>
                <b className="purple">React.js</b>
              </i>
              , styling with&nbsp;
              <i>
                <b className="purple">Tailwind CSS</b>
              </i>
              , and deploying containerized apps using&nbsp;
              <i>
                <b className="purple">Docker & Kubernetes</b>
              </i>
              .
              <br />
              <br />
              I’ve worked on smart contracts, authentication systems, NLP tools,
              and cloud-native pipelines using&nbsp;
              <b className="purple">CI/CD, Flask, and IBM Cloud CLI</b>.
              <br />
              <br />
              Currently exploring&nbsp;
              <i>
                <b className="purple">
                  AI-enhanced apps, smart data pipelines, and Ethereum dApps
                </b>
              </i>
              .
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
                  href="https://github.com/Incognitoanshh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/_AmritAns7u"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/amritanshu1403/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/__annnshh__"
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
