import React,{useState,useEffect} from 'react';
import '../style/dsahboard.css'
import logo from '../images/logo.jfif'
import { Link } from 'react-router-dom';
import { names } from '../utility/Navbar';

import axios from 'axios';
export default function Dashboard() {
//const [toggle,setToggle]=useState(false)
  const [data,setData]=useState()
  console.log(names);
  useEffect(()=>{
    axios.post("http://localhost:3001/usercourse",{names})
    .then((res)=>{
      console.log(res.data);
      // setToggle(!toggle)
      setData(res.data.fetchData)
    }).catch((err)=>console.log(err))
  },[])


  return (
   <>
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
         </div>
        <br/>
   {data?.length >0 ? <div>{data.map((item) => {
              return (
               <div key={item.id}>
                <div className='course'>
                 <div>
                 <div style={{fontSize:"32px",fontWeight:"600"}}><b style={{fontSize:"38px"}}>Course Name:</b>{item.detailhead}</div>
                  <img style={{width:"200px"}} src={item.img} alt={item.course}/>
                  <div  style={{fontSize:"22px",fontWeight:"400"}}>Duration of content: <span style={{fontWeight:"600",fontSize:"28px"}}>{item.time}</span> And <span style={{fontWeight:"600",fontSize:"28px"}}>{item.problem}</span></div>
                  <button className='btn bg-danger' style={{color:"black",margin:"10px",width:"200px"}} disabled>
                      Entolled
                    </button>


                 </div>

                </div>
               </div>
              );
            })} 
   </div>
    : <div> <div className='img-center'><img  src='https://files.codingninjas.in/explore-our-courses-illustration-27791.svg' alt=''/><br/></div>
   <div  className='text-align'><p className=' s'>Boost your career with in-demand coding skills. <br/>explore  our coding course.</p><br/><Link to={"/course"}><button className='bttn btn'>Explore our courses</button></Link></div>
    
   
    </div>
}
   
   </>
  )
}
