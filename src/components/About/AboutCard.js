import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign : "justify" }}>
            Hello! My name is Ibrahim and I enjoy creating software solutions. My
            interest in software development started back in 2012 when I and my friend decided to try develop a
            simple student record management system — turns out hacking together a
            custom software solution taught me a lot
            about Algorithms &amp; Design!
          </p>

          <p style={{ textAlign : "justify" }}>
            Fast-forward to today, and I’ve had the privilege of working at{' '}
            <a href="https://gama.co.tz/" style={{ color : "#f8bd08" }}>a corporate start-up based in Tanzania</a>.{' '}
            My main focus these days is building accessible, inclusive products and digital
            experiences at <a href="https://isn.tech/" style={{ color : "#f8bd08" }}>ISN Technoloigies</a> for a variety of
            clients.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
