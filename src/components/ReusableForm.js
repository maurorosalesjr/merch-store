import React from "react";
import PropTypes from "prop-types";


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

const formStyle = {
  marginLeft: "5%",
}

function ReusableForm(props) {
  return (
    <React.Fragment>
      <div style={formStyle}>
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
          placeholder='price' />
          <br></br>
        <textarea
          name='description'
          placeholder='Describe the item.' />
          <br></br>
        <button style={buttonStyle} type='submit'>{props.buttonText}</button>
      </form>
      </div>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;