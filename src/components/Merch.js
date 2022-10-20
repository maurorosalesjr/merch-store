import React from "react";
import PropTypes from "prop-types";

function Merch(props){

  const onlyStyle = {
    color: "red",
  }

  return (
    <React.Fragment>
      <div onClick = {() => props.whenMerchClicked(props.id)}>
      <h3>{props.name} -<em style={onlyStyle}>Only {props.quantity} left!</em></h3>
      <p>{props.description}</p>
      <hr/>
      </div>
    </React.Fragment>
  );
}

Merch.propTypes = {
  style: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string, 
  whenMerchClicked: PropTypes.func 
};

export default Merch;