import React from "react";

const CustomizedInput = (props) => {
  return (
    <div className="mb-3">
      <label htmlFor={props.name} className="form-label">
        {props.label}
      </label>
      <input
        type={props.type}
        className="form-control"
        id={props.name}
        name={props.name}
      />
    </div>
  );
};

export default CustomizedInput;
