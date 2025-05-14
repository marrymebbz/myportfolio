import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import React from 'react';
import profilepic from './images/profile.jpg';
import Header from './components/Header';
import Footer from './components/Footer';
import NoCodeTools from './components/NoCodeTools';
import DesignTools from './components/DesignTools';
import FrontendTools from './components/FrontendTools';
import OtherTools from './components/OtherTools';
import ProjectsLists from './components/ProjectsLists';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Container className="text-start min-vh-100 px-3 px-md-0" id="about">
        {/* Profile Section */}
        <Row className="border-whitebottom py-5">
          <Col className="d-flex justify-content-center flex-column">
            <p className="mb-0 text-white">Hello, it's me</p>
            <h1 className="text-uppercase fw-bolder text-green">Mary Grace Isonza</h1>
            <p className="text-white">I am an aspiring Full Stack Web Developer with a strong foundation in both front-end and back-end technologies. I am also passionate about building dynamic, user-friendly web applications and eager to apply my skills in real-world projects. With a commitment to continuous learning and growth, I am focused on becoming a versatile and proficient developer.</p>
            <button type="button" className="btn bg-green text-white text-uppercase py-2 px-5 fw-bolder w-50" id="#about">About me</button>
          </Col>
          <Col className="d-flex justify-content-center">
            <img src={profilepic} alt="Mary Grace Isonza" style={{ height: '350px' }} className="rounded-circle" />
          </Col>
        </Row>
        {/* About Section */}
        <Row className="border-whitebottom py-5" id="services">
          <Col>
            <h2 className="text-uppercase fw-bolder text-green text-center">🧑‍💼 ABOUT ME</h2>
            <h3 className="text-white text-center">🚀 Passionate Web Designer & Front-end Developer 🚀</h3>
            <p className="text-white text-center">👋 Hello social community! I'm Grace, a creative and detail-oriented professional with a proven track record in crafting visually compelling and user-friendly web experiences. As a skilled Web Designer and Front-end Developer, I bring a unique blend of design aesthetics and technical expertise to transform ideas into engaging digital solutions.</p>
            <Accordion>
                <Accordion.Item eventKey="0" className="text-white bg-transparent border-top-0 border-start-0 border-end-0">
                  <Accordion.Header className="text-white">🎨 Creative Design</Accordion.Header>
                  <Accordion.Body className="text-white">
                    With a keen eye for aesthetics, I specialize in creating visually stunning interfaces that not only captivate but also enhance user engagement.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="text-white bg-transparent border-top-0 border-start-0 border-end-0">
                  <Accordion.Header className="text-white">💻 Front-end Development</Accordion.Header>
                  <Accordion.Body>
                    Proficient in HTML, CSS, and JavaScript, I bring designs to life with responsive and seamless web development, ensuring optimal user experiences across devices.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="text-white bg-transparent border-top-0 border-start-0 border-end-0">
                  <Accordion.Header className="text-white">🤝 Collaboration</Accordion.Header>
                  <Accordion.Body>
                    I thrive in collaborative environments, working closely with cross-functional teams to understand project goals and deliver solutions that align with business objectives.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="text-white bg-transparent border-top-0 border-start-0 border-end-0">
                  <Accordion.Header className="text-white">🌐 Stay Ahead</Accordion.Header>
                  <Accordion.Body>
                    Committed to staying ahead in the dynamic digital landscape, I keep abreast of industry trends, emerging technologies, and design best practices.
                  </Accordion.Body>
                </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
        {/* Tools Section */}
        <Row className="border-whitebottom py-5" id="tools">
          <Col>
            <h2 className="text-uppercase fw-bolder text-green text-center">🧰 TOOLS</h2>
            <h3 className="text-white text-center">🛠️ My Essential Web Dev Toolbox 🛠️</h3>
            <p className="text-white text-center">From design to deployment, here are the tools I rely on to bring ideas to life with precision and flair.</p>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
              <Row>
                <Col sm={5} className="px-0">
                  <ListGroup>
                    <ListGroup.Item action href="#link1">🧩 Content Management System – No Code</ListGroup.Item>
                    <ListGroup.Item action href="#link2">🎨 Creative Design</ListGroup.Item>
                    <ListGroup.Item action href="#link3">💻 Front-end Web Development</ListGroup.Item>
                    <ListGroup.Item action href="#link4">🧰 Other Tools</ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col sm={7} className="bg-green-opacity h-full d-flex justify-content-center align-items-center flex-column rounded pe-2 pe-md-0">
                  <Tab.Content>
                    <Tab.Pane eventKey="#link1" className="text-white p-3 fw-bold">
                      Manage content effortlessly with intuitive, code-free tools.
                      <NoCodeTools />
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link2" className="text-white p-3 fw-bold">
                      Design stunning visuals with ease and flexibility.
                      <DesignTools />
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link3" className="text-white p-3 fw-bold">
                      Build responsive interfaces using modern web technologies.
                      <FrontendTools />
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link4" className="text-white p-3 fw-bold">
                      Enhance productivity with additional helpful utilities.
                      <OtherTools />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
        </Row>
        {/* Projects Section */}
        <Row className="border-whitebottom py-5" id="projects">
          <Col>
            <h2 className="text-uppercase fw-bolder text-green text-center">📁 PROJECTS</h2>
            <h3 className="text-white text-center">🚀 My Web Development Showcases 🚀</h3>
            <p className="text-white text-center">A collection of real-world projects that highlight my skills in action—from sleek designs to fully functional, responsive websites.</p>
            <ProjectsLists />
          </Col>
        </Row>
        {/* Contact Section */}
        <Row className="py-5" id="contact">
          <Col>
            <h2 className="text-uppercase fw-bolder text-green text-center">📬 CONTACT NOW</h2>
            <h3 className="text-white text-center">💬 Let’s Connect and Collaborate 💬</h3>
            <p className="text-white text-center mb-0">Whether you have a project in mind or just want to say hello, I’m always open to meaningful conversations and creative opportunities.</p>
            <p className="text-white text-center">Reach out at marygraceisonza@gmail.com or send me a direct message. Let's explore how we can create impactful and memorable digital journeys together!</p>
            <Contact />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
