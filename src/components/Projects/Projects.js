import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import portfolio from '../../Assets/Projects/portfolio.png';
import resume from '../../Assets/Projects/resume.png';
import frontlineGlobal from '../../Assets/Projects/frontline-global.png';
import beyondPresence from '../../Assets/Projects/beyond-presence.png';
import curevision from '../../Assets/Projects/curevision.png';

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: 'white' }}>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={frontlineGlobal}
              isBlog={false}
              title='Frontline Global'
              description='Full-stack web application for global staffing and recruitment. Built with React.js, Express.js, TypeScript, and Tailwind CSS. Features include user authentication, job posting, candidate management, and Stripe payment integration.'
              demoLink='https://frontlineglobal.io/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={beyondPresence}
              isBlog={false}
              title='Beyond Presence'
              description='AI-powered virtual presence platform frontend. Built with React.js, TypeScript, and AI/ML integration. Features include real-time communication, LiveKit integration, WebSockets, and a reusable UI library with design system.'
              demoLink='https://www.beyondpresence.ai/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={curevision}
              isBlog={false}
              title='CureVision'
              description='AI-powered wound analysis mobile app built with React Native. Features include automatic wound detection, 3D analysis using AI/ML, one-click wound report generation, and medical documentation capabilities.'
              demoLink='https://curevision.de/en/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title='Portfolio Website'
              description='Personal portfolio website built with React.js, featuring modern UI/UX design, responsive layout, and smooth animations. Includes sections for projects, about, resume, and contact information with particle effects and interactive components.'
              demoLink='https://portfolio-umair-five.vercel.app/'
              ghLink='https://github.com/sudo-umair/portfolio-umair'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={resume}
              isBlog={false}
              title='Professional CV/Resume'
              description='Modern, professional CV/Resume built using LaTeX with the Awesome CV template. Features modular architecture, clean typography, Font Awesome integration, and a matching cover letter template. Optimized for both digital and print formats.'
              ghLink='https://github.com/sudo-umair/cv-umair'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
