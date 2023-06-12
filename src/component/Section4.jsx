import React from 'react'
import google from '../images/google.png'
import adope from '../images/adobe-9540.svg'
import amazon from '../images/amazon-9538.svg'
import expedia from '../images/expedia-9533.svg'
import facebook from '../images/facebook-9532.svg'
import flip from '../images/flipkart-9536.svg'
import micro from '../images/microsoft.svg'
import morgan from '../images/morganstanley-9535.svg'
import oto from '../images/oyo-9537.svg'
import sam from '../images/samsung-9534.svg'
import wal from '../images/walmart-9539.svg'
import {Link} from 'react-router-dom'
export default function Section4() {
  return (
    <div id='Section4'>
        <p style={{fontSize:"28px",fontWeight:"500",marginTop:"20px"}}>Our students are placed at</p>
        <div className='image-flex'>
            <div> <img src={google} alt=""/></div>
            <div> <img src={adope} alt=""/></div>
            <div> <img src={sam} alt=""/></div>
            <div> <img src={amazon} alt=""/></div>
            <div> <img src={expedia} alt=""/></div>
            <div> <img src={facebook} alt=""/></div>
            <div> <img src={flip} alt=""/></div>
            <div> <img src={micro} alt=""/></div>
            <div> <img src={morgan} alt=""/></div>
            <div> <img src={oto} alt=""/></div>
            <div> <img src={wal} alt=""/></div>
        </div>

       <Link to="https://files.codingninjas.com/alumni_4thdraft-11676.pdf"> <button className='btn bg-primary'>download placement report</button></Link>

    </div>
  )
}
