
import CourseMap from './CourseMap' 

import {useEffect} from 'react';
import { useParams,useLocation } from 'react-router-dom';
const Newcourse = () => {
    const params=useParams();
    const location=useLocation();
    console.log(params)
    const state=location.state.data;
    useEffect(()=>{

    },[state])
  return (
    <div className="whole-container-course">
      <div className="Course-nav-page">
      </div>
      <CourseMap data={state}/>
    </div>
  );
};
export default Newcourse;