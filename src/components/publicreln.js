import React, { useState } from 'react'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';

import offer1 from './imagegallery/mediarel.png'
import offer2 from './imagegallery/eventman.png'
import offer3 from './imagegallery/socialmm.png'
import offer4 from './imagegallery/contentcreation.png'



const Public = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleImageClick = () => {
    setShowModal(true);
  };

//   const modalStyle = `
//   .custom-modal .modal-dialog {
//     max-width: 800px;
//   }
// `;


  return (


    <>
      <Container>
        <h1 className="mt-5 text-white text-center">Public Relation</h1>
        <h3 className="mt-3  text-white text-center">What We Offer</h3>
        <Row className="mt-4">
          <Col md={3}>
            <div className="image-container" onClick={handleImageClick}>
              <img src={offer1} alt="Image 1" className="img-fluid" />
            </div>
          </Col>
          <Col md={3}>
            <div className="image-container" onClick={handleImageClick}>
              <img src={offer2} alt="Image 2" className="img-fluid" />
            </div>
          </Col>
          <Col md={3}>
            <div className="image-container" onClick={handleImageClick}>
              <img src={offer3} alt="Image 3" className="img-fluid" />
            </div>
          </Col>
          <Col md={3}>
            <div className="image-container" onClick={handleImageClick}>
              <img src={offer4} alt="Image 3" className="img-fluid" />
            </div>
          </Col>
        </Row>

        <Modal show={showModal} onHide={handleModalClose} dialogClassName="custom-modal w-1000" >
          <Modal.Header closeButton>
            <Modal.Title>Social Media Marketing:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1>Media Relations</h1>
            <h6>Media relations involves managing the relationship between an organization and the
              media, focusing on building positive interactions, establishing credibility, and effectively
              communicating key messages to the public through various media channels. Media
              relations professionals cultivate relationships with journalists, reporters, and media
              outlets to generate press coverage, secure interviews, and manage media inquiries,
              ensuring accurate and favorable representation of the organization in the media
              landscape. Through strategic media relations efforts, organizations can enhance their
              reputation, manage crisis effectively, and leverage media platforms to reach a wider
              audience, influencing public perception and shaping their brand narrative.</h6>
            <h1>Event Management
              :</h1>
            <h6>Event management encompasses the planning, organization, and execution of various
              types of events, including conferences, trade shows, weddings, and corporate
              gatherings, to create memorable and successful experiences. Event managers handle
              logistics, budgeting, venue selection, vendor coordination, marketing, and attendee
              engagement to ensure smooth operations and deliver impactful events that meet the
              objectives and expectations of clients and participants. With meticulous attention to
              detail, effective communication, and problem-solving skills, event management
              professionals bring together all the elements necessary for a seamless and enjoyable
              event, leaving a lasting impression on attendees.</h6>
            <h1>Social Media Management
            </h1>
            <h6>Social media management involves overseeing and executing a brand's presence
              across various social media platforms, ensuring consistent messaging, engaging
              content, and effective community management. It encompasses tasks such as content
              planning, scheduling, monitoring, and responding to audience interactions, as well as
              analyzing data and performance metrics to optimize social media strategies.

            </h6>
            <h1>Content Creation
            </h1>
            <h6>Content creation is the process of developing and producing valuable and engaging
              material, such as articles, blog posts, videos, infographics, and social media posts, to
              attract and engage a target audience. A strategic approach to content creation involves
              understanding the target audience's needs and preferences, conducting thorough
              research, and delivering high-quality, informative, and captivating content that resonates
              with the audience, ultimately driving traffic, conversions, and brand loyalty.

            </h6>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>










     


    </>
  )
}

export default Public
