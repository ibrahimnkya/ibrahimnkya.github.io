import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particle from "../Particle";
import Type from "./Type";
import Bio from "./Bio";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={10} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading-salutation">
                Hi, am
              </h1>

              <h1 className="heading-name">
                <strong className="main-name"> Ibrahim Nkya. </strong>
              </h1>

              <div style={{ paddingLeft: 50, textAlign: "left" }}>
                <Type />
              </div>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Bio />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
