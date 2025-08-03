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
      <Col xs={4} md={2} className='tech-icons' title='JavaScript'>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className='tech-icons' title='TypeScript'>
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className='tech-icons' title='Python'>
        <DiPython />
      </Col>
      <Col xs={4} md={2} className='tech-icons' title='Java'>
        <DiJava />
      </Col>
      <Col xs={4} md={2} className='tech-icons' title='C++'>
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className='tech-icons' title='React'>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className='tech-icons' title='Next.js'>
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className='tech-icons' title='Redux'>
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className='tech-icons' title='Tailwind CSS'>
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className='tech-icons' title='Node.js'>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className='tech-icons' title='Express'>
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className='tech-icons' title='GraphQL'>
        <SiGraphql />
      </Col>
      <Col xs={4} md={2} className='tech-icons' title='MongoDB'>
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className='tech-icons' title='PostgreSQL'>
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className='tech-icons' title='MySQL'>
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className='tech-icons' title='Firebase'>
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className='tech-icons' title='Supabase'>
        <SiSupabase />
      </Col>
      <Col xs={4} md={2} className='tech-icons' title='Expo'>
        <SiExpo />
      </Col>
      <Col xs={4} md={2} className='tech-icons' title='Vercel'>
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className='tech-icons' title='Netlify'>
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className='tech-icons' title='Railway'>
        <SiRailway />
      </Col>
      <Col xs={4} md={2} className='tech-icons' title='Heroku'>
        <SiHeroku />
      </Col>
      <Col xs={4} md={2} className='tech-icons' title='Jest'>
        <SiJest />
      </Col>
      <Col xs={4} md={2} className='tech-icons' title='Playwright'>
        <SiPlaywright />
      </Col>
      <Col xs={4} md={2} className='tech-icons' title='Jira'>
        <SiJira />
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
      <Col xs={4} md={2} className='tech-icons' title='Git'>
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;
