import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
export default function App() {

  const [data1, setData1] = useState({ email: "", password: "", });
  const handleChange = (e) => {
    setData1({ ...data1, [e.target.name]: e.target.value });
  };
   const fun=()=>{
    // const url="https://ecombackend-nr3r.onrender.com/signup";
  

   
     
// const handledata=()=>{
//     axios.post(url,data)
//     .then((res)=>{console.log(res)})
//     .catch((err)=>{console.log(err);})
//     alert("Registeration complete sucessfully")
//     navigate("/signin")
//   }
    }
  const [loginform, setLoginform] = useState(false);

  const toggleShow1 = () => setLoginform(!loginform);

  return (
    <>
      <MDBBtn onClick={toggleShow1}>Vertically centered modal</MDBBtn>

      <MDBModal tabIndex='-10' show={loginform} setShow={setLoginform}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow1}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
            <div className="container">
        <h1>LOGIN FORM</h1>
        <form 
        // onSubmit={handledata}
        >
        
          <label htmlFor="email">Email : </label>
          <input
            required
            type="email"
            id="email"
            value={data1.email}
            name="email"
            onChange={handlelogin}
            placeholder="enter a email here!..."
          />
          <br></br>
          <label htmlFor="form">password : </label>
          <input
            required
            type="password"
            id="password"
            value={data1.password}
            name="password"
            onChange={handlelogin}
            placeholder="password?..."
          />
         
           <br></br>
          <button type="submit" className="submit" >
          Submit
        </button>
        </form>

        <div className="forms">
          Already a custome<b className="hover">signUp</b>
        </div>
      
      </div>
             

            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow1}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}