import React from 'react';
import './DomainExpertise.css';
import {NavLink as Link} from "react-router-dom"

import Header from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import domain from '../../images/domain.png';
import settings from '../../images/settings.png'
import approved from '../../images/approved.png'
import team from '../../images/team.png'
import health from '../../images/health.png'
import banking from '../../images/banking.png'
import insurance from '../../images/insurance.png'
import event from '../../images/event.png'
import facility from '../../images/facility.png'
import supply from '../../images/supply.png'
import telecom from '../../images/telecom.png'
import govt from '../../images/govt.png'
import link from "../../images/link.png"
import insta from "../../images/insta.png"
import twitter from "../../images/twitter.png"
import fb from "../../images/fb.png"
import nfc from "../../images/nfclogo.png.png"

const Domainbody = () =>{
    return(
        <div className='domainTotal'>
            <div className='Dsection-1'>
            <img src={domain} alt="" className="domainimg"  />
            <div className='domainoverlay'></div>
            <h1 className='domainhead'>Domain Expertise</h1>
            <div id="container6">
                <div>
                    <img src={settings} alt="" className="settingsimg"  />
                    <h1>Customized Solutions</h1>
                </div>
                <div>
                    <img src={approved} alt="" className="approvedimg"  />
                    <h1>Ensuring Success. Always</h1>
                </div>
                <div>
                    <img src={team} alt="" className="teamimg"  />
                    <h1>Customer-first Mindset</h1>
                </div>
            </div>
            </div>
            
            <div className='Dsection-2'>
                <h1 className='domainhead2'>Domain Expertise</h1>
                <div className='domain1'>
                    <img src={health} alt="" className="healthimg"  />
                    <h1>Pharma & Healthcare</h1>
                    <p>Pharma and healthcare industry requires networking and distributorship of drugs on a very large scale. It also requires medical researches, experiments and transportation of medical equipment to a large number of stakeholders or direct consumers. The technological advancement in software development can help solving various challenges encountered by healthcare industry.</p>
                </div>
                <div className='domain2'>
                    <img src={banking} alt="" className="bankingimg"  />
                    <h1>Banking & Brokerage</h1>
                    <p>Banking and brokerage are both massive industries that cater to a huge amount of people and thus require software that is user friendly and is backed up with cutting edge technology. Hence, we use our technological expertise to understand and work uponthe dynamic requirements of the financial industry, especially banking and brokerage to address our client requirements.</p>
                </div>
                <div className='domain3'>
                    <img src={insurance} alt="" className="insuranceimg"  />
                    <h1>Insurance</h1>
                    <p>Insurance industry serves customers by risk management and provision of protection against sudden and unforeseen losses. Such companies require software development assistance to manage their large and heavy databases of policy applicants and their files. Having a track record of such a huge customer base is a task in itself and thus we provide tracking and management software to our clients in the insurance industry.</p>
                </div>
                <div className='domain4'>
                    <img src={event} alt="" className="eventimg"  />
                    <h1>Event Management</h1>
                    <p>Event Management involves successfully organizing an event from the point of planning and preparing budgets, to the point of overlooking execution and then the final event. Software development tools can help in the management process, planning, taking care
of logistic and production activities. The whole process is quite tedious and hence having a tool/software to ease out the process tends to be of great benefit in the event management industry.</p>  
                </div>
                <div className='domain5'>
                    <img src={facility} alt="" className="facilityimg"  />
                    <h1>Facility Management</h1>
                    <p>Facility Management includes various tasks that are necessary for the smooth everyday functioning of an organization, such as; maintenance, sustaining a healthy work environment, recruitment, managing an order or structure of the organization, etc. We design software that can be customized as per the specific and various requirements of a facility management company. That can further help in the smooth functioning of the various tasks.</p>
                </div>
                <div className='domain6'>
                    <img src={supply} alt="" className="supplyimg"  />
                    <h1>Supply Chain</h1>
                    <p>Supply Chain industry caters in the services of distributing or delivering products or services from the point of its production to the point of various middlemen or consumers involved. It includes companies that deal in warehousing, transportation,distribution, retailers or wholesalers, etc. To manage a system that has multiple supply chains and huge deliveries, is a humongous task and thus taking assistance of user-friendly software can ease out the whole process.</p>
                </div>
                <div className='domain7'>
                    <img src={telecom} alt="" className="telecomimg"  />
                    <h1>Telecom</h1>
                    <p>Telecom industry is one of the most relevant and dynamic industries of our times. It is an amalgamation of various services such as; cable services, internet services, network services, telephone and satellite services etc. Since, the industry is growing and evolving at such a fast pace, having a reliable software to support its various complex processes can be of great help.</p>
                </div>
                <div className='domain8'>
                    <img src={govt} alt="" className="govtimg"  />
                    <h1>Government</h1>
                    <p>Government is an organized community of people who are in charge of successful functioning of a large number of people residing in a state or a country. There are various departments that it is responsible to govern, including, the accounts, the economy, the budget, the new hiring of people, and operations etc. Our company specializes in curating and developing tools that are customized as per the needs of thevarious departments of the government and help in successful management of the same.</p>
                </div>
            </div>
            {/* <div className='Footer3'>
            <section className='footer'>
    <div className="contact-us">
    <div className='page-intro testimonials'>
      <h1 className='page-title test-title'>Contact Us</h1>
      <p className='page-info test-info footer-info'>Excited about working with us? We can connect here.
 </p>
<Link to="contactus" className='know-more btn-2 contact-btn'>Let's Connect<svg xmlns="http://www.w3.org/2000/svg" class="right-arrow cross-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
</svg></Link> 
      </div>
    </div>
    </section>
    <div className='c'>
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
    </div>
            </div> */}
            <div className='dF'>
<Footer/>

            </div>
        </div>
    )
}
function Domain(){
  return(
      <>
      <Header />
      <Domainbody />
 
      
      </>

  );
}
export default Domain