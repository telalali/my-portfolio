import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileImage from "../assets/img/profile.jpg";
import "../index.css"; // Import the CSS file with the styles

export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img src={profileImage} alt="Profile" />
          </Col>
          <Col size={12} md={6}>
            <div>
              <h2>About Me</h2>
              <p>
                Although I'm new to website development, I bring a fresh perspective and 
                enthusiasm to the field. While I may not have direct experience, I'm eager 
                to learn and adapt quickly. My background as an accountant equips me 
                with a strong foundation for understanding technology and design 
                principles. I'm committed to honing my skills, staying updated on industry 
                trends, and delivering high-quality results for clients. With dedication and 
                a willingness to learn, I'm excited to embark on this journey in website 
                development and contribute positively to projects.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
