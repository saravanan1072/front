import React from 'react'
import {useNavigate} from 'react-router-dom'

// import {} from 'react-router-dom'
export default function BasicForm() {
    const navigate=useNavigate()
  return (
    <div style={{backgroundColor:"blue",width:"100%",height:"100vh"}} >

      <div className='basicform'>
      <div >
            <h3 >Welcome to Basics of Python with Data Structures and Algorithms Free Trial!</h3>
        </div>
        <div> <span style={{color:"orangered"}}>Get free access to complete Classroom Experience.<span style={{color:" rgb(89, 87, 87)"}}>*Only Selected content will be available in Free Trial</span></span>
</div>

        <div className='sep'>
            <p >Approx timeline to complete this course after purchase will be<b> 5.2 Months</b></p>
        </div>
        <div>2 Modules covered in Basics of Python with Data Structures and Algorithms</div>
        <div className='fl'>
            <div>1. Introduction to Python</div>
            <div>
            2.Data Structures & Algorithms in Python
            </div>
        </div>
        <div className='cont'>
            <div>
            The modules are divided into Milestones for better learning experience
            </div>
            <div>
                <img src='https://classroom.codingninjas.com/assets-app/images/onboarding/onboarding-screenshot.svg' alt=''/>
            </div>
        </div>
        <div> <b> Explore our classroom</b> <button onClick={()=>navigate('/')} className='btn bg-primary w-100'>Proceed</button> <br/>
</div>
      </div>
    </div>
  )
}
