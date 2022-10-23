import React from "react";
import PropTypes from "prop-types";

function Merch(props){

  const onlyStyle = {
    color: "red",
  }

  const merchStyle = {
    border: "5px",
    borderStyle: "solid",
    borderColor: "burlywood",
    textAlign: "center",
    textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
    backgroundColor: "lightBlue",
    
  }

  return (
    <React.Fragment>
      <div onClick = {() => props.whenMerchClicked(props.id)} style={merchStyle}>
      <h3>{props.name} -<em style={onlyStyle}>Only {props.quantity} left!</em></h3>
      <p>{props.description}</p>
      </div>
      <hr/>
      
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
  whenMerchClicked: PropTypes.func,
  whenSaleClicked: PropTypes.func
};

export default Merch;