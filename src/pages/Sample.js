import React from "react";

function PersonalInfo({ formData, setFormData }) {
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (

        <>
            <div className="personal-info-container">

                <div><p>Academic/Professional Details</p><hr /></div>
                <div><p>Help us understand more about you to help us deliver a tailored experience.
                </p></div>

                <div className='grid-form-child'>
                    <select style={{ width: "350px" }} placeholder='Graduation Year' value={formData.year} name="year" onChange={handleChange}>
                        <option>Graduation Year*</option>
                        <option value={'2025'}>2025</option>
                        <option value={'2024'}>2024</option>
                        <option value={'2023'}>2023</option>
                        <option value={'2022'}>2022</option>
                    </select>
                </div>
                <div className='grid-form-child'>
                    <div className='grid-form-child'> <select style={{ width: "350px" }}  value={formData.degree} name="degree" onChange={handleChange}>
                        <option content="d">Degree*</option>
                        <option value={'BCA'}>BCA</option>
                        <option value={'MCA'}>MCA</option>
                        <option value={'BSC'}>BSC</option>
                        <option value={'MCOM'}>MCOM</option>
                    </select></div>

                </div>
                <div className='grid-form-child'>
                    <input
                        type="text"
                        name="college"
                        placeholder="college Name*"
                        value={formData?.college}
                        onChange={handleChange} />
                </div>
                <div className='grid-form-child'>
                    <input
                        type="text"
                        placeholder="company name(optional)"
                        value={formData?.company}
                        name="company"
                        onChange={handleChange} />
                </div>

              
            </div>

        </>
    );
}

export default PersonalInfo;