import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Particle from '../Particle';
import pdf from '../../assets/resume/Muhammad_Umair_Resume.pdf';
import { AiOutlineDownload } from 'react-icons/ai';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [documentLoading, setDocumentLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(true);
  const [documentError, setDocumentError] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setDocumentLoading(false);
    setDocumentError(false);
    setLoadingProgress(100);
  }

  function onDocumentLoadError(error) {
    console.error('Error loading PDF:', error);
    setDocumentLoading(false);
    setDocumentError(true);
    setLoadingProgress(0);
  }

  function onDocumentLoadProgress({ loaded, total }) {
    if (total > 0) {
      const progress = Math.round((loaded / total) * 100);
      setLoadingProgress(progress);
    }
  }

  function onPageLoadSuccess() {
    setPageLoading(false);
  }

  function onPageLoadError(error) {
    console.error('Error loading page:', error);
    setPageLoading(false);
  }

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setPageLoading(true);
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < numPages) {
      setPageLoading(true);
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <Container fluid className='resume-section'>
        <Particle />

        <Row className='resume' style={{ marginBottom: '30px', justifyContent: 'center' }}>
          <Col xs={12} className='d-flex justify-content-center'>
            <div className='pdf-container'>
              {documentLoading && (
                <div className='pdf-loading-spinner'>
                  <p style={{ color: 'white', fontSize: '16px' }}>Loading Resume... {loadingProgress}%</p>
                  <div className='loading-progress-bar'>
                    <div className='loading-progress-fill' style={{ width: `${loadingProgress}%` }}></div>
                  </div>
                </div>
              )}

              {documentError ? (
                <div className='pdf-error-placeholder'>
                  <span>Failed to load PDF. Please try refreshing the page.</span>
                  <Button
                    variant='outline-primary'
                    onClick={() => window.location.reload()}
                    style={{ marginTop: '15px' }}
                  >
                    Retry
                  </Button>
                </div>
              ) : (
                <Document
                  file={pdf}
                  className='d-flex justify-content-center'
                  onLoadSuccess={onDocumentLoadSuccess}
                  onLoadError={onDocumentLoadError}
                  onLoadProgress={onDocumentLoadProgress}
                  loading=''
                >
                  <div className='pdf-page-container'>
                    {pageLoading && (
                      <div className='page-loading-overlay'>
                        <p style={{ color: 'white', fontSize: '14px', margin: 0 }}>Loading Page...</p>
                      </div>
                    )}
                    <Page
                      key={`page_${currentPage}`}
                      pageNumber={currentPage}
                      scale={width > 786 ? 1.7 : 0.6}
                      onLoadSuccess={onPageLoadSuccess}
                      onLoadError={onPageLoadError}
                      loading=''
                      className={pageLoading ? 'page-loading' : 'page-loaded'}
                    />
                  </div>
                </Document>
              )}
            </div>
          </Col>
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

export default Resume;
