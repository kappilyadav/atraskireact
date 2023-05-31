import React from 'react'
import offer1 from './imagegallery/socialmedia.png'
import offer2 from './imagegallery/socialmediaad.png'
import offer3 from './imagegallery/seo.png'
const Mice = () => {
  return (
    <div>
      <div class="container">
        <h1 class="mt-5 text-white text-center">MICE</h1>
        <h3 class="mt-3 text-white text-center">What We Offer</h3>
        <div class="row mt-4">
          <div class="col-md-3">
            <a href="https://chat.openai.com/">
              <img src={offer1} alt="Image 1" class="img-fluid" />
            </a>
          </div>
          <div class="col-md-3">
            <a href="https://chat.openai.com/">
              <img src={offer2} alt="Image 1" class="img-fluid" />
            </a>
          </div>
          <div class="col-md-3">
            <a href="https://chat.openai.com/">
              <img src={offer3} alt="Image 1" class="img-fluid" />
            </a>
          </div>
          <div class="col-md-3">
            <a href="https://chat.openai.com/">
              <img src={offer3} alt="Image 1" class="img-fluid" />
            </a>
          </div>
        </div>
      </div>


 {/* footer */}

 <footer class=" text-white">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <p><i class="fa fa-envelope"></i> Email: atraskiabhyudaymajhi@gmail.com</p>
              <p><i class="fa fa-phone"></i> Contact No: 9163720198</p>
              <p><i class="fa fa-phone"></i> Contact No: 7596009785</p>
            </div>
            <div class="col-md-6 text-md-right">
              <p>Atraski India
                O-8, Block B, Chittaranjan Park, New Delhi, Delhi- 110019</p>
              <p>Atraski India (Kolkata Office)
                38 Kamalapur (West)
                Dum Dum Cant, Kolkata - 700028</p>
            </div>
          </div>
        </div>
      </footer>

    </div>
   
  )
}

export default Mice
