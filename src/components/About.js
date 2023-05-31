import React from 'react';
// import client1 from './images/brand1.jpg';
import { Carousel } from 'react-bootstrap';

import client2 from './images/brand2.png';
import client4 from './images/brand3.png';
import client5 from './images/brand4.jpg';
import client6 from './images/brand5.png';
import client7 from './images/brand6.jpg';
import client8 from './images/brand7.png';
import client9 from './images/brand9.png';
import client10 from './images/brand10.png';
import client11 from './images/brand11.png';
import client12 from './images/brand12.jpg';
// import client13 from './images/brand15.png';
// import client14 from './images/brand16.png';



import aboutimg from './images/aboutus.png';

const About = () => {


  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundImage: `url(${aboutimg})`,
      backgroundSize: 'cover',

    },
    heading: {
      textAlign: 'center',
      color: '#fff',
      fontSize: '32px',
      fontWeight: 'bold',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      marginTop: '-70vh',

    },



  };
  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.heading}>About Us</h1>
      </div>

      
      {/* clients */}
<div id="clientSlider" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <h1 className="text-white text-center" style={{ margin: '50px' }}>Our Clients</h1>
    <div className="carousel-item active">
      <div className="row justify-content-center">
        <div className="col-md-2">
          <img src={client2} className="img-fluid" alt="Client 1" style={{ fontSize: '20px' }} />
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="row justify-content-center">
        <div className="col-md-2">
          <img src={client4} className="img-fluid" alt="Client 2" />
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="row justify-content-center">
        <div className="col-md-2">
          <img src={client5} className="img-fluid" alt="Client 3" />
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="row justify-content-center">
        <div className="col-md-2">
          <img src={client6} className="img-fluid" alt="Client 4" />
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="row justify-content-center">
        <div className="col-md-2">
          <img src={client7} className="img-fluid" alt="Client 5" />
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="row justify-content-center">
        <div className="col-md-2">
          <img src={client8} className="img-fluid" alt="Client 6" />
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="row justify-content-center">
        <div className="col-md-2">
          <img src={client9} className="img-fluid" alt="Client 7" />
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="row justify-content-center">
        <div className="col-md-2">
          <img src={client10} className="img-fluid" alt="Client 8" />
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="row justify-content-center">
        <div className="col-md-2">
          <img src={client11} className="img-fluid" alt="Client 9" />
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="row justify-content-center">
        <div className="col-md-2">
          <img src={client12} className="img-fluid" alt="Client 10" />
        </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#clientSlider" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#clientSlider" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>





      

    </>
  )
}

export default About
