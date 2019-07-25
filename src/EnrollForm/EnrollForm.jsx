import React from "react";
import PropTypes from "prop-types";

const EnrollForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div><input type="text" name="foo" /></div>
      <div><input type="text" name="bar" /></div>
      <div><input type="text" name="baz" /></div>
      <input type="submit" value="Submit enrollment" />
    </form>
  );
};

EnrollForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
export default EnrollForm;
