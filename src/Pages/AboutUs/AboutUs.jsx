import React from 'react';
import './AboutUs.css';
import {NavLink as Link} from "react-router-dom"

import Header from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import aboutusimg from '../../images/aboutusimg.png';
import arrow from '../../images/arrow.png';
import rectangle from "../../images/Rectangle 488.png";
import teamwork from "../../images/teamwork.png";
import innovation from "../../images/innovation.png";
import quality from "../../images/quality.png";
import code from "../../images/code.png";
import idea from "../../images/idea.png";
import right from "../../images/right.png";
import circle from "../../images/circle.png";
import link from "../../images/link.png"
import insta from "../../images/insta.png"
import twitter from "../../images/twitter.png"
import fb from "../../images/fb.png"
import nfc from "../../images/nfclogo.png.png"

const Aboutusbody = () => {
  return (
    <div className='aboutTotal'>
    <div className='aboutusspage'>
        <div className='Asection-1'>
        <div className="aboutimg"></div>
        <div className='aboutoverlay'></div>
        <div className='mission'>
            <div className='mission-head'>
                <span className='blue'>Mission</span><span> and Vision</span>
            </div>
            <div className='mission-desc'>
                <span>We are a high-tech based organization in software development and consultancy services 
                for our prestigious clients. We provide end-to-end business services supporting all aspects of 
                your information strategy. NFC Solutions focuses on creating innovative and excellent results, 
                epitomizing a perfect blend of manpower, software development, corporate training, and communication. 
                We strive hard to provide quality assurance and a competitive edge to your business needs by making it cost effective.</span>
            </div>
            <div className='embark'>
                <span><img src={arrow} alt="" className="graph"  /> Embark on the Journey of Innovative Software Solutions</span>
            </div>
        </div>
        </div>
        <div className='Asection-2'>
            <div className='webelive-circle'>
                <img src={circle} alt="" className="circle"  />
                <h1 className='belong'>We believe In</h1>
            </div>
            <div className='abountusboxflex'>

            
            <div className='box1'>
                <img src={teamwork} alt="" className="teamwork"  />
                <h1>Teamwork</h1>
                <h3>We believe in valuing unique ideas and realizing them through team efforts.</h3>
            </div>
            <div className='box2'>
                <img src={innovation} alt="" className="innovation"  />
                <h1>Innovation</h1>
                <h3>We understand the dynamic nature of cutting-edge technology and hence promise innovative software solutions.</h3>
            </div>
            <div className='box3'>
                <img src={quality} alt="" className="quality"  />
                <h1>Quality</h1>
                <h3>We believe in the perfect blend of skilled resources and innovative technology, thereby offering quality assurance to our esteemed clients.</h3>
            </div>
            </div>
        </div>
        <div className='Asection-3'>
            <span className='blue'>How we make</span> <span>a difference</span>
            <div id='container7'>

            
            <div>  
                <img src={code} alt="" className="code aboutusicons"  /><h1 className='what'>What we do ?</h1>
                <p className='ageb'>We develop customized software solutions using advanced technology for providing quality
services at cost-effective prices. We assure our continuous support through all the stages of
software development. </p>
            </div>
            <div>
                <img src={idea} alt="" className="idea aboutusicons"  /><h1 className='how'>How we do ?</h1>
                <p >We set a practical plan and our competent team executes it in a proficient manner enabling a
smooth development and functioning, thereby attaining desired results.</p>
            </div>
            <div>
                <img src={right} alt="" className="right aboutusicons"  /><h1 className='why'>Why NFC ?</h1>
                <p>We can be the ideal partners in the journey of your product’s digital transformation and
software development. Our valuable experience in the industry and our tech expertise can be beneficial for your business too. </p>
            </div>
            </div>
            {/* <div className='Q'>
                <span className='blue'>Frequently asked </span><span>Questions</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aliquam enim augue </p>
            </div> */}
            
            {/* <div class="accordion">
                <div>
                    <input type="radio" name="example_accordion" id="section1" class="accordion__input">
                    <label for="section1" class="accordion__label">Section #1</label>
                    <div class="accordion__content">
                    <p>Section #1</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sit reiciendis, ipsam quaerat,
                        aperiam perspiciatis ad ullam architecto impedit natus illo nostrum molestias voluptas earum a
                        voluptatibus fugiat fuga facere!
                    </p>
                    </div>
                </div>
                <div>
                    <input type="radio" name="example_accordion" id="section2" class="accordion__input">
                    <label for="section2" class="accordion__label">Section #2</label>
                    <div class="accordion__content">
                    <p>Section #2</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sit reiciendis, ipsam quaerat,
                        aperiam perspiciatis ad ullam architecto impedit natus illo nostrum molestias voluptas earum a
                        voluptatibus fugiat fuga facere!
                    </p>
                    </div>
                </div>
                <div>
                    <input type="radio" name="example_accordion" id="section3" class="accordion__input">
                    <label for="section3" class="accordion__label">Section #3</label>
                    <div class="accordion__content">
                    <p>Section #3</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sit reiciendis, ipsam quaerat,
                        aperiam perspiciatis ad ullam architecto impedit natus illo nostrum molestias voluptas earum a
                        voluptatibus fugiat fuga facere!
                    </p>
                    </div>
                </div>
            </div> */}
</div>
{/* <div className='c'>
    <section className='endfoooter'>
<div className='footer-flex'>
  <div className='call-1'>
    <img src={nfc} className='footer-img' alt=""/>
    <h1 className='call-1-info'>Experience the Power of Cutting-Edge Technology Solutions</h1>
    <div className='socialmediaicon'>
      <Link className="socialicons" to='#'>
      <img className='sicon' src={link} alt=""/>

      </Link>
      <Link className="socialicons" to='#'>
      <img className='sicon' src={insta} alt=""/>
        
        </Link>
        <Link className="socialicons" to='#'>
      <img className='sicon' src={twitter} alt=""/>
        
        </Link>
        <Link className="socialicons" to='#'>
        
      <img className='sicon' src={fb} alt=""/>
        </Link>


    </div>

  </div>
  <div className='call-2'>
    <h1 className='call-title'>Products</h1>
    <div className='call-bio call-bio-1'>
      <ol className='ol'>
      <li><Link to="tasktickettmanagement">TASK-Ticket Management System</Link></li>
      <li><Link to="assetmanagement">Asset Managment Tool</Link></li>
      <li><Link to="reportingtool">Reporting Tool</Link></li>
      <li><Link to="celltowermanagement">Cell Tower Management</Link></li>
      <li><Link to="deliveryez">Delivery EZ</Link></li>

      


      

      </ol>
    </div>
  </div>
  <div className='call-3'>
    <h1 className='call-title'>Company</h1>
    <div className='call-bio call-bio-2'>
      <ul className='ol'>
      <li><Link className="a" to="/">Home</Link></li>
      <li><Link to="aboutus">About Us</Link></li>
      <li><Link to="products">Products</Link></li>
      <li><Link to="customers">Customers</Link></li>
      <li><Link to="careers">Careers</Link></li>
      <li><Link to="contactus">Contact us</Link></li>

 

      </ul>
    </div>
  </div>
  <div className='call-4'>
    <h1 className='call-title'>Resources</h1>
    <div className='call-bio call-bio-3' >
      <ul className='ol'>
       
        <li><Link to="foundation">NFC Foundation</Link></li>
        <li><Link to="#">FAQ</Link></li>
        <li><Link to="#">Office</Link></li>

        
    
      </ul>
    </div>
  </div>
</div>
    </section>
    <div className="ending">
      <div className="border"></div>
      <div className="endFooter">
        <p className='copyright'>© Copyright nfcsolutionsusa. All Rights Reserved</p>
        <div>
        <span className="terms">Terms of Condition</span>
        <span className="privacy">Privacy Policy</span>
        </div>
        </div>
      </div>
    </div> */}
        </div>
        <div className='align-footer'>
       <Footer/>

        </div>
    </div>
    
  )
}
function Aboutus(){
    return(
        <>
        <Header />
        <Aboutusbody />
        {/* <Footer/> */}
        </>
  
    );
  }
export default Aboutus