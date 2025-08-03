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
      <Col xs={4} md={2} className='tech-icons'>
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiGitlab />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiBitbucket />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiAdobexd />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiJira />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiTrello />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiDiscord />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiZoom />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;
