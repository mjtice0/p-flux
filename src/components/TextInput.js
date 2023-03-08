import React from "react";

function TextInput(props) {
  //uses bootstraps error class, makes red box around error message
  let wrapperClass = "form-group";
  if (props.error && props.error.length > 0) {
    wrapperClass += " has-error";
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <input
          id={props.id}
          type="text"
          onChange={props.onChange}
          name={props.name}
          className="form-control"
          value={props.value}
        />
      </div>
      {/* //if there is an error render this div with error */}
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
}

export default TextInput;
