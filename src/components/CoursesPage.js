import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";

function CoursesPage() {
  //declare value
  const [courses, setCourses] = useState([]);
//add second argument (dependency array) so it does not rerun everytime the function rerenders
  useEffect(() => {
    getCourses().then(_courses => setCourses(_courses));
  }, []);

  return (
    <>
      <h2>Courses</h2> 
      <CourseList courses={courses}/>
    </>
  );
}

export default CoursesPage;
