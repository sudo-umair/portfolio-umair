import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { CgCPlusPlus } from 'react-icons/cg';
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit, DiJava } from 'react-icons/di';
import {
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiGraphql,
  SiMysql,
  SiSupabase,
  SiVercel,
  SiNetlify,
  SiRailway,
  SiHeroku,
  SiExpo,
  SiJest,
  SiPlaywright,
  SiJira,
  SiFigma,
  SiAdobexd,
  SiPostman,
} from 'react-icons/si';

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className='tech-icons'>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiPython />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiJava />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiGraphql />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiSupabase />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiExpo />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiRailway />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiHeroku />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiJest />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiPlaywright />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiJira />
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
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;
