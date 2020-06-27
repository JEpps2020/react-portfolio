import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Title from "../components/Title";

function About() {
  return (
    <div>
      <Container>
        <Row>
          <Col size="md-12">
            <Title children= "Welcome to my portfolio page!"/>
          </Col>
        </Row>
        <Row>
          <Col size="md-3">
          <img alt="Third Culture Kid Diagram" src="images/TCK.jpeg" className="img-fluid" />
          </Col>
          <Col size="md-9">
            <p>
              My name is Jasmine Epps. I am a Foreign-Service Brat who spent the first 18 years of life traveling
              around the world. I attended various international schools abroad, spending my secondary school years
              in Istanbul Turkey. I received my B.A. in International Relations from Tufts University in New England,
              and spent time studying abroad at the University of Cape Town, South Africa-with time leading up to the 2010
              World Cup. I enjoy learning about other cultures and hope to someday settle somewhere permanently abroad.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
