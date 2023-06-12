import React from 'react'
import sectionpic from '../images/group.svg'
export default function Section3() {
  return (
    <div id='section3'>
        <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
        <div className='child-child1'>
        <button style={{width:"120px",height:"30px",borderRadius:"10px",border:"1px solid black",textAlign:"center"}}>why us</button><br/><br/>
        <h3 style={{color:"white"}}>Great students deserve the best jobs</h3>
        <p>Coding Ninjas Makes it Happen...</p>
        </div>
        <div className='child-child'>
            <div id='hexagon' className='div-one'>
            <span> <b className='b'>150+</b><br/><span className='text-size'>Students working in<br/> FAANG</span></span>
            </div>
            <div id='hexagon' className='div-two'>
            <span> <b className='b'>50+</b><br/><span className='text-size'>Students having 5 <br/> Stars on CodeChef</span></span>
            </div>
            <div id='hexagon' className='div-three'>
            <span> <b className='b'>10+</b><br/><span className='text-size'>Students started <br/> own companies</span></span>
            </div>
            <div id='hexagon' className='div-four'>
            <span> <b className='b'>100+</b><br/><span className='text-size'>Students received International <br/>Job </span></span>
            </div>
        </div>
        </div>
       
        <img style={{float:"left",opacity:".2",marginTop:"-450px"}}  src={sectionpic} alt=' '/>
       
        <img style={{float:"right",opacity:".2",marginTop:"-450px"}}  src={sectionpic} alt=' '/>
       

    </div>
  )
}
