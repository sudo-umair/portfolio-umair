import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CgWebsite } from 'react-icons/cg';
import { BsGithub } from 'react-icons/bs';

function ProjectCards(props) {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  return (
    <Card className='project-card-view'>
      <div className='project-image-container'>
        {imageLoading && (
          <div className='image-loading-spinner'>
            <div className='spinner'></div>
          </div>
        )}
        {imageError ? (
          <div className='image-error-placeholder'>
            <span>Image not available</span>
          </div>
        ) : (
          <Card.Img
            variant='top'
            src={props.imgPath}
            alt='card-img'
            onLoad={handleImageLoad}
            onError={handleImageError}
            style={{ display: imageLoading ? 'none' : 'block' }}
          />
        )}
      </div>
      <Card.Body style={{ padding: '10px 15px', display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ flex: '1' }}>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: 'justify', textJustify: 'inter-word', hyphens: 'auto' }}>
            {props.description}
          </Card.Text>
        </div>
        <div style={{ marginTop: 'auto', paddingTop: '15px' }}>
          {/* GitHub button - only show if ghLink is provided */}
          {props.ghLink && (
            <Button variant='primary' href={props.ghLink} target='_blank'>
              <BsGithub /> &nbsp;
              {props.isBlog ? 'Blog' : 'GitHub'}
            </Button>
          )}

          {/* Demo button - only show if demoLink is provided and not a blog */}
          {!props.isBlog && props.demoLink && (
            <Button
              variant='primary'
              href={props.demoLink}
              target='_blank'
              style={{ marginLeft: props.ghLink ? '10px' : '0px' }}
            >
              <CgWebsite /> &nbsp;
              {'Demo'}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
