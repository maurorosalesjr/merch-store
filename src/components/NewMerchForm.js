import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewMerchForm(props){
  
  function handleNewMerchFormSubmission(event) {
    event.preventDefault();
    props.onNewMerchCreation({
      stlye: event.target.style.value,
      name: event.target.name.value, 
      price: event.target.price.value, 
      description: event.target.description.value, 
      quantity: event.target.quantity.value,
      id: v4()
    });
  }
  return (
    <React.Fragment>
        <ReusableForm 
        formSubmissionHandler={handleNewMerchFormSubmission}
        buttonText="Add Merch" />
    </React.Fragment>
  );
}

NewMerchForm.propTypes = {
  onNewMerchCreation: PropTypes.func
};

export default NewMerchForm;