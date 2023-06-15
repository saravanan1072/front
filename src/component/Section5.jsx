import React,{useState} from 'react'
import start from '../images/stars-9613.svg'
export default function Section() {

  // const one=()=>{
  //   return <p style={{fontSize:"100px"}}>hello</p>
    
  // }


  
    
    
    
    
     
 
  
  return (
    <div id='section5'>
        <div className='rating'>
            <div className='rating-child'><h2>4.9</h2><img src={start} alt=''/><br/>100+ reviews<h2>Facebook</h2></div>
            <div className='rating-child'><h2>4.8</h2><img src={start} alt=''/><br/>1000+ reviews<h2>Google</h2></div>
             <div className='rating-child'><h2>50+</h2>Questions asked <br/>5000 answered <h2>Quora</h2></div>
        </div>

        {/* <div className='home-render'>
            <div className='home-render-comp'>
                <h3>A One stop Platform</h3>
                <p>Practice and learn till you are perfect</p> <br/>

                <div className='home-render-flex'>
                  <div className='home-render-child' onClick={()=>one(1)}>GUIDED PROGRAM</div>
                  <div className='home-render-child'>DOUBT RESOLUTION</div>
                  <div className='home-render-child'>CODING NINJAS <br/>STUDIO</div>
                  <div className='home-render-child'>MOCK INTERVIEW</div>
                  <div className='home-render-child'>PLACEMENT CELL</div>
                  <div className='home-render-child'>FREE RESOURCES</div>

                </div>

                <div className='render-comp'>
                <Compont></Compont>
                </div>
            </div>

        </div> */}

<SlideContentMedia/>

    </div>
  )
}




function SlideContentMedia(){
  const [slide, setSlide] = useState("First");
    const obj = {
        one: ["100+", "average hours of learning per course"],
        two: ["50+", "practice problems in each course"],
        three: ["10+", "projects per course"]
      };
      const obj1 = {
        one: ["20 min", "avg. doubt resolution time"],
        two: ["100+", "doubts resolved per hour"],
        three: ""
      };
      const obj2 = {
        one: ["500+", "Interview problems with solutions"],
        two: ["250+", "Interview experiences"],
        three: ""
      };
      const obj3 = {
        one: ["10", "Mock Interviews (with selected course plans)"],
        two: ["500+", "Industry mentors"],
        three: ""
      };
      const obj4 = {
        one: ["7.6 LPA", "Average CTC"],
        two: ["300+", "Hiring partners"],
        three: ""
      };
      const obj5 = {
        one: ["15+", "events conducted every month"],
        two: ["13+", "articles published every month"],
        three: ""
      };
    return(
        <div className='home-render'>
           <div className='home-render-comp'>
           <h3>A One stop Platform</h3>
                <p>Practice and learn till you are perfect</p> <br/>
              <div id="sub-nav-fourth-Page">
          <button
            className="hover-effect-child1"
            onClick={() => setSlide("First")}
          >
            GUIDED PROGRAM
          </button>
          <button
            className="hover-effect-child1"
            onClick={() => setSlide("Second")}
          >
            DOUBT RESOLUTION
          </button>
          <button
            className="hover-effect-child1"
            onClick={() => setSlide("Third")}
          >
            CODING NIJAS STUDIO
          </button>
          <button
            className="hover-effect-child1"
            onClick={() => setSlide("Fourth")}
          >
            MOCK INTERVIEW
          </button>
          <button
            className="hover-effect-child1"
            onClick={() => setSlide("Five")}
          >
            PLACEMENT CELL
          </button>
          <button
            className="hover-effect-child1"
            onClick={() => setSlide("Six")}
          >
            FREE RESOURCES
          </button></div>
          {slide === "First" && (
          <FirstSlide
            title="Well Guided Program"
            subTitle="We have invented and perfected the best system to learn coding"
            para="Your Journey will follow a tried & Tested method that delivers the
            best results. Each concept that you learn will follow the following
            structure."
            para1=""
            list="yes"
            review={obj}
            url="https://files.codingninjas.in/pl1-9663.png"
          />
        )}
          {/* <button
            className="hover-effect-child1"
            onClick={() => setSlide("Second")}
          >
            DOUBT RESOLUTION
          </button> */}
          {slide === "Second" && (
          <FirstSlide
            title="Doubt Resolution"
            subTitle="Get your doubts resolved instantly with live 1:1 mentor support."
            para="In case you have any doubt at any time while you are watching a video, with an MCQ, a coding assignment or a test - We have you covered!"
            para1="
We have a network of dedicated teaching assistants to make sure your doubts get resolved quickly and you dont miss on deadlines."
            list="no"
            review={obj1}
            url="https://files.codingninjas.in/group-4774-9668.png"
          />
        )}
          {/* <button
            className="hover-effect-child1"
            onClick={() => setSlide("Third")}
          >
            CODING NIJAS STUDIO
          </button> */}
          {slide === "Third" && (
          <FirstSlide
            title="Coding Ninjas Studio"
            subTitle="A platform to help you practice, compete & get ready for interviews."
            para="A place for aspiring and experienced programmers to prepare for tech interviews, practice problems, compete in challenges, discuss and stay up to date with the latest developments in the tech world."
            para1="Our expert designed curated guided paths will help you save time and energy to figure out which coding questions to be solved and give you a perfect sequence to maximise your learning experience."
            list="no"
            review={obj2}
            url="https://files.codingninjas.in/mask-group-9667.png"
          />
        )}
          {/* <button
            className="hover-effect-child1"
            onClick={() => setSlide("Fourth")}
          >
            MOCK INTERVIEW
          </button> */}
          {slide === "Fourth" && (
          <FirstSlide
            title="Mock Interviews"
            subTitle="Mock Interviews to help you get prepared for your real interview"
            para="Industry experts from top product companies like Amazon, Facebook, Google and working in the US will take your mock interviews."
            para1="The focus will be on both technical and interpersonal skills. Get instant feedback at the end of the interview."
            list="no"
            btn="yes"
            review={obj3}
            url="https://files.codingninjas.in/mock-interview-9666.png"
          />
        )}
          {/* <button
            className="hover-effect-child1"
            onClick={() => setSlide("Five")}
          >
            PLACEMENT CELL
          </button> */}
          {slide === "Five" && (
          <FirstSlide
            title="Placement cell"
            subTitle="Placement Cell - A dedicated team to help you land the best opportunities"
            para="Curated openings and industry referrals to ensure you have access to the best opportunities out there."
            para1="Our placement cell works closely with you to help you reach closer to your professional goals."
            list="no"
            btn="no"
            review={obj4}
            url="https://files.codingninjas.in/placement-9665.png"
          />
        )}
          {/* <button
            className="hover-effect-child1"
            onClick={() => setSlide("Six")}
          >
            FREE RESOURCES
          </button> */}
          {slide === "Six" && (
          <FirstSlide
            title="Free Resources"
            subTitle="Tons of resources to enable you to learn for free & stay up to date"
            para="We regularly conduct webinars & coding events on various topics to answer your burning questions & to keep you up to date with the latest happenings in the tech world."
            para1="A blog with the latest articles to ensure you are reading & constantly in touch with your interest areas."
            list="no"
            btn="no"
            review={obj5}
            url="https://files.codingninjas.in/pl2-9664.png"
          />
        )}
        </div>
        </div>
    )
}

const FirstSlide = ({title,subTitle,para,para1,list,review,url,btn}) => {
  return (
    <div id="effect-onClick">
      <div id="container-fourth-page-nav-click-content">
        <div className="sub-container-4-page-click">
          <div className="a4-page-one">{title}</div>
          <div className="a4-page-two">
            {subTitle}
          </div>
          <div className="a4-page-three">
            {para}
          </div>
          <div className="a4-page-three">
            {para1}
          </div>
         {list==="yes" ?
            <div>
            <div className="a4-page-four">
              <img
                src="https://files.codingninjas.in/tick-9614.svg"
                alt="404 Error"
              />
              <div>Very short learning videos: 10-15 minutes</div>
            </div>
            <div className="a4-page-four">
              <img
                src="https://files.codingninjas.in/tick-9614.svg"
                alt="404 Error"
              />
              <div>
                2-3 Guided Problems & 5-10 practice problems to understand: 45
                minutes
              </div>
            </div>
            <div className="a4-page-four">
              <img
                src="https://files.codingninjas.in/tick-9614.svg"
                alt="404 Error"
              />
              <div>
                Doubts resolved instantly by our Teaching Assitants and Notes
                for Revision
              </div>
            </div>
          </div>:""
         }
          <div className="parent-fourth-page-sublim">
            <div className="child-fourth-page-sublim">
              <div className="child-fourth-page-font-big">{review.one[0]}</div>
              <div className="short-width-fourth-page">
                {review.one[1]}
              </div>
            </div>
            <div className="child-fourth-page-sublim">
              <div className="child-fourth-page-font-big">{review.two[0]}</div>
              <div className="short-width-fourth-page">
                {review.two[1]}
              </div>
            </div>
            <div className="child-fourth-page-sublim">
              <div className="child-fourth-page-font-big">{review.three[0]}</div>
              <div className="short-width-fourth-page">{review.three[1]}</div>
            </div>
          </div>
          {btn==="yes" && <button className="btn-Nav-entroll"><a href="https://www.codingninjas.com/services/interview-sessions" style={{textDecoration:"none",color:"white"}}>Know More</a></button>}
        </div>

        <img id="img-fourth-page-slide-part"src={url} alt="404 Error" />
      </div>
    </div>
  );
};