import React from 'react'
import "./Customers.css"
import Header from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import bg from "../../images/clientsbg.png"
import c1 from "../../images/c1.png"
import c2 from "../../images/c2.png"
import c3 from "../../images/c3.png"
import cl1 from "../../images/company1.png"
import cl2 from "../../images/company2.png"
import cl3 from "../../images/company3.png"
import cl4 from "../../images/company4.png"
import cl5 from "../../images/company5.png"
import cl6 from "../../images/company6.png"
import cl7 from "../../images/company7.png"
import cl8 from "../../images/company8.png"
import cl9 from "../../images/company9.png"
import cl10 from "../../images/company10.png"





export const Customersbody = () => {
  return (
    <div className='clientss'>
<img  className='clients-img' src={bg} alt=""/>
<div className='clientsoverlay'></div>
<div className='clients-cover'>
  
  
        
  <h1 className='clients-title'>
  We facilitate holistic and strategic business solutions to empower our clients.

  </h1>
          <div className='service-intro clients-intro'>
        <div className='column1 c1'>
        <img className='clients-icon' src={c1} alt=""/>
        <h1 className='clients-info info1'>
        Offering Tech-expertise
        </h1>
        </div>
        <div className='column1 c2'>
        <img className='clients-icon' src={c2} alt=""/>
        <h1 className='clients-info info2'>
        Providing Continous 
Assistance
        </h1>
        </div>
        <div className='column1 c3'>
        <img className='clients-icon' src={c3} alt=""/>
        <h1 className='clients-info info3'>
        Mantaining Top 
Class Quality
        </h1>
        </div>
        </div>
        </div>
        <div className=' clients-page'>
        <div className='page-intro clientspage-intro'>
      <h1 className='page-title'><span className='our'>Our</span> Clients</h1>
      <p className='page-info'>We have collaborated with our esteemed clients globally to provide them with continuous assistance, from the point of ideation to complete product development.
</p>
      </div>
      <div className='clientspage-flex'>
        <div className='img'>
        <img className='comimg1 comimg' src={cl1} alt=""/>

        </div>
        <div className='img'>
          
        <img className='comimg2 comimg' src={cl2} alt=""/>
        </div>
        <div className='img'>
          
        <img className='comimg2 comimg' src={cl3} alt=""/>
        </div>
        <div className='img'>
          
        <img className='comimg4 comimg' src={cl4} alt=""/>
        </div>
        <div className='img'>
          
        <img className='comimg5 comimg' src={cl5} alt=""/>
        </div>
        <div className='img'>
          
        <img className='comimg6 comimg' src={cl6} alt=""/>
        </div>
        <div className='img'>
          
        <img className='comimg7 comimg' src={cl7} alt=""/>
        </div>
        <div className='img'>
          
        <img className='comimg8 comimg' src={cl8} alt=""/>
        </div>
        <div className='img'>
          
        <img className='comimg9 comimg' src={cl9} alt=""/>
        </div>
        <div className='img'>
          
        <img className='comimg10 comimg' src={cl10} alt=""/>
        </div>
        <div className='img'>
          
          <img className='comimg10 comimg' src={cl5} alt=""/>
          </div>
          <div className='img'>
          
          <img className='comimg10 comimg' src={cl5} alt=""/>
          </div>
          <div className='img'>
          
          <img className='comimg10 comimg' src={cl5} alt=""/>
          </div>
          <div className='img'>
          
          <img className='comimg10 comimg' src={cl5} alt=""/>
          </div>
          <div className='img'>
          
          <img className='comimg10 comimg' src={cl5} alt=""/>
          </div>
          <div className='img'>
          
          <img className='comimg10 comimg' src={cl5} alt=""/>
          </div>
      </div>
      </div>
    </div>
  )
}
function Customers(){
  return(
      <>
      <Header />
      <Customersbody />
      <Footer />
      </>

  );
}
export default Customers