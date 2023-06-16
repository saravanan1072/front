
 import '../style/fulldetail.css'
 import guided from '../images/guided.svg'
import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./Sample";
import OtherInfo from "./OtherInfo";
import {useNavigate} from 'react-router-dom'
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

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };

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
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                navigate('/basicform')

                console.log(formData);
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