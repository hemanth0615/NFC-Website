import React from 'react'
import "./Home.css"
import Header from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import students from "../../images/students.png"
import icon1 from "../../images/icon1.png"
import icon2 from "../../images/icon2.png"
import icon3 from "../../images/icon2.png"
import tool1 from "../../images/tool1.png"
import tool2 from "../../images/tool2.png"
import logo from "../../images/nfclogo.png.png";
import vector1 from "../../images/vector1.png";
import vector2 from "../../images/vector2.png";
import vector3 from "../../images/Vector3.png";
import vector4 from "../../images/Vector4.png";
import vector5 from "../../images/Vector5.png";
import vector6 from "../../images/Vector6.png";
import vector7 from "../../images/Vector7.png";
import com1 from "../../images/company1.png";
import com2 from "../../images/company2.png";
import com3 from "../../images/company3.png";
import com4 from "../../images/company4.png";
import com5 from "../../images/company5.png";
import com6 from "../../images/company6.png";
import com7 from "../../images/company7.png";
import com8 from "../../images/company8.png";
import com9 from "../../images/company9.png";
import com10 from "../../images/company10.png";

import avatar from "../../images/avatar.png"
import blog1 from "../../images/blog1.png"
import blog2 from "../../images/blog2.png"
import blog3 from "../../images/blog3.jpg"
import mahindra from "../../images/mahindra.png"
import doctor from "../../images/doctor.png";
import logistics from "../../images/logistics.png";
import bank from "../../images/bank.png";
import website from "../../images/website.png";
import img from "../../images/img.png"
import link from "../../images/link.png"
import insta from "../../images/insta.png"
import twitter from "../../images/twitter.png"
  import fb from "../../images/fb.png"
import ez from "../../images/ez.png"
import bg2 from "../../images/slider.png"

import { useState } from 'react'
import nfc from "../../images/nfclogo.png.png"
import {NavLink as Link} from "react-router-dom"

function Homepage() {
  const [arr1,setArr1]=useState('true')
  const [arr2,setArr2]=useState('true')
  const [arr3,setArr3]=useState('true')
 const [bigbtn,setBigbtn]=useState("false")
 const [translate,setTranslate]=useState("true")
 let inc=100;
 let inc1=100;
 const nohovers=()=>{
   setArr1(true)
   setArr2(true)
   setArr3(true)
 }
 const frbtn=()=>{
   
   setTranslate(false)
   
   
  
  
 
 }
 const arrowhover=()=>{
  
   setBigbtn(false)
 if(translate){
   setBigbtn(false)
 }
 else{
   setBigbtn(true)
 }
   
   
   
   
 }
 const arrownohover=()=>{
   setBigbtn(true)
 }
  const hover1=()=>{
   // setArr1(false)
   setArr1(false)
   setArr2(true)
   setArr3(true)
 
  }
 
  const hover2=()=>{
   // setArr1(false)
   setArr2(false)
   setArr1(true)
   setArr3(true)
  }
 
  const hover3=()=>{
   // setArr1(false)
   setArr3(false)
   setArr1(true)
   setArr2(true)
  }
 
   return (
     
     <>
    
    {/* <div className='container'>
       <img className='section-img'src={students}/>
       <div className='info'>
       <h1 className='section-info'>Software development services for your innovative</h1>
       <button className='section-btn'>Read More</button>
       </div>
      
      </div> */}
      {/* //////////////////////////////////// */}
      <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button className='Cbutton' type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
      <button className='Cbutton' type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class="active" aria-current="true"></button>
      <button className='Cbutton' type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item">
        <div class="container">
        <img className='students' src={students}/>
        <div className='carouseloverlay'></div>
          <div class="carousel-caption">
            {/* <span className='blue'>NFC</span><span> Foundation</span> */}
            <p className='whitee'><span className='blue'>NFC</span> Foundation</p>      
            <p>We believe in investing our efforts to bring one smile at a time.</p>
            <p><a class="read btn btn-lg btn-primary" href="#">Read more</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item active">
         <div class="container">
        <img className='students' src={ez}/>
        <div className='carouseloverlay'></div>
          <div class="carousel-caption">
          <p className='whitee'><span className='blue'></span> Delivery EZ</p>   
            <p>Experience the Ease of Big Deliveries</p>
            <p><a class="read btn btn-lg btn-primary" href="#">Read more</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="container">
        <img className='students' src={bg2}/>
        <div className='carouseloverlay'></div>
          <div class="carousel-caption">
          <p className='whitee'><span className='blue'>NFC</span> Solutions</p>   
            <p>Experience the Power of Cutting-Edge Technology Solutions

</p>
            <p><a class="read btn btn-lg btn-primary" href="#">Read more</a></p>
          </div>
        </div>
      </div>
    </div>
    {/* <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button> */}
  </div>

      <div className="containerr">
       <h1 className='about-title'>About Us</h1>
       <div className='section'>
        <h5 className='about-info'>
         A passion for problem solving
        </h5>
        <div className='right-c'>
          <p className='section-des'>We plan and implement smooth software solutions to complex issues within a global framework
          </p>
          <div className='line'></div>
          <p className='section-des'>We represent some of the most renowed and revered companies from a wide spectrum of industries and offer them impeccable services</p>
          
        </div>
 
       </div>
       <div className='numbers'>
         <div className='l l1'></div>
         <div className='number-1'>
           <p className='num-1'>8</p>
           <p className='years'>Years Young</p>
         </div>
         <div className='number-1'>
           <p className='num-1'>5</p>
           <p className='pro'>Products</p>
         </div>
         <div className='number-1'>
           <p className='num-1'>X</p>
           <p className=' num-3-info'>Research & Development</p>
         </div>
         <div className='l l2'></div>
       </div>
 
       <section className='believe'>
         <div className='intro'>
         <h1 className='title'>We Believe In</h1>
         <p className='des'>These principles on which NFC Solutions stands upright
         
 </p>
 </div>
 <div className='believe-flex'>
 <div className='columns'>
   <img className='icons' src={icon1}/>
   <h2 className='column-title'>Teamwork</h2>
   <p className='column-info'>We believe in valuing unique ideas and realizing them through team efforts.</p>
 
 </div>
 <div className='columns'>
   <img className='icons'src={icon2}/>
   <h2 className='column-title'>Innovation</h2>
   <p className='column-info'>Through innovation, we generate solutions for our customers and raise the bar, both within our workplace and throughout our industry.</p>
 
 </div>
 <div className='columns'>
   <img className='icons' src={icon3}/>
   <h2 className='column-title'>Quality</h2>
   <p className='column-info'>We provide outstanding products and unsurpassed service that, together, deliver premium value to our customers.</p>
 
 </div>
 </div>
 
       </section>
     </div>
     <div class="productspage">
       <div className='reportingtool'>
 
       
    <div className='intro'>
           <h1 className='title'>Our Products</h1>
           <p className='des'>A library of our tailor-made software solutions for the clients who placed their trust in us.</p>
         </div>
 
       <div class="maincontainer">
         <div class="sub1">
           <div  onMouseLeave={nohovers} onMouseOver={hover1} class="pbox1">
               
               <img class="Hbox1-img" src={tool1}/ >       
             <div class="Hbox1-head">Reporting Tool</div>
             <div class="Hbox1-para">
               <p id="parabox1">
               The ideal route-tracking and warehouse management solution for complex and multi-channel deliveries.
               </p>
             </div>
           </div>
           <div onMouseLeave={nohovers} onMouseOver={hover2} class="pbox2">
             <div class="sideimg">
               <div class="clr1"></div>
               <div class="clr2"></div>
               <div class="clr3"></div>
             </div>
             <div class="Hbox2-head">TASK Ticket Management System</div>
             <div class="Hbox2-para">
             A Simple project and source-code management tool designed for the ease of Developer, Manager and Administrator.
             </div>
           </div>
           <div  onMouseLeave={nohovers} onMouseOver={hover3} class="pbox3">
             <img class="Hbox3-img" src={tool2}/>
             <div class="Hbox3-head">Cell Tower Management</div>
             <div class="Hbox3-para">
               <p id="parabox3">
               Monitor, Manage and Access Control of Remote Towers with utmost convenience.
               </p>
             </div>
           </div>
           <div onMouseEnter={arrowhover} onMouseLeave={arrownohover} class="pbox4 known-btn">
             <Link className='box4-text' to="assetmanagement"> Know More </Link><span style={{display:bigbtn?"none":"block"}}className='big-arrow cross-arrow'>&#8599;</span>
           </div>
         </div>
       </div>
       </div>
       <p style={{display:arr1?"none":"block"}}className='arr1'>&#8599;</p>
       <p style={{display:arr2?"none":"block"}} className='arr2'>&#8599;</p>
       <p style={{display:arr3?"none":"block"}} className='arr3'>&#8599;</p>
 
     </div>
     {/* ////////////////////////////// */}
     <div className='box service-box'>
       <div className='page-intro se-intro'>
       <h1 className='page-title'><span className='our'>Our</span> Services</h1>
       <p className='page-info'>We provide a wide spectrum of transformative services addressing holistic business needs.
 </p>
       </div>
       <div className='service-flex'>
         <Link to='websolution' className='block'>
           <img className='icons bg-1' src={vector1}alt=""/>
           <div className='flex-arrow'>
           <p className='block-content'>Web Solutions</p><svg xmlns="http://www.w3.org/2000/svg" class="arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
   <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
 </svg>
 </div>
         </Link>
         <Link to='creativedesigning' className='block'>
           <img className='icons bg-2' src={vector2}alt=""/>
           <div className='flex-arrow'>
           <p className='block-content'>Creative Designing</p><svg xmlns="http://www.w3.org/2000/svg" class="arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
   <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
 </svg>
 </div>
         </Link>
         <Link to='mobileappdevelopment' className='block'>
           <img className='icons bg-3' src={vector3} alt=""/>
           <div className='flex-arrow'>
           <p className='block-content'>Mobile App Development</p><svg xmlns="http://www.w3.org/2000/svg" class="arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
   <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
 </svg>
 </div>
         </Link>
         <Link to='cybersecurity' className='block'>
           <img className='icons bg-1' src={vector4} alt=""/>
           <div className='flex-arrow'>
           <p className='block-content'>Cyber Security</p><svg xmlns="http://www.w3.org/2000/svg" class="arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
   <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
 </svg>
 </div>
         </Link>
         <Link to='bigdata' className='block'>
           <img className='icons bg-1' src={vector5} alt=""/>
           <div className='flex-arrow'>
           <p className='block-content'>Big Data          </p><svg xmlns="http://www.w3.org/2000/svg" class="arrow bigdataarrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
   <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
 </svg>
 </div>
         </Link>
         <Link to='cloudcomputing' className='block'>
           <img className='icons bg-1' src={vector6} alt=""/>
           <div className='flex-arrow'>
           <p className='block-content'>Cloud Computing</p><svg xmlns="http://www.w3.org/2000/svg" class="arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
   <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
 </svg>
 </div>
         </Link>
         <Link to='digitalmarketing' className='block'>
           <img className='icons bg-1' src={vector7} alt=""/>
           <div className='flex-arrow'>
           <p className='block-content'>Digital Marketing</p><svg xmlns="http://www.w3.org/2000/svg" class="arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
   <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
 </svg>
 </div>
         </Link>
         <div className='see-all-flex'>
           <Link to='services' className='see-all'>
   <p className='content'>See All</p>
           <svg xmlns="http://www.w3.org/2000/svg" class="arrow-icons" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
   <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
 </svg>
 </Link>
         </div>
         
       </div>
       <Link to='services' className='know-more'>Know More <span className='cross-arrow'>&#8599;</span></Link>
     </div>
     <div className="containerr">
       <div className='homapage-clients'>
 
      
     <div className='page-intro'>
       <h1 className='page-title'><span className='our'>Our</span> Clients</h1>
       <p className='page-info'>We are proud to showcase our esteemed clients for whom we curated revolutionary software solutions
 </p>
       </div>
       <div className='clients-flex'>
         <Link to='customers' className='img'>
         <img className='comimg1 comimg' src={com1}/>
 
         </Link>
         <Link to='customers' className='img'>          
         <img className='comimg2 comimg' src={com6}/>
         </Link>
         <Link to='customers' className='img'>          
         <img className='comimg2 comimg' src={com7}/>
         </Link>
         <Link to='customers' className='img'>  
         <img className='comimg4 comimg' src={com4}/>
         </Link>
         <Link to='customers' className='img'>
           
         <img className='comimg5 comimg' src={com5}/>
         </Link>
         <Link to='customers' className='img'>
           
         <img className='comimg6 comimg' src={com8}/>
         </Link>
         <Link to='customers' className='img'>
           
         <img className='comimg7 comimg' src={com2}/>
         </Link>
         <Link to='customers' className='img'>
           
         <img className='comimg8 comimg' src={com3}/>
         </Link>
         <Link to='customers' className='img'>
           
         <img className='comimg9 comimg' src={com9}/>
         </Link>
         <Link to='customers' className='img'>
           
         <img className='comimg10 comimg' src={com10}/>
         </Link>
       </div>
       <Link to="customers" className='know-more btn-2'>Know More<span className='cross-arrow'>&#8599;</span></Link>
       </div>
       <div className='page-intro expertise'>
       <h1 className='page-title'>Domain Expertise</h1>
       <p className='page-info'>Serving our clients across diverse industriesServing our clients across diverse industries
 </p>
 <div className='domain-flex'>
   <div className='domain-img'>
     <Link to='domain' className='d-1'>
   <img className='domain-image doctor' src={doctor}/>
           <p className='block-content pharma'>Pharma & HealthCare</p><svg xmlns="http://www.w3.org/2000/svg" class="domainn-arrow pp-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
   <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
 </svg>
   </Link>
   <Link to='domain' className='d-2'>
   <img className='domain-image doctor d-2' src={logistics}/>
 
           <p className='block-content social'>Logistics</p><svg xmlns="http://www.w3.org/2000/svg" class="domainn-arrow pp-2"  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
   <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
 </svg>
   </Link>
   <Link to="domain" className='d-3'>
   <img className='domain-image doctor d-3' src={bank}/>
 <p className='block-content banking'>Banking Brokerage</p><svg xmlns="http://www.w3.org/2000/svg" class="domainn-arrow pp-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
   <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
 </svg>
 
   </Link>
   <Link to='domain'className='d-4'>
    

    
   <img className='domain-image doctor d-4' src={website}/>
 
 <p className='content domain-know'>Know More</p>
           <svg xmlns="http://www.w3.org/2000/svg" class="arrow-icon pp-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
   <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
 </svg>
 
   </Link>
   </div>
 
   
 
   
   {/* <img className='domain-image social' src={social}/>
   <img className='domain-image bank' src={bank}/>
   <img className='domain-image website' src={website}/> */}
 
 
   {/* <div className='image-flex'>
   <div className='domain-info doctor-info'>
           <p className='block-content'>Pharma & HealthCare</p><svg xmlns="http://www.w3.org/2000/svg" class="arrow im" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
   <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
 </svg>
 
   </div>
   <div className='domain-info social-info'>
           <p className='block-content'>Social Netwroking</p><svg xmlns="http://www.w3.org/2000/svg" class="arrow im"  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
   <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
 </svg>
 
   </div>
   <div className='domain-info bank-info'>
           <p className='block-content'>Banking Brokerage</p><svg xmlns="http://www.w3.org/2000/svg" class="arrow im" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
   <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
 </svg>
 
   </div> */}
   
           {/* <div className='domain-know-more'>
   <p className='content'>Know More</p>
           <svg xmlns="http://www.w3.org/2000/svg" class="arrow-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
   <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
 </svg>
 
         </div> */}
   {/* </div> */}
   
 
 
   
  
 
 </div>
       </div>
     </div>
       <section className='testimonial-section'>
       <div className='page-intro testimonials'>
       <h1 className='page-title test-title'>Testimonials</h1>
       <p className='page-info test-info'>We value our clients and our clients are our success story
 </p>
       </div>
       <section  className='section-2'>
         <div style={{transform:translate?`translateX(0px)`:`translate(-100px)`}} className='domainSection'>
           <img className="domain-logo icons" src={avatar} alt=""/>
           <h2 className='domainName'>Abhisheka</h2>
           <p className='domainBio'>Manager at Tech Mahindra,Hyd</p>
           <p className='domainInfo'>It has been a wonderful and very positive experience for me and my company. We are constantly impressed by their technical expertise. They are always willing to work untirin gly to meet my goals and resolve the most complex of issues. </p>
         <img className='imgg' src={mahindra}/>
           
         </div>
         <div style={{transform:translate?`translateX(0px)`:`translate(${inc}px)`}} className='domainSection'>
           <img className="domain-logo icons" src={avatar}alt=""/>
           <h2 className='domainName'>Abhisheka</h2>
           <p className='domainBio'>Manager at Tech Mahindra,Hyd</p>
           <p className='domainInfo'>It has been a wonderful and very positive experience for me and my company. We are constantly impressed by their technical expertise. They are always willing to work untirin gly to meet my goals and resolve the most complex of issues. </p>
         <img className='imgg' src={mahindra}/>
           
         </div>
         <div style={{transform:translate?`translateX(0px)`:`translate(${inc}px)`}}  className='domainSection'>
           <img className="domain-logo icons" src={avatar} alt=""/>
           <h2 className='domainName'>Abhisheka</h2>
           <p className='domainBio'>Manager at Tech Mahindra,Hyd</p>
           <p className='domainInfo'>It has been a wonderful and very positive experience for me and my company. We are constantly impressed by their technical expertise. They are always willing to work untirin gly to meet my goals and resolve the most complex of issues. </p>
         <img className='imgg' src={mahindra}/>
           
         </div>
         <div style={{transform:translate?`translateX(0px)`:`translate(${inc}px)`}} className='domainSection'>
           <img className="domain-logo icons" src={avatar} alt=""/>
           <h2 className='domainName'>Abhisheka</h2>
           <p className='domainBio'>Manager at Tech Mahindra,Hyd</p>
           <p className='domainInfo'>It has been a wonderful and very positive experience for me and my company. We are constantly impressed by their technical expertise. They are always willing to work untirin gly to meet my goals and resolve the most complex of issues. </p>
         <img className='imgg' src={mahindra}/>
           
         </div>
         <div style={{transform:translate?`translateX(0px)`:`translate(${inc}px)`}}  className='domainSection'>
           <img className="domain-logo icons" src={avatar} alt=""/>
           <h2 className='domainName'>Abhisheka</h2>
           <p className='domainBio'>Manager at Tech Mahindra,Hyd</p>
           <p className='domainInfo'>It has been a wonderful and very positive experience for me and my company. We are constantly impressed by their technical expertise. They are always willing to work untirin gly to meet my goals and resolve the most complex of issues. </p>
         <img className='imgg' src={mahindra}/>
           
         </div>
         <div style={{transform:translate?`translateX(0px)`:`translate(${inc}px)`}}  className='domainSection'>
           <img className="domain-logo icons"src={avatar}alt=""/>
           <h2 className='domainName'>Abhisheka</h2>
           <p className='domainBio'>Manager at Tech Mahindra,Hyd</p>
           <p className='domainInfo'>It has been a wonderful and very positive experience for me and my company. We are constantly impressed by their technical expertise. They are always willing to work untirin gly to meet my goals and resolve the most complex of issues. </p>
         <img className='imgg' src={mahindra}/>
           
         </div>
         
   
 
        
 
        
 
        
       </section>
       <div className='buttons'>
       <div to="#"  class="previous round"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ar" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
   <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
 </svg></div>
 
 
 <div  onClick={frbtn} class="next round"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ar" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
   <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
 </svg></div>
 
 </div>
       </section>
      
      {/* /////////////////////////////// */}
     
    </>
  )
}
function Home(){
    return(
        <>
        <Header />
        <Homepage />
        <Footer />
        </>

    );
}
export default Home;
