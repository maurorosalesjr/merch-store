import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditMerchForm (props) {
  const { merch } = props;

  function handleEditMerchFormSubmission(event) {
    event.preventDefault();
    props.onEditMerch({style: event.target.style.value, name: event.target.name.value, price: event.target.price.value, description: event.target.description.value, id: merch.id});
  }
  return (
    <React.Fragment>
      <ReusableForm formSubmissionHandler={handleEditMerchFormSubmission}
        buttonText="Update This Merch Item" />
    </React.Fragment>
  );
}

EditMerchForm.propTypes = {
  merch: PropTypes.object,
  onEditMerch: PropTypes.func
};

export default EditMerchForm;