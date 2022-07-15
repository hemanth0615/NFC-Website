import React from 'react';
import './ContactUs.css';
import Header from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import contact from "../../images/contactus.png"
import link from "../../images/link.png"
import insta from "../../images/insta.png"
import twitter from "../../images/twitter.png"
import fb from "../../images/fb.png"
import nfc from "../../images/nfclogo.png.png"
import sub from "../../images/sub.png"
import {NavLink as Link} from "react-router-dom"
const Contactusbody = () =>{
    return(
    <div className=''>
     
    <div className='Contsect-1'>   
        <img src={contact} alt="" className="contactimg"  />
     
        <div className='conversation'>
            <h1>Start the conversation </h1>
            <p>We look forward to hearing from you about your project or question. Please complete the inquiry form below and we will get back to you as soon as possible.</p>

            <form >
                <label className='firstname'>First Name*</label><br />
                <input className='firstnameinput' type="text" /><br />
                <label className='lastname'>Last Name</label><br />
                <input className='lastnameinput'type="text" /><br />
                <label className='mail' for="email">Email*</label><br />
                <input className='mailinput' type="email" id="email" name="email"></input><br />
                <label className='subject' for="email">Subject*</label><br />
                <textarea className='subjecttext' rows="4" cols="50" name="comment" form="usrform">your subject</textarea><br />
                <label className='message' for="email">Message*</label><br />
                <textarea className='messagetext' rows="4" cols="50" name="comment" >your message</textarea><br />
                <input className='radio' type="radio" id="html" name="fav_language" value="HTML" />
                <label className='accept' for="">I agree to the Terms and Conditions.</label><br />
                <button className='submitbtn'>Submit</button>
            </form>
            </div>
            <div className='Contsect-2'>
            
            </div>
            <div className='Contsect-3'>
            <h1 className='ourlocation'>Our Locations</h1>
            <ul id="accordion">
              <li>
                <label for="first">USA<img src={sub} alt="" className="sub"  /></label>
                <input type="radio" name="accordion" id="first" checked />
                <div className='content'>
                  <p className='address'>Saddlebrook Office Park 11030 Jones Bridge Road Suite 202, Johns Creek, GA 30022</p>
                  <p className='Cinfo'>+1 (630) 836 8067 Info@nfcsolutions.com</p>
                </div>
              </li>
              <li>
                <label for="second">Hyderabad<img src={sub} alt="" className="sub"  /></label>
                <input type="radio" name="accordion" id="second"  />
                <div className='content'>
                  <p className='address'>2nd Floor, MR Prime,
                    Survey No.6, BP Raju Marg,
                    (Behind Ratnadeep Super Market)
                    White Fields, Kondapur,
                    Hyderabad, Telangana – 500084. </p>
                  <p className='Cinfo'>+1 (630) 836 8067 Info@nfcsolutions.com</p>
                </div>
              </li>
            </ul>
            {/* <div className='infodiv'>
                <h1 className='usa'>USA</h1>
                <p className='address'>Saddlebrook Office Park 11030 Jones Bridge Road Suite 202, Johns Creek, GA 30022</p>
                <p className='Cinfo'>+1 (630) 836 8067 Info@nfcsolutions.com</p>
            </div> */}
            </div>
        </div>
        <div className='Footer2'>
        {/* <section className='footer'>
    <div className="contact-us">
    <div className='page-intro testimonials'>
      <h1 className='page-title test-title'>Contact Us</h1>
      <p className='page-info test-info footer-info'>Serving our clients across diverse industriesServing our clients across diverse industries
 </p>
<button className='know-more btn-2 contact-btn'>Let's Connect<svg xmlns="http://www.w3.org/2000/svg" class="right-arrow cross-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
</svg></button> 
      </div>
    </div>
    </section> */}
    {/* <div className='c'>
    <section className='endfoooter'>
<div className='footer-flex'>
  <div className='call-1'>
    <img src={nfc} className='footer-img' alt=""/>
    <h1 className='call-1-info'>Experience the Power of Cutting-Edge Technology Solutions</h1>
    <div className='socialmediaicon'>
      <a className="socialicons" href='#'>
      <img className='sicon' src={link} alt=""/>

      </a>
      <a className="socialicons" href='#'>
      <img className='sicon' src={insta} alt=""/>
        
        </a>
        <a className="socialicons" href='#'>
      <img className='sicon' src={twitter} alt=""/>
        
        </a>
        <a className="socialicons" href='#'>
        
      <img className='sicon' src={fb} alt=""/>
        </a>


    </div>

  </div>
  <div className='call-2'>
    <h1 className='call-title'>Products</h1>
    <div className='call-bio call-bio-1'>
      <ol className='ol'>
      <li><a href="tasktickettmanagement">TASK-Ticket Management System</a></li>
      <li><a href="assetmanagement">Asset Managment Tool</a></li>
      <li><a href="reportingtool">Reporting Tool</a></li>
      <li><a href="celltowermanagment">Cell Tower Management</a></li>
      <li><a href="celltowermanagment">Delivery EZ</a></li>

      


      

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
       
        <li><a href="#">NFC Foundation</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Office</a></li>

        
    
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
        <div className='lF'>
        <Footer/>
        </div>
    </div>
    ) 
}
function Contactus(){
    return(
        <>
        <Header />
        <Contactusbody />
       
        </>
  
    );
  }
export default Contactus