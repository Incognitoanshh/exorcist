import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I'm <span className="purple">Amritanshu</span> from{" "}
            <span className="purple">Bangalore, India</span>.
            <br />
            I'm currently pursuing my Bachelor's degree at Cambridge Institute
            of Technology.
            <br />
            <br />
            Outside the world of code and development, I actively engage in
            hobbies that keep me both creative and curious:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Immersing in Strategy & Action Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Vibing to Indie and Lo-fi Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Experimenting with New Recipes
            </li>
            <li className="about-activity">
              <ImPointRight /> Following Crypto & Tech Innovations
            </li>
          </ul>

          <p style={{ color: "rgb(155, 126, 172)", marginTop: "1rem" }}>
            "Code with purpose, build with impact."
          </p>
          <footer className="blockquote-footer">Amritanshu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
