import React from 'react'
import "./Oracle.css"

import oracle from "../../images/oracle.png";
import "./Mobileappdev.css"

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
import Navbar from '../../components/Navbar/Navbar';
function Oracle() {
  return (
    <div>
      <Navbar/>
  <header className='mobileheader'>
<div className='content'>
  <div className='left-content'>
    <h1 className='leftheader oracleheader'>Oracle <span className="bluecontent">Application</span></h1>
    <p className='leftcontent'>Rely on our Oracle Application system for integrated and holistic solutions to your most complex business requirements.</p>
    <button className='leftbtn'><a href="#" className='leftbtnlink'>Know More</a></button>
  </div>
</div>
  <div className='headerimgdiv'>
  <img className='headerimg' src={oracle} alt=""/>

  </div>
      </header>
      <div className='individulasection'>
        <div className='paragraphs'>
        <p className='para-1'>Oracle Applications software helps you run your enterprise businesses such as accounting, human resource, or financials witch much ease. But the Oracle Applications Server is the technology that, installs on the server and then integrates other software to work together. Asset Lifecycle Management, Customer Relationship Management, Supply Chain Management etc., are all part of Oracle e-business suite.</p>
        <p className='para-2'>
        Oracle Applications help in responding to the changing demands of the business in a dynamic environment by providing an infrastructure that is scalable, automated and helps in gaining productivity. Allow your business to reach new heights with the powerful and impactful long-term benefits like time saving and cost cutting. 
        </p>

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

export default Oracle