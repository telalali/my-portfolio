import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.png";
import projImg2 from "../assets/img/project2.png";
import projImg3 from "../assets/img/project3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>The project aims to document your journey as you delve into the fields of web development and mobile app development. As a beginner, you seek to learn fundamental concepts, acquire practical skills, and gain hands-on experience in building websites and mobile applications.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Learning Path: Outline the roadmap you plan to follow, including the technologies, frameworks, and languages you intend to learn.
Documentation: Regularly update your progress, challenges faced, and solutions found. Include code snippets, project demos, and resources utilized.
Projects: Showcase your development projects, starting from simple exercises to more complex applications. Highlight key features, functionalities, and lessons learned from each project.
Reflections: Share personal insights, breakthrough moments, and areas of improvement discovered throughout your learning journey.
Resources: Compile a list of valuable resources such as online courses, tutorials, documentation, and community forums that have contributed to your learning.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Enhanced Skills: Develop proficiency in front-end and back-end web development technologies such as HTML, CSS, JavaScript, React.js, Node.js, and databases.
Mobile App Development: Gain familiarity with mobile app development frameworks like React Native or Flutter, enabling you to build cross-platform applications.
Problem-Solving: Improve problem-solving abilities through troubleshooting coding issues, debugging, and seeking assistance from online communities.
Portfolio Development: Build a portfolio of projects showcasing your capabilities and creativity to potential employers or clients.
Community Engagement: Engage with the developer community through forums, social media platforms, and networking events to expand your knowledge and connections.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
