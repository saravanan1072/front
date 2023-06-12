import React from 'react'
import Section6 from '../component/Section6';
import "../style/style.css"

//import Footer from '../component/Footer';
export default function Course() {
   const handleenroll=()=>{

   }
  return (
    <div id='course'>
        
        <div className='background' >
            <div className='.div'>
                <p><h2>Online Coding Courses</h2></p>
            <p className='div-text'>Most loved online coding courses for college students and working <br/>professionals</p>
            <button className='b-browse' onClick={handleenroll}>Browse for more course</button>
            <button className='b-try'>try for free</button>
            </div>
            <img  src='https://files.codingninjas.in/courses-page-top-bg-11535.svg' alt=''/>

        </div>
        <img src='https://files.codingninjas.com/gsst-homepage_web-27881.svg' alt=''/>
    <div style={{marginTop:"-200px"}}>
    <div><div><Section6/></div></div>
    </div>

    
    <div style={{position:"relative",left:"-200px"}}>
    {/* <Footer/> */}
    </div>

    </div>
  )
}
