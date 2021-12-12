import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Tilt from "react-parallax-tilt";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import profile from "../../Assets/me.jpg";

function About() {
  return (
  <section>
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{padding: "10px" }}>
          <Col md={8}
            style={{paddingTop: "30px", paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", textAlign: "left", padding: "20px" }}>
              <strong className="gold"> About Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={3}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <Tilt>
              <img src={profile} alt="profile" className="profile-img" />
            </Tilt>
          </Col>
        </Row>
        <h3 style={{justifyContent: "left", padding: "10px"}}>
          <strong className="gold">Professional Skillset </strong>
        </h3>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-java-plain" />
          <Techstack iconName="devicon-python-plain" />
          <Techstack iconName="devicon-javascript-plain" />
          <Techstack iconName="devicon-tailwindcss-plain" />
          <Techstack iconName="devicon-html5-plain" />
          <Techstack iconName="devicon-react-original" />
          <Techstack iconName="devicon-vuejs-plain" />
          <Techstack iconName="devicon-nodejs-plain" />
          <Techstack iconName="devicon-django-plain " />
          <Techstack iconName="devicon-express-original" />
          <Techstack iconName="devicon-mongodb-plain" />
          <Techstack iconName="devicon-mysql-plain" />
          <Techstack iconName="devicon-flutter-plain" />
          <Techstack iconName="devicon-spring-plain" />
          <Techstack iconName="devicon-git-plain" />
        </Row>
        <h3 style={{justifyContent: "left", padding: "10px"}}>
          <strong className="gold">Tools I Use</strong>
        </h3>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-linux-plain" />
          <Techstack iconName="devicon-intellij-plain" />
          <Techstack iconName="devicon-nginx-original" />
          <Techstack iconName="devicon-docker-plain" />
          <Techstack iconName="devicon-github-original" />
          <Techstack iconName="devicon-figma-plain" />
        </Row>
      </Container>
    </Container>
  </section>
  );
}

export default About;
