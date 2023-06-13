import React from 'react';
import '../style/dsahboard.css'
import logo from '../images/logo.jfif'
import { Link } from 'react-router-dom';
export default function Dashboard() {
  return (
    <div id='dasboard'>
        <div className='dasboard-nav' >
            <div className='dasboard-nav-one'>
               <span> <img src={logo} alt='' className='logo1' width={"20px"}/>classroom</span>
               <span>Placement cell<i style={{color:"tomato"}} class="fa-sharp fa-solid fa-arrow-up-right"></i></span>

              

            </div>
            
            <div className='dasboard-nav-two'>

               <span><i className="fa-sharp fa-regular fa-circle-question"></i></span>
               <span><i style={{color:"black"}} className="fa-light fa-message-smile"></i></span>
               <span><img src='https://files.codingninjas.com/gen-assets/Avtar.png' className='dasg-pic' alt=''/></span>

            </div>


            </div>
            <hr></hr>
            <div className='vl'> <span className='i'><i className="fa fa-user-plus" aria-hidden="true"></i> <p>Refer & <br/> earn</p></span></div>
            <div className='img-center'><img  src='https://files.codingninjas.in/explore-our-courses-illustration-27791.svg' alt=''/><br/></div>
           <div  className='text-align'>
           <p className=' s'>Boost your career with in-demand coding skills. <br/>explore  our coding course.</p><br/>

            <Link to={"/course"}><button className='bttn btn'>Explore our courses</button></Link>
           </div>

        
    </div>
  )
}
