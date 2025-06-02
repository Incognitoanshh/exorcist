import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sentimentalImg from "../../assets/Projects/shocked.png"; // Updated path
import pinterestImg from "../../assets/Projects/pinterest.png"; // Updated path
import imdbImg from "../../assets/Projects/imdb.png"; // Updated path
import todoImg from "../../assets/Projects/to-do-list.png"; // Updated path
import ccScraperImg from "../../assets/Projects/cc.png"; // Updated path
import instagramImg from "../../assets/Projects/instagram.png"; // Updated path
import didImage from "../../assets/Projects/9520.jpg"; // Updated path

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={didImage}
              isBlog={false}
              title="Decentralized identity verification System"
              description="Decentralized Identity (DID) projects leverage blockchain technology to create self-sovereign identities, allowing individuals to control their digital identities without relying on central authorities. These systems enhance privacy, security, and user autonomy by enabling secure, verifiable credentials that can be shared selectively with third parties."
              ghLink="https://github.com/Incognitoanshh/Decentralized-Identity-Verification-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sentimentalImg}
              isBlog={false}
              title="Sentimental Analysis"
              description="Sentiment Analysis Web App using RoBERTa. This web application performs sentiment analysis on text input using a pre-trained RoBERTa model from Hugging Face, predicting the sentiment as positive, neutral, or negative."
              ghLink="https://github.com/Incognitoanshh/Sentimental-Analysis"
              demoLink=" "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pinterestImg}
              isBlog={false}
              title="Pinterest Selenium Automation"
              description="Automates various tasks on Pinterest using Selenium WebDriver, simulating user actions like login, search, saving pins, and navigating boards for repetitive tasks."
              ghLink="https://github.com/Incognitoanshh/Pinterest-Selenium-testing"
              demoLink=" "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imdbImg}
              isBlog={false}
              title="IMDb Clone Movie"
              description="Displays movie details such as title, genre, release date, cast, crew, runtime, description, and movie poster. Users can add reviews and ratings."
              ghLink="https://github.com/Incognitoanshh/imdb_clone_movie"
              demoLink=" "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todoImg}
              isBlog={false}
              title="To-Do List"
              description="A simple To-Do List App to manage tasks, showcasing your ability to build interactive user interfaces and handle data."
              ghLink="https://github.com/Incognitoanshh/to-do-list"
              demoLink=" "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ccScraperImg}
              isBlog={false}
              title="CC Scraper"
              description="A credit card scraper built in Python, designed to extract credit card information from various online sources. Intended for educational purposes only."
              ghLink="https://github.com/Incognitoanshh/CC-Scrappers"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={instagramImg}
              isBlog={false}
              title="Instagram Automation"
              description="Automates tasks on Instagram such as posting content, liking, commenting, following/unfollowing users, or scraping data."
              ghLink="https://github.com/Incognitoanshh/Instagram-automation"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
