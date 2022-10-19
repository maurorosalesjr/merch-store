import React from "react";
import PropTypes from "prop-types";

function MerchDetail(props){
  const { merch, onClickingDelete } = props;

  const detailStyle = {
    marginLeft: "5%",
    marginRight: "5%",
    border: "5px",
    borderStyle: "solid",
    borderColor: "Burlywood",
    backgroundColor: "lightBlue"
  }

  const buttonStyle = {
    alignSelf: "center",
    backgroundColor: "burlywood",
    backgroundImage: "none",
    backgroundPosition: "0 90%",
    backgroundRepeat: "repeat no-repeat",
    backgroundSize: "4px 3px",
    borderRadius: "15px 225px 255px 15px 15px 255px 225px 15px",
    borderStyle: "solid",
    borderWidth: "2px",
    boxShadow: "rgba(0, 0, 0, .2) 15px 28px 25px -18px",
    boxSizing: "border-box",
    color: "#41403e",
    cursor: "pointer",
    display: "inline-block",
    fontSize: ".7rem",
    lineHeight: "23px",
    outline: "none",
    padding: ".25rem",
    textDecoration: "none",
    transition: "all 235ms ease-in-out",
    borderBottomLeftRadius: "15px 255px",
    borderBottomRightRadius: "225px 15px",
    borderTopLeftRadius: "255px 15px",
    borderTopRightRadius: "15px 225px",
    userSelect: "none",
    touchAction: "manipulation",
  }

  return (
    <React.Fragment>
      <div style={detailStyle}>
        <h1>Merch Detail</h1>
        <h3>{merch.name}</h3>
        <p><em>${merch.price} USD </em>- {merch.description}</p>
        <button style={buttonStyle} onClick={ props.onClickingEdit }>Update Merch</button> 
        <button style={buttonStyle} onClick={()=> onClickingDelete(merch.id) }>Out Of Stock</button> 
        <hr/>
      </div>
    </React.Fragment>
  );
}

MerchDetail.propTypes = {
  merch: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default MerchDetail;