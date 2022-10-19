import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
      <input
          type='text'
          name='style'
          placeholder='which garment style is this item' />
          <br></br>
        <input
          type='text'
          name='name'
          placeholder='name of product line' />
          <br></br>
        <input
          type='text'
          name='price'
          placeholder='Location' />
          <br></br>
        <textarea
          name='description'
          placeholder='Describe the item.' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;