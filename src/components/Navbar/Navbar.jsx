import React from 'react'
import { useState } from 'react';
import logo from "../../images/nfclogo.png.png";
import {NavLink as Link} from "react-router-dom"
import "./Navbar.css"
function Navbar(props) {
const [company,setCompany]=useState(false)
const [product,setProduct]=useState(false)
const [service,setService]=useState(false)

const [arrow1,setArrow1]=useState(false)
const [arrow2,setArrow2]=useState(false)
const [arrow3,setArrow3]=useState(false)

const arrowbtn1=()=>{
    if(arrow1){
        setArrow1(false)
    }
    else{

        setArrow1(true)
        setArrow2(false)
        setArrow3(false)

    }

}
const arrowbtn2=()=>{
    if(arrow2){
        setArrow2(false)
    }
    else{

        setArrow2(true)
        setArrow1(false)
        setArrow3(false)


    }

}
const arrowbtn3=()=>{
    if(arrow3){
        setArrow3(false)
    }
    else{

        setArrow3(true)
        setArrow2(false)
        setArrow1(false)
    }

}
const companydrop=()=>{
if(company==true){

    setCompany(false)
    

}
else{
    setCompany(true)
    setProduct(false)
    setService(false)

}
  }
  const productdrop=()=>{
    if(product==true){
        setProduct(false)
    
    }
    else{
        setProduct(true)
    setService(false)
    setCompany(false)


    }
      }
      const servicedrop=()=>{
        if(service==true){
            setService(false)
        
        }
        else{
            setService(true)
    setCompany(false)
    setProduct(false)


        }
          }
  return (
    <div className='navbar-component'>
      <nav>
        <div class="navbar">
          <a className="nfc-icon" href='/'>
            <div class="icon"><img className="logo" src={logo} alt="Icon"/></div>

          </a>
            <div class="menu">
                <div  onClick={companydrop}class="flex company bar"><a  onClick={arrowbtn1} href="#">Company </a><svg onClick={arrowbtn1} xmlns="http://www.w3.org/2000/svg" className={arrow1?"rotate down":"rotate"} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
</svg></div>
                <div onClick={productdrop} class="flex products bar"><a onClick={arrowbtn2} href="#">Products </a><svg onClick={arrowbtn2} xmlns="http://www.w3.org/2000/svg" className={arrow2?"rotate down":"rotate"} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
</svg></div>
                <div onClick={servicedrop} class="flex services bar"><a onClick={arrowbtn3} href="#">Services </a><svg onClick={arrowbtn3} xmlns="http://www.w3.org/2000/svg" className={arrow3?"rotate down":"rotate"} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
</svg></div>
                <div class="flex bar"><Link to="customers">Customers</Link></div>
                <div class="flex bar"><Link to="foundation">Foundation</Link></div>
                <div class="flex bar"><Link to="careers">Careers</Link></div>
                <div class="Contactbtn "><Link to='contactus' className='navcontact-btn' type="button">Contact Us</Link></div>
            </div>
            
        </div>
    </nav>
    <div class="dropdown">
        <div style={{display:company?"block":"none"}} class="companydrop">
            <div class="about drop1"><Link to="/aboutus">About Us</Link><svg xmlns="http://www.w3.org/2000/svg" class="nav-right" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg></div>
            <div class="domain drop1"><Link to="/domain">Domain Expertise</Link><svg xmlns="http://www.w3.org/2000/svg" class="nav-right" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg></div>
            
        </div>

        <div  style={{display:product?"block":"none"}} class="productdrop">
            <div  class="asset drop2"><Link to="assetmanagement">Asset Management</Link><svg xmlns="http://www.w3.org/2000/svg" class="nav-right" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg></div>
            <div class="task drop2"><Link to="tasktickettanagementsystem">Task- Ticket Management System</Link><svg xmlns="http://www.w3.org/2000/svg" class="nav-right" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg></div>
            <div class="deliver drop2"><Link to="deliveryez">DeliverEZ</Link><svg xmlns="http://www.w3.org/2000/svg" class="nav-right" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg></div>
            <div class="report drop2"><Link to="reportingtool">Reporting Tool</Link><svg xmlns="http://www.w3.org/2000/svg" class="nav-right" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg></div>
            <div class="ctm drop2"><Link to="celltowermanagement">CTM- Cell Tower Management</Link><svg xmlns="http://www.w3.org/2000/svg" class="nav-right" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg></div>
        </div>

        <div  style={{display:service?"flex":"none"}} class="serviceedrop">
            <div class="row_1">
                <div class="mobile drop3"><Link to="mobileappdevelopment">Mobile App Development</Link><svg xmlns="http://www.w3.org/2000/svg" class="nav-right" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg></div>
                <div class="build drop3"><Link to="enterpriseapplication">Building Enterprise Application</Link><svg xmlns="http://www.w3.org/2000/svg" class="nav-right" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg></div>
                <div class=" drop3"><Link to="bigdata">Big DATA</Link><svg xmlns="http://www.w3.org/2000/svg" class="nav-right" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg></div>
                <div class="cloud drop3"><Link to="cloudcomputing">Cloud Coumputing</Link><svg xmlns="http://www.w3.org/2000/svg" class="nav-right" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg></div>
                <div class="nfc drop3"><Link to="nfcrfidservices">NFC RFID Services</Link><svg xmlns="http://www.w3.org/2000/svg" class="nav-right" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg></div>
            </div>
            <div class="row_2">
                <div class="oracle drop3"><Link to="oracleapplication">Oracle Applications</Link><svg xmlns="http://www.w3.org/2000/svg" class="nav-right" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg></div>
                <div class="test drop3"><Link to="trainingandplacment">Training Services</Link><svg xmlns="http://www.w3.org/2000/svg" class="nav-right" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg></div>
                <div class="trainplace drop3"><Link to="trainingandplacement">Training and Placement</Link><svg xmlns="http://www.w3.org/2000/svg" class="nav-right" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg></div>
                <div class="cyber drop3"><Link to="cybersecurity">Cyber Security</Link><svg xmlns="http://www.w3.org/2000/svg" class="nav-right" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg></div>
                <div class="sys drop3"><Link to="systemsapplicationandproducts">Systems,Applications & Products in <div className='system-flex'><p>Data Processing</p><svg xmlns="http://www.w3.org/2000/svg" class="nav-right sys-right" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg></div></Link></div>
            </div>
            <div class="row_3">
                <div class="digital drop3"><Link to="digitalmarketing">Digital Marketing</Link><svg xmlns="http://www.w3.org/2000/svg" class="nav-right" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg></div>
                <div class="test drop3"><Link to="testingservices">Testing Services</Link><svg xmlns="http://www.w3.org/2000/svg" class="nav-right" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg></div>
                <div class="web drop3"><Link to="websolutions">Web Solutions</Link><svg xmlns="http://www.w3.org/2000/svg" class="nav-right" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg></div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar