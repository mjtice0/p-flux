import React from "react";
import { getCourses } from "../api/courseApi";

class CoursesPage extends React.Component {
  state = {
    courses: [],
  };
  //called immediately after the component is mounted
  //component must be mounted before we setState
  componentDidMount() {
    getCourses().then(courses => this.setState({ courses: courses }));
  }

  render() {
    return (
      <>
        <h2>Courses</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author ID</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {this.state.courses.map(course => {
              return (
                <tr>
                  {/* //td is table data */}
                  <td>{course.title}</td>
                  <td>{course.authorid}</td>
                  <td>{course.category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default CoursesPage;
