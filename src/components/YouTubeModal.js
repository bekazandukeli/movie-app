import React from 'react';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function YouTubeModal(props) {
    if(Boolean(props.trailer)) {
        return (
            <Modal
              {...props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              top
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  {props.trailer.name}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <iframe 
                      width="768" 
                      height="315" 
                      src={`https://www.youtube.com/embed/${props.trailer.key}`}
                      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                      allowfullscreen
                      title={props.trailer.id}
                  > 
                  </iframe>
              </Modal.Body>
            </Modal>
          );
    } else return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          top
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                We Could Not Find Trailer For You
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              Try Another Time ^_^
          </Modal.Body>
        </Modal>
      );
    
  }