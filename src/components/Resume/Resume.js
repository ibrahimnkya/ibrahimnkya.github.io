import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import ResumeContent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from "../../Assets/IbrahimNkya-Resume.pdf";

function Resume() {
   
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <ResumeContent
              title="Innovator"
              date="2018 - Present"
              content={["Innovating ...."]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <ResumeContent
              title="UI / UX Designer"
              content={[
                "Worked on designing and developing UI/UX solutions",
              ]}
            />
            <ResumeContent
              title="Web Developer"
              content={[
                "Operated on developing the frontend end of the website using Bootstrap, Javascript and backend APIs using Node.js",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <ResumeContent
              title="COMPUTER SCIENCE ENGINEERING"
              date="2020 - Present"
              content={["Pursuing at University of Dar es Salaam - College of Information and Communication Technology (CoICT) "]}
            />
            <ResumeContent
              title="Certified Linux System Administrator"
              date="2020 - Present"
              content={["Awarded from Dar es Salaam Institute of Technology"]}
            />
          
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
