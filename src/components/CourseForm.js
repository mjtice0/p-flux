import React from "react";
import TextInput from "./TextInput";
import PropTypes from "prop-types";

function CourseForm(props) {
  return (
    //add onSubmit handler to form tag instead of submit button because it is better for accessiblity and allows user to hit enter to save
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        label="Title"
        onChange={props.onChange}
        name="title"
        value={props.course.title}
        error={props.errors.title}
      />

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            onChange={props.onChange}
            value={props.course.authorId || ""}
            className="form-control"
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
        {props.errors.authorId && (
          <div className="alert alert-danger">{props.errors.authorId}</div>
        )}
      </div>

      <TextInput
        id="category"
        label="Category"
        onChange={props.onChange}
        name="category"
        value={props.course.category}
        error={props.errors.category}
      />
      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

export default CourseForm;

// // Code before refactoring and adding reusable textinput component with props
// {
//   /* <form>
//       <div className="form-group">
//         <label htmlFor="title">Title</label>
//         <div className="field">
//           <input
//             id="title"
//             type="text"
//             onChange={props.onChange}
//             name="title"
//             className="form-control"
//             value={props.course.title}
//           />
//         </div>
//       </div>

//       <div className="form-group">
//         <label htmlFor="author">Author</label>
//         <div className="field">
//           <select
//             id="author"
//             name="authorId"
//             onChange={props.onChange}
//             value={props.course.authorId || ""}
//             className="form-control"
//           >
//             <option value="" />
//             <option value="1">Cory House</option>
//             <option value="2">Scott Allen</option>
//           </select>
//         </div>
//       </div>

//       <div className="form-group">
//         <label htmlFor="category">Category</label>
//         <div className="field">
//           <input
//             type="text"
//             id="category"
//             onChange={props.onChange}
//             name="category"
//             className="form-control"
//             value={props.course.category}
//           />
//         </div>
//       </div>

//       <input type="submit" value="Save" className="btn btn-primary" />
//     </form> */
// }
