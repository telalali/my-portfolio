import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import resume from "../assets/img/resume.pdf"; // Replace with your actual PDF file path

export const Resume = () => {
  return (
    <section className="resume" id="resume">
      <Container>
        <Row>
          <Col>
            <h2>Resume</h2>
            <p>Download my resume to learn more about my skills, experience, and qualifications.</p>
            <div>
               {/* Use Button component from react-bootstrap */}
               <Button variant="primary" href={resume} download="your_resume.pdf">
                Download Resume
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
