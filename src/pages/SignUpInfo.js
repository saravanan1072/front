import React from "react";

function SignUpInfo({ formData, setFormData }) {
        const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
           
      };

      // const func=async()=>{
      //   console.log(formData.name.length);
      //       if(formData.name.length <= 5){
      //          return alert(`name should be atleast five characters `)
        
      //       }else{
      //         return ("fine")
      //       }
        
           
        
        
      //     }
         
        
  return (
    <div className="sign-up-container">


                <div className="fontt" style={{fontWeight:"500"}}><p  >Welcome to the Ninja Family!</p><hr className='tag'/></div>
                <div><img  className="ou" src='https://files.codingninjas.in/ft-onboarding-welcome-msg-5707.svg' alt=''/></div>
                <div><p style={{fontSize:"22px",fontWeight:"500",margin:"10px"}}>Personal Details</p><hr className='tag'/></div>
                <div className='radio'>
                  <input type='radio' id='btn1' name='indian' /> &nbsp;
                  <label  htmlFor='btn1'>i am an indian student</label>&nbsp;&nbsp;

                   <input type='radio' id='btn2' name='indian' />&nbsp;
                  <label htmlFor='btn2'>i am an international student</label>
                    
                </div> 

            <div id='grid-form'>
                    <div className='grid-form-child '><input type='text' placeholder='Name*'  value={formData.name} name="name" onChange={handleChange} /></div>
                    <div className='grid-form-child'> <input type='number' placeholder='Phone number*'  value={formData.mobile} name="mobile" onChange={handleChange} /> </div>
                    <div className='grid-form-child'> <input type='text' placeholder='Address1*'  value={formData.address1} name="address1" onChange={handleChange} /> </div>
                    <div className='grid-form-child'> <input type='text' placeholder='Address2'  value={formData.address2} name="address2" onChange={handleChange} /> </div>
                    <div className='grid-form-child'> <input type='number' placeholder='pincode*'  value={formData.pincode} name="pincode" onChange={handleChange} /> </div>
                    <div className='grid-form-child'><select placeholder='State'  value={formData.state} name="state" onChange={handleChange}>
                        <option>State*</option>
                        <option value={'Andhra Pradesh'}>Andhra Pradesh</option>
                        <option value={'Arunachal Pradesh'}>Arunachal Pradesh</option>
                        <option value={'Karnataka'}>Karnataka</option>
                        <option value={'Tamil Nadu'}>Tamil Nadu</option>
                        
                        </select></div>

                        <div className='grid-form-child'>
                    <select style={{width:"350px"}} value={formData.country} name="country" onChange={handleChange} placeholder='country'>
                       <option>Country*</option>
                         <option value={'india'}>india</option>
                         <option value={'America'}>America</option>
                         <option value={'Japan'}>Japan</option>
                         <option value={'China'}>China</option>
                        </select>
                   </div>
                 

    </div>
    </div>

  );
}

export default SignUpInfo;