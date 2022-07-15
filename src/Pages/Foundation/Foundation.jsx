import React from 'react';
import foundationBackground from '../../images/foundationBackground.jpg';
import foundationsearch from '../../images/foundationsearch.png';
import foundationIdea from '../../images/foundationIdea.png';
import foundationFuture from '../../images/foundationFuture.png';
import g1 from '../../images/g1.png';
import g2 from '../../images/g2.png';
import g3 from '../../images/g3.png';
import g4 from '../../images/g4.png';
import {NavLink as Link} from "react-router-dom"


import ourcause from '../../images/ourcause.jpg';
import Header from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer"
import '../Foundation/Foundation.css';
const Foundationbody = () =>{
    return(
        <>
            {/* <h1>Foundation</h1> */}
            <div className='foundation-div1'>
                <div className='foundation-img-div'>
                    <img className='foundation-img'  src={foundationBackground} alt="foundationBackground" />
                </div>
                <div className='heading-foundation'>
                    <h3>NFC Foundations</h3>
                </div>
                <div className='foundation-3cards'>
                    <div className='foundation-card'>
                        <div className='foundation-card-icon'> <img src={foundationsearch} alt="foundationsearch" /> </div>
                        <div className='foundation-card-text'><h3>Identifying the problem</h3></div>
                    </div>
                    <div className='foundation-card'>
                        <div className='foundation-card-icon'> <img src={foundationIdea} alt="foundationIdea" /> </div>
                        <div className='foundation-card-text'><h3>Coming up with the solution</h3></div>
                    </div>
                    <div className='foundation-card'>
                        <div className='foundation-card-icon'> <img src={foundationFuture} alt="foundationFuture" /> </div>
                        <div className='foundation-card-text'><h3>Future plans</h3></div>
                    </div>
                </div>

            </div>

            <div className='foundation-div2'>
                <div className='ourcause-heading'> <h3><span>Our </span>Cause</h3> </div>
                <div className='ourcause-img-div'>
                    <img src={ourcause} className='ourcause-img' alt="ourcause" />
                </div>
                <div className='foundation-work'>
                    <p className='foundation-work-p'>Foundation Work <a className="foundationArrow" href='#'>Read More<svg xmlns="http://www.w3.org/2000/svg" class="arrowf" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg></a> </p>
                    <p className='foundation-work-text' >NFC Foundation, in partnership with Ebounti, aims to work towards the upliftment of under-privileged children in India. </p>
                    <span className='foundation-work-date'>Jan, 2020</span>
                </div>
            </div>
            <div className='foundation-stats'>
                <span className='circle1'></span>

                <span className='circle2'></span>
                <span className='circle3'></span>
                <div className='stat-cards'>
                    <div className='stat-card'>
                        <p className='stat-points'>100+</p>
                        <p className='stat-heading'>students educated </p>
                        <p className='stat-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
                    </div>
                    <div className='stat-card'>
                    

                        <p className='stat-points'>380+</p>
                        <p className='stat-heading'>students educated </p>
                        <p className='stat-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
                    </div>
                    <div className='stat-card'>
                    

                        <p className='stat-points'>1000+</p>
                        <p className='stat-heading'>Some statistics plz</p>
                        <p className='stat-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
                    </div>
                </div>
            </div>

            <div className='gallery-div'>
                <div className='gallery-heading'><h3 className='gallery-heading'>Our <span>Gallery</span></h3></div>
                <div className='gallery-desc'>
                    <p>All our foundational works covered by the camera.</p>
                    <p>We embrace all these moments and are looking forward for many more</p>
                </div>
                <div className='gallery-flex'>
                    <a className='gallery-photo' href='#'>
                    <img  src={g1} alt=""/>
                        </a> 
                        <Link className='gallery-photo' to='#'>
                    <img  src={g2} alt=""/>
                        </Link> 
                        <a className='gallery-photo' href='#'>
                    <img  src={g3} alt=""/>
                        </a> 
                        <a className='gallery-photo' href='#'>
                    <img  src={g4} alt=""/>
                        </a> 
                        <a className='gallery-photo' href='#'>
                    <img  src={g1} alt=""/>
                        </a> 
                        <a className='gallery-photo' href='#'>
                    <img  src={g2} alt=""/>
                        </a> 
                        <a className='gallery-photo' href='#'>
                    <img  src={g3} alt=""/>
                        </a> 
                        <a className='gallery-photo' href='#'>
                    <img src={g4} alt=""/>
                        </a> 
                        <a  className='gallery-photo' href='#'>
                    <img  src={g1} alt=""/>
                        </a> 
                        <a className='gallery-photo' href='#'>
                    <img  src={g2} alt=""/>
                        </a> 
                        <a className='gallery-photo' href='#'>
                    <img  src={g3} alt=""/>
                        </a> 
                        <a className='gallery-photo' href='#'>
                    <img  src={g4} alt=""/>
                        </a> 

                </div>
                

            </div>

            



        </>
    )
}
function Foundation(){
    return(
        <>
        <Header />
        <Foundationbody />
        <Footer />
        </>
  
    );
  }
export default Foundation