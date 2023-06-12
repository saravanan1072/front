import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import student from '../images/student.png'
import professional from '../images/professional.png'
export default function Section6() {
    const navigate=useNavigate();
    const [toggle,setToggle]=useState(true)
    const [display,setDisplay]=useState(true);
    const [msg,setMsg]=useState("No work experience")
 const handle=()=>{
    setToggle(!toggle);
    setMsg("Having work exoerience")
}

 const Handlebutton=()=>{
    const handlefunction2=()=>{
        setDisplay(!display)

    }
   
        
 

  const handleFunc=(data)=>{
     navigate(`/User/Course/${data.course}`, { state: { data } });
  
    }
    const data = [
        {
            course:"MERN",
            title: "Full Stack",
            title2: "MERN Full Stack Web Development",
            img:"https://files.codingninjas.com/mern-11710.svg",
            // url: "https://files.codingninjas.com/mern-22525.png",
            time:"60+ Hours",
            problem:"350+ problems",
            ratings:"4.8",
            count:"17K+ student",
            price: "49990",
            detailhead: "Full Stack Web Development Course — MERN Stack",
            detailcontent:
              "Learn to build entire web applications from start to finish on one of the most versatile tech stacks : MongoDB, Express.js, React.js and Node.js (MERN stack)",
            detailurl:
              "https://files.codingninjas.com/cdn-cgi/image/width=434/mern-9588-1-10374.png"
          },
          {
            course:"Data structures and algorithms",
            title: "Data structures and algorithms",
            title2: "Basic of c++ with Data Structures and Algorithms",
            img:"https://files.codingninjas.com/c-11714.svg",
            // url: "https://files.codingninjas.com/mern-22525.png",
            time:"50+ Hours",
            problem:"250+ problems",
            ratings:"4.6",
            count:"27K+ student",
            url: "https://files.codingninjas.com/c-11714.svg",
            price: "39900",
            detailhead:"Basics of C++ with Data Structures and Algorithms",
            detailcontent:"This is the course to pick if you are just getting into coding and want to build a strong foundation. Widely used in competitive programming.",
            detailurl:"https://files.codingninjas.com/cdn-cgi/image/width=434/c-10823.png"

          }
    ]
    return (
        <div className='section6-second'>
            <h3>Courses specially curated for</h3>
            <p>{msg.one}    <span onClick={handlefunction2} style={{color:"tomato"}}>Edit preference<i className="fa-sharp fa-light fa-clock"></i></span></p>
            <h4>Recommended courses for students</h4>
            <div className='section6-second-flex'>


                {data.map((item)=>{
                    return (
                        <div  className='section6-second-child' onClick={()=>handleFunc(item)}>
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
        </div>
    )
 }

 const Course=()=>{
   function  handleFunction(){
    setDisplay(!display)

    }
    return (
        <div id='section6'>
        <div style={{ textAlign: "left" }}>
            <h3>What is your work experience?</h3>
            <p>This will help us recommend the best programs for you.</p>
        </div>
        <div className='section6-flex'>
            <div  onClick={handle} className='section6-child'>
                <img src={student} alt='student'/>
                <p className='p'>No work <br/> experience <i className="fa-solid fa-greater-than"></i></p>
                <p>Designed as per college student schedule</p>
            </div>
            
            
            <div  onClick={handle} className='section6-child'>
            <img src={professional} alt='student'/>
            <p className='p'>Having work <br/> experience <i className="fa-solid fa-greater-than"></i></p>
            <p>Designed as per working professional schedule</p>

            </div>
           
           

        </div>
        {toggle ? <button onClick={handleFunction}  style={{float:"left",marginLeft:"180px"}} className='btn bg-primary'>Confirm Selection</button>:""}
        {!toggle ? <button  onClick={handleFunction } style={{float:"right",marginRight:"180px"}} className='btn bg-primary'>Confirm Selection</button>:""}
        
        
    </div>
        
    )
 }
    return (
        <div>
           { console.log(display)}
            {display ? <Course/> :<Handlebutton/>  }
        </div>
       
    )
}

