import { names } from '../utility/Navbar';
import { useNavigate } from 'react-router-dom';
import $ from "jquery";
import axios from 'axios';
const CourseMap=({data})=>{
  const navigate=useNavigate()
  
 
  const courseDetail=async(data,names)=>{
    const url="https://ninja-wclb.onrender.com/update";

   axios.post(url,{data,names})
    .then((res)=>{
      console.log(res)
      alert(res.data.message)
    })
    .then((err)=>console.log(err))

  }
const p=async()=>{
  var orderId ;
$(document).ready(function(){
    var settings = {
  "url": "https://ninja-wclb.onrender.com/create/order",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "amount": data.price*100
  }),
};


//creates new orderId everytime
$.ajax(settings).done(function (response) {

  orderId=response.orderId;
  console.log(orderId);
  $("button").show();
});
});


document.getElementById('rzp-button1').onclick = function(e){
 
  var options = {
    "key": "rzp_test_Hk1Cj8n9Wbk9zP", // Enter the Key ID generated from the Dashboard
    "amount": data.price*100 , // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Coding ninja",
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": function (response){
        alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature)
     
        courseDetail(data,names)
        navigate('/')

        var settings = {
          "url": "https://ninja-wclb.onrender.com/api/payment/verify",
          "method": "POST",
          "timeout": 0,
          "headers": {
            "Content-Type": "application/json"
          },
          "data": JSON.stringify({response}),
        }
   
//creates new orderId everytime
$.ajax(settings).done(function (response) {

  // alert(JSON.stringify(response))

}) },

"theme": {
  "color": "#3399cc"
}
};
var rzp1 = new window.Razorpay(options);
rzp1.on('payment.failed', function (response){
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
});
rzp1.open();
e.preventDefault();
}
}
    return(
        <div className="parent-box-course" style={{color:"white"}}>
        <div className="child-box-course align">
          {console.log(data.detailcontent)}
          <div className="head-title-child-course">{data.detailhead}</div>
          <div className="sub-head-title-child-course">for Beginners and Experienced Learners</div>
          <div className='dataa'>{data.detailcontent}</div>
          <div className="inner-box-course-rating">
            <div className="strong-text-rate">4.8</div>&nbsp;&nbsp;&nbsp;&nbsp;
            <img
              src="https://files.codingninjas.in/4-8-stars-5588.png"
              width={200}
              alt="img"
            />&nbsp;&nbsp;
            <div>({data.count})</div>
          </div>
         
          <button className="buy-now-btn btn" id="rzp-button1" onClick={p}>Buy Now</button><br/><br/><br/>
          <hr className='hrr'/>
          <div className="inner-box-course-rating1">
            <div className="container-box-course-inner-parent">
              <div className="strong-text-rate1">10K+</div>
              <div className="content-box-rate">students enrolled</div>
            </div>
            <div className="container-box-course-inner-parent">
              <div className="strong-text-rate1">5+</div>
              <div  className="content-box-rate">projects</div>
            </div>
            <div className="container-box-course-inner-parent">
              <div className="strong-text-rate1">12</div>
              <div  className="content-box-rate">months</div>
            </div>
            <div className="container-box-course-inner-parent">
              <div className="strong-text-rate1">{data.time}</div>
              <div  className="content-box-rate"> of video lectures</div>
            </div>
          </div>
        </div>
        <div className="child-box-course">
            <img className='ay' src={data.detailurl}alt="img"/>
        </div>
      </div>
    )
}
export default CourseMap;