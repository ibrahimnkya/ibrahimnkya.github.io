import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
      <section>
        <Container fluid className="footer">
          <Row>
            <Col md="6" className="footer-copyright">
              <h3> © {year} </h3>
            </Col>
            <Col md="6" className="footer-body">
              <ul className="footer-icons">
                <li className="social-icons">
                  <a
                      href="https://github.com/ibrahimnkya"
                      style={{ color: "white" }}
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li className="social-icons">
                  <a
                      href="https://twitter.com/brahimnkya"
                      style={{ color: "white" }}
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="social-icons">
                  <a
                      href="https://www.linkedin.com/in/ibrahimnkya/"
                      style={{ color: "white" }}
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="social-icons">
                  <a
                      href="https://www.instagram.com/brahimnkya"
                      style={{ color: "white" }}
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
  );
}

export default Footer;
