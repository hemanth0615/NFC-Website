import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import sap from "../../images/sap.png";


import test from "../../images/test.png";
import place from "../../images/placement.png";

import orac from "../../images/orac.png";
import {NavLink as Link} from "react-router-dom"
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
import Footer from '../../components/Footer/Footer';
function Sap() {
  return (
    <div>
      <Navbar/>
    
      <header className='mobileheader'>
<div className='content'>
  <div className='left-content'>
    <h1 className='leftheader'>System Application & Products <span className="bluecontent">In Data Processing</span></h1>
    <p className='leftcontent'>The software development for mobile application and other hand-held devices is a process handled by our skilled team as per your business requirements.</p>
    <button className='leftbtn'><a href="#" className='leftbtnlink'>Know More</a></button>
  </div>
</div>
  <div className='headerimgdiv'>
  <img className='headerimg' src={sap} alt=""/>

  </div>
      </header>
      <div className='individulasection'>
        <div className='paragraphs'>
        <p className='para-1'>System Applications and Products in Data Processing (SAP) is the leading global provider of Enterprise Resource Planning (ERP) software. All sizes of companies depend on SAP solutions to better manage their business intelligence, operations planning, and purchasing and materials. An integrated package of business applications and all areas of business operations.</p>
        <p className='para-2'>
        Our solutions incorporate pre-built workflows that are based on line of business (i.e., Accounts Payable, Accounts Receivable, Order Management and Human Resources) and SAP system best practices. By leveraging the power of the SAP Business Workflow engine, we can provide our customers with solutions that are fast, flexible and cost- effective.</p>

        </div>
      </div>
      <footer>
        <div className='intro'>
          <h1 className='introtitle'>More Service</h1>
          <p className='intropara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aliquam enim augue </p>
        </div>
        <div className='domainspage'>

        
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
          <div className='flex-arrow service-arrow'>
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
        <a href='systemsapplicationandproducts' className='block'>
          <img className='icons bg-5' src={vector11} alt=""/>
          <div className='flex-arrow '>
          <p className='block-content service-content'>Systems, Applications & Products</p><svg xmlns="http://www.w3.org/2000/svg" class="arrow vector10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
</svg>
</div>
        </a>
        <a href='oracleapplication' className='block'>
          <img className='icons bg-6' src={orac} alt=""/>
          <div className='flex-arrow service-arrow'>
          <p className='block-content service-content'>Oracle Application</p><svg xmlns="http://www.w3.org/2000/svg" class="arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
</svg>
</div>
        </a>
        <a href='digitalmarketing' className='block'>
          <img className='icons bg-7' src={vector7} alt=""/>
          <div className='flex-arrow '>
          <p className='block-content service-content'>Digital Marketing</p><svg xmlns="http://www.w3.org/2000/svg" class="arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
</svg>
</div>
        </a>
        <a href='trainingandplacement' className='block'>
          <img className='icons bg-8' src={place} alt=""/>
          <div className='flex-arrow '>
          <p className='block-content service-content training'>Training and
placement</p><svg xmlns="http://www.w3.org/2000/svg" class="arrow mar2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
</svg>
</div>
        </a>
        
        
      </div>
      </div>
      </footer>
      <Footer/>
    </div>
  )
}

export default Sap