import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';


// import project1 from './imagegallery/aao.png'
// import project2 from './imagegallery/barbeque.png'
// import project3 from './imagegallery/ducati.png'
// import project4 from './imagegallery/hoichoi.png'
// import project5 from './imagegallery/jewel.png'
// import project6 from './imagegallery/pepnpure.png'

import video1 from './videos/jewel.mp4'
import video2 from './videos/haldiram.mp4'
import video3 from './videos/eazydinner.mp4'




const Work1 = () => {



  return (
    <>





      {/* projects */}
      <div>
        <h2 className="text-center text-white" style={{ marginBottom: '10px' }}>Successful Projects</h2>
        <Row>
          <Col md={4}>
            <Card style={{ marginBottom: '30px' }}>
              <Card.Body style={{ backgroundColor: 'black', position: 'relative' }}>
                <div className="video-overlay">
                  <p className="description text-center text-bold" style={{ marginBottom: '-40px' }}>JewelBox</p>
                </div>
                <video src={video1} autoPlay muted loop className="video-element" />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ marginBottom: '30px' }}>
              <Card.Body style={{ backgroundColor: 'black', position: 'relative' }}>
                <div className="video-overlay">
                  <p className="description text-center text-bold" style={{ marginBottom: '-40px' }}>Haldiram</p>
                </div>
                <video src={video2} autoPlay muted loop className="video-element" />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ marginBottom: '30px' }}>
              <Card.Body style={{ backgroundColor: 'black', position: 'relative' }}>
                <div className="video-overlay">
                  <p className="description text-center text-bold" style={{ marginBottom: '-40px' }}>Eazy Dinner</p>
                </div>
                <video src={video3} autoPlay muted loop className="video-element" />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      {/* projects */}

      {/* project details */}
      <nav className="drop-project text-center">

        <label for="touch"><span>Project details</span></label>
        <input type="checkbox" id="touch" />

        <ul class="slide">
          <li><a href="#">Pep n Pure,Budget: 50,000,Brief:Implementing Digital Marketing for Pep n Pure Results: Company sales increased by 60% .</a></li>
          <li><a href="#">Barbeque Nation,Budget: 50,000,Brief: Launch of “Barbeque in a Box” in North India. Results: Company sales increased by 60%.</a></li>
          <li><a href="#">Hoichoi,Budget: 5,00,000,Brief: Implementing Influencer Marketing for Hoichoi.Results: 20 lakh+ streaming done</a></li>
          <li><a href="#">Ducati,Budget: 10,000,00,Brief: Women bikers rally and tourism.</a></li>
          <li><a href="#">JewelBox,Budget: 10,000,Brief: Implementing Influencer Marketing for JewelBox. Budget: 10,000</a></li>
          <li><a href="#">Aao Nxt,Budget: 20,000,Brief: Women bikers rally and tourism.</a></li>
        </ul>

      </nav>
      {/* project details */}












    </>
  )
}

export default Work1
