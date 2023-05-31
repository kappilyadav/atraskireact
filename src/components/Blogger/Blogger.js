import React from 'react'
import "./Blogger.scss";
import {Link} from "react-router-dom";

import blogger1 from '../imagegallery/Piyush-1.jpg'
import blogger2 from '../imagegallery/Sumedha-1.jpg'
import blogger3 from '../imagegallery/Simran-2.jpg'
import blogger4 from '../imagegallery/81829159_746328929187181_7991821624035015901_n.jpg'
import blogger5 from '../imagegallery/118189043_650084005620930_6818501205128761498_n.jpg'
import blogger6 from '../imagegallery/ishani.jpg'
import blogger7 from '../imagegallery/IMG_20200301_135909_Bokeh-1-scaled.jpg'
import blogger8 from '../imagegallery/vishnu.jpg'

const Blogger = () => {
  return (
    <div className='bloggers'>
      <h1 className="text-center text-white" style={{ margin: '20px' }}>Blogger's Mela</h1>
      <h3 className="text-center text-white" style={{ margin: '20px' }}>Bloggers who have worked with us!</h3>

      <div className='row bloggers-pay'>
        <div className='col'>
          <img id="blogs-img" src={require("../images/bloggers.png")} alt="blog" />

          <div>
          <Link to="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fatraski.com%2Fevents%2Fbloggers-mela%2F"><i class="fa-brands fa-facebook fa-xl"></i>
          </Link>
          <Link to="https://twitter.com/intent/tweet?text=BLOGGER%26%238217%3BS+MELA+%28Delhi%29&url=https%3A%2F%2Fatraski.com%2Fevents%2Fbloggers-mela%2F"><i class="fa-brands fa-twitter fa-xl"></i>
          </Link>
          <Link to="https://pinterest.com/pin/create/button/?url=https%3A%2F%2Fatraski.com%2Fevents%2Fbloggers-mela%2F&description=BLOGGER%26%238217%3BS+MELA+%28Delhi%29&media=https%3A%2F%2Fatraski.com%2Fwp-content%2Fuploads%2F2023%2F04%2Fbloggers-mela-delhi-templt2-01-thegem-blog-timeline-large.png"><i class="fa-brands fa-pinterest-p fa-xl"></i>
          </Link>
          <Link to="http://tumblr.com/widgets/share/tool?canonicalUrl=https%3A%2F%2Fatraski.com%2Fevents%2Fbloggers-mela%2F"><i class="fa-brands fa-tumblr fa-xl"></i>
          </Link>
          <Link to="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fatraski.com%2Fevents%2Fbloggers-mela%2F&title=BLOGGER%26%238217%3BS+MELA+%28Delhi%29&summary=This+is+the+perfect+place+for+you+whether+you%27ve+begun+a+career+as+a+blogger+and+are+mastering%0D%0Asocial+media+or+if+you+just+want+to+be+one.+This+platform+will+enable+you+to+share+your+experience%0D%0Aand+stories+with+similar+people.+By+doing+this%2C+you+may+join+the+AtBuzz+Bloggers+network+and%0D%0Areceive+direct+collaboration+offers+from+brands.+Join+our+community+and+learn+more+about+us+at+a%0D%0Afun+filled+event.%0D%0A%3Cdiv+class%3D%22small-body%22%3ETheme%3A+Desi+Boho%3C%2Fdiv%3E%0D%0A%3Cdiv%3EActivities+you+will+experience+at+Bloggers+Mela%3A%0D%0A1.+MeetnGreet+with+other+bloggers.%0D%0A2.+Panel+discussion+with+our+guests.%0D%0A3.+Fashion+Show%0D%0A4.+Games%0D%0A5.+Performances%0D%0A6.+Photoshoot%3C%2Fdiv%3E%0D%0A%3Cdiv+class%3D%22small-body%22%3ECity%3A+Delhi%3C%2Fdiv%3E%0D%0AVenue+%3A+Buzzariadukaan%2C%0D%0A%0D%0A%3Ca+href%3D%22https%3A%2F%2Fgoo.gl%2Fmaps%2FTEfMoar9tqb18rgv8%22%3E253+Westend+Marg+Kohinoor+Enclave%2C+Saiyad+ul+Ajaib%2C+New+Delhi%2C+Delhi+110030%3C%2Fa%3E%0D%0A%0D%0ARegistration+Fee%3A+150%2F-%0D%0A%0D%0A%3Ciframe+style%3D%22border%3A+0%3B%22+src%3D%22https%3A%2F%2Fwww.google.com%2Fmaps%2Fembed%3Fpb%3D%211m14%211m8%211m3%211d7011.547703174975%212d77.197759%213d28.516451%213m2%211i1024%212i768%214f13.1%213m3%211m2%211s0x390ce1e318caa7f9%253A0x2caeec53afe486c1%212sKohinoor%2520Enclave%215e0%213m2%211sen%212sin%214v1683698967805%215m2%211sen%212sin%22+width%3D%22600%22+height%3D%22450%22+allowfullscreen%3D%22allowfullscreen%22%3E%3C%2Fiframe%3E"><i class="fa-brands fa-linkedin-in fa-xl"></i>
          </Link>
          <Link to="https://www.reddit.com/submit?url=https%3A%2F%2Fatraski.com%2Fevents%2Fbloggers-mela%2F&title=BLOGGER%26%238217%3BS+MELA+%28Delhi%29"><i class="fa-brands fa-reddit-alien fa-xl"></i>
          </Link>
          </div>
        </div>
        <div className='col'>
          <h2>BLOGGER’S MELA (DELHI)</h2>
          <hr className='hr-blogs' />

          <div className='amount-div'>
            <h4 className='original-amount'>₹250.00</h4>
            <h1 className='discount-amount'>₹150.00</h1>
          </div>

          <p className='amount-para'>
            This is the perfect place for you whether you’ve begun a career as a blogger and are mastering <br />
            social media or if you just want to be one. This platform will enable you to share your experience <br />
            and stories with similar people. By doing this, you may join the AtBuzz Bloggers network and <br />
            receive direct collaboration offers from brands. Join our community and learn more about us at a
            fun filled event.
          </p>

          <p className='theme-para'>
          Theme: Desi Boho
          </p>

          <p>
          Activities you will experience at Bloggers Mela:
          </p>

          <ol>
            <li>
            MeetnGreet with other bloggers.
            </li>
            <li>
            Panel discussion with our guests.
            </li>
            <li>
            Fashion Show
            </li>
            <li>
            Games
            </li>
            <li>
            Performances
            </li>
            <li>
            Photoshoot
            </li>
            <li>
            MeetnGreet with other bloggers.
            </li>
            
          </ol>

          <p className='theme-para'>
          City: Delhi
          </p>

          <p>
          Venue : Buzzariadukaan,
          </p>

          <Link to="https://goo.gl/maps/TEfMoar9tqb18rgv8" target="_blank" 
                rel="noopener noreferrer"> 253 Westend Marg Kohinoor Enclave, Saiyad ul Ajaib, New Delhi, Delhi 110030</Link>
          
        </div>
      </div>







      {/* Gallery  */}
      <div class="bgallery">
        <div class="bgallery-item">
          <img src={blogger1} alt="Image 1" />
          <div class="image-popups">PIYUSH RATHI</div>
        </div>
        <div class="bgallery-item">
          <img src={blogger2} alt="Image 2" />
          <div class="image-popups">SUMEDHA SHARMA</div>
        </div>
        <div class="bgallery-item">
          <img src={blogger3} alt="Image 3" />
          <div class="image-popups">SIMRAN POPTANI</div>
        </div>
        <div class="bgallery-item">
          <img src={blogger4} alt="Image 4" />
          <div class="image-popups">ANMOL WADHWANI</div>
        </div>
        <div class="bgallery-item">
          <img src={blogger5} alt="Image 5" />
          <div class="image-popups">PRARTHANA JAGAN</div>
        </div>
        <div class="bgallery-item">
          <img src={blogger6} alt="Image 6" />
          <div class="image-popups">ISHANI MITRA</div>
        </div>
        <div class="bgallery-item">
          <img src={blogger7} alt="Image 7" />
          <div class="image-popups">HUMA JOAD</div>
        </div>
        <div class="bgallery-item">
          <img src={blogger8} alt="Image 8" />
          <div class="image-popups">VISHNU KAUSHAL</div>
        </div>
      </div>
      {/* Gallery  */}

      <h2 className="text-white text-center" style={{ margin: '50px' }}>What Falls Us Apart</h2>
      <p className="text-white text-center" style={{ margin: '50px' }}>Bloggers Mela has become a highly anticipated and sought-after event for bloggers in
        India, having successfully conducted meet and greet sessions in seven cities. It serves
        as a vibrant hub where bloggers can network, share their personal stories, and gain
        insights and inspiration from the experiences of established bloggers. Through this
        platform, bloggers can form meaningful connections, collaborate on projects, and
        discover new avenues for growth and success in the dynamic world of blogging.
        Bloggers Mela truly encapsulates the spirit of community, creativity, and collaboration
        within the blogging industry.</p>


      <h3 className=" text-white text-center" style={{ margin: '50px' }}>Perks of Registering for Bloggers Mela:</h3>
      <ul className="circle text-white text-center" style={{ margin: '50px', position: 'relative', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
        <h6>● Be a member of AtBuzz bloggers community</h6>
        <h6>● Networking with other bloggers</h6>
        <h6>● Direct contacts with Brands</h6>
        <h6>● Be a part of a fun-filled event</h6>

      </ul>

      {/* upcoming events */}
      <section class="cart">
        <h2>Your Shopping Cart</h2>
        <div class="cart-items">
        </div>
        <div class="cart-total">
          <p>Total: <span id="cart-total-amount">$0.00</span></p>
        </div>
        <div class="checkout">
          <h3>Proceed to Checkout</h3>
          <button id="checkout-btn">Checkout</button>
        </div>
      </section>



      {/* upcoming events */}

    </div>
  )
}

export default Blogger
