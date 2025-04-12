import React from "react";
import "./styles/Home.css";
import { courses } from "../assets/courses";
const Home = () => {
  
  return (
    <div className="container">
      <h1>BSHR Technical University</h1>
      <h4>Where Dreams meet minds...</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ducimus
      </p>
      <div>
        <h2>Departments</h2>
        <div className="departments">
          {courses.map((course, index) => (
            <div className="department" key={index}>
              <img src={course.imgSrc} alt="" />
              <p className="department-title">{course.title}</p>
              <p className="department-description">{course.description}</p>
              <div>
                <p>Degree: {course.Type}</p>
                <p>Duration: {course.duration}</p>
                <p>Fee Structure: {course.TotalFee}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
