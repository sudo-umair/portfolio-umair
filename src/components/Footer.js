import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../constants/socialLinks';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className='footer'>
      <Row>
        <Col md='4' className='footer-copywright'>
          <h3>Designed and Developed by Muhammad Umair</h3>
        </Col>
        <Col md='4' className='footer-copywright'>
          <h3>Copyright © {year} MU</h3>
        </Col>
        <Col md='4' className='footer-body'>
          <ul className='footer-icons'>
            <li className='social-icons'>
              <a href={SOCIAL_LINKS.GITHUB.url} style={{ color: 'white' }} target='_blank' rel='noopener noreferrer'>
                <AiFillGithub />
              </a>
            </li>
            <li className='social-icons'>
              <a href={SOCIAL_LINKS.LINKEDIN.url} style={{ color: 'white' }} target='_blank' rel='noopener noreferrer'>
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
