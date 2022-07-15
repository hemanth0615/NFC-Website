import React from 'react'
import "./Services.css"
import {NavLink as Link} from "react-router-dom"
import orac from "../../images/orac.png";
import test from "../../images/test.png";


import Header from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer"
import bg from "../../images/servicebg.png"
import setting from "../../images/settings.png"
import hand from "../../images/hand.png"
import tick from "../../images/tick.png"
import vector1 from "../../images/vector1.png";
import vector2 from "../../images/vector2.png";
import vector3 from "../../images/Vector3.png";
import vector4 from "../../images/Vector4.png";
import vector5 from "../../images/Vector5.png";
import vector6 from "../../images/Vector6.png";
import vector7 from "../../images/Vector7.png";
import vector8 from "../../images/s1.png";
import vector9 from "../../images/s2.png";
import vector10 from "../../images/s3.png";
import vector11 from "../../images/s4.png";
import vector12 from "../../images/s5.png";
import vector13 from "../../images/s6.png";
import a1 from "../../images/a1.png";
import a2 from "../../images/a2.png";
import a3 from "../../images/a3.png";
import a4 from "../../images/a4.png";
import dot from "../../images/dot.png";
import green from "../../images/green.png";
import purple from "../../images/purple.png";
import red from "../../images/red.png";


export const Servicesbody = () => {
  return (
    <div className='service'>
      <div className='bg'>
<img className='service-bg' src={bg} alt=""/>
<div className='serviceoverlay'></div>
      </div>
<div className='top'>
        <h1 className='service-title'>Our Services</h1>
        
          <div className='service-intro'>
        <div className='column1 custom'>
        <img className='service-icon' src={setting} alt=""/>
        <h1 className='service-info'>
        Custom Software Solutions
        </h1>
        </div>
        <div className='column1'>
        <img className='service-icon' src={tick} alt=""/>
        <h1 className='service-info'>
      Quality  Assurance
        </h1>
        </div>
        <div className='column1 column3'>
        <img className='service-icon' src={hand} alt=""/>
        <h1 className='service-info'>
        Customer-first
Mindset
        </h1>
        </div>
        </div>
        </div>
        <div className='our-service'>
        <div className='page-intro servicepage-intro'>
      <h1 className='page-title'><span className='our'>Our</span> Services</h1>
      <p className='page-info'>We provide a wide spectrum of transformative services addressing holistic business needs.
</p>
      </div>
      <div className='service-flex service-page'>
        <a href="websolutions" className='block'>
          <img className='icons bg-1' src={vector1}alt=""/>
          <div className='flex-arrow service-arrow'>
          <p className='block-content website-block service-content'>Web Solutions</p><svg xmlns="http://www.w3.org/2000/svg" class="arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
</svg>
</div>
        </a>
        <a href='creativedesigning' className='block'>
          <img className='icons bg-2' src={vector2}alt=""/>
          <div className='flex-arrow service-arrow'>
          <p className='block-content service-content'>Creative Designing</p><svg xmlns="http://www.w3.org/2000/svg" class="arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
</svg>
</div>
        </a>
        <a href='mobileappdevelopment' className='block'>
          <img className='icons bg-3' src={vector3} alt=""/>
          <div className='flex-arrow service-arrow'>
          <p className='block-content service-content'>Mobile App Development</p><svg xmlns="http://www.w3.org/2000/svg" class="arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
</svg>
</div>
        </a>
        <a href='cybersecurity' className='block'>
          <img className='icons bg-1' src={vector4} alt=""/>
          <div className='flex-arrow service-arrow'>
          <p className='block-content service-content'>Cyber Security</p><svg xmlns="http://www.w3.org/2000/svg" class="arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
</svg>
</div>
        </a>
        <a href='bigdata' className='block'>
          <img className='icons bg-1' src={vector5} alt=""/>
          <div style={{marginTop:"10%"}}className='flex-arrow service-arrow'>
          <p className='block-content  service-content'>Big Data</p><svg xmlns="http://www.w3.org/2000/svg" class="arrow mar" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
</svg>
</div>
        </a>
        <a href='cloudcomputing' className='block'>
          <img className='icons bg-1' src={vector6} alt=""/>
          <div className='flex-arrow service-arrow'>
          <p className='block-content service-content'>Cloud Computing</p><svg xmlns="http://www.w3.org/2000/svg" class="arrow mar2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
</svg>
</div>
        </a>
        <a href='nfcrfidservices' className='block'>
          <img className='icons bg-1' src={vector8} alt=""/>
          <div className='flex-arrow service-arrow'>
          <p className='block-content service-content'>RFID Services</p><svg xmlns="http://www.w3.org/2000/svg" class="arrow mar" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
</svg>
</div>
        </a>
        <a href='enterpriseapplication' className='block'>
          <img className='icons bg-1' src={vector9} alt=""/>
          <div className='flex-arrow service-arrow'>
          <p className='block-content service-content'>Enteprise 
Applications</p><svg xmlns="http://www.w3.org/2000/svg" class="arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
</svg>
</div>
        </a>
        <a href='testingservices' className='block'>
          <img className='icons bg-4' src={test} alt=""/>
          <div className='flex-arrow service-arrow'>
          <p className='block-content service-content'>Testing Services</p><svg xmlns="http://www.w3.org/2000/svg" class="arrow mar2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
</svg>
</div>
        </a>
        <a href='systemsapplicationandproducts' className='block systemblock'>
          <img className='icons bg-5' src={vector11} alt=""/>
          <div className='flex-arrow service-arrow'>
          <p  className='block-content service-content'>Systems, Applications & Products</p><svg xmlns="http://www.w3.org/2000/svg" class="arrow vector10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
</svg>
</div>
        </a>
        <a href='oracleapplication' className='block'>
          <img className='icons bg-7' src={orac} alt=""/>
          <div style={{marginTop:"10%"}} className='flex-arrow service-arrow '>
          <p className='block-content service-content'>Oracle Application</p><svg xmlns="http://www.w3.org/2000/svg" class="arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
</svg>
</div>
        </a>
        <a href='digitalmarketing' className='block'>
          <img className='icons bg-6' src={vector7} alt=""/>
          <div className='flex-arrow '>
          <p className='block-content service-content'>Digital Marketing</p><svg xmlns="http://www.w3.org/2000/svg" class="arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
</svg>
</div>
        </a>
        <a href='trainingandplacement' className='block'>
          <img className='icons bg-8' src={vector13} alt=""/>
          <div className='flex-arrow '>
          <p className='block-content service-content training'>Training and
placement</p><svg xmlns="http://www.w3.org/2000/svg" class="arrow mar2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
</svg>
</div>
        </a>
        
        
      </div>
</div>
<div className='page-intro servicepage-intro'>
      <h1 className='page-title'><span className='our'>Our</span> Approch</h1>
      <p className='page-info'>We follow a step wise framework of project planning to achieve the utmost level of excellence.

</p>
      </div>
      <section  className='section-2 approch-flex'>
        <div className='approch-section'>
         <img className='approch-img' src={a1} alt=''/>
          <h2 className='approch-title'>Requirments</h2>
          
          <p className='approch-info'>This involves understanding the minute details of the business requirements and customizing a framework of a plan to execute a smooth implementation of the product development journey.</p>
          <img className='dot' src={dot} alt=""/>
          <div className='dot-line line1'></div>
           
        </div>   
        <div className='domainSection approch-section'>
         <img className='approch-img' src={a2} alt=''/>
          <h2 className='approch-title'>Designing</h2>
          
          <p className='approch-info'>This
           phase involves analyzing the architectural and technical requirements for the project, on the basis of which design prototypes are created. These are further reviewed by all the stakeholders to see if the design addresses the client requirements competently.</p>
          <img className='dot2' src={green} alt=""/>
          <div className='dot-line line2'></div>

           
        </div>
        <div className='domainSection approch-section'>
         <img className='approch-img' src={a3} alt=''/>
          <h2 className='approch-title'>Implementation</h2>
          
          <p className='approch-info'> This step involves implementation of codes and developing the design as approved by the stakeholders. Moreover, fixing bugs and errors becomes the priority in this phase. The developed work is then analysed for modifications or enhancements. 
          <div className='dot-line line3'></div>

</p>
<img className='dot3' src={purple} alt=""/>
        
          
        </div>
        <div className='domainSection approch-section'>
         <img className='approch-img assure' src={a4} alt=''/>
          <h2 className='approch-title'>Verification</h2>
          
          <p className='approch-info'>After the software is successfully developed, we deploy it in the right testing environment, to check if the project outcomes are in sync with the client requirements. The results bring out the bugs, errors or other discrepancies which are further eliminated.</p>
          <img className='dot4' src={red} alt=""/>
          <div className='dot-line line4'></div>
        
          
        </div>
        <div className='domainSection approch-section'>
         <img className='approch-img' src={a1} alt=''/>
          <h2 className='approch-title'>Maintainance</h2>
          
          <p className='approch-info'>It has been a wonderful and very positive experience for me and my company. We are constantly impressed by their technical expertise. They are always willing to work untirin gly to meet my goals and resolve the most complex of issues. </p>
          <img className='dot5' src={dot} alt=""/>
          <div className='dot-line line5'></div>
        
          
        </div>
      </section>
      </div>
 
  )
}
function Services(){
  return(
      <>
      <Header />
      <Servicesbody />
      <Footer />
      </>

  );
}
export default Services