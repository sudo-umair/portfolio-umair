import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Particle from '../Particle';
import pdf from '../../Assets/Muhammad_Umair_Resume.pdf';
import { AiOutlineDownload } from 'react-icons/ai';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const goToPrevPage = () => {
    setCurrentPage(currentPage - 1 <= 1 ? 1 : currentPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1 >= numPages ? numPages : currentPage + 1);
  };

  return (
    <div>
      <Container fluid className='resume-section'>
        <Particle />

        <Row className='resume' style={{ marginBottom: '30px' }}>
          <Document file={pdf} className='d-flex justify-content-center' onLoadSuccess={onDocumentLoadSuccess}>
            <Page key={`page_${currentPage}`} pageNumber={currentPage} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        {numPages && (
          <Row
            style={{
              justifyContent: 'center',
              marginTop: '20px',
              marginBottom: '30px',
              position: 'relative',
              zIndex: 1000,
            }}
          >
            <Col xs={12} className='d-flex justify-content-center align-items-center'>
              <Button
                variant='outline-primary'
                onClick={goToPrevPage}
                disabled={currentPage <= 1}
                style={{
                  marginRight: '15px',
                  padding: '8px 12px',
                  position: 'relative',
                  zIndex: 1001,
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <AiOutlineLeft />
              </Button>

              <span
                style={{
                  margin: '0 20px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  position: 'relative',
                  zIndex: 1001,
                }}
              >
                Page {currentPage} of {numPages}
              </span>

              <Button
                variant='outline-primary'
                onClick={goToNextPage}
                disabled={currentPage >= numPages}
                style={{
                  marginLeft: '15px',
                  padding: '8px 12px',
                  position: 'relative',
                  zIndex: 1001,
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <AiOutlineRight />
              </Button>
            </Col>
          </Row>
        )}

        <Row style={{ justifyContent: 'center', position: 'relative', marginTop: '20px' }}>
          <Button variant='primary' href={pdf} target='_blank' style={{ maxWidth: '250px' }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
