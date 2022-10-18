import React from "react";
import Merch from "./Merch";
import PropTypes from "prop-types";



function MerchStyle(props){
  return (
    <React.Fragment>
      <hr/>
      {props.merchStyle.map((merch) =>
        <Merch
          whenMerchClicked = { props.onMerchSelection }
          style={merch.style}
          name={merch.name}
          price={merch.price}
          description={merch.description}
          id={merch.id}
          key={merch.id}/>
      )}
      </React.Fragment>
  );
}

// Add propTypes for merchStyle.
MerchStyle.propTypes = {
  merchStyle: PropTypes.array,
  onMerchSelection: PropTypes.func
};

export default MerchStyle;