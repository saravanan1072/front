import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from '../pages/Home';
import '../style/style.css';
import Course from '../pages/Course';
import Dashboard from '../pages/Dashboard';
import Navbar from '../utility/Navbar';
import Newcourse from '../pages/Newcourse';
export default function Router() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
       
      <Routes>
      <Route path='' element={ <Home/>}/>
      <Route path='/course' element={<Course/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
     
      <Route path='/User/Course/:id' element={<Newcourse/>}/>
 
    </Routes>
    </BrowserRouter>
    </div>
  )
}
