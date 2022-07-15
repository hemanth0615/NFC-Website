import React from 'react'
import Header from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import bg from "../../images/bg.png"
import "./Careers.css";
import markup from "../../images/markdown.png"
import markdown from "../../images/markup.png"
import l1 from "../../images/l1.png"
import l2 from "../../images/l2.png"
import l3 from "../../images/l3.png"
import l4 from "../../images/l4.png"
import l5 from "../../images/l5.png"
import location from "../../images/location.png"
import bag from "../../images/bag.png"

function Careersbody() {
  return (
    <div className='careers-container'>
    <img className="image-bg"src={bg} alt=""/>
    <div className='careersoverlay'></div>
     <div className='cover'>
      <h1 className='cover-title'>Careers</h1>
      <div className='cover-info'>
        <div className='page-intro cover-intro'>
      <h1 className='page-title'><span className='our'>Join Our</span> team</h1>
      <p className='page-info sec-info'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nulla vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit Auctor nul.
      </p>
      <h2 className='founder'>Mathew, CEO and Founder</h2>
      </div>
      </div>
      <img className='markup' src={markup} alt=""/>
      <img className='markdown' src={markdown} alt=""/>

    </div> 
   
  <div className='process'>
  <div className='page-intro'>
    <h1 className='page-title'><span className='our'>Our hiring</span> process</h1>
    <p className='page-info career-page-info'>Let’s take you through the process for being a part of our competent team.

</p>
    </div>
    <div className='hiring-flex'>
    <div className='hiring-block'>
      <img className='hiring-icon' src={l1} alt=""/>
      <h1 className='hiring-title'>Application Submission</h1>
      <p className='hiring-info'>Primarily, if there is a vacancy appearing on our website, and you think that you are the right fit, then you can mail your resume to our HR.
</p>
    </div>
    <div className='hiring-block'>
      <img className='hiring-icon' src={l1} alt=""/>
      <h1 className='hiring-title'>Application Review</h1>
      <p className='hiring-info'>The application submitted will then be reviewed by the team of concerned members and will then be approved for the next round.

</p>
    </div>
    <div className='hiring-block'>
      <img className='hiring-icon' src={l1} alt=""/>
      <h1 className='hiring-title'>Interviewn</h1>
      <p className='hiring-info'>he approved applicant will get an interview scheduled with the concerned team’s leader on the basis of which the applicant will either be rejected or recruited.

</p>
    </div>
    <div className='hiring-block'>
      <img className='hiring-icon' src={l1} alt=""/>
      <h1 className='hiring-title'>Decision</h1>
      <p className='hiring-info'>This step involves the decision making by the concerned team members about the competency of the applicant and their suitability for the role.

</p>
    </div>
    <div className='hiring-block'>
      <img className='hiring-icon' src={l1} alt=""/>
      <h1 className='hiring-title'>Offer</h1>
      <p className='hiring-info'> If the applicant is decided to be recruited then they will receive the offer letter. The acceptance of the offer letter will confirm the recruitment of the applicant.
</p>
    </div>
    </div>
  </div>
  <div className='openings'>
  <div className='page-intro'>
    <h1 className='page-title'><span className='our'>Current</span> Openings</h1>
    <p className='page-info career-page-info'>This is a list of some great job profiles at our company. If you believe yourself to be a good fit for any of these roles then we would love to get in touch with you.
</p>
    </div>
    <div className='containerr opening-container'>
    <div className='opening-flex'>
      <a href='#'>
  <h1 className='opening-title'>.Net Developer</h1>
  <div className='description'>
    <div className='time-flex'>

    <svg xmlns="http://www.w3.org/2000/svg" class="opening-icons" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg><p className='time'>Full Time</p>
    </div>
    <div className='place-flex'>
    <svg xmlns="http://www.w3.org/2000/svg" class="opening-icons location" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
<path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
    <p className='place'>Chicago, USA(remote)</p>
    <svg xmlns="http://www.w3.org/2000/svg" class="left-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
</svg>
    </div>


  </div>
      </a>
    </div>
    <div className='opening-flex'>
      <a href='#'>
  <h1 className='opening-title'>Android Developer</h1>
  <div className='description'>
    <div className='time-flex'>

    <svg xmlns="http://www.w3.org/2000/svg" class="opening-icons" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg><p className='time'>Full Time</p>
    </div>
    <div className='place-flex'>
    <svg xmlns="http://www.w3.org/2000/svg" class="opening-icons location" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
<path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
    <p className='place'>Chicago, USA(remote)</p>
    <svg xmlns="http://www.w3.org/2000/svg" class="left-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
</svg>
    </div>


  </div>
      </a>
    </div>
    <div className='opening-flex'>
      <a href='#'>
  <h1 className='opening-title'>IOS Developer</h1>
  <div className='description'>
    <div className='time-flex'>

    <svg xmlns="http://www.w3.org/2000/svg" class="opening-icons" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg><p className='time'>Full Time</p>
    </div>
    <div className='place-flex'>
    <svg xmlns="http://www.w3.org/2000/svg" class="opening-icons location" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
<path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
    <p className='place'>Chicago, USA(remote)</p>
    <svg xmlns="http://www.w3.org/2000/svg" class="left-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
</svg>
    </div>


  </div>
      </a>
    </div>
    <div className='opening-flex'>
      <a href='#'>
  <h1 className='opening-title'>PHP Developer</h1>
  <div className='description'>
    <div className='time-flex'>

    <svg xmlns="http://www.w3.org/2000/svg" class="opening-icons" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg><p className='time'>Full Time</p>
    </div>
    <div className='place-flex'>
    <svg xmlns="http://www.w3.org/2000/svg" class="opening-icons location" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
<path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
    <p className='place'>Chicago, USA(remote)</p>
    <svg xmlns="http://www.w3.org/2000/svg" class="left-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
</svg>
    </div>


  </div>
      </a>
    </div>
    <div className='opening-flex'>
      <a href='#'>
  <h1 className='opening-title'>QA / Testing</h1>
  <div className='description'>
    <div className='time-flex'>

    <svg xmlns="http://www.w3.org/2000/svg" class="opening-icons" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg><p className='time'>Full Time</p>
    </div>
    <div className='place-flex'>
    <svg xmlns="http://www.w3.org/2000/svg" class="opening-icons location" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
<path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
    <p className='place'>Chicago, USA(remote)</p>
    <svg xmlns="http://www.w3.org/2000/svg" class="left-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
</svg>
    </div>


  </div>
      </a>
    </div>
    <div className='opening-flex'>
      <a href='#'>
  <h1 className='opening-title'>UI/UX Designer</h1>
  <div className='description'>
    <div className='time-flex'>

    <svg xmlns="http://www.w3.org/2000/svg" class="opening-icons" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg><p className='time'>Full Time</p>
    </div>
    <div className='place-flex'>
    <svg xmlns="http://www.w3.org/2000/svg" class="opening-icons location" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
<path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
    <p className='place'>Chicago, USA(remote)</p>
    <svg xmlns="http://www.w3.org/2000/svg" class="left-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
</svg>
    </div>


  </div>
      </a>
    </div>
    <div className='opening-flex'>
      <a href='#'>
  <h1 className='opening-title'>UI/UX Developer</h1>
  <div className='description'>
    <div className='time-flex'>

    <svg xmlns="http://www.w3.org/2000/svg" class="opening-icons" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg><p className='time'>Full Time</p>
    </div>
    <div className='place-flex'>
    <svg xmlns="http://www.w3.org/2000/svg" class="opening-icons location" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
<path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
    <p className='place'>Chicago, USA(remote)</p>
    <svg xmlns="http://www.w3.org/2000/svg" class="left-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
</svg>
    </div>


  </div>
      </a>
    </div>
    <div className='opening-flex'>
      <a href='#'>
  <h1 className='opening-title'>Architect</h1>
  <div className='description'>
    <div className='time-flex'>

    <svg xmlns="http://www.w3.org/2000/svg" class="opening-icons" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg><p className='time'>Full Time</p>
    </div>
    <div className='place-flex'>
    <svg xmlns="http://www.w3.org/2000/svg" class="opening-icons location" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
<path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
    <p className='place'>Chicago, USA(remote)</p>
    <svg xmlns="http://www.w3.org/2000/svg" class="left-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
</svg>
    </div>


  </div>
      </a>
    </div>
    <div className='opening-flex'>
      <a href='#'>
  <h1 className='opening-title'>SysAdmin/Cloud Expert</h1>
  <div className='description'>
    <div className='time-flex'>

    <svg xmlns="http://www.w3.org/2000/svg" class="opening-icons" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg><p className='time'>Full Time</p>
    </div>
    <div className='place-flex'>
    <svg xmlns="http://www.w3.org/2000/svg" class="opening-icons location" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
<path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
    <p className='place'>Chicago, USA(remote)</p>
    <svg xmlns="http://www.w3.org/2000/svg" class="left-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
</svg>
    </div>


  </div>
      </a>
    </div>
    
    <div className='opening-flex'>
      <a href='#'>
  <h1 className='opening-title'>Data Science Engineer</h1>
  <div className='description'>
    <div className='time-flex'>

    <svg xmlns="http://www.w3.org/2000/svg" class="opening-icons" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg><p className='time'>Full Time</p>
    </div>
    <div className='place-flex'>
    <svg xmlns="http://www.w3.org/2000/svg" class="opening-icons location" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
<path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
    <p className='place'>Chicago, USA(remote)</p>
    <svg xmlns="http://www.w3.org/2000/svg" class="left-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
</svg>
    </div>


  </div>
      </a>
    </div>
    
    </div>
  </div>
  </div>
    
  )
}
function Careers(){
  return(
      <>
      <Header />
      <Careersbody />
      <Footer />
      </>
  );
}
export default Careers
