import event from './imagegallery/event.jpg'
import subimg1 from './imagegallery/dealer.png'
import subimg2 from './imagegallery/stall.png'
import subimg3 from './imagegallery/launch.png'
import subimg4 from './imagegallery/atlbtl.png'
import eventimg1 from './imagegallery/w1.jpeg'
import eventimg2 from './imagegallery/w2.jpeg'
import eventimg3 from './imagegallery/w3.jpeg'
import eventimg4 from './imagegallery/w4.jpeg'
import eventimg5 from './imagegallery/w5.jpeg'
// import eventimg6 from './imagegallery/w6.jpeg'
// import eventimg7 from './imagegallery/w7.jpeg'
// import eventimg8 from './imagegallery/w8.jpeg'

// import eventimg10 from './imagegallery/w10.jpeg'

// import eventimg13 from './imagegallery/w13.jpeg'

// import eventimg15 from './imagegallery/w15.jpeg'
// import eventimg16 from './imagegallery/w16.jpeg'
import portfolio1 from './images/e1.jpg'
import portfolio2 from './images/e2.jpg'
import portfolio3 from './images/e3.jpg'
import portfolio4 from './images/e4.jpg'
import portfolio5 from './images/e5.jpg'
import portfolio6 from './images/e6.jpg'
import portfolio7 from './images/e7.jpg'
// import portfolio8 from './images/e8.jpg'
// import portfolio9 from './images/e9.jpg'
// import portfolio10 from './images/e10.jpg'
// import portfolio11 from './images/e11.jpg'
// import portfolio12 from './images/e12.jpg'

// import portfolio16 from './images/e16.jpg'

import React from 'react';



function Event1() {

    const headerStyle = {
        backgroundImage: `url(${event})`,
        backgroundSize: '1297px',
        backgroundAttachment: 'fixed',
        height: '30vh',
        position: 'relative',
    };

    const headingStyle = {
        color: '#ffffff',
        fontSize: '2rem',
        textTransform: 'uppercase',
        textAlign: 'center',
    };



    return (
        <>
            <header style={headerStyle}>
                <h1 style={headingStyle}></h1>
            </header>
            <div className="container">
                <h1 className="big-heading">Events:Unforgettable moments, boundless possibilities</h1>
            </div>
            {/* cards */}
            <div class="container">
        <h1 class="mt-5 text-white text-center">Digital Marketing</h1>
        <h3 class="mt-3 text-white text-center">What We Offer</h3>
        <div class="row mt-4">
          <div class="col-md-3">
            <a href="https://chat.openai.com/">
              <img src={subimg1} alt="Image 1" class="img-fluid" />
            </a>
          </div>
          <div class="col-md-3">
            <a href="https://chat.openai.com/">
              <img src={subimg2} alt="Image 1" class="img-fluid" />
            </a>
          </div>
          <div class="col-md-3">
            <a href="https://chat.openai.com/">
              <img src={subimg3} alt="Image 1" class="img-fluid" />
            </a>
          </div>
          <div class="col-md-3">
            <a href="https://chat.openai.com/">
              <img src={subimg4} alt="Image 1" class="img-fluid" />
            </a>
          </div>
        </div>
      </div>


            {/* cards */}

            {/* portfolio */}
            <div class="portfolio">
                <h1 style={{ textAlign: 'center', color: 'white', margin: '50px' }}>Our Portfolio</h1>
                <div class="row">
                    <div class="col-md-3">
                        <div class="image-container">
                            <img src={portfolio1} alt="Image 1" />
                            <div class="overlay">
                                <div class="overlay-content">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="image-container">
                            <img src={portfolio2} alt="Image 2" />
                            <div class="overlay">
                                <div class="overlay-content">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="image-container">
                            <img src={portfolio3} alt="Image 3" />
                            <div class="overlay">
                                <div class="overlay-content">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="image-container">
                            <img src={portfolio4} alt="Image 4" />
                            <div class="overlay">
                                <div class="overlay-content">

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="row">
                    <div class="col-md-3">
                        <div class="image-container">
                            <img src={portfolio5} alt="Image 1" />
                            <div class="overlay">
                                <div class="overlay-content">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="image-container">
                            <img src={portfolio6} alt="Image 2" />
                            <div class="overlay">
                                <div class="overlay-content">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="image-container">
                            <img src={portfolio7} alt="Image 3" />
                            <div class="overlay">
                                <div class="overlay-content">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="image-container">
                            <img src={eventimg5} alt="Image 4" />
                            <div class="overlay">
                                <div class="overlay-content">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <div class="image-container">
                            <img src={eventimg4} alt="Image 1" />
                            <div class="overlay">
                                <div class="overlay-content">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="image-container">
                            <img src={eventimg3} alt="Image 2" />
                            <div class="overlay">
                                <div class="overlay-content">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="image-container">
                            <img src={eventimg2} alt="Image 3" />
                            <div class="overlay">
                                <div class="overlay-content">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="image-container">
                            <img src={eventimg1} alt="Image 4" />
                            <div class="overlay">
                                <div class="overlay-content">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* portfolio */}
           




        </>
    );
}

export default Event1
