import React from 'react'

import logo1 from './images/image.jpg';
import logo2 from './images/imageb.jpg';
import logo3 from './images/imagec.jpg';
import logo4 from './images/atraski logo new -2.png';


const Main = () => {
  return (
    <>
    {/* "homepage": "https://github.com/atraskiasha/atraskireact.git", */}
      <div className="background">
        <div className="content">
          <h1>Welcome to Atraski</h1>
          <h3 id="heading">Hello, World!
            We believe in inspiring India in a unique and innovative way. Every day,
            we offer a wide range of services across events, travel, blogging, and fashion to bring you the best of what we
            have to offer.We promise to inspire and delight you every step of the way.</h3>
          <p>Connect With Us:</p>
          <ul>
            <li><a href="#"><i className="fa-brands fa-instagram instagram"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-whatsapp whatsapp"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-twitter twitter"></i></a></li>
          </ul>
        </div>
      </div>




      <div
        style={{
          backgroundImage: `url(${logo1})`,
          backgroundSize: '1297px',
          backgroundAttachment: 'fixed',
          height: '100vh',
          position: 'relative',
          /* other CSS styles */
        }}
      >
        <h1></h1>
      </div>

      <div className="container2"
        style={{
          backgroundImage: `url(${logo2})`,
          backgroundSize: '1297px',
          backgroundAttachment: 'fixed',
          height: '100vh',
          position: 'relative',
          /* other CSS styles */
        }}
      >
        <img src="images/imageb.jpg" alt="" />
      </div>

      <div
        style={{
          backgroundImage: `url(${logo3})`,
          backgroundSize: '1297px',
          backgroundAttachment: 'fixed',
          height: '100vh',
          position: 'relative',
          /* other CSS styles */
        }}
      >
        <h1>My component with inline background image</h1>
      </div>

      
    </>


  )
}

export default Main
