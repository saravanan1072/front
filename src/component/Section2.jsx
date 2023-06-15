import React from "react";
import google from "../images/google.png";
export default function Section2() {
  return (
    <div className="section2">
      <div className="section-flex">
        <div className=" section-child one">
          CS novice <br /> to Google
          <br />
          <div className="hover-display">
            <p className="hover-display-content">
              Despite being from a tier 3 college, I would like to <br /> thank
              my mentors & teachers at Coding Ninjas who
              <br /> helped me land a job at Google. Both Parikh sir and <br />
              Ankush sir are brilliant teachers who know how to
              <br /> explain difficult concepts in an easy way.
            </p>
            <p className="align-name">
              Pareksha Manchanda <br />
              Software Engineer
            </p>
            <img
              className="hover-display-img"
              src={google}
              alt="pictures"
              width={"100px"}
            />
          </div>
          <img
            src="https://w7.pngwing.com/pngs/31/952/png-transparent-graphy-woman-businessperson-smiling-woman-arm-girl-business.png"
            className="img-size oneee"
            alt="boy"
          />
        </div>

        <div className=" section-child two">
          College
          <br /> dropout to <br /> a package
          <br /> of 10 LPA <br />
          <div className="hover-display">
            <p className="hover-display-content">
            The experience and knowledge I learned at Coding Ninjas greatly sharpened my skills and allowed me to pass the HackerRank and technical interview rounds. The placement team coordinated everything perfectly and it was unbelievable to get an offer letter of 10 LPA. Grateful to Coding Ninjas.
            </p>
            <p className="align-name">
            Harsh Agrawal<br />
              Software Engineer
            </p>
            <img
              className="hover-display-img"
              src={"https://files.codingninjas.com/avalara-10511.png"}
              alt="pictures"
              width={"100px"}
            />
          </div>
          <img
            src="https://www.pngall.com/wp-content/uploads/8/Man-PNG-Free-Download.png"
            className="img-size"
            alt="boy"
          />
        </div>
        <div className=" section-child three">
          Non-CS <br /> branch to <br /> Top <br />
          Company <br />
          <div className="hover-display">
            <p className="hover-display-content">
            My experience with Coding Ninjas was wonderful. The courses strengthened my concepts and helped me in my interviews. The faculty was amazing. I would definitely recommend Coding Ninjas.
            </p>
            <p className="align-name">
            Satwika Bhattacharjee <br/>
Analyst

            </p>
            <img
              className="hover-display-img"
              src={"https://files.codingninjas.in/goldman-sachs-9763.svg"}
              alt="pictures"
              width={"100px"}
            />
          </div>
          <img
            src="https://purepng.com/public/uploads/large/purepng.com-female-studentstudenteducationalinstitutionstudentsuniversity-studentschoolfemale-student-14215269223830oi8b.png"
            className="img-size"
            alt="boy"
          />
        </div>
        <div className=" section-child four">
          Tier-3 <br /> college to <br /> 6 stars on <br />
          CodeChef
          <br />
          <div className="hover-display">
            <p className="hover-display-content">
             It has been a crazy ride from being a novice CS student to a star coder and ICPE Regionalistic. I would like to thank  Coding Ninjas for helping a Tier-3 college student explore such opportunities.
            </p>
            <p className="align-name">
              Ragul LAther <br />
              Member of Technical Staff
            </p>
            <img
              className="hover-display-img"
              src={"https://files.codingninjas.com/cn-logo-12194.png"}
              alt="pictures"
              width={"100px"}
            />
          </div>{" "}
          <img
            src="https://www.transparentpng.com/thumb/man/rTkJ7v-man-png-image.png"
            width={"100px"}
            height={"300px"}
            className="img-size"
            alt="boy"
          />
        </div>

        <div className=" section-child five">
          Non <br /> Engineer to <br /> Investment <br /> Bank <br />
          <div className="hover-display">
            <p className="hover-display-content">
            Coding Ninjas is one of the best learning platforms. I enrolled into C++ Foundation with Data Structures. The course content was very informative and well structured. The way Ankush Sir and Nidhi Ma'am explain a topic is commendable. My approach towards solving a problem completely changed.
            </p>
            <p className="align-name">
            Richa Sharma
 <br />
            SEP Intern
            </p>
            <img
              className="hover-display-img"
              src={"https://files.codingninjas.com/jp-morgan-chase-10959.png"}
              alt="pictures"
              width={"100px"}
            />
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjReDa0jffzh6JOiVbdbKfirCQH7iY4_WOEg&usqp=CAU"
            className="img-size"
            alt="boy"
          />
        </div>
      </div>
    </div>
  );
}
