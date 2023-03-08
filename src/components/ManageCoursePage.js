import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";
import { toast } from "react-toastify";

const ManageCoursePage = (props) => {
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  useEffect(() => {
    const slug = props.match.params.slug; //pulled from the path /courses/:slug -- reference to urls second segment
    if (slug) {
      courseApi.getCourseBySlug(slug).then( _course => setCourse(course))
    }
  });

  //handle form input changes
  function handleChange(event) {
    const updatedCourse = {
      ...course,
      [event.target.name]: event.target.value,
    };
    setCourse(updatedCourse);
  }
  //errors object that calls setErrors and passe errors variable
  function formIsValid() {
    const _errors = {};

    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "Author ID is required";
    if (!course.category) _errors.category = "Category is required";

    setErrors(_errors);

    //form is valid if the errors objet has no properties
    return Object.keys(_errors).length === 0;
  }

  //handle submission of form and send info to db
  //when the function is called it will save the new course info and redirect to the courses page
  function handleSubmit(event) {
    event.preventDefault();
    //if the form is not valid than return early
    if (!formIsValid()) return;
    courseApi.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course Saved Successfully");
    });
  }

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        errors={errors}
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCoursePage;
