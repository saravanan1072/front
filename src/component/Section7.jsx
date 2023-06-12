import React from 'react'
export default function Section7() {
  return (
    <div style={{backgroundColor:"wheat",width:"100%",height:"80%",marginTop:"80px"}}>
         <div id='Section7'>
        <div className='Section7-child'>
            <b>Have any queries?</b> <br/>
            <p>Get a free counselling session from our experts</p>
            <div className='photo'>
                <img src='https://files.codingninjas.in/call-icon-9597.svg' className='picss' alt=''/>
                <p>Call us on our toll free number <h3>1800-123-3598</h3></p>
            </div>
        </div>
        <div className='Section7-child colors'>
            <form  action="https://formspree.io/f/xoqzobyn" method="POST">
            <input className='btn border-success w-100  p-3  text-start fs-6' name='phone' type="number" placeholder='Contact Number*' required /> <br/>
            <input className='btn border-success w-100 p-3 text-start  fs-6' name='firstname' type="text"  placeholder='First Name*' required/> <br/>
            <input className='btn border-success w-100 p-3 text-start fs-6' name='email' type="email"  placeholder='Email Address*' required/> <br/>
            <input className='btn border-success w-100 p-3 text-start fs-6' name='year' type="number"  placeholder='Graduation Year*' required/> <br/><br/>
             <button  className='btn bg-warning'>Request Callback</button>
            </form>
        </div>

    </div>
   


    </div>
  )
}
