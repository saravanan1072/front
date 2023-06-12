import React from 'react'
import start from '../images/stars-9613.svg'
export default function Section() {

  // const one=()=>{
  //   return <p style={{fontSize:"100px"}}>hello</p>
    
  // }


  function one(a){
        return <p style={{fontSize:"400px",color:"tomato"}}>hello</p>
    
    
      }
    
    
    
    
     
 
  
  return (
    <div id='section5'>
        <div className='rating'>
            <div className='rating-child'><h2>4.9</h2><img src={start} alt=''/><br/>100+ reviews<h2>Facebook</h2></div>
            <div className='rating-child'><h2>4.8</h2><img src={start} alt=''/><br/>1000+ reviews<h2>Google</h2></div>
             <div className='rating-child'><h2>50+</h2>Questions asked <br/>5000 answered <h2>Quora</h2></div>
        </div>

        <div className='home-render'>
            <div className='home-render-comp'>
                <h3>A One stop Platform</h3>
                <p>Practice and learn till you are perfect</p> <br/>

                <div className='home-render-flex'>
                  <div className='home-render-child' onClick={()=>one(1)}>GUIDED PROGRAM</div>
                  <div className='home-render-child'>DOUBT RESOLUTION</div>
                  <div className='home-render-child'>CODING NINJAS <br/>STUDIO</div>
                  <div className='home-render-child'>MOCK INTERVIEW</div>
                  <div className='home-render-child'>PLACEMENT CELL</div>
                  <div className='home-render-child'>FREE RESOURCES</div>

                </div>

                <div className='render-comp'>
                {/* <Compont></Compont> */}
                </div>
            </div>

        </div>



    </div>
  )
}
