 import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import uiux from "../../Assets/Projects/uiux.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
           <strong className="gold">My Recent Works </strong>
        </h1>
        <p style={{ color: "#d9d9d9" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uiux}
              isBlog={false}
              title="UI/UX Design"
              description="
                I have worked as a UI/UX Designer, creating seamless web and mobile applications for various clients.
              "
              link="https://github.com/ibrahimnkya"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={uiux}
                isBlog={false}
                title="UI/UX Design"
                description="
                I have worked as a UI/UX Designer, creating seamless web and mobile applications for various clients.
              "
                link="https://github.com/ibrahimnkya"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={uiux}
                isBlog={false}
                title="UI/UX Design"
                description="
                I have worked as a UI/UX Designer, creating seamless web and mobile applications for various clients.
              "
                link="https://github.com/ibrahimnkya"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={uiux}
                isBlog={false}
                title="UI/UX Design"
                description="
                I have worked as a UI/UX Designer, creating seamless web and mobile applications for various clients.
              "
                link="https://github.com/ibrahimnkya"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={uiux}
                isBlog={false}
                title="UI/UX Design"
                description="
                I have worked as a UI/UX Designer, creating seamless web and mobile applications for various clients.
              "
                link="https://github.com/ibrahimnkya"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={uiux}
                isBlog={false}
                title="UI/UX Design"
                description="
                I have worked as a UI/UX Designer, creating seamless web and mobile applications for various clients.
              "
                link="https://github.com/ibrahimnkya"
            />
          </Col>
        </Row>
        {/*<h1 className="project-heading">*/}
        {/*  My Recent <strong className="gold">Blog </strong> Posts*/}
        {/*</h1>*/}
        {/*<p style={{ color: "#d9d9d9" }}>Do give a read to some of my blogs</p>*/}
        {/*<Row style={{ justifyContent: "center" }}>*/}
        {/*  <Col md={4} className="blog-card">*/}
        {/*    <BlogCard*/}
        {/*      // imgPath={algo}*/}
        {/*      link=""*/}
        {/*      title="Cracking Interview"*/}
        {/*      site="gitbook.com"*/}
        {/*    />*/}
        {/*  </Col>*/}
        {/*  <Col md={4} className="blog-card">*/}
        {/*    <BlogCard*/}
        {/*      // imgPath={plant}*/}
        {/*      link="https://medium.com/jovianml/plant-ai-c8fc95ed90e6"*/}
        {/*      title="Plant AI"*/}
        {/*      site="medium.com"*/}
        {/*    />*/}
        {/*  </Col>*/}
        {/*</Row>*/}
      </Container>
    </Container>
  );
}

export default Projects;
