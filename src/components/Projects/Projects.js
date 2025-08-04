import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import portfolio from '../../Assets/Projects/portfolio.png';
import resume from '../../Assets/Projects/resume.png';
import frontlineGlobal from '../../Assets/Projects/frontline-global.png';
import beyondPresence from '../../Assets/Projects/beyond-presence.png';
import curevision from '../../Assets/Projects/curevision.png';
import engageSwitch from '../../Assets/Projects/engage-switch.png';

const projects = [
  {
    imgPath: beyondPresence,
    title: 'Beyond Presence',
    description:
      'AI-powered virtual presence platform frontend. Built with React.js, TypeScript, and AI/ML integration. Features include real-time communication, LiveKit integration, WebSockets, and a reusable UI library with design system.',
    demoLink: 'https://www.beyondpresence.ai/',
    isBlog: false,
  },
  {
    imgPath: frontlineGlobal,
    title: 'Frontline Global',
    description:
      'Full-stack travel assistance platform built with React.js and Node.js. Features real-time crisis response, emergency assistance, and membership-based travel support services for luxury and business travelers.',
    demoLink: 'https://frontlineglobal.io/',
    isBlog: false,
  },
  {
    imgPath: curevision,
    title: 'CureVision',
    description:
      'AI-powered wound analysis mobile app built with React Native. Features include automatic wound detection, 3D analysis using AI/ML, one-click wound report generation, and medical documentation capabilities.',
    demoLink: 'https://curevision.de/en/',
    isBlog: false,
  },
  {
    imgPath: engageSwitch,
    title: 'Engage Switch',
    description:
      'B2B marketing automation platform for cold email outreach and lead engagement. Built with React.js, featuring email composition tools, campaign management, interactive analytics dashboards, and REST API integration.',
    demoLink: 'https://www.engageswitch.com/',
    isBlog: false,
  },
  {
    imgPath: portfolio,
    title: 'Portfolio Website',
    description:
      'Personal portfolio website built with React.js, featuring modern UI/UX design, responsive layout, and smooth animations. Includes sections for projects, about, resume, and contact information with particle effects and interactive components.',
    demoLink: 'https://portfolio-umair-five.vercel.app/',
    ghLink: 'https://github.com/sudo-umair/portfolio-umair',
    isBlog: false,
  },
  {
    imgPath: resume,
    title: 'Professional CV/Resume',
    description:
      'Modern, professional CV/Resume built using LaTeX with the Awesome CV template. Features modular architecture, clean typography, Font Awesome integration, and a matching cover letter template. Optimized for both digital and print formats.',
    ghLink: 'https://github.com/sudo-umair/cv-umair',
    isBlog: false,
  },
];

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
          {projects.map((project, index) => (
            <Col md={4} className='project-card' key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={project.isBlog}
                title={project.title}
                description={project.description}
                demoLink={project.demoLink}
                ghLink={project.ghLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
