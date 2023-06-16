import React from 'react'
import start from '../images/stars-9613.svg'
import { Link } from 'react-router-dom'

export default function FinalPage() {
  return (
    <div className=''>
      
     <div id='iddd'>
      <div className='final' >
      <div className='final-div'>
        <h3>Putting a smile on every student’s face</h3>
        <p>We’re happy to have been a part of our students’ successful journey by landing them a job with their dream company.</p>
        <p>Give your career the Ninja Edge</p>
      <Link to='/'>  <button className='btn bg-warning w-50'>EXPLORE OUR COURSE</button></Link>
        <img src='https://files.codingninjas.in/gradient-9397.svg' alt=''/>
      </div>
      </div>
     </div>
     <h2>Coding Ninjas Review by the Students</h2>
     <div className='rating'>
            <div className='rating-child'><h2>4.9</h2><img src={start} alt=''/><br/>100+ reviews<h2>Facebook</h2></div>
            <div className='rating-child'><h2>4.8</h2><img src={start} alt=''/><br/>1000+ reviews<h2>Google</h2></div>
             <div className='rating-child'><h2>50+</h2>Questions asked <br/>5000 answered <h2>Quora</h2></div>
        </div>
      
      </div>
  )
}
