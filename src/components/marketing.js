import React, { useState } from 'react'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';

import offer1 from './imagegallery/socialmedia.png'
import offer2 from './imagegallery/socialmediaad.png'
import offer3 from './imagegallery/seo.png'

const Marketing = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleImageClick = () => {
    setShowModal(true);
  };

  const modalStyle = `
  .custom-modal .modal-dialog {
    max-width: 800px;
  }
`;
  return (
    
      <Container>
        <h1 className="mt-5 text-white text-center">Influencer Marketing</h1>
        <h3 className="mt-3  text-white text-center">What We Offer</h3>
        <Row className="mt-4">
          <Col md={4}>
            <div className="image-container" onClick={handleImageClick}>
              <img src={offer1} alt="Image 1" className="img-fluid" />
            </div>
          </Col>
          <Col md={4}>
            <div className="image-container" onClick={handleImageClick}>
              <img src={offer2} alt="Image 2" className="img-fluid" />
            </div>
          </Col>
          <Col md={4}>
            <div className="image-container" onClick={handleImageClick}>
              <img src={offer3} alt="Image 3" className="img-fluid" />
            </div>
          </Col>
        </Row>

        <Modal show={showModal} onHide={handleModalClose} dialogClassName="custom-modal w-1000" >
          <Modal.Header closeButton>
            <Modal.Title>Social Media Marketing:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1>Social Media Marketing:</h1>
            <h6>Social media marketing is an essential tool for businesses to connect with their target audience and build brand awareness. It allows companies to reach a wide range of potential customers with tailored messages and engaging content, resulting in increased conversions and revenue growth. By leveraging the power of social media, businesses can foster meaningful customer relationships and stay competitive in the digital landscape.</h6>
            <h1>Social Media Advertising
              :</h1>
            <h6>Social media advertising provides businesses with a highly effective way to reach and
              engage their target audience, thanks to the vast user base and advanced targeting
              options available on platforms like Facebook, Instagram, Twitter, and LinkedIn. Social
              media advertising also offers detailed analytics and reporting, enabling businesses to
              track the performance of their ads in real-time. This data-driven approach allows for
              continuous optimization, ensuring that ad campaigns are cost-effective and delivering
              the desired results.</h6>
            <h1>Search Engine Optimization:</h1>
            <h6>Search Engine Optimization (SEO) is a crucial digital marketing strategy aimed at
              improving a website's visibility and organic search rankings on search engine result
              pages. By optimizing various aspects of a website, such as content, keywords, meta
              tags, and backlinks, SEO helps businesses attract more targeted organic traffic and
              increase their chances of being discovered by potential customers. Effective SEO
              practices also enhance the user experience, making websites more user-friendly,
              accessible, and navigable, ultimately leading to higher engagement, conversions, and
              overall online success.
            </h6>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>









    
  )
}

export default Marketing
