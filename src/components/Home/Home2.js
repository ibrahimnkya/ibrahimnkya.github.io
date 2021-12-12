import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <div style={{ padding: 50, textAlign: "left" }}>
              <h1>Some Things I've Built</h1>
            </div>
          </Col>
          <Col md={4} className="myAvatar">

          </Col>
        </Row>
        <Row>
          {/*<Col md={12} className="home-about-social">*/}
          {/*  <h1>Get in Touch</h1>*/}
          {/*  <p>*/}
          {/*    Feel free to <span className="gold">connect </span>with me*/}
          {/*  </p>*/}
          {/*  <ul className="home-about-social-links">*/}
          {/*    <li className="social-icons">*/}
          {/*      <a*/}
          {/*        href="https://github.com/ibrahimnkya"*/}
          {/*        target="_blank"*/}
          {/*        rel="noreferrer"*/}
          {/*        className="icon-colour  home-social-icons"*/}
          {/*      >*/}
          {/*        <i className="fab fa-github"></i>*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*    <li className="social-icons">*/}
          {/*      <a*/}
          {/*        href="https://twitter.com/ibrahimnkya"*/}
          {/*        target="_blank"*/}
          {/*        rel="noreferrer"*/}
          {/*        className="icon-colour  home-social-icons"*/}
          {/*      >*/}
          {/*        <i className="fab fa-twitter"></i>*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*    <li className="social-icons">*/}
          {/*      <a*/}
          {/*        href="https://www.linkedin.com/in/ibrahimnkya/"*/}
          {/*        target="_blank"*/}
          {/*        rel="noreferrer"*/}
          {/*        className="icon-colour  home-social-icons"*/}
          {/*      >*/}
          {/*        <i className="fab fa-linkedin-in"></i>*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*    <li className="social-icons">*/}
          {/*      <a*/}
          {/*        href="https://www.instagram.com/brahimnkya"*/}
          {/*        target="_blank"*/}
          {/*        rel="noreferrer"*/}
          {/*        className="icon-colour home-social-icons"*/}
          {/*      >*/}
          {/*        <i className="fab fa-instagram"></i>*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*</Col>*/}
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
