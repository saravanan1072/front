
 import '../style/fulldetail.css'
 import guided from '../images/guided.svg'
import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./Sample";
import OtherInfo from "./OtherInfo";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { names } from '../utility/Navbar';
function Form() {
  const [page, setPage] = useState(0);
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
        name:"",
        mobile:"",
        address1:"",
        address2:"",
        pincode:"",
        state:"",
        country:"",
        year:"",
        degree:"",
        college:"",
        company:"",
        goal:"",
        kind:""
  });

  const FormTitles = ["Sign Up", "Personal Info", "Other"];
  
  const url='https://ninja-wclb.onrender.com/multiple'
  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };

  const func=async()=>{

    if(formData.name.length <= 5){
       return alert(`name should be atleast five characters `)

    }else if(formData.mobile.length < 10 || formData.mobile.length > 10){
      return alert(`mobile number should be 10 digits`)

    }
    else if(formData.address1.length <= 4){
      return alert(`address1 should be atleast four characters `)

    }
    else if(formData.pincode.length < 6 || formData.pincode.length < 6){
      return alert(`pincode should be atleast six characters `)

    }
    else if(formData.state.length <=1 ||formData.country.length <=1||formData.year.length <=1 || formData.degree.length <=1|| formData.goal.length <=1 ){
      return alert(`value should be selected altest one `)

    }
    else{
      await axios.post(url,{formData,names}).then((res)=>{ alert(res.data.message)  }).catch((err)=>console.log(err))
      navigate('/basicform')

    }

   


  }

  return (

   <div id='idd'>
     <div className="formsss">   
      <div className="progressbar">
        <div
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button className='btn bg-warning' style={{margin:"10px"}}
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button className='btn bg-danger' style={{margin:"10px"}}
            onClick={async() => {
              if (page === FormTitles.length - 1) {
               
                await func()
            
                
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>

                <div className='line'>
                <img src={guided} alt=''/>
            </div>
   </div>
  );
}

export default Form;