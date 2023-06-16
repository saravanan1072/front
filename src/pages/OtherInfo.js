import React from "react";

function OtherInfo({ formData, setFormData }) {
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="other-info-container">
        <div><p>What are your Goals?</p><hr/></div>
      <div className='grid-form-child'>with this Course iwish to* <br/><select   value={formData.goal} name="goal" onChange={handleChange}>
                        <option>Your Goal*</option>
                        <option value={'Learning'}>Learning</option>
                        <option value={'To get a job'}>To get a job</option>
                        </select>
        </div>
        <div className='grid-form-child' > What is the kind of company you looking?* <br/><select   value={formData.kind} name="kind" onChange={handleChange}>
                        <option >Target Company*</option>
                        <option value={'TCS'}>TCS</option>
                        <option value={'IBM'}>IBM</option>
                        </select>
        </div>
    </div>
  );
}

export default OtherInfo;