import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Frontline Global"
              description="Full-stack web application for global staffing and recruitment. Built with React.js, Express.js, TypeScript, and Tailwind CSS. Features include user authentication, job posting, candidate management, and Stripe payment integration."
              ghLink="https://github.com/sudo-umair/frontline-global"
              demoLink="https://frontline-global.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Beyond Presence"
              description="AI-powered virtual presence platform frontend. Built with React.js, TypeScript, and AI/ML integration. Features include real-time communication, LiveKit integration, WebSockets, and a reusable UI library with design system."
              ghLink="https://github.com/sudo-umair/beyond-presence"
              demoLink="https://beyond-presence.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="CureVision"
              description="AI-powered wound analysis mobile app built with React Native. Features include automatic wound detection, 3D analysis using AI/ML, one-click wound report generation, and medical documentation capabilities."
              ghLink="https://github.com/sudo-umair/curevision"
              demoLink="https://curevision.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="E-Commerce Platform"
              description="Full-stack e-commerce platform with React.js, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, payment integration, and admin dashboard."
              ghLink="https://github.com/sudo-umair/ecommerce-platform"
              demoLink="https://ecommerce-demo.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Task Management App"
              description="React Native task management application with real-time synchronization, offline support, and team collaboration features. Built with React Native, Firebase, and Redux for state management."
              ghLink="https://github.com/sudo-umair/task-manager"
              demoLink="https://task-manager-app.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Portfolio Website"
              description="Personal portfolio website built with React.js and modern web technologies. Features include responsive design, smooth animations, project showcase, and contact form integration."
              ghLink="https://github.com/sudo-umair/portfolio"
              demoLink="https://muhammadumair.dev/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
