import React from 'react'
import "./Footer.css";
import link from "../../images/link.png"
import insta from "../../images/insta.png"
import twitter from "../../images/twitter.png"
import fb from "../../images/fb.png"
import nfc from "../../images/nfclogo.png.png"
import nfcf from "../../images/fimage.png"

import {NavLink as Link} from "react-router-dom"

function Footer() {
  return (
    <> 
    <section className='footer'>
    <div className="contact-us">
    <div className='page-intro testimonials'>
      <h1 className='page-title test-title'>Contact Us</h1>
      <p className='page-info test-info footer-info'>Excited about working with us? We can connect here.
 </p>
<Link to='contactus' className='know-more btn-2 contact-btn'>Let's Connect<svg xmlns="http://www.w3.org/2000/svg" class="right-arrow cross-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
</svg></Link> 
      </div>
    </div>
    </section>
    <div className='c'>
    <section className='endfoooter'>
<div className='footer-flex'>
  <div className='call-1'>
    <a className="footerb" href="#">
    <img src={nfcf} className='footer-img' alt="" />

    </a>
    <h1 className='call-1-info'>Experience the Power of Cutting-Edge Technology Solutions</h1>
    <div className='socialmediaicon'>
      <a target="_blank" className="socialicons" href='https://www.linkedin.com/company/nfc-solutions-india/mycompany/'>
      <img className='sicon' src={link} alt=""/>

      </a>
      <Link className="socialicons" to='#'>
      <img className='sicon' src={insta} alt=""/>
        
        </Link>
        <a target="_blanck" className="socialicons" href='https://mobile.twitter.com/solutions_nfc'>
      <img className='sicon' src={twitter} alt=""/>
        
        </a>
        <Link className="socialicons" to='#'>
        
      <img className='sicon' src={fb} alt=""/>
        </Link>


    </div>

  </div>
  <div className='call-2'>
    <h1 className='call-title pTitle'>Products</h1>
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
    <h1 className='call-title ctitle'>Company</h1>
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
  <div className='call-4 rtitle'>
    <h1 className='call-title'>Resources</h1>
    <div className='call-bio call-bio-3' >
      <ul className='ol'>
       
        <li><Link to="foundation">NFC Foundation</Link></li>
        <li><Link to="#">FAQ</Link></li>
        <li><a target="_blanck"href="https://goo.gl/maps/qfNbrxCKkZoWeX3k6">Office</a></li>

        
    
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
    </div>
    </>
  )
}

export default Footer