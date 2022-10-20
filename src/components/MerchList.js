import React from "react";
import Merch from "./Merch";
import PropTypes from "prop-types";



function MerchList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.merchList.map((merch) =>
        <Merch
          whenMerchClicked = { props.onMerchSelection }
          style={toString(merch.style)}
          name={merch.name}
          price={parseInt(merch.price)}
          description={merch.description}
          quantity={parseInt(merch.quantity)}
          id={merch.id}
          key={merch.id}/>
      )}
      </React.Fragment>
  );
}

// Add propTypes for merchList.
MerchList.propTypes = {
  merchList: PropTypes.array,
  onMerchSelection: PropTypes.func
};

export default MerchList;