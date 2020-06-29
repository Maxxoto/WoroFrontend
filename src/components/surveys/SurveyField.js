import React from "react";
const SurveyField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      {/*<label>{this.props.labelName}</label>*/}
      <label>{label}</label>
      <input {...input} />
      <p className=" red-text">{touched && error}</p>
    </div>
  );
};

export default SurveyField;
