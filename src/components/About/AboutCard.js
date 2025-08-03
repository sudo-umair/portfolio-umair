import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className='purple'>Muhammad Umair </span>
            from <span className='purple'> Rawalpindi, Pakistan.</span>
            <br />
            I am currently employed as a Full Stack Engineer at Codejunkie Co., Ltd.
            <br />
            I have completed Bachelor's in Software Engineering at NUML (National University of Modern Languages).
            <br />
            I am fluent in modern technologies like TypeScript, JavaScript, and React.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className='about-activity'>
              <ImPointRight /> Learning New Technologies
            </li>
            <li className='about-activity'>
              <ImPointRight /> Gaming
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
