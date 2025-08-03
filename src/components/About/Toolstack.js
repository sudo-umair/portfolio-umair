import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiWindows,
  SiLinux,
  SiGithub,
  SiGitlab,
  SiBitbucket,
  SiFigma,
  SiAdobexd,
  SiJira,
  SiTrello,
  SiDiscord,
  SiZoom,
} from 'react-icons/si';

function Toolstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className='tech-icons' title='Mac OS'>
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className='tech-icons' title='Windows'>
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className='tech-icons' title='Linux'>
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className='tech-icons' title='Visual Studio Code'>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className='tech-icons' title='GitHub'>
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className='tech-icons' title='GitLab'>
        <SiGitlab />
      </Col>
      <Col xs={4} md={2} className='tech-icons' title='Bitbucket'>
        <SiBitbucket />
      </Col>
      <Col xs={4} md={2} className='tech-icons' title='Figma'>
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className='tech-icons' title='Adobe XD'>
        <SiAdobexd />
      </Col>
      <Col xs={4} md={2} className='tech-icons' title='Postman'>
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className='tech-icons' title='Jira'>
        <SiJira />
      </Col>
      <Col xs={4} md={2} className='tech-icons' title='Trello'>
        <SiTrello />
      </Col>
      <Col xs={4} md={2} className='tech-icons' title='Slack'>
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className='tech-icons' title='Discord'>
        <SiDiscord />
      </Col>
      <Col xs={4} md={2} className='tech-icons' title='Zoom'>
        <SiZoom />
      </Col>
      <Col xs={4} md={2} className='tech-icons' title='Vercel'>
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;
