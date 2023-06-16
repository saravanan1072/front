import React from 'react'
//import Section6 from '../component/Section6';
import "../style/style.css"
import { login } from '../utility/Navbar';
import { useNavigate,Link } from 'react-router-dom';

import { data } from '../component/Section6';
//import Footer from '../component/Footer';
export default function Course() {
  const msg="no work exoerience";
  const navigate=useNavigate();
   const handleenroll=()=>{

   }
   const handleFunc=(data)=>{
    login ? navigate(`/User/Course/${data.course}`, { state: { data } }) : alert("please login first..!");
  
    }
  return (
    <div id='course'>
        
        <div className='background' >
            <div className='.div'>
                <p className='cc'><h2>Online Coding Courses</h2></p>
            <p className='div-text'>Most loved online coding courses for college students and working <br/>professionals</p>
            <button className='b-browse' onClick={handleenroll}>Browse for more course</button>
           <Link to='/fulldetail'> <button className='b-try' >try for free</button></Link>
            </div>
            <img className='picsss' src='https://files.codingninjas.in/courses-page-top-bg-11535.svg' alt=''/>

        </div>
        <img src='https://files.codingninjas.com/gsst-homepage_web-27881.svg' alt=''/>
        <br/>

        <div className='section6-second'>
            <h3>Courses specially curated for</h3>
            <p>{msg}    <span onClick={handleFunc} style={{color:"tomato"}}>Edit preference<i className="fa-sharp fa-light fa-clock"></i></span></p>
            <h4>Recommended courses for students</h4>
            <div className='section6-second-flex'>


                {data.map((item,index)=>{
                    return (
                        <div keys={index} className='section6-second-child' onClick={()=>handleFunc(item)}>
                       <div>
                       <p>{item.title}</p>
                        <h4>{item.title2}</h4>
                        <img src={item.img} alt='' width={"50px"}/>
                       </div>
                       <p><i className="fa-light fa-clock"></i>{item.time} &nbsp; 
                       <img src='https://files.codingninjas.in/mdi_palette-swatch-19337.svg' alt='' width={"15px"}/> {item.problem}</p> 
                       <p>{item.ratings} <img src='https://files.codingninjas.in/4-8-stars-5588.png' alt='' width={"70px"}/> ({item.count})</p>

                        </div>
                    )
                })}


                  
            </div>
        </div> <br/>

    

    </div>
  )
}
