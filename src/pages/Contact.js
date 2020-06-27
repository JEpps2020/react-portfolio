import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Title from "../components/Title";

function Contact() {
  return (
    <div>
      <Container>
        <Row>
          <Col size="md-12">
            <Title children="My Contact Information" />
          </Col>
        </Row>
        <Row>
          <Col size="md-3">
          <img alt="LinkedIn" src="Images/Linkedin.jpg" className="img-fluid" />
          </Col>
          <Col size="md-9">
            <p>
            I am a diligent young professional with acquired knowledge of 
            administrative support functions from unpredictable multicultural environments 
            both domestic and abroad. I maintain strong organizational skills with a desire to 
            contribute effectively in a highly structured mission focused setting. 
            </p>
            <p>
              You can learn more about me by searching my LinkedIn profile, 
              view my projects at my GitHub profile, or sending me an email. 
            </p>
            <p> LinkedIn Profile: <a href="https://www.linkedin.com/in/jepps/">LinkedIn</a>
            </p>
            <p> GitHub Profile: <a href="https://github.com/JEpps2020">GitHub</a>
            </p>
            <p>Email me at epps.jasmine@gmail.com</p>
            <p>Feel free to also access my resume. <a href="Images/J.EppsResume.pdf">Resume</a></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;

